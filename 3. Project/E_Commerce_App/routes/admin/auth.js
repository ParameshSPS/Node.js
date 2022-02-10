const express = require('express');
// const { check, validationResult } = require('express-validator');

const { handleErrors } = require('./middlewares');
const usersRepo = require('../../repositories/users');
const signupTemplate = require('../../views/admin/auth/signup');
const signinTemplate = require('../../views/admin/auth/signin');
const {
    requireEmail,
    requirePassword,
    requirePasswordConfirmation,
    requireEmailExists,
    requireValidPasswordForUser
} = require('./validators');

const router = express.Router();

//------------------------------------ Sign Up --------------------------------//

router.get('/signup', (req, res) => {
    res.send(signupTemplate({ req }));
});

/*
const bodyParser = (req, res, next) => {
    if (req.method === 'POST') {
        req.on('data', data => {
            const parsed = data.toString('utf8').split('&');
            const formData = {};
            for (let pair of parsed) {
                const [key, value] = pair.split('=');
                formData[key] = value;
            }
            req.body = formData;
            next();
        });
    } else {
        next();
    }
};

app.post('/', bodyParser, (req, res) => {
    console.log(req.body);
    res.send('Account Created Machaaaa!!!!');
});
*/

/*
app.post('/', bodyParser.urlencoded({ extended: true }), (req, res) => {
    console.log(req.body);
    res.send('Account Created Machaaaa!!!!');
});
*/

router.post(
    '/signup',
    [requireEmail, requirePassword, requirePasswordConfirmation],
    handleErrors(signupTemplate),
    async (req, res) => {
        // const errors = validationResult(req);
        // console.log(errors);

        // if (!errors.isEmpty()) {
        //     return res.send(signupTemplate({ req, errors }));
        // }

        const { email, password } = req.body;
        // Create a user in our user repo to represent this person
        const user = await usersRepo.create({ email, password });
        // Strore the id of that user inside the user cookie
        req.session.userId = user.id;
        // res.send('Account Created Machaaaa!!!!');
        res.redirect('/admin/products');
    }
);

router.get('/signout', (req, res) => {
    req.session = null;
    res.send('You are logged out');
});

//------------------------------------ Sign In --------------------------------//

router.get('/signin', (req, res) => {
    res.send(signinTemplate({}));
});

router.post(
    '/signin',
    [requireEmailExists, requireValidPasswordForUser],
    handleErrors(signinTemplate),
    async (req, res) => {
        // const errors = validationResult(req);
        // console.log(errors);

        // if (!errors.isEmpty()) {
        //     return res.send(signinTemplate({ errors }));
        // }

        const { email } = req.body;

        const user = await usersRepo.getOneBy({ email });

        req.session.userId = user.id;

        // res.send('You are signed in Machaaaa!!!!');

        res.redirect('/admin/products');
    }
);

module.exports = router;