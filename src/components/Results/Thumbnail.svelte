<script lang="ts">
  import { IClip } from '../../misc/interfaces';

  let hover: boolean = false;
  let loaded: boolean = false;
  let previousClip: IClip;

  const handleHover = () => (hover = !hover);

  $: {
    if (clip.thumbnail !== previousClip?.thumbnail) loaded = false;
    previousClip = clip;
  }

  export let clip: IClip;
</script>

<div class="thumbnail">
  <div class="layer" class:hover on:mouseenter={handleHover} on:mouseleave={handleHover}>
    <div class="buttons">
      <a target="_blank" href={clip.url}>
        <svg>
          <path
            d="M7.2,5.3L5.8,9v14.9h5.1v2.8h2.8l2.8-2.8h4.2l5.6-5.6v-13H7.2z M9,7.2h15.3v10.2l-3.3,3.3H16l-2.8,2.8v-2.8H9V7.2z M14.1,16.5H16v-5.6h-1.9V16.5z M19.2,16.5h1.9v-5.6h-1.9V16.5z"
          />
        </svg>
      </a>
      <a target="_blank" href={clip.download}>
        <svg>
          <path
            d="M24,20v4H8v-4H5.3v4c0,1.5,1.2,2.7,2.7,2.7h16c1.5,0,2.7-1.2,2.7-2.7v-4H24z M22.7,14.7l-1.9-1.9l-3.5,3.4V5.3 h-2.7v10.9l-3.5-3.4l-1.9,1.9l6.7,6.7L22.7,14.7z"
          />
        </svg>
      </a>
    </div>
  </div>
  <img class:loaded alt="" src={clip.thumbnail} on:load={() => (loaded = true)} />
</div>

<style lang="scss">
  .thumbnail {
    height: 100px;
    margin: auto 0 auto 8px;
    position: relative;
    user-select: none;
    width: 176px;

    img {
      border-radius: 4px;
      height: 100px;
      opacity: 0;
      transition: opacity 300ms ease;
      width: 176px;
    }

    .loaded {
      opacity: 100;
    }

    .layer {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.65);
      border-radius: 4px;
      display: flex;
      justify-content: center;
      transition: opacity 100ms ease;
      opacity: 0;

      .buttons {
        align-items: center;
        display: flex;

        a {
          border-radius: 50%;
          cursor: pointer;
          height: 32px;
          fill: #fff;
          margin: 4px;
          padding: 6px;
          transition: background-color 50ms ease;
          width: 32px;
          &:hover {
            background-color: #ffffff1a;
          }

          svg {
            height: 32px;
            width: 32px;
          }
        }
      }
    }

    .hover {
      opacity: 100;
    }
  }
</style>
