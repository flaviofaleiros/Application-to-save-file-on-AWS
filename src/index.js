const express = require('express');
const morgan = require('morgan');
const  mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://curso:curso@curso-dczru.mongodb.net/curso?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(morgan('dev'));

app.use(require("./routes"));

app.listen(process.env.PORT || 3000);