<script>
  export let event = {};
  export let debookmark = () => {};
  export let bookmark = () => {};
  export let bookmarks;
  export let searchKeyword = "";
  import { types, searchMatch } from "../data";
  import EventDetailItem from "./EventDetailItem.svelte";
  let searchOutput;
  let detailView = false;
  $: {
    if (searchKeyword) {
      searchOutput = searchMatch(searchKeyword, event);
      if (searchOutput) detailView = true;
    } else {
      searchOutput = undefined;
      detailView = false;
    }
  }
</script>

{#if !searchKeyword || searchOutput}
  <article
    class={(types[event.type] || "others") + (detailView ? " details" : "")}
  >
    {#if !detailView}
      <div class="event-meta">
        <span class="time">{event.start_time}—{event.end_time}</span>
        {#if event.venue}<span class="venue">{event.venue}</span>{/if}
        {#if $bookmarks?.includes(event.id)}💚{/if}
      </div>
    {/if}
    <div class="event-content">
      <button
        aria-roledescription="button"
        on:click={() => {
          if (event.items.length > 0) {
            detailView = !detailView;
          }
        }}
        on:keydown={(e) => {
          if (e.key === "enter" && event.items.length > 0) {
            detailView = !detailView;
          }
        }}
      >
        <span class="type">{event.type}</span>
        <span class={"title" + (searchOutput?.title ? " searched" : "")}
          >{event.title}
        </span>
        {#if detailView}
          <span class="collapse">Close</span>
        {/if}
      </button>
    </div>
  </article>
  {#if detailView}
    <div class="event-meta-2">
      <span class="time">{event.start_time}—{event.end_time}</span>
      {#if event.venue}<span class="venue">{event.venue}</span>{/if}
    </div>
    <div class="event-meta-2">
      {#if $bookmarks?.includes(event.id)}
        💚 Bookmarked (<button
          on:click={(e) => {
            debookmark(event.id);
          }}>Remove</button
        >)
      {:else}
        🤍 <button
          on:click={(e) => {
            bookmark(event.id);
          }}>Add to the bookmark</button
        >
      {/if}
    </div>

    <div class="event-detail">
      {#each event.items as item, i}
        {#if !searchOutput || (searchOutput && searchOutput["item." + i])}
          <EventDetailItem {item} {i} {searchOutput} />
        {/if}
      {/each}
    </div>
  {/if}
{/if}

<style>
  article {
    display: flex;
    margin-bottom: 0.5rem;
  }
  article.details {
    display: block;
  }
  .event-meta {
    min-width: 140px;
    max-width: 140px;
  }
  .event-meta span {
    display: block;
    font-size: 0.85rem;
    color: #454545;
  }
  span.time {
    font-weight: 700;
  }
  span.venue {
    color: #999999;
  }
  .event-content {
    width: 100%;
    margin-left: 1rem;
    font-size: 0.95rem;
    display: block;
    padding: 0.5rem;
    border-radius: 0.35rem;
    background-color: white;
    border: 1px solid #ddd;
    line-height: 120%;
  }
  .event-content button {
    width: 100%;
    height: 100%;
    appearance: none;
    border: 0;
    background-color: transparent;
    margin: 0;
    padding: 0;
    font-size: inherit;
    text-align: left;
    font-weight: inherit;
  }
  article.details .event-content {
    margin-left: 0;
    margin-top: 0.5rem;
    background-color: transparent;
    border: 0;
    padding: 0;
  }
  article.details .event-content span.type {
    display: block;
    width: fit-content;
    margin-bottom: 0.25rem;
  }
  article.details .event-content .title {
    font-weight: 700;
    font-size: 1.5rem;
  }
  span.type {
    display: inline-block;
    font-size: 0.8rem;
    font-weight: 600;
    color: #fff;
    padding: 0.1rem 0.3rem;
    border-radius: 0.15rem;
    background-color: rgba(0, 0, 0, 0.3);
  }
  article.CM span.type {
    background-color: #d63a71;
  }
  article.AE span.type {
    background-color: #7559bd;
  }
  article.FP span.type {
    background-color: #41baac;
  }
  article.IPP span.type {
    background-color: #41baac;
  }
  article.SP span.type {
    background-color: #41a2ba;
  }
  article.WS span.type {
    background-color: #f7a307;
  }
  article.TT span.type {
    background-color: #eb7023;
  }
  article.BK span.type {
    background-color: #dddddd;
  }
  article.Others span.type {
    background-color: #7eb867;
  }
  span.collapse {
    display: block;
    font-size: 0.85rem;
    color: #787878;
  }
  span.title.searched {
    color: #15ab60;
    background-color: rgba(255, 252, 166, 0.5);
    font-weight: 700;
  }

  .event-detail {
    padding-top: 0.5rem;
    padding-bottom: 1rem;
  }
  .event-meta-2 {
    margin-bottom: 0.25rem;
  }
  .event-meta-2 button {
    appearance: none;
    border: inherit;
    padding: inherit;
    background-color: transparent;
    font-size: inherit;
  }
</style>
