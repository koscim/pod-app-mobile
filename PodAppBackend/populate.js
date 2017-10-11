import mongoose from 'mongoose';
import Podcast from './models/podcast';

const podcasts = [
  {
    collectionId: '12435642',
    artistName: 'Blizzard',
    collectionName: 'StarCraftCast',
    artUrl: 'https://i.imgur.com/C3ExEb6.jpg',
    description: 'It is StarCraft in a Podcast'
  },
  {
    collectionId: '2234325325',
    artistName: 'PlayerOne',
    collectionName: 'VideoGamesYeah',
    artUrl: 'https://i.imgur.com/ejlIijD.jpg',
    description: 'This is a video game podcast'
  }
];

// Connect to MongoDB
mongoose.connect('mongodb://localhost/podcasts');

// Go through each podcast
podcasts.map(data => {
  // Initialize a model with movie data
  const movie = new Podcast(data);
  // and save it into the database
  movie.save();
})
