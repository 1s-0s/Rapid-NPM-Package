const axios = require("axios");
const meme = async () => {
    await axios.get(`https://api.imgflip.com/get_memes`)
        .then((res) => {
            // console.log(res.data.data.memes);
            // callback(res.data.data.memes);
            return res.data.data.memes;
        }
        )
}
module.exports = meme;