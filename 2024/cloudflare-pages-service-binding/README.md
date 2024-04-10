# Cloudflare Pages Service Binding
- Testing out binding a backend Worker with a SvelteKit pages frontend
- Run `npm run dev` in both directories
- Or run `npx wrangler page dev` in frontend and `npm run dev` in backend worker

## To Deploy
- Run `npm run deploy` in backend-worker
- Run `npx wrangler pages deploy` in frontend
- Note: currently there is a bug where you need to specifically declare resources for production environment in `wrangler.toml` or else the page doesn't deploy