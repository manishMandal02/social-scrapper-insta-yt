const { default: axios } = require('axios');
const express = require('express');

const router = express.Router();

router.post('/yt', async (req, res) => {
  const dataReceived = req.body;

  console.log({ status: 'success', data: dataReceived });

  res.json({ status: 'success' });
});

router.post('/insta', async (req, res) => {
  const dataReceived = req.body;
  console.log(dataReceived);
  // console.log({ status: 'success', data: dataReceived });

  res.json({ status: 'success' });
});

module.exports = router;
