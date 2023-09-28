<script>
  export let setSearchFilter = () => {};
</script>

<label class="sr-only" for="search-input">Search</label>
<input
  id="search-input"
  name="search-input"
  type="text"
  on:keyup={(e) => {
    setSearchFilter(e.target.value);
  }}
  placeholder="Search..."
/>

<style>
  input {
    appearance: none;
    width: 100%;
    padding: 0.5rem;
    background-color: white;
    border-radius: 0.5rem;
    border: 1px solid #ddd;
    font-size: 0.9rem;
  }
</style>
