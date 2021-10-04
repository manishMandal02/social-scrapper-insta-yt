const { default: axios } = require('axios');
const express = require('express');

const router = express.Router();

router.get('/yt', async (req, res) => {
  const dataReceived = req.body;
  //   const data = JSON.stringify([{ url: channelLink, count_videos: 10 }]);

  res.json({ status: 'success', data: dataReceived });
});

router.get('/insta', async (req, res) => {
  const dataReceived = req.body;
  //   const data = JSON.stringify([{ url: channelLink, count_videos: 10 }]);

  res.json({ status: 'success', data: dataReceived });
});
