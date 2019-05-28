const env = require('dotenv').config();

const GM_API_KEY = process.env.GOOGLE_API_KEY

console.log(GM_API_KEY);

// outlet listing that will shown at the main page
const homeList = (req, res, next) => {
    res.render('locations-list', {
        title: 'Wifi Locator - find a place to work with wifi',
        pageHeader: {
            title: 'Wifi Locator',
            strapLine: 'Find a place to work with wifi'
        },
        sidebar: "Looking for wifi and a seat? Wifi locator helps you find places to work when out and about. Perhaps with coffee and cake as your company?",
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

// it will show the specific location with the id
// such as /location/starbucks
const locationInfo = (req, res, next) => {
    res.render('location-info', {
        title: 'Starcups',
        pageHeader: {
            title: 'Starcups'
        },
        google_api_key: GM_API_KEY,
        sidebar: {
            context: 'is on Wifi Locator because it has accessible wifi and space to sit down with your laptop and get some work done.',
            callToAction: 'If you\'ve been and you like it - or if you don\'t - please leave a review to help other people just like you.',
        },
        location: {
            name: 'Starcups',
            address: '125 High Street, Reading, RG6 1PS',
            rating: 3,
            facilities: ['Hot Drinks', 'Food', 'Premium Wifi'],
            coords: {lat: 51.455041, lng: -0.9690884},
            openingTimes: [{
                days: 'Monday - Friday',
                opening: '7:00am',
                closing: '7:00pm',
                closed: false
            }, {
                days: 'Saturday',
                opening: '8:00am',
                closing: '5:00pm',
                closed: false
            }, {
                days: 'Sunday',
                closed: true
            }],
            reviews: [{
                author: 'Tony Stark',
                rating: 4,
                timestamp: '16 July 2017',
                reviewText: 'This place is so damn awesome and relaxing. It really remind me being with my love one'
            }, {
                author: 'Charlie Chaplin', 
                rating: 3,
                timestamp: '15 June 2018',
                reviewText: 'This is so relaxing but hope if you guys could sell anything than a few types of cake.'
            }, {
                author: 'John Legend',
                rating: 1,
                timestamp: '21 May 2019',
                reviewText: 'This place should concern the speed of the internet'
            }]
        }
    });
}

const addReview = (req, res, next) => {
    res.render('location-review-form', {
        title: 'Review Starcups on Wifi Locator',
        pageHeader: {
            title: 'Review Starcups'
        }
    });
}

module.exports = {
    homeList,
    locationInfo,
    addReview
};