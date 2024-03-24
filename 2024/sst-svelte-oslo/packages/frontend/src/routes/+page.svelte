<script lang="ts">
    // import {Argon2id} from "oslo/password"
	import type { PageData } from './$types.js';
	export let data: PageData;

    console.log(data)

    // definitely doesn't work on client
    async function getHash() {
        // console.log(await new Argon2id().hash("helloworld"))
    }
</script>
<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<p>Hash: {data.hashHello}</p>
<!-- <button on:click={getHash}>Click to log hash</button> -->