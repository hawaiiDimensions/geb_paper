setwd('~/Dropbox/hawaiiDimensions/geb_paper/network')
source('run_netStats_prep.R')

## run network metrics using Bascompte probabilistic null
nullm <- 'prob.null1'

res <- data.frame(run.info,
                  do.call(rbind, lapply(bimat, net.sim, fun=net.mets, method=get(nullm), nsim=nsim)),
                  null.mod = nullm, nsim=nsim
                  )

write.table(res, file='networkMetrics_prob1.csv', sep=',', row.names=FALSE)