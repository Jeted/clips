<script lang="ts">
  import { loading } from '../../misc/store';
</script>

<div class="button">
  <button disabled={$loading}>{$loading ? '' : 'Search'}</button>
  <svg class="spinner" class:loading={$loading}>
    <path
      d="M10.5,0C4.7,0,0,4.7,0,10.5h2.9c0-4.2,3.4-7.6,7.6-7.6s7.6,3.4,7.6,7.6s-3.4,7.6-7.6,7.6V21C16.3,21,21,16.3,21,10.5S16.3,0,10.5,0L10.5,0z"
    />
    <animateTransform attributeName="transform" dur="1.5s" type="rotate" from="0" to="360" repeatCount="indefinite" />
  </svg>
</div>

<style lang="scss">
  @import '../../styles/colors.scss';

  .button {
    display: flex;
    justify-content: center;
    position: relative;

    button {
      cursor: pointer;
      height: 35px;
      width: 90px;
    }

    .spinner {
      display: none;
      fill: $icon-color;
      height: 21px;
      padding: 7px;
      pointer-events: none;
      position: absolute;
      width: 21px;
    }

    .loading {
      display: block;
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
