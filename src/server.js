import express from 'express';
import app from './app';

require('./database');

app.listen(process.env.PORT || 3333);
