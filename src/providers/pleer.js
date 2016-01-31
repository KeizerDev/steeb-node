var request = require('request');

module.exports = function () {
  return {
  	search: function(searchArr) {
  		// return best match with the searchArr.

  		return request('http://pleer.com/browser-extension/search?q=' + searchArr.title, this)
  	}
  };
};
