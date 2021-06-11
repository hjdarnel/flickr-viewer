const fetch = require('node-fetch');
const { stripJsonp } = require('../utils/strip-jsonp');

var FEED_URL =
  'https://www.flickr.com/services/feeds/photos_public.gne?format=json';

module.exports.feed = async (req, res) => {
  var url = FEED_URL;

  var tags = req.query['tags'];

  if (tags && tags != '') {
    url = `${url}&tags=${tags}`;
  }

  var result = await fetch(url, {})
    .then((res) => res.text())
    .then((res) => stripJsonp(res))
    .then((json) => JSON.parse(json));

  res.send(result);
};
