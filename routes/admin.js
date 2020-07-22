const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const saltRounds = 10;
const jwt = require('jsonwebtoken');
const keys = require('../config/keys');
const passport = require('passport');

//cloudninary
const fileupload = require('express-fileupload')
const cloudinary = require('cloudinary').v2;

// Load User model
const User = require('../models/AdminUser');

const Product = require('../models/Product');
const Collection = require('../models/Collection');

// @route   admin/test
// @desc    Tests users route
// @access  Public
router.get('/test', (req, res) => res.json({ msg: 'it works for test' }));


// Authentication ----------------------------------------------------------------------------------------------------

// @route   POST admin/register
// @desc    Register user
// @access  Public
router.post('/register', (req, res) => {
    console.log('user: ------------------------', req.body)
    const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    })
    bcrypt.hash(newUser.password, saltRounds, function (err, hash) {
        if (err) throw err;
        // Store hash in your password DB.
        newUser.password = hash;
        newUser.save()
            .then(user => res.json(user))
            .catch(err => console.log(err))
    });
})

// @route   POST admin/login
// @desc    Login user
// @access  Public
router.post('/login', (req, res) => {
    const password = req.body.password;
    const email = req.body.email;
    User.findOne({
        email
    })
        .then(user => {
            //check user
            if (!user) {
                return res.status(404).json({ email: 'User not found' })
            }
            //check password
            bcrypt.compare(password, user.password)
                .then(isMatch => {
                    if (isMatch) {
                        //sign token
                        const payload = {
                            id: user.id,
                            name: user.name,
                            email: user.email
                        }
                        jwt.sign(payload, keys.secretOrKey, { expiresIn: 3600 }, (err, token) => {
                            res.json({
                                email: payload.email,
                                success: true,
                                token: 'Bearer ' + token
                            })
                        });
                    } else {
                        return res.status(400).json({
                            password: 'Password incorrect'
                        });
                    }
                })
        })
})

// @route   POST admin/current
// @desc    Return user
// @access  Private
router.get('/current', passport.authenticate('jwt', { session: false }), (req, res) => {
    res.json({
        id: req.user._id,
        name: req.user.name,
        email: req.user.email
    });
})












// o que eu preciso está daqui para baixo ----------------------------------------------------------------------------------------------

// @route   POST admin/addCollection
// @desc    adicionar produto
// @access  Public
router.post('/addCollection', (req, res) => {
    console.log(req.body);
    const newCollection = new Collection({
        collectionPhoto: req.body.collectionPhoto,
        collectionName: req.body.collectionName,
        collectionUrl: req.body.collectionUrl,
    });
    newCollection
        .save()
        .then(collection => res.json(collection))
        .catch(err => console.log(err));
});

// @route   GET admin/getAllCollections
// @desc    get all Collections
// @access  Public
router.get('/getAllCollections', (req, res) => {
    Collection.find()
        .sort({ date: -1 })
        .then(collections => res.json(collections))
        .catch(err => res.status(404))
});

// @route   POST admin/addProductToCollection
// @desc    add product to collection
// @access  Public
router.post('/addProductToCollection', (req, res) => {
    const newProduct = new Product({
        name: req.body.nameOfProduct,
        url: req.body.urlOfProduct,
        keywords: req.body.keywords,
        description: req.body.descriptionOfProduct,
        detailedDescription: req.body.detailedDescriptionOfProduct,
        price: req.body.price,
        mainPhoto1: req.body.mainPhoto1,
        mainPhoto2: req.body.mainPhoto2,
        mainPhoto3: req.body.mainPhoto3,
        mainPhoto4: req.body.mainPhoto4,
        mainPhoto5: req.body.mainPhoto5,
        mainPhoto6: req.body.mainPhoto6,
    });
    Collection.findOne({ collectionUrl: req.body.collectionUrl })
        .then(colection => {
            const collectionProducts = colection.collectionProducts
            collectionProducts.push(newProduct)
            Collection.findOneAndUpdate(
                { collectionUrl: req.body.collectionUrl },
                { collectionProducts: collectionProducts},
                { new: true })
                .then(product => res.json(product))
                .catch(err => console.log(err));
        })
});

// @route   GET admin/getAllProductsFromCollection
// @desc    get all products from a single collection
// @access  Public
router.post('/getAllProductsFromCollection', (req, res) => {
    Collection.findOne({ collectionUrl: req.body.collectionUrl })
        .sort({ date: -1 })
        .then(colection => res.json(colection.collectionProducts))
        .catch(err => res.status(404))
});


// @route   POST admin/addProduct
// @desc    adicionar produto
// @access  Public
router.post('/addProduct', (req, res) => {

    console.log(req.body);
    const newProduct = new Product({
        name: req.body.nameOfProduct,
        url: req.body.urlOfProduct,
        keywords: req.body.keywords,
        description: req.body.descriptionOfProduct,
        detailedDescription: req.body.detailedDescriptionOfProduct,
        price: req.body.price,
        mainPhoto1: req.body.mainPhoto1,
        mainPhoto2: req.body.mainPhoto2,
        mainPhoto3: req.body.mainPhoto3,
        mainPhoto4: req.body.mainPhoto4,
        mainPhoto5: req.body.mainPhoto5,
        mainPhoto6: req.body.mainPhoto6,
    });
    newProduct
        .save()
        .then(product => res.json(product))
        .catch(err => console.log(err));
});

// @route   GET admin/getAllProducts
// @desc    get all products
// @access  Public
router.get('/getAllProducts', (req, res) => {
    Product.find()
        .sort({ date: -1 })
        .then(articles => res.json(articles))
        .catch(err => res.status(404))
});

// @route   GET admin/upload
// @desc    fazer upload duma imagem para o cloudinary
// @access  Public
cloudinary.config({
    cloud_name: 'dthetakuv',
    api_key: '616382632955437',
    api_secret: 'hpid1G6JuJxYwFGpG71MYbuYUig'
})
router.use(fileupload({
    useTempFiles: true
}));
router.post('/upload', (req, res) => {
    const file = req.files.image;
    cloudinary.uploader.upload(file.tempFilePath, function (err, result) {
        res.send({
            'result': result
        })
    })
})



// @route   GET admin/deleteProductById
// @desc    fazer delete dum producto
// @access  Public


router.post('/deleteProductById', (req, res) => {
    console.log(req.body)
    Product.findByIdAndDelete(req.body.id, function (err) {
        if (err) console.log(err);
        console.log("Successful deletion");
    });
})


// @route   Get articles/getArticle
// @desc    get a single product from the database
// @access  Public
// router.post('/getArticle', (req, res) => {
//   Article.findOne({url: req.body.id})
//     .then(article => res.json(article))
//     .catch(err => res.status(404))
// });

module.exports = router;