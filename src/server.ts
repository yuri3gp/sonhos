import { PORT } from './infra/config/environment';
import { ExpressHttpServer } from './infra/http/ExpressHttpServer';
import { UserRoutes } from './infra/routes/UserRoutes.ts';
import { IHttpServerAdapter } from './infra/http/IHttpServerAdapter.ts';
import { ReadyController } from './infra/controller/ReadyController.ts';
import { UserController } from './infra/controller/UserController.ts';

const http_server: IHttpServerAdapter = new ExpressHttpServer();
new ReadyController(http_server);

const userController = new UserController()
new UserRoutes(http_server, userController)

http_server.startServerHttp(PORT);