'use strict';

var childProcess = require('child_process');
var electron     = require('electron-prebuilt');
var gulp         = require('gulp');
var jetpack      = require('fs-jetpack');
var usemin       = require('gulp-usemin');
var uglify       = require('gulp-uglify');




require('./tasks/build');
require('./tasks/release');
