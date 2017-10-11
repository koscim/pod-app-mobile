import Podcast from '../models/podcast';
import moment from 'moment';

export const index = (req, res, next) => {
  // Find all podcasts and return json response
  Podcast.find().lean().exec((err, podcasts) => res.json(
    // Iterate through each podcast
    { podcasts: podcasts.map(podcast => ({
      ...podcast
    }))}
  ));
};
