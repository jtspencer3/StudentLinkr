const mysql = require('mysql2');

const pool = mysql.createPool({
    host: '143.244.171.250',
    user: 'python',
    database: 'StudentLinkr',
    password: 'pass',
});

module.exports = pool.promise();