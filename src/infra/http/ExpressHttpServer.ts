import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import rateLimit from 'express-rate-limit';

import { ExpressErrorHandler } from '../error/ExpressErrorHandler';
import { IHttpServerAdapter, createRouterGetAndDeleteParams, createRouterPostAndPutParams } from './IHttpServerAdapter';

export class ExpressHttpServer implements IHttpServerAdapter {
	server = express();

	constructor() {
		this.server.use(express.urlencoded({ extended: true }));
		this.server.disable('x-powered-by');
		this.server.use(express.json({ limit: '50mb' }));
		this.server.use(cors({ origin: '*' }));
		const apiLimiter = rateLimit({
			windowMs: 5 * 60 * 1000,
			max: 100,
			standardHeaders: true,
			legacyHeaders: false,
		});
		this.server.use(apiLimiter);
	}

	async createRouterGet({ url, callback, middleware }: createRouterGetAndDeleteParams): Promise<any> {
		this.server.get(url, ...middleware, async (request: Request, response: Response, next: NextFunction) => {
			try {
				const result = await callback(request.params, request.query);
				return response.json(result);
			} catch (error) {
				ExpressErrorHandler(error, request, response, next);
			}
		});
	}

	async createRouterDelete({ url, callback, middleware }: createRouterGetAndDeleteParams): Promise<any> {
		this.server.delete(url, ...middleware, async (request: Request, response: Response, next: NextFunction) => {
			try {
				const result = await callback(request.params, request.query);
				return response.json(result);
			} catch (error) {
				ExpressErrorHandler(error, request, response, next);
			}
		});
	}

	async createRouterPost({ url, callback, middleware }: createRouterPostAndPutParams): Promise<any> {
		this.server.post(url, ...middleware, async (request: Request, response: Response, next: NextFunction) => {
			try {
				const result = await callback(request.params, request.query, request.body);
				return response.json(result);
			} catch (error) {
				ExpressErrorHandler(error, request, response, next);
			}
		});
	}

	async createRouterPut({ url, callback, middleware }: createRouterPostAndPutParams): Promise<any> {
		this.server.put(url, ...middleware, async (request: Request, response: Response, next: NextFunction) => {
			try {
				const result = await callback(request.params, request.query, request.body);
				return response.json(result);
			} catch (error) {
				ExpressErrorHandler(error, request, response, next);
			}
		});
	}

	startServerHttp(port: number) {
		this.server.listen(port, () => {
			console.log(`Estou no ar com Express e Nodemon na porta ${port}`);
		});
	}
}
