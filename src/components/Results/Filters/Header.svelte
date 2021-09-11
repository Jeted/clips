<script lang="ts">
  import { SORT } from '../../../misc/enums';
  import { sorting, handleSorting } from '../../../misc/store';

  let hover: boolean, rotate: boolean, active: boolean;
  hover = rotate = active = false;

  $: active = $sorting.field === title || hover;
  $: rotate = $sorting.order;

  const handleHover = () => (hover = !hover);

  export let title: SORT;
  export let width: string;
</script>

<div class="header" style="width: {width};" on:mouseenter={handleHover} on:mouseleave={handleHover}>
  <span>{title}</span>
  <div class="buttons">
    <div class="sorting" on:click={() => handleSorting(title)}>
      <svg class="arrow" class:rotate class:active viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
      </svg>
    </div>
  </div>
</div>

<style lang="scss">
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
        background-color: #ffffff1c;
      }

      .arrow {
        height: 18px;
        opacity: 0;
        padding: 5px;
        transition: transform 200ms ease, opacity 150ms ease;
      }

      .hover,
      .active {
        opacity: 100;
      }

      .rotate {
        transform: rotate(180deg);
      }
    }
  }
</style>
