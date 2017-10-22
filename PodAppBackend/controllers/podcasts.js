import Podcast from '../models/podcast';
import moment from 'moment';
import http from 'http';
import https from 'https';
import request from 'request';

export const subscriptions = (req, res, next) => {
  // Find all podcasts in subscriptions and return json response
  Podcast.find().lean().exec((err, podcasts) => res.json(
    // Iterate through each podcast
    { podcasts: podcasts.map(podcast => ({
      ...podcast
    }))}
  ));
}

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
    let body = '';
    response.setEncoding('utf8');
    response.on('data', function(chunk) {
      body += chunk;
    });
    response.on('end', function() {
      // console.log('BODY: ' + body);
      let jsonBody = JSON.parse(body);
      let podcasts = [];
      jsonBody["results"].forEach((result) => {
        let podcast = {
          artistName: result["artistName"],
          collectionName: result["collecitonName"],
          collectionId: result["collectionId"],
          artUrl: result["artworkUrl600"],
          description: ''
        }
        podcasts.push(podcast)
      })
      console.log(podcasts);
      res.json(
        {
          podcasts: podcasts
        }
      )
    });
  }).on('error', function(e) {
    console.log("Got error: " + e.message);
  });
  // console.log(jsonBody.results);
};

export const categories = (req, res, next) => {
  // Search Itunes API for podcasts of a certain category and return json response
  request({
    uri: 'https://itunes.apple.com/search?term=podcast&genreId=1318&limit=1000'
  }).pipe(res);
  console.log(res);
}
