library(bipartite)
library(vegan)
library(igraph)

setwd('~/Dropbox/hawaiiDimensions/geb_paper/network')
source('netFuns.R')

## get site info and specify which sites to analyze
site.info <- read.csv('data/siteInfo.csv', header=TRUE, as.is=TRUE)
good.sites <- c('Kil', 'Koh', 'Hal', 'KoK')

## load data
bimat <- lapply(good.sites, 
                function(i) { 
                	    as.matrix(read.csv(sprintf('data/%s_unconmat.csv', i), 
                	              row.names=1, header=TRUE, as.is=TRUE))
                	})

bimatCon <- lapply(good.sites, 
                   function(i) { 
                	       as.matrix(read.csv(sprintf('data/%s_conmat.csv', i), 
                	                 row.names=1, header=TRUE, as.is=TRUE))
                   })

## sequence of numbers to rarify to
rseq <- seq(min(sapply(bimatCon, nrow)), min(sapply(bimat, nrow)), by=15)

## number of reps for each rarifaction
rrep <- 50


## make and save sequence of subsampled matrices
rfy.list <- lapply(rseq, function(n) {
	replicate(rrep, 
	          lapply(bimat, function(x) {
		          x[sample(nrow(x), n), ]
	          }),
	          simplify=FALSE)
})

save(rfy.list, rseq, rrep, file='rarifiedMats.RData')