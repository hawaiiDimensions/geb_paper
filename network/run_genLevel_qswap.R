setwd('~/Dropbox/hawaiiDimensions/geb_paper/network')
source('run_genLevel_prep.R')

## run network metrics using Bascompte probabilistic
runNetStats(bimat, good.sites, site.info, nullm='qswap.null', nsim=nsim, file='networkMetrics_con_qswap.csv')