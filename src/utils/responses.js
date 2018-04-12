module.exports._200 = (res,data)=>{
	res.send(data)
}

module.exports._400 = (res,data)=>{
	res.status(400).send(data)
}

module.exports._403 = (res,data)=>{
	res.status(403).send(data)
}

module.exports._500 = (res,data)=>{
	res.status(500).send(data)
}

module.exports._redirect = (res, url)=>{
	if(url)
		res.redirect(url)
	else
		res.send()
}