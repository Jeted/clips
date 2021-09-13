<script lang="ts">
  import { sorting, handleSorting } from '../../../misc/store';
  import { COLUMN } from '../../../misc/enums';

  let hover: boolean, rotate: boolean, active: boolean;
  hover = rotate = active = false;

  $: active = $sorting.column === column || hover;
  $: rotate = $sorting.order;

  const handleHover = () => (hover = !hover);

  export let column: COLUMN;
  export let width: string;
</script>

<div class="header" style="width: {width};" on:mouseenter={handleHover} on:mouseleave={handleHover}>
  <span>{column}</span>
  <div class="buttons">
    <div class="sorting" on:click={() => handleSorting(column)}>
      <svg class="arrow" class:rotate class:active viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
      </svg>
    </div>
  </div>
</div>

<style lang="scss">
  @import '../../../styles/colors.scss';

  .header {
    display: inline-flex;

    span {
      line-height: 36px;
    }

    .buttons {
      align-items: center;
      display: inline-flex;
      height: 100%;
    }

    .sorting {
      border-radius: 6px;
      cursor: pointer;
      margin: 4px;
      height: 28px;
      &:hover {
        background-color: $transparent-white;
      }

      .arrow {
        height: 18px;
        opacity: 0;
        padding: 5px;
        transition: transform 200ms ease, opacity 150ms ease;
      }

      .active {
        opacity: 100;
      }

      .rotate {
        transform: rotate(180deg);
      }
    }
  }
</style>
