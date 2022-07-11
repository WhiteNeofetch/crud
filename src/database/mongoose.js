const mongoose = require('mongoose')

mongoose
    .connect('mongodb://10.10.50.251:27017/CRUD?retryWrites=true&w=majority"', {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(r => console.log('Database is on'))
    .catch(e => console.log('Database connection error!'))