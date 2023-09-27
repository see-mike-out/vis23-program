<script>
  import TimeTable from "./TimeTable.svelte";
  import { loadBookmarks, saveBookmarks } from "../data";
  import { onMount } from "svelte";
  import { writable } from "svelte/store";
  let bookmarks = writable([]);
  function bookmark(b) {
    bookmarks.update((d) => {
      if (!d) d = [];
      d.push(b);
      return d;
    });
  }
  function debookmark(b) {
    bookmarks.update((d) => {
      d = d.filter((k) => k !== b);
      return d;
    });
  }
  let bookmarkView = false;
  onMount(() => {
    bookmarks.set(loadBookmarks());
    bookmarks.subscribe((d) => {
      saveBookmarks(d);
    });
  });
</script>

<header class="container">
  <h1>VIS 23 Program</h1>
</header>
<main class="container">
  <TimeTable {debookmark} {bookmark} {bookmarks} {bookmarkView} />

  <div id="notes">
    <h3>Notes</h3>
    <p>The dates and times are based on the AEDT timezone.</p>
  </div>
</main>
<section id="controls">
  <div class="control-wrap">
    <div>
      <input type="checkbox" name="bookmark-only" id="bookmark-only" bind:checked={bookmarkView}>
      <label for="bookmark-only">Show bookmarked events only</label>
    </div>
  </div>
</section>

<style>
  :global(html, body) {
    margin: 0;
    padding: 0;
    background-color: white;
    font-family: sans-serif;
  }

  :global(*) {
    box-sizing: border-box;
  }

  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }

  header {
    padding-top: 1rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid #ddd;
  }

  header h1 {
    margin: 0;
    font-size: 1.5rem;
    line-height: 100%;
  }

  h3 {
    font-size: 1rem;
    margin: 0 0 0.25rem 0;
  }

  p {
    color: #454545;
    margin: 0 0 0.25rem 0;
    font-size: 0.9rem;
  }

  #notes {
    padding-bottom: 3rem;
    padding-top: 1rem;
  }

  #controls {
    position: fixed;
    bottom: 0;
    width: 100%;
    border-top: 1px solid #ddd;
    background-color: #fff;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }

  .control-wrap {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  :global(button:focus) {
    outline: 2px solid #273d96;
  }
</style>
