import express, { Router } from 'express';
// Import index action from movies controller
import { index } from './controllers/podcasts';

// Initialize the router
const router = Router();

// Handle /podcasts.json route with index action from movies controller
router.route('/podcasts.json')
  .get(index);

export default router;
