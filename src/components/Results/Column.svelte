<script lang="ts">
  export let width: string;
  export let value: string;
  export let column: string;
</script>

<div class="column {column}" style="width: {width}px;" title={value}>
  {value}
</div>

<style lang="scss">
  .column {
    word-break: break-word;
    padding: 8px;
    margin: auto 0px;
    line-height: 18px;
  }

  .date {
    text-align: center;
    font-family: Consolas;
    font-size: 14px;
  }
</style>
