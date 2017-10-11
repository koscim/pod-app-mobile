import mongoose, { Schema } from 'mongoose';

// Define podcast schema
let podcastSchema = new Schema({
  collectionId: {
    type: String,
    unique: true
  },
  artistName: String,
  collectionName: String,
  artUrl: String,
  description: String,
})

export default mongoose.model('podcast', podcastSchema)
