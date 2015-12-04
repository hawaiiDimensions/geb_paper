setwd('~/Dropbox/hawaiidimensions/geb_paper/genetics')
source('~/R_functions/logAxis.R')

## read data, clean, order locations by age
X <- read.csv('volcanoFst.csv', as.is=TRUE)
X <- X[X$sampLocation != 'Hualali', ]
X <- X[!is.na(X$value), ]

X$sampLocation[X$sampLocation == 'ML-Saddle'] <- 'MaunaLoa'

X$sampLocation[X$sampLocation == 'MaunaLoa-noSaddle'] <- 'MaunaLoa'
X$sampLocation <- factor(X$sampLocation, 
                           levels=c('Kilauea', 'MaunaLoa', 'ML-Saddle', 'Saddle',  
                                    'MaunaKea', 'Hualali', 'Kohala', 'Haleakala'))
X <- X[order(X$sampLocation), ]
X$value[!is.na(X$value)] <- jitter(X$value[!is.na(X$value)], 100)

## remove spuriously high Fst that is non-significant
# X$value[X$gensp == 'Trioza HC'] <- NA
X <- X[-which(X$value > 0.5 & X$signif > 0.1), ]

## taxon colors
taxa.col <- hsv(h=c(0.6, 0.64, 0.68, 
                    0.53, 0.49, 
                    0.8, 
                    0.15, 
                    0.01, 0.04, 0.07, 0.1),
                s=c(0.9, 0.8, 1, 
                    1, 1, 
                    1, 
                    0.7, 
                    1, 1, 1, 1),
                v=c(1, 0.9, 0.8, 
                    1, 1, 
                    0.8, 
                    0.8, 
                    0.8, 1, 1, 1)
                )
names(taxa.col) <- unique(X$gensp)

## rough time ranges of sites
time.range <- matrix(c(300, 500,
                       600, 1000,
                       600, 1900,
                       2200, 9000,
                       11000, 70000,
                       80000, 105000,
                       130000, 170000,
                       700000, 850000) / 10^6,
                     ncol=2, byrow=TRUE)
rownames(time.range) <- levels(X$sampLocation)

## add how high each time bar should be plotted
time.range <- cbind(time.range, c(1, 2, 1, 1, 1, 1, 1, 1))

## split by taxon
fst <- split(X, X$gensp)

## where all of ML-noSaddle, ML-saddle, and saddle exist, remove ML-saddle
fst <- lapply(fst, function(x) {
	test <- x$value[grep('saddle', x$sampLocation, ignore.case=TRUE)]
	if(all(!is.na(test[c(1, 3)]))) {
		x[x$sampLocation=='ML-Saddle', 'value'] <- NA
	}
	
	return(x)
})


## plot
wordwrap <- function(x,len) {
	if(length(x) == 1) {
		return(paste(strwrap(x,width=len),collapse="\n"))
	} else {
		return(sapply(x, wordwrap, len))
	}
}

pdf(width=10, height=5.2, file='volcanoFst.pdf')
split.screen(matrix(c(0, 0.8, 0.3, 1, 
                      0, 0.82, 0, 0.3,
                      0.8, 1, 0.3, 1), 
                    ncol=4, byrow=TRUE))

screen(1)
par(mar=c(3, 3, 0.5, 0) + 0.1, mgp=c(2, 1, 0))
plot(as.numeric(X$sampLocation), X$value, type='n', 
     xlab='', ylab='Within region Fst', xaxt='n')
for(i in 1:length(fst)) {
	with(fst[[i]][!is.na(fst[[i]]$value), ], {
		points(as.numeric(sampLocation), value, type='b', 
		       col=taxa.col[names(fst[i])], cex=1.5, lwd=1.5)
	})
}
axis(1, at=1:nlevels(X$sampLocation), labels=levels(X$sampLocation))

screen(2)
par(mar=c(3, 1.5, 1, 0) + 0.1, mgp=c(2, 1, 0))
plot(range(time.range), c(1, 2.5), log='x', type='n', axes=FALSE, 
     xlab='Age (mya)', ylab='')
for(i in 1:8) 
	rect(xleft=time.range[i, 1], xright=time.range[i, 2], 
	     ybottom=time.range[i, 3], ytop=time.range[i, 3] + 0.5, 
	     border=NA, col='gray')
logAxis(1)

screen(3)
par(mar=c(3, 0.2, 0.6, 0.2))
plot(rep(7, length(fst)), 1:length(fst), col=taxa.col, cex=1.5, lwd=1.5, 
     xlim=c(0, 10), axes=FALSE)
text(rep(7, length(fst)), 1:length(fst), col=taxa.col,
     labels=1:length(fst), pos=4)

x0 <- par('usr')[1]
x1 <- par('usr')[2]

rect(x0, par('usr')[3], x1, 5.4)
rect(x0, 5.6, x1, 6.4)
rect(x0, 6.6, x1, 7.4)
rect(x0, 7.6, x1, par('usr')[4])

close.screen(all=TRUE)
dev.off()