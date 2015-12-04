## ANALYSE NETWORKS
# setwd('~/Dropbox/hawaiiDimensions/geb_paper/network/data') #Andy's directory path 
setwd("~/Dropbox/DimensionsStuff/geb_paper/network/data/") #Jun's directory path
source('~/Dropbox/DimensionsStuff/geb_paper/network/netFuns.R', chdir = TRUE) #Jun's directory path
# PACKAGES
library(vegan)
library(bipartite)
library(igraph)

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
Hal_evcent <- evcent(graph = comm2adj(as.matrix(Hal_unconmat)))
Kil_evcent <- evcent(graph = comm2adj(as.matrix(Kil_unconmat)))
Koh_evcent <- evcent(graph = comm2adj(as.matrix(Koh_unconmat)))
KoK_evcent <- evcent(graph = comm2adj(as.matrix(KoK_unconmat)))

# Combine results
Hal_results$evcent <- Hal_evcent$vector[1:dim(Hal_unconmat)[1]]
Kil_results$evcent <- Kil_evcent$vector[1:dim(Kil_unconmat)[1]]
Koh_results$evcent <- Koh_evcent$vector[1:dim(Koh_unconmat)[1]]
KoK_results$evcent <- KoK_evcent$vector[1:dim(KoK_unconmat)[1]]

# Standardize evcent
standard <- function(x) 
KoK_results$evcent <- KoK_results$evcent - mean(KoK_results$evcent) / sd(KoK_results$evcent)


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

#wilcox.test(normalised.degree ~ Endemicity, data = Hal_results) # Non-endemics slightly more links than endemics (p = 0.038)
#wilcox.test(normalised.degree ~ Endemicity, data = Kil_results) # Non-endemics slightly more links than endemics (p = 0.009)
#wilcox.test(normalised.degree ~ Endemicity, data = Koh_results) # Non-endemics slightly more links than endemics (p = 0.038)
#wilcox.test(normalised.degree ~ Endemicity, data = KoK_results) # Non-endemics slightly more links than endemics (p = 0.038)

Kil_results$site <- "Kil"
Koh_results$site <- "Koh"
Hal_results$site <- "Hal"
KoK_results$site <- "KoK"
all_results <- rbind(Kil_results, Koh_results, Hal_results, KoK_results)
all_results$site <- factor(all_results$site, levels = c("Kil", "Koh", "Hal", "KoK"))

# Distribution of normalised degree
par(mfrow = c(2,4))
hist(log(subset(Hal_results, Endemicity == "Endemic")$normalised.degree))
hist(log(subset(Hal_results, Endemicity == "Non-endemic")$normalised.degree))
hist(log(subset(Koh_results, Endemicity == "Endemic")$normalised.degree))
hist(log(subset(Koh_results, Endemicity == "Non-endemic")$normalised.degree))
hist(log(subset(Kil_results, Endemicity == "Endemic")$normalised.degree))
hist(log(subset(Kil_results, Endemicity == "Non-endemic")$normalised.degree))
hist(log(subset(KoK_results, Endemicity == "Endemic")$normalised.degree))
hist(log(subset(KoK_results, Endemicity == "Non-endemic")$normalised.degree))

library(lme4)
library(pscl)
all_results$Taxon <- as.factor(all_results$Taxon)
test <- lmer(log(normalised.degree) ~ site * Endemicity + (1|Taxon), data = all_results)
summary(test)
test2 <- glmer(evcent ~ site * Endemicity + (1|Taxon), data = all_results, family = "Gamma")
summary(test2)

m1 <- zeroinfl(evcent ~ site * Endemicity, data = all_results, dist = "geometric")
test2 <- lmer(log(evcent) ~ site * Endemicity + (1|Taxon), data = all_results)

boxplot(normalised.degree~  Endemicity *  site, data = all_results)


# Kilaeae: youngest hawaii
# Kohala: oldest hawaii
# Haleakala: Maui
# Kokee: kawaii
pdf("endemic_comp.pdf", width = 12, height = 8)
par(mfrow = c(2,2))
boxplot(degree ~ Endemicity * site, all_results, ylab = "Degree")
#boxplot(log(normalised.degree) ~ Endemicity * site, all_results, ylab = "Normalized Degree")
boxplot(closeness ~ Endemicity * site, all_results, ylab = "Closeness")
# boxplot(betweenness ~ Endemicity * site, all_results, ylab = "Betweenness")
boxplot(nestedrank ~ Endemicity * site, all_results, ylab = "NODF Nestedness")
boxplot(evcent ~ Endemicity * site, all_results, ylab = "Eigenvector Centrality")

dev.off()