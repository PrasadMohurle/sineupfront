const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const routerUrls = require('./routers/router');
const cors = require('cors');

dotenv.config();
mongoose.connect(process.env.DATABASE_ACCESS, () =>
    console.log('Database connected successfully.')
);

app.use(express.json()); // we activated body parser in our code
app.use(cors());
app.use('/app', routerUrls);

app.listen(process.env.PORT_BACKEND, () =>
    console.log('Server is up and running successfully.')
);
