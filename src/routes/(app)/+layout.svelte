<script>
  import "../../app.css";

  import MobileNav from "$lib/components/MobileNav.svelte";

  let { children } = $props();
</script>

<main>
  {@render children()}
</main>

<MobileNav />
