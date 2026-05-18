<script>
  let user = null;
</script>

<div class="pt-48">
  {#if user}
    <h2>Welcome {user?.name}</h2>
  {:else}
    <h2>Not logged in</h2>
    <div class="flex flex-col gap-4 pt-4"></div>
  {/if}
</div>
