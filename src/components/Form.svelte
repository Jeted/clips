<script context="module" lang="ts">
  import moment from 'moment';
  import { useToken } from '../hooks';
  import { get, writable, Writable } from 'svelte/store';
  import { getClips, getUser, IClip } from 'src/requests';
  import Input from './Form/Input.svelte';
  import { loading, params, clips } from '../stores';

  const { OAUTH } = useToken();

  export interface IForm {
    from_date: string;
    to_date: string;
    channel: string;
  }

  export interface IParams {
    broadcaster_id: string;
    first: number;
    started_at: string;
    ended_at: string;
    after?: string;
  }

  let form: IForm = {
    from_date: '26/05/2016',
    to_date: moment(new Date()).format('DD/MM/YYYY'),
    channel: '',
  };

  function handleSubmit(e: any) {
    e.preventDefault();
    clips.set([]);

    form = {
      from_date: e.target[0].value,
      to_date: e.target[1].value,
      channel: e.target[2].value,
    };

    if (form.channel === '') return;

    getUser(form.channel, true).then((user) => {
      if (!user) return;
      params.set({
        broadcaster_id: user.userId,
        first: 100,
        started_at: moment(form.from_date, 'DD/MM/YYYY').toISOString(),
        ended_at: moment(form.to_date, 'DD/MM/YYYY').toISOString(),
      });
    });
  }

  params.subscribe((value) => {
    if (!value) return;
    loading.set(true);

    const url = new URL('https://api.twitch.tv/helix/clips');
    Object.entries(get(params)).forEach(([param, value]) => {
      url.searchParams.set(param, value);
    });

    getClips(url).then(([data, pagination]) => {
      loading.set(false);
      clips.set(get(clips).concat(data));
      if (pagination) {
        params.set({ ...get(params), after: pagination });
      }
    });
  });
</script>

<section>
  <form on:submit={handleSubmit}>
    <Input placeholder="From..." value={form.from_date} />
    <Input placeholder="To..." value={form.to_date} />
    <Input placeholder="Channel" value={form.channel} />
    <input type="submit" value="Search" disabled={!$OAUTH} />
  </form>
</section>

<style lang="scss">
  @import '../styles/colors.scss';

  section {
    background-color: $secondary-color;
    border-radius: 10px;
    margin-bottom: 10px;
    padding: 8px;

    form {
      display: inline-flex;
      height: 35px;
      position: relative;
      width: 100%;

      input[type='submit'] {
        cursor: pointer;
        width: 90px;
      }

      :global(input) {
        appearance: none;
        background: $base-color;
        border: none;
        border-radius: 4px;
        color: $text-color;
        font-family: Inter;
        font-size: 14px;
        padding: 5px 15px;
        width: 28%;
        &:focus {
          background: #1c1d25;
          box-shadow: 0 0 0 3px #ffffff12;
          outline: none !important;
        }
        &::placeholder {
          color: $text-color;
        }
        &:disabled {
          cursor: not-allowed;
        }
      }
    }
  }
</style>
