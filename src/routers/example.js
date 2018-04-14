import express from 'express'
import company from '../controllers/company'
const router = express.Router();

router.route('/')
  .get(company.example)

export default router;
