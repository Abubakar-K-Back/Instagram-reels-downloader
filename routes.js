const express=require('express');
const Instagram = require('instagram-downloader');

const router=express.Router();

router.get('/',(req,res)=>{

    res.json("App Running...")

})


  
  
router.post("/inst", async (req,res)=>{
  
  
  ps=req.body.ps
    
    try {
      
    await Instagram(ps)
    .then(data => {
      const { entry_data: { PostPage } } = data;
      return PostPage.map(post => post.graphql.shortcode_media)
    })
    .then(images => images.map(img => res.json(img.video_url)))
    
  
    } catch (error) {
      res.json(error)
    }
  
  })
  
  
  
  
module.exports=router;
