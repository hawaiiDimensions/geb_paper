library(bipartite)
library(vegan)
library(igraph)

setwd('~/Dropbox/hawaiiDimensions/geb_paper/network')
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
                	    as.matrix(read.csv(sprintf('data/%s_unconmat.csv', i), 
                	              row.names=1, header=TRUE, as.is=TRUE))
                	})

bimat.con <- lapply(good.sites, 
                function(i) { 
                	    as.matrix(read.csv(sprintf('data/%s_conmat.csv', i), 
                	              row.names=1, header=TRUE, as.is=TRUE))
                	})

## load network metric files
netmet.prob <- read.csv('networkMetrics_prob1.csv', as.is=TRUE)
netmet.qswap <- read.csv('networkMetrics_qswap.csv', as.is=TRUE)
netmet <- rbind(netmet.prob, netmet.qswap)

netmet.prob.con <- read.csv('networkMetrics_con_prob1.csv', as.is=TRUE)

## species level metrics
source('speciesLevel_analysis.R')

## **************************************
## near final network metrics figure
## **************************************

## helper function to plot network metrics
pm <- function(null, met) {
	with(netmet[netmet$null.mod == null & netmet$metric == met, ], {
		plot(age_mya, z.value, col=met.col[metric], log='x', type='b', xaxt='n',
		     xlab='', ylab='', cex=1.5, lwd=1.5,
		     ylim=range(z.value) + c(-2, 2), yaxt='n',
		     panel.first=arrows(x0=age_mya, y0=z.value-2, y1=z.value+2, 
		                        col=met.col[metric], length=0, lwd=1.5),
		     pch=21, bg='white')
		axis(2, pretty(range(z.value) + c(-2, 2), n=2))
	})
}

## metric colors consistent with supplamental fig
met.col <- c('black', 'blue')
names(met.col) <- c('nodf', 'mod.dendro')

pdf(width=4, height=4, file='fig_netMet.pdf')
split.screen(c(2, 1))
this.par <- list(oma=c(3, 3, 0, 0) + 0.1, mar=c(0, 0, 0.4, 0), mgp=c(2, 0.75, 0))

screen(1)
par(this.par)
pm('prob.null1', 'nodf')
text(10^par('usr')[1], par('usr')[3], labels='nestedness', adj=c(-0.1, -0.2), cex=1.5)

screen(2)
par(this.par)
pm('prob.null1', 'mod.dendro')
text(10^par('usr')[1], par('usr')[4], labels='modularity', 
     adj=c(-0.1, 1.2), cex=1.5, col='blue')
logAxis(1)

mtext('Age (mya)', side=1, line=2)
mtext('z-score', side=2, line=2, outer=TRUE)

close.screen(all=TRUE)
dev.off()


## **************************************
## near-final figure of link distribution
## stuff. depends on species level script
## sourced above
## *********************************

degree.summ <- with(sppLevel.ps, 
                    aggregate(list(norm.degree=normalised.degree), 
                              list(site=site, Endemicity=Endemicity), 
                              function(x) c(mean=mean(x), se=2*sd(x)/sqrt(length(x)))))

pdf(width=8, height=5, file='fig_linkDist.pdf')
split.screen(c(2, 1))
split.screen(c(1, 4))
this.par <- list(oma=c(3, 3, 0, 0) + 0.1, mar=c(0, 0, 0, 0) + 0.1, xpd=NA, mgp=c(2, 0.75, 0))

for(i in 1:4) {
	screen(i + 2)
	par(this.par)
	degplot(bimat[[i]], 1, rad=TRUE,
            log='y', yaxt='n', xaxt='n', ylim=c(1, 40),
            xlab='', ylab=ifelse(i==1, 'Degree', ''))
    if(i == 1) logAxis(2)
    # if(i == 4) legend('topright', legend=c('data', 'theory'), 
                      # pch=c(1, NA), lty=c(NA, 1), col=c('black', 'red'), bty='n')
    
    split.screen(matrix(c(0.5, 0.95, 0.55, 0.95), ncol=4))
    screen()
    par(mar=rep(0.01, 4), xpd=FALSE)
    degzplot(bimat[[i]], 1, nsim=999, axes=FALSE, main='', xlab='', ylab='')
    box()
    close.screen()
}

screen(2)
par(this.par)
par(mar=c(0, 0, 3, 0) + 0.1)
with(degree.summ, {
     x <- site.info$age_mya[match(site, site.info$siteCode)]*(1 + (as.numeric(as.factor(Endemicity)) - 1)/8)
     plot(x, norm.degree[, 'mean'], log='xy', xaxt='n', yaxt='n',
          ylim=range(1.1*apply(norm.degree, 1, sum), -0.8*apply(norm.degree, 1, diff)),
          panel.first=arrows(x0=x,
                             y0=-apply(norm.degree, 1, diff),
                             y1=apply(norm.degree, 1, sum),
                             code=3, angle=90, length=0,
                             col=c('gray45', 'black')[as.factor(Endemicity)],
                             lwd=2),
          col=c('gray45', 'black')[as.factor(Endemicity)], pch=c(16, 21)[as.factor(Endemicity)],
          bg='white', xlab='Age (mya)', ylab='Normalized degree',
          cex=1.5, lwd=1.5)
})
logAxis(1)
logAxis(2)
# axis(2, at=c(0.02, 0.06, 0.1))
par(xpd=FALSE)
legend(0.0005, 0.12, legend=c('Cosmopolitans', 'Endemics'), 
       pch=c(16, 1), col=c('gray45', 'black'), pt.lwd=1.5, pt.cex=1.5)

close.screen(all=TRUE)
dev.off()


x <- rowSums(bimat[[2]])
x <- x[x > 0]
plot(sort(x, TRUE), col='blue')
lines(melink.rankFun(x))
X0 <- sum(colSums(bimat[[1]]) > 0)
sim.melink.z(x, X0)


## *****************************
## explore degree distribution
## *****************************

## cumulative density figure
pdf(width=8.5, height=3.5, file='degDist.pdf')
par(mfrow=c(1, 4), oma=c(4, 4, 0, 0) + 0.1, mar=c(0, 0, 2, 0.2))
for(i in 1:4) {
	degplot(bimat[[i]], 1, main=good.sites[i], 
            log='x', yaxt='n', xaxt='n', xlim=c(1, 40), ylim=c(0.25, 1))
    logAxis(1)
    if(i == 1) axis(2)
}
mtext('Number of links per node', side=1, outer=TRUE, line=2.5)
mtext('Cumulative density', side=2, outer=TRUE, line=2.5)
dev.off()

## rank link dist figure
quartz(width=8.5, height=3.5, file='degRankDist.pdf')
par(mfrow=c(1, 4), oma=c(4, 4, 0, 0) + 0.1, mar=c(0, 0, 2, 0.2))
for(i in 1:4) {
	degplot(bimat[[i]], 1, main=good.sites[i], rad=TRUE,
            log='y', yaxt='n', xaxt='n', ylim=c(1, 40))
    # logAxis(1)
    if(i == 1) logAxis(2)
}
mtext('Species rank', side=1, outer=TRUE, line=1.5)
mtext('Number of links', side=2, outer=TRUE, line=2.5)
dev.off()

## maxent z-val figure
maxent.z <- sapply(bimat, function(mat) {
	mat <- mat[rowSums(mat) > 0, colSums(mat) > 0]
	
	x <- rowSums(mat)
	X0 <- ncol(mat)
	
	sim.melink.z(x, X0)
})


## *****************************
## look at network metrics
## *****************************

met.col <- c('black', 'red', 'blue', 'red', 'blue')
names(met.col) <- c('nodf', 'mod.rand.walk', 'mod.dendro', 'nmod.rand.walk', 'nmod.dendro')

pdf(width=8.5, height=4, file='../ms/figSupp_netMetComp.pdf')
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


## *****************************
## look at rarified network metrics
## *****************************

netmet.rfy.prob <- read.csv('rarifiedNetMet_prob1.csv', as.is=TRUE)

pdf(width=8, height=5, file='../ms/figSupp_rarified_prob1.pdf')
par(mfrow=c(3, 4), oma=c(4, 4, 2, 3) + 0.1, mar=rep(0.2, 4))

obs.n <- sapply(bimat, function(x) nrow(x[rowSums(x > 0), ]))
obs.n.con <- sapply(bimat.con, function(x) nrow(x[rowSums(x > 0), ]))
this.xlim <- range(obs.n, obs.n.con)

for(j in c('nodf', 'mod.dendro', 'mod.rand.walk')) {
	this.ylim <- range(netmet.rfy.prob[netmet.rfy.prob$metric==j, c('z.value.ciLo', 'z.value.ciHi')])
	for(i in good.sites) {
		with(netmet.rfy.prob[netmet.rfy.prob$siteCode==i & 
		                     netmet.rfy.prob$metric==j, ], {
		    plot(rfy, z.value.mean, type='l', xlim=this.xlim, ylim=this.ylim,
		         panel.first=polygon(c(rfy, rev(rfy)), c(z.value.ciHi, rev(z.value.ciLo)), 
		                             col='gray', border=NA),
		         xaxt='n', yaxt='n', xlab='', ylab='')
		})
		
		# points(obs.n[good.sites==i], 
		       # netmet.prob$z.value[netmet.prob$siteCode==i & netmet.prob$metric==j])
		# points(obs.n.con[good.sites==i], 
		       # netmet.prob.con$z.value[netmet.prob$siteCode==i & netmet.prob$metric==j])
		
		if(i == 'Kil') axis(2)
		if(j == 'mod.rand.walk') axis(1)
		if(j == 'nodf') {
			mtext(switch(i,
	             'Kil'='Kilauea',
	             'Koh'='Kohala',
	             'Hal'='Haleakala',
	             'KoK'='Kokee'), 
	      side=3, line=0.5)
		}
	}
	mtext(switch(j,
	             'nodf'='Nestedness',
	             'mod.dendro'='Modularity\nedge betweenness',
	             'mod.rand.walk'='Modularity\nwalk trap'), 
	      side=4, line=2)
}

mtext('Number of hemipter species', side=1, outer=TRUE, line=2.5)
mtext('z-score', side=2, outer=TRUE, line=2.5)

dev.off()


