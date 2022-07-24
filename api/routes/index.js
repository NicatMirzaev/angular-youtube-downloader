const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
const ytdl = require('ytdl-core');
require('dotenv').config()

/* GET home page. */
router.post('/search', async function(req, res, next) {
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
});

module.exports = router;
