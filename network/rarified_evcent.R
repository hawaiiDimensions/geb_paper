setwd('~/Dropbox/hawaiiDimensions/geb_paper/network')
load('rarifiedMats.RData')
source('netFuns.R')


qd <- sapply(rfy.list, function(X) {
	sapply(X[[sample(50, 1)]], function(x) {
		x <- x[rowSums(x) > 0, colSums(x) > 0]
		out <- evcent(comm2adj(x))$vector[1:nrow(x)]
		mean((out - mean(out))/sd(out))
	})
})

matplot(rseq, t(qd), type='l')
