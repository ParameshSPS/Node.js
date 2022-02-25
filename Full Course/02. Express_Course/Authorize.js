// Middleware-Use.js

/*
const authorize = (req, res, next) => {
    console.log('Authorize');
    next();
};

module.exports = authorize;
*/


// Middleware-Use.js

const authorize = (req, res, next) => {
    const { user } = req.query;
    if (user === 'john') {
        req.user = { name: 'john', id: 4 };
        next();
    } else {
        res.status(401).send('Unauthorized');
    };
};

module.exports = authorize;