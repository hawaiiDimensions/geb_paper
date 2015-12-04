library(bipartite)
library(vegan)
library(igraph)

#setwd('~/Dropbox/hawaiiDimensions/geb_paper/network')
source('~/R_functions/my_ecdf.R')
source('~/R_functions/logAxis.R')
source('netFuns.R')

## *****************************
## Prep data
## *****************************

## get site info and specify which sites to analyze
site.info <- read.csv('data/siteInfo.csv', as.is=TRUE)
good.sites <- c('Kil', 'Koh', 'Hal', 'KoK')

## load data
bimat <- lapply(good.sites, 
                function(i) { 
                	    as.matrix(read.csv(sprintf('data/%s_conmat.csv', i), 
                	              row.names=1, header=TRUE, as.is=TRUE))
                	})

## load network metric files
netmet.prob <- read.csv('networkMetrics_con_prob1.csv', as.is=TRUE)
netmet.qswap <- read.csv('networkMetrics_con_qswap.csv', as.is=TRUE)
netmet <- rbind(netmet.prob, netmet.qswap)

## *****************************
## look at degree distribution
## *****************************

pdf(width=8.5, height=3.5, file='degDistCon.pdf')
par(mfrow=c(1, 4), oma=c(4, 4, 0, 0) + 0.1, mar=c(0, 0, 2, 0.2))
for(i in 1:4) {
	degplot(bimat[[i]], 1, main=good.sites[i], 
            log='xy', yaxt='n', xaxt='n', xlim=c(1, 50))
    logAxis(1)
    if(i == 1) logAxis(2)
}
mtext('Number of links per node', side=1, outer=TRUE, line=2.5)
mtext('Cumulative density', side=2, outer=TRUE, line=2.5)
dev.off()


## *****************************
## look at network metrics
## *****************************

met.col <- c('black', 'red', 'blue', 'red', 'blue')
names(met.col) <- c('nodf', 'mod.rand.walk', 'mod.dendro', 'nmod.rand.walk', 'nmod.dendro')

pdf(width=8.5, height=4, file='../ms/figSupp_netMetCons.pdf')
par(mfrow=c(1, 3), oma=c(4, 4, 0, 0) + 0.1, mar=c(0, 0, 2, 0.2))

for(i in unique(netmet$metric)) {
	if(!grepl('dendro', i)) {
	    plot(netmet$age_mya, netmet$z.value,
             xlab='', ylab='', log='x', axes=FALSE, type='n')
	    logAxis(1)
	    if(i == 'nodf') axis(2)
	    
	    # rect(10^par('usr')[1], -2, 10^par('usr')[2], 2, col='gray85', border=NA)
        box()
        mtext(line=0.5, text=switch(i, 
                                  'nodf'='Nestedness',
                                  'mod.rand.walk'='Modularity',
                                  'nmod.rand.walk'='Number of modules'))
	}
	
	for(j in unique(netmet$null.mod)) {
		with(netmet[netmet$metric==i & netmet$null.mod==j, ], {
		     # browser()
		     points(age_mya, z.value, type='b',
		            col=met.col[i], lty=ifelse(j=='qswap.null', 1, 2))
		     })
	}
}

mtext('Age (mya)', side=1, line=2.5, outer=TRUE)
mtext('z-score', side=2, line=2.5, outer=TRUE)

legend('topright', legend=c('NODF', 'Modularity: edge between', 
                            'Modularity: walk trap', 'Prob null', 
                            'Quasiswap null'),
       lty=c(0, 0, 0, 2, 1), pch=c(1, 1, 1, NA, NA), 
       col=c('black', 'blue', 'red', 'gray', 'gray'))

dev.off()

