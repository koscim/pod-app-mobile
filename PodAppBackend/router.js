import express, { Router } from 'express';
// Import index action from podcasts controller
import { index, subscriptions } from './controllers/podcasts';
// Initialize the router
const router = Router();

// Handle /podcasts.json route with index action from podcasts controller
router.route('/podcasts.json')
  .get(index)

router.route('/subscriptions.json')
  .get(subscriptions)
// router.route('/categories.json')
//   .get(categories);

export default router;
