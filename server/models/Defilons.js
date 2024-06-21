import mongoose from "mongoose";



//const mongoose = require('mongoose');


//const videoSchema = new mongoose.Schema(
  const defilonsSchema = new mongoose.Schema(
  
  
    {
      imgUrl: {
        type: String,
        required: true,
      },
      videoUrl: {
        type: String,
        required: true,
      },
    },
    {
      timestamps: true,
    }
  );
  
  export default mongoose.model("Defilons", defilonsSchema);
  //export default mongoose.model("Runway-show", videoSchema);




//module.exports = { PostsModel };





//first version


/*
//const videoSchema = new mongoose.Schema(
const defilonsSchema = new mongoose.Schema(


  {
    imgUrl: {
      type: String,
      required: true,
    },
    videoUrl: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Defilons", defilonsSchema);
//export default mongoose.model("Runway-show", videoSchema);


*/