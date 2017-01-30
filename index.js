'use strict';

const os = require('os');

const addonPaths = {
	win32 : '/bin_win32' ,
	linux : '/bin_linux' ,
	darwin: '/bin_darwin',
};

process.env.path += ';' + __dirname + addonPaths[os.platform()];

module.exports = __dirname;
