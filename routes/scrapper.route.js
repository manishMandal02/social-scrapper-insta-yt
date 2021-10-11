const { default: axios } = require('axios');
const express = require('express');

const router = express.Router();

router.post('/yt', async (req, res) => {
  const channelLink = req.body.channelLink;
  const numVideos = req.body.numVideos;
  const data = JSON.stringify({ url: channelLink, count_videos: numVideos });

  console.log(data);

  try {
    await axios({
      method: 'post',
      url: 'https://api.luminati.io/dca/trigger_immediate?collector=c_kud40o0s16hopttnu1',
      headers: {
        Authorization: `Bearer ${process.env.BRIGHT_DATA_TOKEN}`,
        'Content-Type': 'application/json',
      },
      data: data,
    });
    res.json({ status: 'success' });
  } catch (error) {
    console.log(error.response && error.response.data.message ? error.response.data.message : error.message);
    res.json({ status: 'error', data: error });
  }
});

router.post('/insta', async (req, res) => {
  const socialName = req.body.socialName;
  const numPosts = req.body.numPosts;

  const data = JSON.stringify({ account: socialName, posts_number: numPosts.toString() });
  console.log(data);
  try {
    if (!data.account) {
      throw new Error('Please enter the instagram account');
    }
    await axios({
      method: 'post',
      url: 'https://api.luminati.io/dca/trigger_immediate?collector=c_kuc4ihta1b349jnh72',
      headers: {
        Authorization: `Bearer ${process.env.BRIGHT_DATA_TOKEN}`,
        'Content-Type': 'application/json',
      },
      data: data,
    });
    res.json({ status: 'success' });
  } catch (error) {
    console.log(error.response && error.response.data.message ? error.response.data.message : error.message);
    res.json({ status: 'error', data: error });
  }
});

module.exports = router;
