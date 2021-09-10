<script lang="ts">
  import Header from './Filters/Header.svelte';
</script>

<header>
  <div class="header" style="width: 178px;">
    <span>Clips (1002)</span>
  </div>
  <Header width="302px" title="Title" />
  <Header width="146px" title="Author" />
  <Header width="144px" title="Category" />
  <Header width="102px" title="Views" />
  <Header width="180px" title="Date" />
</header>

<style lang="scss">
  header {
    display: flex;
    height: 36px;
    justify-content: flex-end;
  }
</style>
