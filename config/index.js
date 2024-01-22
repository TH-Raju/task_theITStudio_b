const dotenv = require("dotenv");
const path = require("path");

dotenv.config({ path: path.join(process.cwd(), ".env") });

const data = {
  db_url: process.env.db_url,
  PORT: process.env.port,
  api_key: process.env.EMAIL_SEND_KEY,
  domain: process.env.EMAIL_SEND_DOMAIN,
};

module.exports = data;
