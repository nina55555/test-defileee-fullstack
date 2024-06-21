import express from "express";
//import { createVideo } from "../controllers/defilons.js";
import { createShow } from "../controllers/defilons.js";

const router = express.Router();

// http://localhost:5000/api/videos/
//http://localhost:5979/runways/

//router.post("/", createVideo);
router.post("/", createShow);

//comment les afficher!!!
/*router.get('/', (req, res) => {
    DefilonsSchema.find((err, docs) => {
        if(!err)res.send(docs);
        else console.log('erreur de recuperation des données:'+err);
    })
});

*/

export default router;
