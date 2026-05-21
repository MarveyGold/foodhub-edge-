<script>
  import { addToCart } from "$lib/cart";
  let active = $state();
  const flavourGroups = {
    cake: [
      "Vanilla",
      "Chocolate",
      "Red Velvet",
      "Coconut",
      "Carrot",
      "Cookies & Cream",
      "Strawberry",
      "Banana",
    ],
  };
  const item = {
    name: "Cake",
    size: 8,
    layers: 2,
    imageUrl: "/cake.png",
    description: "Rich moist cake available in any desired flavour",
    price: 25000,
  };
  let selected = $state();
</script>

<div class="p-2 py-25">
  <div>
    <!-- Main Feature -->

    <div
      class=" p-1.5 group overflow-hidden grid grid-rows-[auto_auto_1fr_auto] rounded-3xl border border-white/5 bg-stone-900/50 transition-all duration-300 md:hover:border-amber-500/30 md:col-span-2 w-[95vw]"
    >
      <div class="relative h-32 flex flex-row justify-between items-center">
        <img
          alt={item.name}
          class="h-20 w-20 rounded-3xl object-cover transition-transform duration-700 group-hover:scale-110"
          src={item.imageUrl}
        />
        <div class="flex flex-col w-[40vw] pr-1 whitespace-normal">
          <h3
            class="mb-2 text-2xl text-[#C41E3A] font-bold"
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
        </div>
        <span class="text-lg font-bold text-amber-500"
          >₦{item.price.toLocaleString()}</span
        >
      </div>
      <hr />
      <div>
        {#each flavourGroups.cake as flavour}
          <!-- content here -->
          <button
            onclick={() => (active = flavour)}
            class="
    px-4 py-[9px] rounded-full
    text-[13px]
    tracking-[0.01em]
    font-['DM_Sans']
    cursor-pointer
    transition-all
    duration-200
    border-[1.5px]
  "
            class:border-[#e85d8a]={active == flavour}
            class:bg-[rgba(232,93,138,0.15)]={active == flavour}
            class:text-[#e85d8a]={active == flavour}
            class:font-semibold={active == flavour}
            class:scale-[1.02]={active == flavour}
            class:border-[rgba(255,255,255,0.12)]={active !== flavour}
            class:bg-[rgba(255,255,255,0.04)]={active !== flavour}
            class:text-[rgba(255,255,255,0.65)]={active !== flavour}
            class:font-normal={!active}>{flavour}</button
          >
        {/each}
      </div>
      <div class="p-2">
        <div class="flex items-center justify-between">
          <button
            class=" flex justify-center items-center rounded-full transform bg-[#C41E3A] h-10 w-10 text-white transition-transform active:scale-90"
            onclick={() => addToCart({ ...item, id: crypto.randomUUID() })}
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
  </div>
</div>
