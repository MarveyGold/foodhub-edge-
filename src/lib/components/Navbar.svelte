<script>
  import { onMount } from "svelte";

  let active = $state("home");
  let menuOpen = $state(false);

  const sections = ["home", "menu", "story", "contact"];

  function scrollToSection(id) {
    active = id;
    menuOpen = false;

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  }

  // Scroll spy
  onMount(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            active = entry.target.id;
          }
        });
      },
      {
        threshold: 0.2,
      },
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  });
</script>

<nav
  class="fixed top-0 z-50 w-full border-b border-white/10 bg-stone-950/90 shadow-xl backdrop-blur-md"
>
  <div class="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
    <div class="text-2xl font-black tracking-tighter text-[#C41E3A] italic">
      Hadeva Bakes
    </div>

    <div class="hidden items-center space-x-8 md:flex">
      {#each sections as section}
        <button
          onclick={() => scrollToSection(section)}
          class={active == section
            ? " border-amber-500  text-amber-500 pb-1 text-sm font-bold tracking-wide font-jakarta border-b-2 "
            : "pb-1 text-sm font-bold font-jakarta border-b-2 tracking-wide"}
          >{section.charAt(0).toUpperCase() + section.slice(1)}</button
        >
      {/each}
    </div>

    <div class="flex items-center space-x-6">
      <button
        class="material-symbols-outlined text-white transition-all duration-300 hover:text-amber-400"
      >
        shopping_cart
      </button>
    </div>
  </div>
</nav>

<div class="h-20"></div>
