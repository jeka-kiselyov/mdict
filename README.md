# node mdict

node.js mdict (*.mdx, *.mdd) file reader

Rude refactoring of https://github.com/fengdh/mdict-js to make it work on nodejs by [Jeka Kiselyov](https://github.com/jeka-kiselyov).
Done enough to make it work for my project(with predefined dictionaries). It's tested with few .mdx files only, so there may be some bugs with other dictionaries. Please check and please feel free to submit pull requests with optimizations, unit tests etc.

Released under terms of the MIT License, as original library.

Installation:
```bash
npm install mdict
```

Usage:

```javascript
var mdict = require('mdict');
  
mdict.dictionary('dictionary.mdx').then(function(dictionary){
		//// dictionary is loaded
		dictionary.search({
			phrase: 'دهخدا*', /// '*' and '?' supported
			max: 10	          /// maximum results
 		}).then(function(foundWords){
			console.log('Found words:');
			console.log(foundWords);      /// foundWords is array

			var word = ''+foundWords[0];
			console.log('Loading definitions for: '+word);
			return dictionary.lookup(word); /// typeof word === string
		}).then(function(definitions){
			console.log('definitions:');     /// definition is array
			console.log(definitions);
		});
		
	});
```

This is [on GitHub](https://github.com/jeka-kiselyov/mdict).
