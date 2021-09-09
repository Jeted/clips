<script lang="ts">
  import { useToken } from 'src/hooks';

  const { OAUTH } = useToken();

  export let placeholder: string;
  export let value: string;
</script>

<input type="text" spellcheck="false" autocomplete="false" {placeholder} disabled={!$OAUTH} bind:value />

<style lang="scss">
  input[type='text'] {
    margin-right: 8px;
    cursor: text;
  }
</style>
