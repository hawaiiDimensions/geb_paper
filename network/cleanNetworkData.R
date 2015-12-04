## makeNetworks.R

## PACKAGES
# setwd('~/Dropbox/hawaiiDimensions/geb_paper/network/data')
setwd("~/Dropbox/hawaiiDimensions/geb_paper/network/data/")
library(picante)
library(stringr)

## determine if plant list has been made and make if need be
if('plant_list.csv' %in% list.files()) source('../cleanPlantNames.R')

## -----------------------------------
## INPUT HEMIPTERA LIST
## -----------------------------------

hemi <- read.csv('hemiptera_list.csv', as.is=TRUE)
col2keep <- c('Order', 'Family', 'Genus.and.species', 'Genus', 'Species', 
              'Author', 'Status', 'Kau', 'Kil', 'Ola', 'Lau', 'Koh', 'Hal', 'KoK', 
              'Trophic.Information.Simplified', 'Host.identity..Genus.species.', 
              'Other.host.information')
newNames <- c('order', 'family', 'gensp', 'genus', 'species', 
              'author', 'status', 'Kau', 'Kil', 'Ola', 'Lau', 'Koh', 'Hal', 'KoK', 
              'trophicInfo', 'hostID', 
              'otherHostInfo')

hemi <- hemi[, col2keep]
colnames(hemi) <- newNames

# Subset endemics
hemi_endemic <- subset(hemi, status == "end")
hemi_endemic_cons <- subset(hemi, status == "end")

## -----------------------------------
## Clean hemiptera data
## -----------------------------------

data_clean <- function(x){
	# x = target vector
	y <- ifelse(x == "", "no", x)
	y <- gsub(pattern = "\\?", replacement = "no", y)
	y <- gsub(pattern = "Kil+|Kau+|Ola+|Lau+|Koh+|Hal+|KoK+", replacement = "yes", y)
	y <- gsub(pattern = "Positive detection|Positive detection ", replacement = "yes", y)
	y <- gsub(pattern = "Possible but probably not", replacement = "no", y)
	y <- gsub(pattern = "opss", replacement = "poss", y)	
	y <- gsub(pattern = "Possible\\*", replacement = "poss", y)	
	y <- gsub(pattern = "prob not", replacement = "no", y)
	return(y)
}

## Doublechecking the numbers
# table(data_clean(hemi_endemic$Koh))
# table(hemi_endemic$Koh)

# table(data_clean(hemi_endemic$Hal))
# table(hemi_endemic$Hal)

# table(data_clean(hemi_endemic$Ola)) # dropped
# table(hemi_endemic$Ola)

# table(data_clean(hemi_endemic$Kil))
# table(hemi_endemic$Kil)

# table(data_clean(hemi_endemic$Kau)) # dropped
# table(hemi_endemic$Kau)

# table(data_clean(hemi_endemic$Lau)) # dropped
# table(hemi_endemic$Lau)

# table(data_clean(hemi_endemic$KoK))
# table(hemi_endemic$KoK)

## Cleaning seems to work quite well
hemi_endemic$Koh <- data_clean(hemi_endemic$Koh)
hemi_endemic$Hal <- data_clean(hemi_endemic$Hal)
hemi_endemic$KoK <- data_clean(hemi_endemic$KoK)
hemi_endemic$Kil <- data_clean(hemi_endemic$Kil)

## Create a site by species list
sites <- c('Kil', 'Koh', 'Hal', 'KoK')
sitesp_matrix <- t(hemi_endemic[, sites])
colnames(sitesp_matrix) <- hemi_endemic$gensp
# head(sitesp_matrix)

## Unconservative matrix
sitesp_matrix_insect_uncon <- gsub("no", 0, sitesp_matrix)
sitesp_matrix_insect_uncon <- gsub("yes", 1, sitesp_matrix_insect_uncon)
sitesp_matrix_insect_uncon <- gsub("poss", 1, sitesp_matrix_insect_uncon)
class(sitesp_matrix_insect_uncon) <- "numeric"

# Conservative matrix
sitesp_matrix_insect_con <- gsub("no", 0, sitesp_matrix)
sitesp_matrix_insect_con <- gsub("yes", 1, sitesp_matrix_insect_con)
sitesp_matrix_insect_con <- gsub("poss", 0, sitesp_matrix_insect_con)
class(sitesp_matrix_insect_con) <- "numeric"


## -----------------------------------
## INPUT PLANT LIST
## -----------------------------------

plant <- read.csv('plant_list.csv', as.is=TRUE)
temp <- plant[,c("siteCode","GRIDCODE", "name")]
sitesp_matrix_plant <- sample2matrix(temp)

## Conservative matrix
sitesp_matrix_plant_con <- sitesp_matrix_plant
sitesp_matrix_plant_con[sitesp_matrix_plant_con == 1] <- 0
sitesp_matrix_plant_con[sitesp_matrix_plant_con == 2] <- 1

## Unconservative matrix
sitesp_matrix_plant_uncon <- sitesp_matrix_plant
sitesp_matrix_plant_uncon[sitesp_matrix_plant_uncon == 2] <- 1


## -----------------------------------
## Clean up host ID
## -----------------------------------

## Remove leading, trailing and double whitespace
hemi_endemic$hostID <- gsub("^\\s+|\\s+$", "",hemi_endemic$hostID) 
hemi_endemic$hostID[hemi_endemic$hostID == "n.d."] <- ""
hemi_endemic$hostID[hemi_endemic$hostID == "n.n"] <- ""
hemi_endemic$hostID <- gsub(" sp.", "", hemi_endemic$hostID)

## Probable spelling mistakes that need to be cleaned up in the spreadsheet
hemi_endemic$hostID[hemi_endemic$hostID == "Urea glabra"] <- "Urera glabra"
hemi_endemic$hostID[hemi_endemic$hostID == "Trematolobellia macrostachys"] <- "Trematolobelia macrostachys"
hemi_endemic$hostID <- gsub(x = hemi_endemic$hostID, pattern = "Korthalsells", replacement = "Korthalsella")
hemi_endemic$hostID <- gsub(x = hemi_endemic$hostID, pattern = "Nestigis", replacement = "Nestegis")
hemi_endemic$hostID <- gsub(x = hemi_endemic$hostID, pattern = "Xanthoxylum", replacement = "Zanthoxylum")
hemi_endemic$hostID <- gsub(x = hemi_endemic$hostID, pattern = "Broussasia", replacement = "Broussaisia")
hemi_endemic$hostID <- gsub(x = hemi_endemic$hostID, pattern = "Claoxyon", replacement = "Claoxylon")
hemi_endemic$hostID <- gsub(x = hemi_endemic$hostID, pattern = "Syphelia", replacement = "Styphelia")
hemi_endemic$hostID <- gsub(x = hemi_endemic$hostID, pattern = "Dodonia", replacement = "Dodonaea")

## Probable synonyms
hemi_endemic$hostID <- gsub(x = hemi_endemic$hostID, pattern = "Vincentia", replacement = "Machaerina")
hemi_endemic$hostID <- gsub(x = hemi_endemic$hostID, pattern = "Straussia", replacement = "Psychotria")
hemi_endemic$hostID[hemi_endemic$hostID == "Dolichos lablab"] <- "Lablab purpureus"
hemi_endemic$hostID <- gsub(x = hemi_endemic$hostID, pattern = "Jussiaea villosa", replacement = "Ludwigia octovalvis")
hemi_endemic$hostID <- gsub(x = hemi_endemic$hostID, pattern = "Maba sandwicensis", replacement = "Diospyros sandwicensis")
hemi_endemic$hostID <- gsub(x = hemi_endemic$hostID, pattern = "Cyathodes", replacement = "Leptecophylla")
hemi_endemic$hostID <- gsub(x = hemi_endemic$hostID, pattern = "Bryonia", replacement = "Ilex")
hemi_endemic$hostID <- gsub(x = hemi_endemic$hostID, pattern = "Gouldia elongata", replacement = "Kadua affinis")



## -----------------------------------
## Notes on inclusion and exclusion of host ID's
## -----------------------------------

# Invasive species in the hemiptera list that will be excluded
# =============================================
# Cynodon dactylon an invasive species
# Erigeron sp. is likely an invasive
# Verbena probably invasive
# Abutilon sp. is likely an invasiove
# Heterotheca probably invasive
# Nicotiana tabacum is definitely non-native
# Bermuda grass is definitely invasive

# Unsure, but excluding
# =============================================
# Pelea sp. and Pelea volcanicola
# Stachytarpheta sp.
# Dracaena sp.
# Dolichos lablab?
# Campylotheca: possible synonym
# Cythrum: not a valid genus name
# Sideroxylon: without species name, can't tell if it is a synonym
# Lythrum: depending on species, may be an invasive
#  Pterotropia possible synonym for Polyscias but not sure
# Gouldia possible synonym but not enough taxonomic resolution to determine
# Tetramolopium artemisia not a valid name
# Amaranthus: not in hawaii list. 
# Phegopteris (a fern)
# Raillardia, possible synonym but cannot determine
# Aspidium, possible synonym but cannot determine
# Polygonum sp. not sure

# Possibly include:
# =============================================
# Jussiaea (only 1 record, not in hawaii plant list)
# Lablab (only 1 record, not in hawaii plant list)
# Sporobolus (possible native but not in hawaii plant list)
# Mucuna gigantea (accepted name, but not in hawaii plant list)
# 3 species of Tetramolopium, possibly endemic, but not in hawaii plant list
# Gossypium hirsutum (syn. Gossypium tomentosum)
# Osmanthus sp. possibly a synonym for Nestegis sandwicensis


## -----------------------------------
## Generate meta-matrix
## -----------------------------------


makeMatrix <-function(insect_sitemat, plant_sitemat, island){
	# insect_sitemat and plant_sitemat can be eIther matrix or dataframe
	
	insect_list <- colnames(insect_sitemat)[insect_sitemat[rownames(insect_sitemat) == island, ] > 0]
	plant_list <- colnames(plant_sitemat)[plant_sitemat[rownames(plant_sitemat) == island, ] > 0]
	matrix <- matrix(NA, nrow = length(insect_list), ncol = length(plant_list))
	rownames(matrix) <- insect_list
	colnames(matrix) <- plant_list
	return(matrix)
}


makeNetwork <- function(hostID_data, matrix){
	for(i in 1:dim(matrix)[1]){
		# For each insect in the site matrix, find list of hosts
		temp <- hostID_data $hostID[hostID_data$gensp == rownames(matrix)[i]]
		host_list <- strsplit(temp, split = ", ")[[1]]
		#host_list <- gsub(host_list[[1]], pattern = "* sp.", replacement = "")
		
		matrix[i, ] <- 0
		# If no hosts specified, then no interactions specified
		if(length(host_list) > 0){
		# For each host, find corresponding column in matrix
			
			for(j in 1:length(host_list)){
				temp <- grep(pattern = host_list[j], colnames(matrix))
				if(length(temp) > 0){
					matrix[i, temp] <- 1
				}
			}		
		}
	}
	return(matrix)
}


## GENERATE NETWORKS
Hal_conmat <- makeNetwork(hemi_endemic, makeMatrix(sitesp_matrix_insect_con, sitesp_matrix_plant_con, island = "Hal"))
Hal_unconmat <- makeNetwork(hemi_endemic, makeMatrix(sitesp_matrix_insect_uncon, sitesp_matrix_plant_uncon, island = "Hal"))

Kil_conmat <- makeNetwork(hemi_endemic, makeMatrix(sitesp_matrix_insect_con, sitesp_matrix_plant_con, island = "Kil"))
Kil_unconmat <- makeNetwork(hemi_endemic, makeMatrix(sitesp_matrix_insect_uncon, sitesp_matrix_plant_uncon, island = "Kil"))

Koh_conmat <- makeNetwork(hemi_endemic, makeMatrix(sitesp_matrix_insect_con, sitesp_matrix_plant_con, island = "Koh"))
Koh_unconmat <- makeNetwork(hemi_endemic, makeMatrix(sitesp_matrix_insect_uncon, sitesp_matrix_plant_uncon, island = "Koh"))

KoK_conmat <- makeNetwork(hemi_endemic, makeMatrix(sitesp_matrix_insect_con, sitesp_matrix_plant_con, island = "KoK"))
KoK_unconmat <- makeNetwork(hemi_endemic, makeMatrix(sitesp_matrix_insect_uncon, sitesp_matrix_plant_uncon, island = "KoK"))

## EXPORT NETWORKS
write.table(Hal_conmat, "Hal_conmat.csv", sep = ",")
write.table(Hal_unconmat, "Hal_unconmat.csv", sep = ",")
write.table(Kil_conmat, "Kil_conmat.csv", sep = ",")
write.table(Kil_unconmat, "Kil_unconmat.csv", sep = ",")
write.table(Koh_conmat, "Koh_conmat.csv", sep = ",")
write.table(Koh_unconmat, "Koh_unconmat.csv", sep = ",")
write.table(KoK_conmat, "KoK_conmat.csv", sep = ",")
write.table(KoK_unconmat, "KoK_unconmat.csv", sep = ",")


write.table(sitesp_matrix_insect_uncon, "sitesp_matrix_insect_uncon.csv", sep = ",")
write.table(sitesp_matrix_insect_con, "sitesp_matrix_insect_con.csv", sep = ",")

write.table(sitesp_matrix_plant_uncon, "sitesp_matrix_plant_uncon.csv", sep = ",")
write.table(sitesp_matrix_plant_con, "sitesp_matrix_plant_con.csv", sep = ",")