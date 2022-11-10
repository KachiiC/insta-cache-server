const axios = require("axios");

const getInstagramData = async () => {
  try {
    const options = {
      method: "GET",
      url: `https://instagram188.p.rapidapi.com/userpost/${process.env.HULT_USERID}/12/%7Bend_cursor%7D`,
      headers: {
        "X-RapidAPI-Key": process.env.INSTA_HEADER_KEY,
        "X-RapidAPI-Host": process.env.INSTA_HEADER_HOST,
      },
    };

    const res = await axios.request(options);
    return res.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

module.exports = {
  getInstagramData,
};
