const index = (req, res) => {
    res.render('index', {title: 'Welcome to Wifi Locator'});
};

module.exports = {
    index
};