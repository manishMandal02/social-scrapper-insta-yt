const { default: axios } = require('axios');
const express = require('express');

const router = express.Router();

router.post('/yt', async (req, res) => {
  const dataReceived = req.body;
  //   const data = JSON.stringify([{ url: channelLink, count_videos: 10 }]);

  console.log({ status: 'success', data: dataReceived });

  //   res.json({ status: 'success', data: dataReceived });
});

router.post('/insta', async (req, res) => {
  const dataReceived = req.body;
  //   const data = JSON.stringify([{ url: channelLink, count_videos: 10 }]);
  console.log(req.body);
  // console.log({ status: 'success', data: dataReceived });

  //   res.json({ status: 'success', data: dataReceived });
});

module.exports = router;
