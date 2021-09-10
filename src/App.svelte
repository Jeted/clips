<script>
  import { clips } from './misc/store';
  import Form from './components/Form.svelte';
  import Navbar from './components/Navbar.svelte';
  import Results from './components/Results.svelte';
</script>

<div class="container">
  <Navbar />
  <Form />
  {#if $clips.length}
    <Results />
  {/if}
</div>
