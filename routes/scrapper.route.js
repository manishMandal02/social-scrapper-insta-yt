const { default: axios } = require('axios');
const express = require('express');

const router = express.Router();

router.get('/yt', async (req, res) => {
  const channelLink = req.query.channelLink;
  const data = JSON.stringify([{ url: channelLink, count_videos: 10 }]);

  try {
    await axios.post(
      'https://api.luminati.io/dca/trigger?collector=c_kud40o0s16hopttnu1&queue_next=1',
      {
        data,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.BRIGHT_DATA_TOKEN}`,
          'Content-Type': 'application/json',
        },
      }
    );
    res.json({ status: 'success' });
  } catch (error) {
    console.log(error.response && error.response.data.message ? error.response.data.message : error.message);
    res.json({ status: 'error', data: error });
  }
});

router.get('/insta', async (req, res) => {
  const socialName = req.query.socialName;
  const data = JSON.stringify([{ account: socialName }]);
  try {
    await axios({
      method: 'post',
      url: 'https://api.luminati.io/dca/trigger_immediate?collector=c_kuc4ihta1b349jnh72',
      headers: {
        Authorization: `Bearer ${process.env.BRIGHT_DATA_TOKEN}`,
        'Content-Type': 'application/json',
      },
      data: data,
    });
    // await axios.post(
    //   'https://api.luminati.io/dca/trigger_immediate?collector=c_kuc4ihta1b349jnh72',
    //   {
    //     data,
    //   },
    //   {
    //     headers: {
    //       Authorization: `Bearer ${process.env.BRIGHT_DATA_TOKEN}`,
    //       'Content-Type': 'application/json',
    //     },
    //   }
    // );
    // res.json({ status: 'success' });
  } catch (error) {
    console.log(error.response && error.response.data.message ? error.response.data.message : error.message);
    res.json({ status: 'error', data: error });
  }
});

module.exports = router;
