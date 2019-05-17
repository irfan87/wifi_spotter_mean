const homeList = (req, res, next) => {
    res.render('index', {title: 'Location List'});
}

const locationInfo = (req, res, next) => {
    res.render('index', {title: 'Location Info'});
}

const addReview = (req, res, next) => {
    res.render('index', {title: 'User Add Review'});
}

module.exports = {
    homeList,
    locationInfo,
    addReview
};