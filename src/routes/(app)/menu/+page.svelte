<script>
  const menu = [
    {
      name: "Cake",
      size: 8,
      layers: 2,
      imageUrl: "/cake.png",
      description: "Rich moist cake available in any desired flavour",
      price: 25000,
    },
    {
      name: "Two tiered fondant cake",
      imageUrl: "/premium.png",
      description: "Premium Gold-plated cake available in any desired flavour",
      price: 150000,
    },
    {
      name: "Cake",
      size: 8,
      layers: 3,
      imageUrl: "/83.png",
      description: "Rich moist cake available in any desired flavour",
      price: 35000,
    },
    {
      name: "Cake",
      size: 10,
      layers: 2,
      imageUrl: "/10-2.png",
      description: "Rich moist cake available in any desired flavour",
      price: 40000,
    },
    {
      name: "Cake",
      size: 10,
      layers: 3,
      imageUrl: "/10-3.png",
      description: "Rich moist cake available in any desired flavour",
      price: 50000,
    },
    {
      name: "Mini Meatpie",
      imageUrl: "/meatpie.png",
      description:
        " Flaky crust filled with seasoned minced meat, potatoes and carrots",
      price: 400,
    },
    {
      name: "Meatpie",
      imageUrl: "/meatpie.png",
      description:
        " Flaky crust filled with seasoned minced meat, potatoes and carrots",
      price: 1200,
    },
    {
      name: "Small Chops",
      imageUrl: "/chops.png",
      description:
        "Assorted platter of puff-puff, samosas, spring rolls, and gizdodo",
      price: 1500,
    },
    {
      name: "Military Cap Fondant Cake",
      imageUrl: "/military.png",
      description:
        "Rich moist military themed cake available in any desired flavour",
      price: 80000,
    },
  ];
</script>

<div class="p-2 py-25">
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
          <h4
            class="mb-2 text-body-md font-bold text-white"
            style="font-family: 'Plus Jakarta Sans', sans-serif;"
          >
            {#if item.size}
              <!-- content here -->
              {item.size} Inches, {item.layers} Layers
            {/if}
          </h4>

          <p class="mb-4 text-xs leading-relaxed text-stone-500">
            {item.description}
          </p>
          <div class="flex items-center justify-between">
            <span class="text-lg font-bold text-amber-500"
              >₦{item.price.toLocaleString()}</span
            >
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
