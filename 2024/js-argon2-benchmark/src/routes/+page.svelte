<script lang="ts">
  import type { PageData, ActionData } from "./$types";

  //   export let data: PageData;

  export let form: ActionData;

  let actionName: string;
</script>

<h1>Testing Hashing in JavaScript</h1>

<form method="POST" action={actionName}>
  <label>
    Password:
    <input name="password" type="text" value="k*3^o=<~fq4)yno9" />
  </label>
  <label>
    Number of hashes:
    <input name="number" type="number" value="5" min="1" max="25" />
  </label>
  <label>
    Hashing Library:
    <select bind:value={actionName}>
      <option value="?/osloArgon2">osloArgon2</option>
      <option value="?/luciaScrypt">luciaScrypt</option>
      <option value="?/nobleArgon2">nobleArgon2</option>
    </select>
  </label>
  <button>Click me</button>
</form>

<p>Duration in milliseconds</p>
{#if form}
  <p>{form.message}</p>
  <table>
    <tr>
      <th>Hash</th>
      <th>HashDuration (ms)</th>
      <th>Verified</th>
      <th>verifiedDuration (ms)</th>
    </tr>
    {#each form.result as resultRow}
      <tr>
        <td>{resultRow.hash}</td>
        <td>{resultRow.hashDuration.toFixed(2)}</td>
        <td>{resultRow.verified}</td>
        <td>{resultRow.verifiedDuration.toFixed(2)}</td>
      </tr>
    {/each}
  </table>
  <!-- <p>{JSON.stringify(form.result)}</p> -->
{/if}
