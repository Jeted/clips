<script lang="ts">
  import { useToken } from '../hooks/useToken';
  import { getUser } from '../requests/getUser';
  import { getValidate } from '../requests/getValidate';
  const { LOGIN_URL, OAUTH, USERNAME } = useToken();

  const logoff = () => {
    localStorage.clear();
    window.location.reload();
  };

  if ($OAUTH) {
    getValidate().then(async (channel) => {
      localStorage.setItem('tcf:client_id', channel.clientId);
      getUser(channel.userId, false).then((user) => {
        if (user) USERNAME.set(user.displayName);
      });
    });
  }
</script>

<nav>
  <a class="title" href="https://github.com/Jeted">jeted.github.io</a>
  <a class="navlink" href="/clips">Clips</a>
  {#if $USERNAME}
    <span class="username">Logged as {$USERNAME}</span>
    <span class="navlink" on:click={logoff}> Disconnect </span>
  {:else}
    <a class="navlink login" href={LOGIN_URL}>Login with Twitch</a>
  {/if}
</nav>

<style lang="scss">
  @import '../styles/colors.scss';

  nav {
    display: flex;
    height: 48px;

    a,
    span {
      margin: auto 0;
    }

    .title {
      font-size: 18px;
      font-variation-settings: 'wght' 675;
      margin-left: 10px;
    }

    .navlink {
      background-color: $secondary-color;
      border-radius: 4px;
      cursor: pointer;
      font-size: 12px;
      font-variation-settings: 'wght' 500;
      height: 16px;
      line-height: 16px;
      margin-left: 16px;
      padding: 6px 17px;
      &:hover {
        background-color: $highlighted;
      }
    }

    .login,
    .username {
      margin-left: auto;
    }

    .username {
      color: $text-color;
      font-size: 13px;
    }
  }
</style>
