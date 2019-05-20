const homeList = (req, res, next) => {
    res.render('locations-list', {
        title: 'Wifi Locator - find a place to work with wifi',
        pageHeader: {
            title: 'Wifi Locator',
            strapLine: 'Find a place to work with wifi'
        },
        locations: [{
            name: 'Starcups',
            address: '125 High Street, Reading, RG6 1PS',
            rating: 3,
            facilities: ['Hot Drinks', 'Food', 'Premium Wifi'],
            distance: '100m'
        }, {
            name: 'Cafe Hero',
            address: '125 High Street, Reading, RG6 1PS',
            rating: 4,
            facilities: ['Hot Drinks', 'Food', 'Premium Wifi'],
            distance: '50m'
        }, {
            name: 'Burger Queen',
            address: '125 High Street, Reading, RG6 1PS',
            rating: 2,
            facilities: ['Food', 'Premium Wifi'],
            distance: '250m'
        }]
    });
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