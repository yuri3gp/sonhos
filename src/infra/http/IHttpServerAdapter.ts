export interface getAndDeleteCallbackType {
	(params: any, qyery: any): Promise<any>;
}
export type createRouterGetAndDeleteParams = {
	url: string;
	callback: getAndDeleteCallbackType;
	middleware: any[];
};

export interface postAndPutCallbackType {
	(params: any, qyery: any, body: any): Promise<any>;
}
export type createRouterPostAndPutParams = {
	url: string;
	callback: postAndPutCallbackType;
	middleware: any[];
};

export interface IHttpServerAdapter {
	createRouterGet({ url, callback, middleware }: createRouterGetAndDeleteParams): Promise<any>;
	createRouterDelete({ url, callback, middleware }: createRouterGetAndDeleteParams): Promise<any>;
	createRouterPost({ url, callback, middleware }: createRouterPostAndPutParams): Promise<any>;
	createRouterPut({ url, callback, middleware }: createRouterPostAndPutParams): Promise<any>;
	startServerHttp(port: number): void;
}
