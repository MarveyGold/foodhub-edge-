<script>
  import { addToCart } from "$lib/cart";
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
        class="group overflow-hidden grid grid-rows-[auto_auto_1fr_auto] rounded-3xl border border-white/5 bg-stone-900/50 transition-all duration-300 md:hover:border-amber-500/30 md:col-span-2"
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
              onclick={() => addToCart(item)}
            >
              <span class="material-symbols-outlined"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <!--Boxicons v3.0.8 https://boxicons.com | License  https://docs.boxicons.com/free-->
                  <path
                    d="M17.31 14H9.72L5.95 2.68A1 1 0 0 0 5 2H2v2h2.28l3.54 10.63A2 2 0 0 0 9.72 16h7.59a2 2 0 0 0 1.87-1.3l2.76-7.35-1.87-.7zM10 18a2 2 0 1 0 0 4 2 2 0 1 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 1 0 0-4"
                  ></path><path
                    d="m11.71 7.29-1.42 1.42 2.71 2.7 4.71-4.7-1.42-1.42L13 8.59z"
                  ></path>
                </svg></span
              >
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
