<script>
  import Form from './components/Form.svelte';
  import Header from './components/Header.svelte';
  import Results from './components/Results.svelte';
  import { clips } from './components/Form.svelte';
</script>

<div class="container">
  <Header />
  <Form />
  {#if $clips.length}
    <Results />
  {/if}
</div>
