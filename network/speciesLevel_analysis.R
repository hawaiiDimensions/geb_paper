setwd('~/Dropbox/hawaiiDimensions/geb_paper/network')
source('~/R_functions/logAxis.R')

## species level metrics with plant genera
sppLevel.pg <- read.csv('speciesLevel_res_plantGen.csv', as.is=TRUE)
sppLevel.pg$site <- factor(sppLevel.pg$site, levels=c('Kil', 'Koh', 'Hal', 'KoK'))

## species level metrics with plant species
sppLevel.ps <- read.csv('speciesLevel_res_plantSpp.csv', as.is=TRUE)
sppLevel.ps$site <- factor(sppLevel.ps$site, levels=c('Kil', 'Koh', 'Hal', 'KoK'))

x <- with(sppLevel.pg, glm(cbind(degree, missing.degree) ~ site * Endemicity, family=binomial))
summary(x)

# quartz(width=6, height=6)
# par(mfcol=c(2, 2), mar=c(3.5, 3.5, 2, 0) + 0.1, mgp=c(2.25, 0.75, 0))
# plot(x)

pdf(width=10, height=4, file='../endemCosmoLink_plantSpp.pdf')
par(mar=c(2, 4, 0, 0) + 0.6, mgp=c(3, 1, 0))
boxplot(normalised.degree~Endemicity * site, data= sppLevel.ps, col=c('orangered3', 'dodgerblue3'), 
        ylab='Normalized degree', log='y')
dev.off()

pdf(width=10, height=4, file='../endemCosmoLink_plantGen.pdf')
par(mar=c(2, 4, 0, 0) + 0.6, mgp=c(3, 1, 0))
boxplot(normalised.degree~Endemicity * site, data= sppLevel.pg, col=c('orangered3', 'dodgerblue3'), 
        ylab='Normalized degree', log='y')
dev.off()


