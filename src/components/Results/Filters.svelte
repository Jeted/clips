<script lang="ts">
  import { SORT } from '../../misc/enums';
  import Header from './Filters/Header.svelte';
</script>

<header>
  <div class="header" style="width: 178px;">
    <span>Clips (1002)</span>
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
