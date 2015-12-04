library(adegenet)

setwd('~/Dropbox/hawaiiDimensions/geb_paper/genetics/structureFiles')



gp <- read.genepop(file = "~/Dropbox/hawaiiDimensions/geb_paper/genetics/arlequinFiles/BI10Site13loci_arlequin.gen")

st <- read.structure(newf, n.ind=nInd, n.loc=nLoc, onerowperind=hap, col.lab=1, col.pop=2, ask=FALSE)

gp@ind.names
st@ind.names






## for each file, load it, make sure individual labels are uniqe,
## re-write it and read back all files in a list

files <- list.files(pattern='.str')
files <- files[-grep('_clean', files)]

dat <- vector('list', length(files))
i <- 5
for(i in 1:length(files)) {
	f <- files[i]
	temp <- read.table(f)
	
	if(!sum(duplicated(temp)) %in% c(nrow(temp)/2, 0)) {
		temp[, 1] <- paste(temp[, 1], temp[, 2], sep='_')
	}
	
	## get needed 'metadata' for loading str file
	hap <- sum(duplicated(temp[, 1])) == 0
	nLoc <- ncol(temp) - 2
	nInd <- length(unique(temp[, 1]))
	
	## get needed 'metadata' for dapc analysis
	nPop <- length(unique(temp[, 2]))
	
	
	## write and re-read as structure file
	write.table(temp, file=newf, row.names=FALSE, col.names=FALSE)
	dat[[i]] <- read.structure(newf, n.ind=nInd, n.loc=nLoc, onerowperind=hap,
	                           col.lab=1, col.pop=2, ask=FALSE)
	
	## DAPC
	x <- dapc(dat[[i]])#, n.da=nPop-1, n.pca=round(0.75*nInd))
	opt <- optim.a.score(x)
	x <- dapc(dat[[i]], n.da=nPop-1, n.pca=opt$best)
	scatter(x)
	summary(x)
	
	xInOut <- calcInOut(x, temp[!duplicated(temp[, 1]), 2])
	with(xInOut, 
	     plot(pop, log(prob.in/prob.out), xlab='Populations 1-10', 
	          ylab='Log odds ratio of in situ vs. ex situ'))
}



calcInOut <- function(x, grp) {
	grp.post <- split(as.data.frame(x$posterior), grp)
	
	res <- as.data.frame(matrix(NA, nrow=length(grp), ncol=3))
	colnames(res) <- c('pop', 'prob.in', 'prob.out')
	res$pop <- grp
	
	for(i in 1:length(grp.post)) {
		invec <- grp.post[[i]][, i]
		outvec <- rowSums(grp.post[[i]][, -i])
		res[res$pop==unique(grp)[i], -1] <- cbind(invec, outvec)
	}
	
	return(res)
}

xInOut <- calcInOut(x, temp[!duplicated(temp[, 1]), 2])
with(xInOut, 
     plot(pop, log(prob.in/prob.out), xlab='Populations 1-10', 
          ylab='Log odds ratio of in situ vs. ex situ'))





plot(rep(1:nPop, each=nrow(x$posterior)), as.vector(x$posterior))

TEMP <- read.table('Tquas_wHI_structure.str')



dapc.test <- replicate(100, {
	keep <- #grepl('Hua', TEMP[, 1]) |
	        TEMP[, 1] %in% sample(unique(TEMP[grep('sad', TEMP[, 1]), 1]), 9) |
	        TEMP[, 1] %in% sample(unique(TEMP[grep('vol', TEMP[, 1]), 1]), 9)
	
	temp <- TEMP[keep, ]
	write.table(temp, file='Tquas_wHI_structure2.str', row.names=FALSE, col.names=FALSE)
	bla <- read.structure('Tquas_wHI_structure2.str', n.loc=9, col.lab=1, col.pop=2, 
                          onerowperind=FALSE, ask=FALSE, n.ind=length(unique(temp[, 1])))
	
	x <- dapc(bla, n.pca=5, n.da=2)
	summary(x)$assign.per.pop
	# scatter(x)
})


curve(dnorm(x, 1, 1/100), from=0.9, to=1, xlim=0:1, ylim=c(0, 2.75))
lines(density(dapc.test[2, ], from=0, to=1), col='blue')
lines(density(dapc.test[3, ], from=0, to=1), col='red')




# temp <- read.table('BI10Site13loci.str')
# bla <- read.structure('BI10Site13loci.str', n.loc=ncol(temp)-2, col.lab=1, col.pop=2, 
                      # onerowperind=FALSE, ask=FALSE, n.ind=length(unique(temp[, 1])))


# temp[temp=='-9'] <- NA
# bla2 <- df2genind(temp[, -(1:2)], ind.names=as.factor(temp[, 1]), pop=as.factor(temp[, 2]),
                  # ploidy=1, type='codom')