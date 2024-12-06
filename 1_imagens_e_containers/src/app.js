import express from 'express';
import { router } from './routers.js';

const app = express();

app.use(router)

export { app };
