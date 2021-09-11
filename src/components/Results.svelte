<script lang="ts">
  import moment from 'moment';
  import { clips } from '../misc/store';
  import Column from './Results/Column.svelte';
  import Filters from './Results/Filters.svelte';
  import Thumbnail from './Results/Thumbnail.svelte';
  import VirtualList from './VirtualList.svelte';
</script>

<div class="clips">
  <Filters />
  <VirtualList itemHeight={116} items={$clips} let:clip>
    <Thumbnail {clip} />
    <Column width="290" column="title" value={clip.title} />
    <Column width="135" column="name" value={clip.displayName} />
    <Column width="130" column="category" value={clip.category} />
    <Column width="80" column="views" value={clip.views.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')} />
    <Column width="165" column="date" value={moment(clip.createdAt).format('YYYY/MM/DD HH:mm:ss')} />
  </VirtualList>
</div>

<style lang="scss">
  @import '../styles/colors.scss';

  .clips {
    background: $secondary-color;
    border-radius: 8px 8px 11px 11px;
    color: white;
    font-size: 14px;
    padding: 0 8px 8px 8px;
  }

  :global(.viewport) {
    background-color: $base-color;
    border-radius: 6px;
    height: calc(100vh - 185px);
  }

  :global(.row) {
    height: 116px;
    font-size: 13px;

    &:hover {
      background-color: #24262f;
      border-radius: 4px;
    }
  }
</style>
