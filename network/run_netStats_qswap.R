setwd('~/Dropbox/hawaiiDimensions/geb_paper/network')
source('run_netStats_prep.R')

## run network metrics using quasiswap null
nullm <- 'qswap.null'

res <- data.frame(run.info,
                  do.call(rbind, lapply(bimat, net.sim, fun=net.mets, method=get(nullm), nsim=nsim)),
                  null.mod = nullm, nsim=nsim
                  )

write.table(res, file='networkMetrics_qswap.csv', sep=',', row.names=FALSE)