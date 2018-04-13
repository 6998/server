import express from 'express'
import company from '../controllers/company'
const router = express.Router();

router.route('/')
  .all(company.requireLogin)
  .get(company.example)

<<<<<<< HEAD
=======



>>>>>>> 99e761380eeea4055d2c837947c4ffd0c30ec042
export default router;
