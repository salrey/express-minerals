// DEPENDENCIES
const app = require("./app.js");

// CONFIGURATION
require("dotenv").config();
//OR 
// const dotenv = require("dotenv")
// dotenv.config()

const PORT = process.env.PORT; //> process.env = {PORT: 3003} 

// LISTEN
app.listen(PORT, () => {
  console.log(`🪨 Listening on port ${PORT} 💎 `);
});