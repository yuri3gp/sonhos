import { ReadyApi } from '../../applications/ReadyApi';
import { IHttpServerAdapter } from '../http/IHttpServerAdapter';

export class ReadyController {
	constructor(HttpServer: IHttpServerAdapter) {
		HttpServer.createRouterGet({ url: '/', callback: this.apiIsReady, middleware: [] });
	}

	async apiIsReady(params: any, query: any) {
		return ReadyApi.apiIsReady();
	}
}
