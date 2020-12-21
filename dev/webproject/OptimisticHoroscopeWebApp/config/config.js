// global configuration settings

//requires
const _ = require('lodash');

//module variables
const config = require('./config.json');

const defaultConfig = config.development;
const environment = process.env.NODE_ENV || 'development';

const environmentConfig = config[environment];
const finalConfig = _.merge(defaultConfig, environmentConfig);

/*
 As a best practice
 all global variables should be referenzces via gloabl. syntax
 and their names should always begin with g
*/
global.gConfig = finalConfig;

// log global.gConfig
console.log(`global.gConfig: ${JSON.stringify(global.gConfig, undefined, global.gConfig.json_identation)}`);
