const corsMiddleware = (req, res, next) => {
	res.header("Access-Control-Allow-Origin", "https://ricosotomayor.com");
	res.header("Access-Control-Allow-Methods", "GET,HEAD,PATCH,POST,PUTS,OPTIONS");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	next();
  }

module.exports = corsMiddleware