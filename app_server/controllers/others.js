const about = (req, res, next) => {
    res.render('generic-text', {
        title: 'About Us',
        content: 'Wifi Locator was created to help people to find places to sit down and get a bit work done.<br /><br />Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero ratione error quasi excepturi quae, similique, necessitatibus eaque alias vitae fuga laborum totam tempora consequuntur nesciunt saepe ad ullam vero placeat?<br /><br />Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis reiciendis sapiente excepturi reprehenderit vero nulla deserunt esse ut culpa eligendi nobis aspernatur veritatis explicabo, saepe ratione, alias dicta eum aliquam?'
    });
}

module.exports = {
    about
};