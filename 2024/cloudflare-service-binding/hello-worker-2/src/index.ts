/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

export interface Env {
	HELLO1: Fetcher;
	GREET: Fetcher;
}

export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		const respHello1 = await env.HELLO1.fetch(request);
		const textHello1 = await respHello1.text();

		const respHelloRust = await env.GREET.fetch(request);
		const textHelloRust = await respHelloRust.text();
		return new Response(`Recieved from hello-worker-1: ${textHello1}. Recieved from hello-rust: ${textHelloRust} `);
	},
};
