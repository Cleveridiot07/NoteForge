const dotenv = require('dotenv');
const app = require('./app');
const connectDB = require('./config/db');

dotenv.config();

const PORT = process.env.PORT || 5000;

// Connect to the database
connectDB();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
