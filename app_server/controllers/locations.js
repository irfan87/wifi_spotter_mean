const homeList = (req, res, next) => {
    res.render('locations-list', {title: 'Home'});
}

const locationInfo = (req, res, next) => {
    res.render('location-info', {title: 'Location Info'});
}

const addReview = (req, res, next) => {
    res.render('index', {title: 'User Add Review'});
}

module.exports = {
    homeList,
    locationInfo,
    addReview
};