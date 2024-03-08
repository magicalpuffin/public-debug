<script lang="ts">
	import type { PageData } from './$types.js';
	export let data: PageData;
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<p>{JSON.stringify(data.myConfigObj)}</p>
<p>{JSON.stringify(data.myApiObj)}</p>
<p>{data.getMyConfigResult}</p>
<p>{data.getMyApiResult}</p>
