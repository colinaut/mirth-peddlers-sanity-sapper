require('dotenv').config();

import sirv from 'sirv';
import express from 'express'
import compression from 'compression';
import * as sapper from '@sapper/server';
import { createProxyMiddleware } from 'http-proxy-middleware';

const { PORT, NODE_ENV, ITCH_IO_KEY, DOMAIN } = process.env;
console.log(DOMAIN)
const dev = NODE_ENV === 'development';

express() // You can also use Express
	.use('/api', createProxyMiddleware({ target: 'https://itch.io', changeOrigin: true }))
	.use(
		compression({ threshold: 0 }),
		sirv('static', { dev }),
		sapper.middleware({
			session: () => ({
				  ITCH_IO_KEY,
				  DOMAIN,
			}),
		})
	)
	.listen(PORT, err => {
		if (err) console.log('error', err);
	});
