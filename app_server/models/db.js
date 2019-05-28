const mongoose = require('mongoose');
const readline = require('readline');
const dbURI = "mongodb://localhost:27017/wifi_locator";
mongoose.connect(dbURI, {useNewUrlParser: true});

// check if the OS like Windows can support with SIGINT
if(process.platform === 'win32') {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.on('SIGINT', () => {
        process.emit("SIGINT");
    });
}

mongoose.connection.on('connected', () => {
    console.log(`Mongoose is connected to ${dbURI}`);
});

mongoose.connection.on('error', (err) => {
    console.log('Mongoose is not connected:', err);
});

mongoose.connection.on('disconnected', () => {
    console.log('Mongoose disconnected');
});