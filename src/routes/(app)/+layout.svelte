<script>
  import "../../app.css";

  import MobileNav from "$lib/components/MobileNav.svelte";
  import Navbar from "$lib/components/Navbar.svelte";

  let { children } = $props();
</script>

<Navbar />
<main>
  {@render children()}
</main>

<MobileNav />
