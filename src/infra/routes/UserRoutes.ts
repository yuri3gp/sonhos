import { UserController } from '../../infra/controller/UserController';
import { IHttpServerAdapter } from '../http/IHttpServerAdapter';

export class UserRoutes {
	constructor(readonly http_server: IHttpServerAdapter, readonly userController : UserController) {
		this.http_server.createRouterGet({
			url: '/users',
			middleware: [],
			callback: this.userController.findAll.bind(this.userController),
		});
	}
}
