const express = require('express');
const { route } = require('express/lib/application');
const router = express.Router();


//ROUTES
router.get('/', (req, res) => {
    res.render('index.html', { title: 'Firs website' });
});
module.exports = router;

router.get('/contact', (req, res) => {
    res.render('contact.html', { title: 'Contac page' })


});
router.get('/about', (req, res) => {
    res.render('about.html', { title: 'About page' })


});
