'use strict';

const handler = require('./src');

exports.handler = handler(process.env.BUCKET_NAME, new Date());
