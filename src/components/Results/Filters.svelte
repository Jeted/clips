<script lang="ts">
  import { clips } from '../../misc/store';
  import { COLUMN } from '../../misc/enums';
  import Header from './Filters/Header.svelte';

  let count: string;
  $: count = `Clips (${$clips.length})`;
</script>

<header>
  <div class="header" style="width: 178px;">
    <span class="clips">{count}</span>
  </div>
  <Header width="302px" column={COLUMN.TITLE} />
  <Header width="146px" column={COLUMN.AUTHOR} />
  <Header width="144px" column={COLUMN.CATEGORY} />
  <Header width="102px" column={COLUMN.VIEWS} />
  <Header width="180px" column={COLUMN.DATE} />
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
