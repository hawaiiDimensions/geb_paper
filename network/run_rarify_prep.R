library(vegan)
library(igraph)

source('netFuns.R')

## get site info and specify which sites to analyze
site.info <- read.csv('data/siteInfo.csv', header=TRUE, as.is=TRUE)
good.sites <- c('Kil', 'Koh', 'Hal', 'KoK')

## load data
load('rarifiedMats.RData')

## run parameters
nsim <- 999
