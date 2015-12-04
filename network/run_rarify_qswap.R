setwd('~/Dropbox/hawaiiDimensions/geb_paper/network')
source('run_rarify_prep.R')

res <- lapply(rfy.list, function(r) {
	out <- lapply(r, runNetStats, 
	              site.names=good.sites, site.info=site.info, 
	              nullm='qswap.null', nsim=nsim)
	out <- do.call(rbind, out)
	out <- aggregate(out[, c('statistic', 'z.value')], 
	                 out[, c('siteCode', 'name', 'island', 'age_mya', 
	                         'metric', 'null.mod', 'nsim')], 
	                 function(x) {
	                 	summ <- c(mean(x, na.rm=TRUE), quantile(x, c(0.025, 0.975), na.rm=TRUE))
	                 	names(summ) <- c('mean', 'ciLo', 'ciHi')
	                 	return(summ)
	                 })
	out$rfy <- nrow(r[[1]][[1]])
	
	return(out)
})

res <- do.call(rbind, res)
write.table(res, file='rarifiedNetMet_qswap.csv', sep=',', row.names=FALSE)
