const about = (req, res, next) => {
    res.render('generic-text', {title: 'About'});
}

module.exports = {
    about
};