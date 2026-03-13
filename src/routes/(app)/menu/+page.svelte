<script>
  const menu = [
    {
      name: "Chocolate Cake",
      imageUrl: "/cake.png",
      description: "Rich moist cake available in any desired flavour",
      price: 25000,
    },
    {
      name: "Meatpie",
      imageUrl: "/meatpie.png",
      description:
        " Flaky crust filled with seasoned minced meat, potatoes and carrots",
      price: 400,
    },
    {
      name: "Small Chops",
      imageUrl: "/chops.png",
      description:
        "Assorted platter of puff-puff, samosas, spring rolls, and gizdodo",
      price: 1500,
    },
  ];
</script>

<div class="p-2 pb-2.5">
  <div class="grid grid-cols-2 gap-1 md:grid-cols-12">
    <!-- Main Feature -->
    {#each menu as item}
      <!-- content here -->
      <div
        class="group overflow-hidden rounded-3xl border border-white/5 bg-stone-900/50 transition-all duration-300 md:hover:border-amber-500/30 md:col-span-2"
      >
        <div class="relative h-24 overflow-hidden">
          <img
            alt={item.name}
            class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            src={item.imageUrl}
          />
        </div>
        <div class="p-2">
          <h3
            class="mb-2 text-2xl font-bold text-white"
            style="font-family: 'Plus Jakarta Sans', sans-serif;"
          >
            {item.name}
          </h3>
          <p class="mb-4 text-xs leading-relaxed text-stone-500">
            {item.description}
          </p>
          <div class="flex items-center justify-between">
            <span class="text-lg font-bold text-amber-500">₦{item.price}</span>
            <button
              class="transform rounded-full bg-[#C41E3A] p-3 text-white transition-transform active:scale-90"
            >
              <span class="material-symbols-outlined">add_shopping_cart</span>
            </button>
            <button
              class="material-symbols-outlined text-stone-400 hover:text-[#C41E3A]"
              >favorite</button
            >
          </div>
        </div>
      </div>
    {/each}
  </div>
</div>
