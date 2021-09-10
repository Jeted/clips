<script lang="ts">
  import { sortClips } from '../../../helpers';
  import { clips, sorting } from '../../../misc/store';

  let hover: boolean, rotate: boolean, active: boolean;
  hover = rotate = active = false;

  $: active = $sorting.field === title || hover;
  $: rotate = $sorting.order;

  const handleHover = () => (hover = !hover);
  const handleSorting = () => {
    sorting.set({
      field: title,
      order: title === $sorting.field ? !$sorting.order : $sorting.order,
    });
    clips.set(sortClips($clips));
  };

  export let title: string;
  export let width: string;
</script>

<div class="header" style="width: {width};" on:mouseenter={handleHover} on:mouseleave={handleHover}>
  <span>{title}</span>
  <div class="buttons">
    <div class="sorting" on:click={handleSorting}>
      <svg
        class="arrow"
        class:rotate
        class:active
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
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
      margin-right: 4px;
    }

    .buttons {
      align-items: center;
      display: inline-flex;
      height: 100%;
    }

    .sorting {
      border-radius: 6px;
      cursor: pointer;
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
