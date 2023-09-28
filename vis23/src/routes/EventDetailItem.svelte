<script>
  export let item = {};
  export let searchOutput = {};
  export let i = -1;
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
  let showFull = {
    description: false,
    abstract: false,
  };
</script>

<div class={"card" + (searchOutput["item." + i] ? " searched" : "")}>
  {#each desc_order as key}
    {#if item[key]}
      <div class="item">
        <span class={"name " + key}>{desc_names[key]}</span>
        {#if key === "website"}
          <a
            class={"content " +
              key +
              (searchOutput["item." + i + "." + key] ? " searched" : "")}
            href={item[key]}
            target="_blank">{item[key]}</a
          >
        {:else if key === "description"}
          {#if item[key].length > 100}
            {#if !showFull[key]}
              <p
                class={"content " +
                  key +
                  (searchOutput["item." + i + "." + key] ? " searched" : "")}
              >
                {item[key].substring(0, 100)}...
                <button
                  class="show-full"
                  on:click={() => {
                    showFull[key] = !showFull[key];
                  }}
                >
                  Show
                </button>
              </p>
            {:else}
              <p
                class={"content " +
                  key +
                  (searchOutput["item." + i + "." + key] ? " searched" : "")}
              >
                {item[key]}
                <button
                  class="show-full"
                  on:click={() => {
                    showFull[key] = !showFull[key];
                  }}
                >
                  Hide
                </button>
              </p>
            {/if}
          {:else}
            <p
              class={"content " +
                key +
                (searchOutput["item." + i + "." + key] ? " searched" : "")}
            >
              {item[key]}
            </p>
          {/if}
        {:else}
          <p
            class={"content " +
              key +
              (searchOutput["item." + i + "." + key] ? " searched" : "")}
          >
            {item[key]}
          </p>
        {/if}
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
  div.card.searched {
    border: 2px solid #15ab60;
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
    color: #333;
    margin-bottom: 0.15rem;
  }
  .content {
    line-height: 120%;
    margin-bottom: 0;
    margin-top: 0;
    color: #787878;
  }
  .content.searched {
    color: #15ab60;
    background-color: rgba(255, 252, 166, 0.5);
    font-weight: 700;
  }
  .show-full {
    appearance: none;
    background-color: white;
    border-radius: 0.25rem;
    border: 1px solid #ddd;
    font-weight: 600;
    color: #787878;
  }
</style>
