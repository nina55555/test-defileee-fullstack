//import Runway-show from "../models/Video.js";
//import Video from "../models/Defilons.js";
import Defilons from "../models/Defilons.js";



//export const createVideo = async (req, res, next) => {
export const createShow = async (req, res, next) => {

  const { imgUrl, videoUrl } = req.body;

  if (!imgUrl || !videoUrl) {
    res.status(400);
    return next(new Error("imgUrl & videoUrl fields are required"));
  }

  try {
    //const video = await Video.create({
    const defilons = await Defilons.create({
      //
      imgUrl,
      videoUrl,
    });

    res.status(201).json({
      success: true,
      //video,
      defilons,
      
    });
  } catch (error) {
    console.log(error);
    res.status(500);
    next(error);
  }
}



