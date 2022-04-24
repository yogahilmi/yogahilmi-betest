module.exports = {
  connect: () => {
    require("mongoose").connect(
      `mongodb://${process.env.HOSTMONGO}:${process.env.PORTMONGO}/db_yogahilmi_betest`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
      (err) => {
        if (err) return console.error(err);
        console.log("Successfully connected to MongoDB.");
      }
    );
  },
};
