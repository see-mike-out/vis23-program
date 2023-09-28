<script>
  import { data } from "../data";
  import EventCard from "./EventCard.svelte";
  export let debookmark = () => {};
  export let bookmark = () => {};
  export let bookmarks, bookmarkView;
  export let searchKeyword = null;
</script>

{#each data as day}
  <section>
    <h2>{day.date} ({day.day})</h2>
    <div class="events">
      {#each day.events as event}
        {#if (!bookmarkView || (bookmarkView && $bookmarks.includes(event.id)))}
          <EventCard
            {event}
            {debookmark}
            {bookmark}
            {bookmarks}
            {searchKeyword}
          />
        {/if}
      {/each}
    </div>
  </section>
{/each}

<style>
  h2 {
    font-size: 1.2rem;
    margin: 0.5rem 0 0 0;
    padding: 0.5rem 0 0.5rem 0;
    font-weight: 600;
    position: sticky;
    top: 0;
    background-color: white;
  }
  .events {
    background-color: #fafafa;
    border-radius: 0.5rem;
    padding: 0.5rem;
  }
</style>
