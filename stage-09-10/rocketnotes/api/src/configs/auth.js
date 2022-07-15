module.exports = {
  jwt: {
    secret: process.env.APP_SECRET || "default",
    expiresIn: "1d",
  },
};