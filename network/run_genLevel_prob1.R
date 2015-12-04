setwd('~/Dropbox/hawaiiDimensions/geb_paper/network')
source('run_genLevel_prep.R')

## run network metrics using Bascompte probabilistic
runNetStats(bimat, good.sites, site.info, nullm='prob.null1', nsim=nsim, file='genLevel_prob1.csv')