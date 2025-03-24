import express from "express"
import ensureAuthenticated from "../Middlewares/Auth.js";
const router = express.Router()

router.get('/', ensureAuthenticated, (req,res) => {
    // console.log("Map Data",req.user)
    res.status(200).json([
        {
            place:'Jaipur',
            Coordinates:"26.9124, 75.7873"
        },
        {
            place:'Lucknow',
            Coordinates:"26.8467, 80.9462"
        }
    ])
})

export default router;