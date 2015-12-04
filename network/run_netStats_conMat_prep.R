library(bipartite)
library(vegan)
library(igraph)


source('netFuns.R')

## get site info and specify which sites to analyze
site.info <- read.csv('data/siteInfo.csv', header=TRUE, as.is=TRUE)
good.sites <- c('Kil', 'Koh', 'Hal', 'KoK')

## load data
bimat <- lapply(good.sites, 
                function(i) { 
                	    as.matrix(read.csv(sprintf('data/%s_conmat.csv', i), 
                	              row.names=1, header=TRUE, as.is=TRUE))
                	})

## run parameters
nsim <- 999