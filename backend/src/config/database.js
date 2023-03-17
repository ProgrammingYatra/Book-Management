const mongoose = require("mongoose");

const connectDatabse = () => {
  mongoose
    .connect(process.env.DB_URI, {
      useNewUrlParser: true,
    })
    .then((data) =>
      console.log(`MngoDb is Connected to ${data.connection.host}`)
    ).catch((err) => console.log(err));;
};

module.exports = connectDatabse;
