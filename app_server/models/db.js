const mongoose = require('mongoose');
const dbURI = "mongodb://localhost:27017/wifi_locator";
mongoose.connect(dbURI, {useNewUrlParser: true});

// required the location model
require('./locations');

// Mongoose graceful shutdown
const gracefulShutDown = (msg, callback) => {
    mongoose.connection.close(() => {
        console.log(`Mongoose disconnected through ${msg}`);
        callback();
    })
}

process.once('SIGUSR2', () => {
    gracefulShutDown('nodemon restart', () => {
        process.kill(process.pid, 'SIGUSR2');
    });
});

process.on('SIGINT', () => {
    gracefulShutDown('app termination', () => {
        process.exit(0);
    });
});

process.on('SIGTERM', () => {
    gracefulShutDown('Heroku app shutdown', () => {
        process.exit(0);
    });
});

mongoose.connection.on('connected', () => {
    console.log(`Mongoose is connected to ${dbURI}`);
});

mongoose.connection.on('error', (err) => {
    console.log('Mongoose is not connected:', err);
});

mongoose.connection.on('disconnected', () => {
    console.log('Mongoose disconnected');
});