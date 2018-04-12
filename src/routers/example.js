import express from 'express'
import company from '../controllers/company'
const router = express.Router();

router.route('/')
  .all(company.requireLogin)
  .get(company.example)



export default router;