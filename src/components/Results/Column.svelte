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
    line-height: 18px;
    margin: auto 0px;
    padding: 8px;
    word-break: break-word;
  }

  .date {
    font-family: Consolas;
    font-size: 14px;
    text-align: center;
  }
</style>
