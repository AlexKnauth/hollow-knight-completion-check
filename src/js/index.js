/* global require */

// Cookie Consent https://github.com/osano/cookieconsent
require("./cookieconsent.js");

// CSS
require("../css/cookieconsent.css");
require("../css/fontello.css");
require("../css/simpleicon.css");
require("../css/style.css");

// required for meta tags (social) to be visible by Webpack
require("../img/thumbnail1200x628.jpg");

// Instantly load test save file from .json (fast Debugging script)
// require("./LoadJson.js");

// Load Save File for opening files, decoding, decryption
require("./LoadSaveFile.js");

// Main script for analyzing the decoded save file and generating the page on the fly
require("./HKCheckCompletion.js");