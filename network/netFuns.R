library(vegan)
library(parallel)
library(igraph)
source('~/R_functions/my_ecdf.R')
source('~/R_functions/den_fill.R')

## funciton to plot degree distribution
degplot <- function(web, margin, lower.tail=TRUE, rad=FALSE, thr.col='red', ...) {
    if(!is.vector(web)) {
	    X <- apply(web, margin, sum)
    }
    X <- X[X > 0]
    
    if(rad) {
    		plot(sort(X, TRUE), ...)
    		lines(qmelink(seq(1-1/(length(X)+1), 1/(length(X)+1), by=-1/(length(X)+1)), melink.mle(X)),
    		      col=thr.col)
    } else {
 	   plot(my.ecdf(X, !lower.tail), ...)
 	   
 	   if(par('xlog')) {
 	   	    xrng <- 1:10^par('usr')[2]
  	  	} else {
  	  		xrng <- 1:par('usr')[2]
  	  	}
  	  	
  	  lines(xrng, pmelink(xrng, melink.mle(X), lower.tail), col=thr.col)
    }
}

## funciton to plot observed mse and simulated mse for degree distribuiton
degzplot <- function(web, margin, thr.col='red', nsim=999, ...) {
	x <- apply(web, margin, sum)
	x <- x[x > 0]
	X0 <- sum(apply(web, ifelse(margin==1, 2, 1), sum) > 0)
	z <- sim.melink.z(x, X0, nsim)
	
	den.fill(log(z$sim), xlim=log(range(unlist(z[-2]))), ...)
	
	abline(v=log(z$obs), col=thr.col)
}

## funciton to plot degree distribution (taking vector of degrees, not web)
degplot2 <- function(x, lower.tail=TRUE, ...) {
    plot(my.ecdf(x, !lower.tail), ...)
    
    if(par('xlog')) {
    	    xrng <- 1:10^par('usr')[2]
    	} else {
    		xrng <- 1:par('usr')[2]
    	}
    	
    lines(xrng, pmelink(xrng, melink.mle(x), lower.tail), col='red')
}

## functions for link funciton as predicted by MaxEnt
this.dir <- list.files('~/Dropbox')[grep('dimensions', list.files('~/Dropbox'), ignore.case=TRUE)]
source(sprintf('~/Dropbox/%s/geb_paper/network/maxEntLink.R', this.dir))


## helper function to turn comm matrix into adjacency matrix
comm2adj <- function(x) {
    nr <- dim(x)[1]
    nc <- dim(x)[2]
    to.fill <- matrix(0, ncol=nc + nr, nrow=nc + nr)
    to.fill[1:nr,(nr+1):(nc+nr)] <- x
    adj.mat <- graph.adjacency(to.fill, mode= "upper", weighted=TRUE)

    return(adj.mat)
}

## function to calculate network metrics
net.mets <- function(x) {
    ## get rid of missing taxa
    x <- x[rowSums(x) > 0, colSums(x) > 0]
    
    ## convert to igraph object
    xgraph <- comm2adj(x)
    
    ## calculate modularity
    mod.rand.walk <- membership(walktrap.community(xgraph))
    mod.dendro <- membership(edge.betweenness.community(xgraph))
    
    ## return nodf and modularity (score and number of modules)
    out <- c(nodf = as.numeric(nestednodf(x)$statistic['NODF']), # as.numeric to get rid of name
             # mod.greedy = modularity(xgraph, mod.greedy),
             mod.rand.walk = modularity(xgraph, mod.rand.walk),
             mod.dendro = modularity(xgraph, mod.dendro),
             # nmod.greedy = length(unique(mod.greedy)),
             nmod.rand.walk = length(unique(mod.rand.walk)),
             nmod.dendro = length(unique(mod.dendro))
             )
    return(out)
}

## Lauren's probabilistic null
prob.null2 <- function(comm) {
    fill <- sum(comm)
    tot <- prod(dim(comm))
    
    probs <- expand.grid(rowSums(comm), colSums(comm))
    probs <- probs[, 1] * probs[, 2]
    
    these.occ <- sample(tot, fill, prob=probs)
    
    out <- numeric(tot)
    out[these.occ] <- 1
    
    return(matrix(out, nrow=nrow(comm)))
}

## modified Bascompte probabilistic null to constrain fill
prob.null1 <- function(comm) {
    fill <- sum(comm)
    tot <- prod(dim(comm))
    
    probs <- expand.grid(rowSums(comm), colSums(comm))
    probs <- probs[, 1] + probs[, 2] / 2
    
    these.occ <- sample(tot, fill, prob=probs)
    
    out <- numeric(tot)
    out[these.occ] <- 1
    
    return(matrix(out, nrow=nrow(comm)))
}

## quasiswap null, depends on vegan package C code
qswap.null <- function(comm) {
    out <- r2dtable(1, rowSums(comm), colSums(comm))[[1]]
    out <- .C("quasiswap", m = as.integer(out), as.integer(nrow(comm)), 
              as.integer(ncol(comm)), PACKAGE = "vegan")$m
    dim(out) <- dim(comm)
    
    return(out)
}


## a much simplified version of oecosimu that should be faster
net.sim <- function(comm, fun, method, nsim) {
    ## observed statistic
    obs <- fun(comm)
    
    ## simulate statistics
    if(detectCores() > 1) {
    	    ncore <- detectCores()
    	    if(ncore > 10) ncore <- 10
    	    cat(sprintf('using %s cores \n', ncore))
    	    sim <- mclapply(1:nsim, function(i) fun(method(comm)), mc.cores=ncore)
    	    sim <- do.call(cbind, sim)
    } else {
    	    cat('using 1 core \n')
    	    sim <- replicate(nsim, fun(method(comm)))
    }
    sim <- cbind(obs, sim)
    
    ## get mean and sd of simulation
    sim.msd <- apply(sim, 1, function(x) c(mean(x), sd(x)))
    
    ## return obs, z-scores and p-vals
    out <- data.frame(metric = names(obs),
                      statistic = obs,
                      z.value = (obs - sim.msd[1, ]) / sim.msd[2, ],
                      p.value = rowSums(sim - sim.msd[1, ] >= abs(obs - sim.msd[1, ]) | 
                          sim - sim.msd[1, ] <= -abs(obs - sim.msd[1, ])) / 
                      (nsim + 1)
                      )
    rownames(out) <- NULL
    return(out)
}

## test it
# bla <- net.sim(x, function(X) nestednodf(X)$statistic, prob.null1, nsim=9)
# test.net.mets <- sapply(bimat, net.mets)
# pairs(t(test.net.mets[2:4, ]))
# pairs(t(test.net.mets[3+(2:4), ]))
# net.sim(bimat[[1]], net.mets, prob.null1, 4)


## function to run network stats
runNetStats <- function(bimat, site.names, site.info, nullm=c('prob.null1', 'qswap.null'), nsim=999, file) {
	nullm <- match.arg(nullm, c('prob.null1', 'qswap.null'))
	run.info <- site.info[match(rep(site.names, each=5), site.info$siteCode), 2:5]
	# browser()
	res <- data.frame(run.info,
                      do.call(rbind, lapply(bimat, net.sim, fun=net.mets, 
                                            method=get(nullm), nsim=nsim)),
                      null.mod = nullm, nsim = nsim + 1
                      )
    
    if(!missing(file)) {
       	write.table(res, file=file, sep=',', row.names=FALSE)
    } else {
        rownames(res) <- NULL
        return(res)
    }
}

## test it
# runNetStats(bimat, good.sites, site.info, nsim=2)


## helper function to aggregate networks to genus level for plants
ag2gen <- function(x) {
	if(any(grepl('\\.', colnames(x)))) {
		gen <- gsub('\\..*', '', colnames(x))
	} else {
		gen <- gsub(' .*', '', colnames(x))
	}
	
	x <- aggregate(as.data.frame(t(x)), list(gen), sum)
    rownames(x) <- x[, 1]
    x <- x[, -1]
    
    x[x > 0] <- 1
    
    return(as.matrix(t(x)))
}


