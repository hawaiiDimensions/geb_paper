setwd('~/Dropbox/hawaiidimensions/geb_paper/genetics')

## read data, clean, order locations by age
X <- read.csv('volcanoFst.csv', as.is=TRUE)
X$sampLocation <- factor(X$sampLocation, 
                           levels=c('Kilauea', 'MaunaLoa-noSaddle', 'ML-Saddle', 'Saddle',  
                                    'MaunaKea', 'Hualali', 'Kohala', 'Haleakala'))
X <- X[order(X$sampLocation), ]
X$value[!is.na(X$value)] <- jitter(X$value[!is.na(X$value)])

## taxon colors
taxa.col <- hsv(c(0.7, 0.7, 0.7, 0.6, 0.6, 0.8, 0.3, 0.01, 0.01, 0.01, 0.01))
names(taxa.col) <- unique(X$gensp)

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

plot(as.numeric(X$sampLocation), X$value, type='n', xlab='', ylab='Within region Fst')

for(i in 1:length(fst)) {
	with(fst[[i]][!is.na(fst[[i]]$value), ], {
		points(as.numeric(sampLocation), value, type='b', col=taxa.col[gensp[1]])
	})
}

