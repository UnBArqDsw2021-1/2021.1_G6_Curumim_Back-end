import app from './app';

require('./database');

const express = require('express');

app.listen(process.env.PORT || 3333);
