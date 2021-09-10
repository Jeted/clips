<script lang="ts">
  import { loading } from '../../misc/store';
</script>

<div class="button">
  <button disabled={$loading}>{$loading ? '' : 'Search'}</button>
  {#if $loading}
    <svg class="loading">
      <path
        d="M10.5,0C4.7,0,0,4.7,0,10.5h2.9c0-4.2,3.4-7.6,7.6-7.6s7.6,3.4,7.6,7.6s-3.4,7.6-7.6,7.6V21
		C16.3,21,21,16.3,21,10.5S16.3,0,10.5,0L10.5,0z"
      />
    </svg>
  {/if}
</div>

<style lang="scss">
  .button {
    display: flex;
    justify-content: center;
    position: relative;

    .loading {
      animation-name: spin;
      animation-duration: 1500ms;
      animation-iteration-count: infinite;
      animation-timing-function: linear;
      cursor: pointer;
      fill: white;
      height: 21px;
      padding: 7px;
      position: absolute;
      width: 21px;
    }

    button {
      cursor: pointer;
      height: 35px;
      width: 90px;
    }
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
</style>
