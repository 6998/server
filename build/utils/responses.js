"use strict";

module.exports._200 = function (res, data) {
	res.send(data);
};

module.exports._400 = function (res, data) {
	res.status(400).send(data);
};

module.exports._403 = function (res, data) {
	res.status(403).send(data);
};

module.exports._500 = function (res, data) {
	res.status(500).send(data);
};

module.exports._redirect = function (res, url) {
	if (url) res.redirect(url);else res.send();
};
//# sourceMappingURL=responses.js.map
