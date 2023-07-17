import { UserController } from '../../infra/controller/UserController';
import { IHttpServerAdapter } from '../http/IHttpServerAdapter';

export class UserRoutes {
	constructor(readonly http_server: IHttpServerAdapter, readonly userController : UserController) {
		this.http_server.createRouterGet({
			url: '/user/:id',
			middleware: [],
			callback: this.userController.getUserById.bind(this.userController),
		});
	}
}
