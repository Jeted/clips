<script lang="ts">
  import { SORT } from '../../misc/enums';
  import { clips } from '../../misc/store';
  import Header from './Filters/Header.svelte';

  let count: string;
  $: count = `Clips (${$clips.length})`;
</script>

<header>
  <div class="header" style="width: 178px;">
    <span class="clips">{count}</span>
  </div>
  <Header width="302px" title={SORT.TITLE} />
  <Header width="146px" title={SORT.AUTHOR} />
  <Header width="144px" title={SORT.CATEGORY} />
  <Header width="102px" title={SORT.VIEWS} />
  <Header width="180px" title={SORT.DATE} />
</header>

<style lang="scss">
  header {
    display: flex;
    height: 36px;
    justify-content: flex-end;

    .clips {
      line-height: 36px;
    }
  }
</style>
