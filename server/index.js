import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connection from './database/db.js';
import Routes from './routes/route.js';

const app = express();
const port = process.env.PORT || 4000;

dotenv.config();
connection();

// app.use(bodyParser.json({ extended: true }));
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());
app.use('/', Routes);

app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
