const homeList = (req, res, next) => {
    res.render('locations-list', {title: 'Home'});
}

const locationInfo = (req, res, next) => {
    res.render('location-info', {title: 'Location Info'});
}

const addReview = (req, res, next) => {
    res.render('location-review-form', {title: 'Add Review'});
}

module.exports = {
    homeList,
    locationInfo,
    addReview
};