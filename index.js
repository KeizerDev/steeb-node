var request = require('request');
var musicgetter = require('./src/musicgetter');

/*
* Get this array/object based on musicbrainz search.
*/

albumSearch = [
	{
		'artist': 'Pink Floyd',
		'song': 'Another brick in the wall part 3',
		'album': 'The wall',
		'length': 213
	},
	{
		'artist': 'Pink Floyd',
		'song': 'Another brick in the wall part 3',
		'album': 'The wall',
		'length': 213
	},
	{
		'artist': 'Pink Floyd',
		'song': 'Another brick in the wall part 3',
		'album': 'The wall',
		'length': 213
	},
	{
		'artist': 'Pink Floyd',
		'song': 'Another brick in the wall part 3',
		'album': 'The wall',
		'length': 213
	},	
];

for (var i = 0; i < albumSearch.length; i++) {
	musicgetter.lookUp(albumSearch[i]);
};

var request = require('request');