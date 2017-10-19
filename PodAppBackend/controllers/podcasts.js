import Podcast from '../models/podcast';
import moment from 'moment';
import http from 'http';
import https from 'https';
import request from 'request';

export const index = (req, res, next) => {
  // Find all podcasts and return json response
  // Podcast.find().lean().exec((err, podcasts) => res.json(
  //   // Iterate through each podcast
  //   { podcasts: podcasts.map(podcast => ({
  //     ...podcast
  //   }))}
  // ));
  let options = {
    host: 'itunes.apple.com',
    port: 80,
    path: '/search?term=podcast&genreId=1318&limit=50'
  };

  http.get(options, function(response) {
    console.log("Got response: " + response.statusCode);
    console.log('HEADERS: ' + JSON.stringify(response.headers));
    response.setEncoding('utf8');
    response.on('data', function(chunk) {
      console.log('BODY: ' + chunk);
    })
  }).on('error', function(e) {
    console.log("Got error: " + e.message);
  });
  console.log('YAYAYAYAYAY');
  // http.get({
  //   uri: 'https://itunes.apple.com/search?term=podcast&genreId=1318&limit=1000'
  // }).pipe(res);
  // console.log(res);
};

export const categories = (req, res, next) => {
  // Search Itunes API for podcasts of a certain category and return json response
  request({
    uri: 'https://itunes.apple.com/search?term=podcast&genreId=1318&limit=1000'
  }).pipe(res);
  console.log(res);
}
