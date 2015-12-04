## script to clean plant data taken from Jon Price's appendix
## (copy-pasted into csv from pdf with no modifications)

setwd('~/Dropbox/hawaiidimensions/geb_paper/network/data')

## load data
plnt <- read.csv('plantAppendix.csv', as.is=TRUE)

## make better column names and remove common names
colnames(plnt) <- c('name', 'family', 'common', 'conservationStatus', 
                    'nativeStatus', 'mapType', 'jpgFile', 'gisFile')
plnt <- plnt[, -3]

## get rid of spaces at end of names
for(i in 1:ncol(plnt)) {
	xnchar <- nchar(plnt[, i])
	fchar <- substring(plnt[, i], xnchar)
	
	substring(plnt[, i], xnchar) <- ifelse(fchar==' ', "", fchar)
}

## add `plantName' to correspond to `plantListsBySite.csv'
plnt$plantName <- gsub('.*/|\\.zip.*', '', plnt$gisFile)
plnt$plantName[grep('no shapefile', plnt$plantName)] <- NA # missing data

## add synonems
plnt$syn <- NA
plnt$syn[grep('\\(see ', plnt$name)] <- 
    gsub('.*\\(see |).*', '', plnt$name[grep('\\(see ', plnt$name)])
plnt$syn[match(gsub('.*\\(see |).*', '', plnt$name[grep('\\(see ', plnt$name)]), plnt$name)] <- 
    gsub(' \\(see.*', '', plnt$name[grep('\\(see ', plnt$name)])
plnt$name <- gsub(' \\(see.*', '', plnt$name)

## add to plant list by site and write out
plntBySite <- read.csv('plantListsBySite.csv', as.is=TRUE)
out <- merge(plntBySite[, c('plantName', 'Sites', 'GRIDCODE')], 
             plnt[, c('name', 'syn', 'family', 'conservationStatus', 'plantName')], 
             by='plantName')
out$siteCode <- out$Sites
out$siteCode[out$siteCode == 'Kokee'] <- 'KoK'
out$siteCode[out$siteCode == 'Kiluea'] <- 'Kil'
out$siteCode[out$siteCode == 'Haleakala'] <- 'Hal'
out$siteCode[out$siteCode == 'Kohala'] <- 'Koh'

write.table(out, file='plant_list.csv', sep=',', row.names=FALSE)