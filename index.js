var mdictParser = require(__dirname+'/mdict-parser.js');
var Promise = require('bluebird');

exports.dictionary = function(filenames) {
	if (!Array.isArray(filenames)) {
		filenames = [filenames];
	}

	return new Promise(function(resolve, reject){
		mdictParser.load(filenames).then(function(resources){

			return resources.mdx;
		}).then(function(mdx){
			resolve({
				lookup: function(string) {
					return mdx(string);
				},
				search: function(params) {
			        if (typeof params === 'string' || params instanceof String) {
			        	params = {
			        		phrase: params
			        	};
			        }

					params = params || {};
					params.phrase = params.phrase || '';
					params.max = params.max || 10;
					params.follow = params.follow || false;
					
					return mdx(params);
				}
			});
		});
	});
};