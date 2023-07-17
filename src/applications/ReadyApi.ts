export class ReadyApi {
	public static async apiIsReady() {
		return {
			message: 'API is running!',
		};
	}
}
