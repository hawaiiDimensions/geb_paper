library(distr)

## d, p and r functions for the maxent link distribution
## also a funciton to calculate the MLE and log likelihood

dmelink <- function(x, la) {
	exp(-la*(x-1)) - exp(-la*x)
}

pmelink <- function(x, la, lower.tail=TRUE) {
	if(length(x) > 1) {
		cp <- sapply(x, function(q) sum(dmelink(1:q, la)))
	} else {
		cp <- sum(dmelink(1:x, la))
	}
	
	if(lower.tail) {
		return(cp)
	} else {
		return(1 - cp)
	}
}

# rmelink <- function(n, la, X0) {
	# # xtemp <- sample(1:X0, round(1.5*n), rep=TRUE, prob=dexp(1:X0, la)*1.1)
	# # ytemp <- runif(round(1.5*n), 0, dexp(xtemp)*1.1)
	
	# # x <- xtemp[dmelink(xtemp, la) >= ytemp]
	
	# # xy <- cbind(sample(1:X0, n*50, rep=TRUE), runif(n*50, 0, dmelink(1, la)*1.1))
	# # x <- xy[dmelink(xy[, 1], la) >= xy[, 2], 1]
	
	# min.prob <- dmelink(X0, la)*10
	# if(min.prob < 1e-08*dmelink(1, la)) min.prob <- 1e-04*dmelink(1, la)
	# probs <- seq(dmelink(1, la)*1.5, min.prob, length=X0)
	
	# ## extra sampling needed to hit n total
	# extraN <-round(100*la) + 20
	
	# xtemp <- sample(1:X0, n * extraN, rep=TRUE, prob=probs)
	# ytemp <- runif(n * extraN, 0, probs[xtemp])
	
	# x <- xtemp[dmelink(xtemp, la) >= ytemp]
	
	# if(length(x) > n) return(x[1:n])
	# else return(x)
# }

rmelink <- function(n, la, X0) {
	sample(X0, n, rep=TRUE, prob=dmelink(1:X0, la))
}


qmelink <- function(x, la) {
	fun <- DiscreteDistribution(1:3000, dmelink(1:3000, la))
	fun@q(x)
}

## likelihood functions
melink.mle <- function(x) {
	log(1 + 1 / mean(x - 1))
}

melink.logLik <- function(x) {
	la <- melink.mle(x)
	
	length(x) * log(1 - exp(-la)) - la * sum(x - 1)
}


## test it
# la <- 0.01
# x <- rmelink(2000, la, 2000)
# melink.mle(x)
# plot(sort(x, TRUE))
# lines(pmelink(1:200, melink.mle(x)), col='red')
# melink.logLik(x) - sum(log(dmelink(x, melink.mle(x)))) < 1e-12

melink.rankFun <- function(x) {
	qmelink(seq(1-1/(length(x)+1), 1/(length(x)+1), by=-1/(length(x)+1)), melink.mle(x))
}

melink.mse <- function(x) {
	mean((sort(x, TRUE) - melink.rankFun(x))^2)
}

sim.melink.z <- function(x, X0, nsim=999) {
	la <- melink.mle(x)
	
	res <- replicate(nsim, {
		# browser()
		sim <- rmelink(length(x), la, X0)
		return(melink.mse(sim))
	})
	
	obs.mse <- melink.mse(x)
	
	return(list(obs=obs.mse, z=(obs.mse - mean(res)) / sd(res), sim=res))
}

## test it
# x <- rmelink(100, 0.5, 200)
# sim.melink.z(x, 200)
# sim.melink.z(rbinom(100, 200, 0.1), 200)


## old function based on likelihood
# sim.melink.likz <- function(x, X0, nsim=999) {
	# la <- melink.mle(x)
	
	# res <- replicate(nsim, {
		# sim <- rmelink(length(x), la, X0)
		# return(melink.logLik(sim))
	# })
	
	# obs.ll <- melink.logLik(x)
	
	# return((obs.ll - mean(res)) / sd(res))
# }


