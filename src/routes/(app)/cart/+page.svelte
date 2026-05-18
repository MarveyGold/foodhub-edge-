<script>
  import { cartStore, syncCart, removeItem } from "$lib/cart";
  $effect(() => syncCart());
</script>

<div class="py-20">
  {#each $cartStore as item}
    <div
      class="rounded-3xl flex justify-between border border-white/5 bg-stone-950/50 p-4 transition-all hover:bg-[#C41E3A]/5"
    >
      <img
        src={item.imageUrl}
        alt=""
        class="w-20 h-22 rounded-3xl object-cover"
      />
      <div class="flex-1">
        <h4
          class="mb-2 text-2sm font-bold text-white"
          style="font-family: 'Plus Jakarta Sans', sans-serif;"
        >
          {item.name}
        </h4>
        <p class="text-amber-500 font-bold">₦{item.price.toLocaleString()}</p>
      </div>
      <button
        class="transform rounded-full bg-[#C41E3A] p-3 text-white transition-transform active:scale-90"
        onclick={() => removeItem(item)}
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <!--Boxicons v3.0.8 https://boxicons.com | License  https://docs.boxicons.com/free-->
          <path
            d="m11.73 5.32-1.41 1.41 1.77 1.77-1.77 1.77 1.41 1.41 1.77-1.77 1.77 1.77 1.41-1.41-1.77-1.77 1.77-1.77-1.41-1.41-1.77 1.77z"
          ></path><path
            d="M17.31 14H9.72L5.95 2.68A1 1 0 0 0 5 2H2v2h2.28l3.54 10.63A2 2 0 0 0 9.72 16h7.59a2 2 0 0 0 1.87-1.3l2.76-7.35-1.87-.7zM10 18a2 2 0 1 0 0 4 2 2 0 1 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 1 0 0-4"
          ></path>
        </svg>
      </button>
    </div>
  {/each}
</div>
