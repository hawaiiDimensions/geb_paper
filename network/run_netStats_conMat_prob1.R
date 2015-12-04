setwd('~/Dropbox/hawaiiDimensions/geb_paper/network')
source('run_netStats_conMat_prep.R')

## run network metrics using Bascompte probabilistic
runNetStats(bimat, good.sites, site.info, nullm='prob.null1', nsim=nsim, file='networkMetrics_con_prob1.csv')