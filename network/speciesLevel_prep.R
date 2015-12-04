## PACKAGES and needed functions

this.dir <- list.files('~/Dropbox')[grep('dimensions', list.files('~/Dropbox'), ignore.case=TRUE)]
setwd(sprintf('~/Dropbox/%s/geb_paper/network/data', this.dir)) # directory path should work for both now

source('../netFuns.R')

library(vegan)
library(igraph)
library(bipartite)

# IMPORT MATRICES
Hal_conmat <- read.table("Hal_conmat.csv", sep = ",", check.names = FALSE)
Hal_unconmat <- read.table("Hal_unconmat.csv", sep = ",", check.names = FALSE)
Kil_conmat <- read.table("Kil_conmat.csv", sep = ",", check.names = FALSE)
Kil_unconmat <- read.table("Kil_unconmat.csv", sep = ",", check.names = FALSE)
Koh_conmat <- read.table("Koh_conmat.csv", sep = ",", check.names = FALSE)
Koh_unconmat <- read.table("Koh_unconmat.csv", sep = ",", check.names = FALSE)
KoK_conmat <- read.table("KoK_conmat.csv", sep = ",", check.names = FALSE)
KoK_unconmat <- read.table("KoK_unconmat.csv", sep = ",", check.names = FALSE)

sitesp_matrix_insect_uncon <- read.table("sitesp_matrix_insect_uncon.csv", sep = ",", check.names = FALSE)
sitesp_matrix_insect_con <- read.table("sitesp_matrix_insect_con.csv", sep = ",", check.names = FALSE)

sitesp_matrix_plant_uncon <- read.table("sitesp_matrix_plant_uncon.csv", sep = ",", check.names = FALSE)
sitesp_matrix_plant_con <- read.table("sitesp_matrix_plant_con.csv", sep = ",", check.names = FALSE)

# Remove all null interactions
Hal_unconmat <- Hal_unconmat[rowSums(Hal_unconmat) > 0, colSums(Hal_unconmat) > 0]
Kil_unconmat <- Kil_unconmat[rowSums(Kil_unconmat) > 0, colSums(Kil_unconmat) > 0]
KoK_unconmat <- KoK_unconmat[rowSums(KoK_unconmat) > 0, colSums(KoK_unconmat) > 0]
Koh_unconmat <- Koh_unconmat[rowSums(Koh_unconmat) > 0, colSums(Koh_unconmat) > 0]

x1 <- rowSums(Hal_unconmat)
x1 <- rowSums(Kil_unconmat)
x1 <- rowSums(KoK_unconmat)
x1 <- rowSums(Koh_unconmat)

## potentially aggregate plants to genus level
if(!exists('genLevel')) genLevel <- FALSE
if(genLevel) {
	Hal_unconmat <- ag2gen(Hal_unconmat)
	Kil_unconmat <- ag2gen(Kil_unconmat)
	KoK_unconmat <- ag2gen(KoK_unconmat)
	Koh_unconmat <- ag2gen(Koh_unconmat)
}

rowSums(Hal_unconmat) == x1
rowSums(Kil_unconmat) == x1
rowSums(KoK_unconmat) == x1
rowSums(Koh_unconmat) == x1

# GENERATE ENDEMIC VS. NON-ENDEMIC INSECT LISTS (NOTE: ISLAND ENDEMIC, NOT SITE)
temp <- rbind(sitesp_matrix_insect_uncon, sitesp_matrix_insect_uncon["Kil",] + sitesp_matrix_insect_uncon["Koh",]) 
temp <- decostand(temp, method = "pa")
rownames(temp)[5] <- "Haw"
temp <- temp[-c(1,2),]

endemic_uncon <- colnames(temp)[colSums(temp) == 1]
nonendemic_uncon <- colnames(temp)[colSums(temp) > 1]

temp <- rbind(sitesp_matrix_insect_con, sitesp_matrix_insect_con[1,] + sitesp_matrix_insect_con[2,])
temp <- decostand(temp, method = "pa")
rownames(temp)[5] <- "Haw"
temp <- temp[-c(1,2),]

endemic_con <- colnames(temp)[colSums(temp) == 1]
nonendemic_con <- colnames(temp)[colSums(temp) > 1]

length(endemic_uncon)
length(nonendemic_uncon)
length(endemic_con)
length(nonendemic_con) # only 12 non endemics under conservative matrix :/

# ENDEMIC VS. NONENDEMIC
# Degree = no. of links
# Normalized degree = no of links scale by no. of possible partners
Hal_results <- specieslevel(web = t(Hal_unconmat), level = "higher",
								index = c("degree", "normalised degree", "betweenness", "nestedrank", "closeness"))
Kil_results <- specieslevel(web = t(Kil_unconmat), level = "higher",
								index = c("degree", "normalised degree", "betweenness", "nestedrank", "closeness"))
Koh_results <- specieslevel(web = t(Koh_unconmat), level = "higher",
								index = c("degree", "normalised degree", "betweenness", "nestedrank", "closeness"))
KoK_results <- specieslevel(web = t(KoK_unconmat), level = "higher",
								index = c("degree", "normalised degree", "betweenness", "nestedrank", "closeness"))
# Eigenvector centrality
Hal_evcent <- igraph::evcent(graph = comm2adj(as.matrix(Hal_unconmat)))
Kil_evcent <- igraph::evcent(graph = comm2adj(as.matrix(Kil_unconmat)))
Koh_evcent <- igraph::evcent(graph = comm2adj(as.matrix(Koh_unconmat)))
KoK_evcent <- igraph::evcent(graph = comm2adj(as.matrix(KoK_unconmat)))

# Combine results
Hal_results$evcent <- Hal_evcent$vector[1:dim(Hal_unconmat)[1]]
Kil_results$evcent <- Kil_evcent$vector[1:dim(Kil_unconmat)[1]]
Koh_results$evcent <- Koh_evcent$vector[1:dim(Koh_unconmat)[1]]
KoK_results$evcent <- KoK_evcent$vector[1:dim(KoK_unconmat)[1]]

# Parse endemic versus non_endemic
Hal_results$Taxon <- rownames(Hal_results)
Hal_results$Endemicity <- NA
temp <- match(Hal_results$Taxon, endemic_uncon)
Hal_results$Endemicity[which(is.na(temp) == FALSE)] <- "Endemic"
temp <- match(Hal_results$Taxon, nonendemic_uncon)
Hal_results$Endemicity[which(is.na(temp) == FALSE)] <- "Non-endemic"

Kil_results$Taxon <- rownames(Kil_results)
Kil_results$Endemicity <- NA
temp <- match(Kil_results$Taxon, endemic_uncon)
Kil_results$Endemicity[which(is.na(temp) == FALSE)] <- "Endemic"
temp <- match(Kil_results$Taxon, nonendemic_uncon)
Kil_results$Endemicity[which(is.na(temp) == FALSE)] <- "Non-endemic"

Koh_results$Taxon <- rownames(Koh_results)
Koh_results$Endemicity <- NA
temp <- match(Koh_results$Taxon, endemic_uncon)
Koh_results$Endemicity[which(is.na(temp) == FALSE)] <- "Endemic"
temp <- match(Koh_results$Taxon, nonendemic_uncon)
Koh_results$Endemicity[which(is.na(temp) == FALSE)] <- "Non-endemic"

KoK_results$Taxon <- rownames(KoK_results)
KoK_results$Endemicity <- NA
temp <- match(KoK_results$Taxon, endemic_uncon)
KoK_results$Endemicity[which(is.na(temp) == FALSE)] <- "Endemic"
temp <- match(KoK_results$Taxon, nonendemic_uncon)
KoK_results$Endemicity[which(is.na(temp) == FALSE)] <- "Non-endemic"

Kil_results$site <- "Kil"
Koh_results$site <- "Koh"
Hal_results$site <- "Hal"
KoK_results$site <- "KoK"
all_results <- rbind(Kil_results, Koh_results, Hal_results, KoK_results)
all_results$site <- factor(all_results$site, levels = c("Kil", "Koh", "Hal", "KoK"))
all_results$max.degree <- all_results$degree / all_results$normalised.degree
all_results$missing.degree <- all_results$max.degree - all_results$degree
all_results$Endemicity[all_results$Endemicity == 'Endemic'] <- 'Endem'
all_results$Endemicity[all_results$Endemicity == 'Non-endemic'] <- 'Cosmo'

write.table(all_results,
            file=ifelse(genLevel, '../speciesLevel_res_plantGen.csv', '../speciesLevel_res_plantSpp.csv'),
            row.names=FALSE, sep=',')
