const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');
const ytdl = require('ytdl-core');
require('dotenv').config()

/* GET home page. */
router.post('/search', async function(req, res, next) {
  try {
    const { keyword } = req.body;

    if(!keyword) return res.status(400).send({ success: false, message: "Please specify keyword or Youtube URL."});

    const BASE_URL = "https://www.googleapis.com/youtube/v3/";
    let URL = `${BASE_URL}search?part=snippet&maxResults=20&q=${keyword}&type=video&key=${process.env.API_KEY}`;
    if(ytdl.validateURL(keyword)) {
      const videoId = ytdl.getURLVideoID(keyword);
      URL = `${BASE_URL}videos?id=${videoId}&key=${process.env.API_KEY}&part=snippet&type=video`;
      fetch(URL).then(response => response.json()).then(data => {
        const parseData = data.items ? data.items.map((item) => ({ ...item, id: { videoId: item.id}})) : []
        return res.status(200).send({ success: true, data: parseData})
      })
    }
    else {
      fetch(URL).then(response => response.json()).then(data => {
        return res.status(200).send({ success: true, data: data.items || []});
      })
    }
  }
  catch(err) {
    return res.status(500).send({ success: false, message: err.message})
  }
});

router.get("/download", async function(req, res, next) {
  try {
    const { id } = req.query;
    if(!id) return res.status(400).send({ success: false, message: "Please send video id."})
    if(!ytdl.validateID(id)) return res.status(400).send({ success: false, message: "Invalid video id."});
    const videoPath = `../api/public/videos/${id}.mp4`;
    if(fs.existsSync(videoPath)) {
      return res.status(200).send({ success: true, url: `/videos/${id}.mp4`});
    }
    else {
      ytdl(`http://www.youtube.com/watch?v=${id}`).pipe(fs.createWriteStream(videoPath)).on("finish", () => {
        return res.status(200).send({ success: true, url: `/videos/${id}.mp4`})
      })
    }
  }
  catch(err) {
    return res.status(500).send({ success: false, message: err.message});
  }
});
module.exports = router;
