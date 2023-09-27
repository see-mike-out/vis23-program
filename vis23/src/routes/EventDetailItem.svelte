<script>
  export let item = {};
  const desc_order = [
    "title",
    "organizers",
    "chair",
    "authors",
    "moderators",
    "speakers",
    "panelists",
    "abstract",
    "description",
    "website",
  ];
  const desc_names = {
    title: "Title",
    organizers: "Organizer(s)",
    chair: "Chair",
    authors: "Author(s)",
    moderators: "Moderator(s)",
    speakers: "Speaker(s)",
    panelists: "Panelists",
    abstract: "Abstract",
    description: "Description",
    website: "Website",
  };
</script>

<div class="card">
  {#each desc_order as key}
    {#if item[key]}
      <div class="item">
        <span class={"name " + key}>{desc_names[key]}</span>
        <p class={"content " + key}>{item[key]}</p>
      </div>
    {/if}
  {/each}
</div>

<style>
  div.card {
    background-color: white;
    border-radius: 0.5rem;
    border: 1px solid #ddd;
    margin-bottom: 0.5rem;
    padding: 0.5rem;
  }
  div.item {
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
  }
  div.item:last-of-type {
    margin-bottom: 0;
  }
  .name {
    display: block;
    font-weight: 700;
    color: #787878;
    margin-bottom: 0.15rem;
  }
  .content {
    line-height: 120%;
    margin-bottom: 0;
    margin-top: 0;
  }
</style>
