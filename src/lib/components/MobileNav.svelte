<script>
  import { goto } from "$app/navigation";
  import { page } from "$app/state";
  let active = $derived(page.url.pathname.slice(1));
</script>

<nav
  class="fixed bottom-0 left-0 z-50 flex w-full items-center justify-around border-t border-white/5 bg-stone-950 px-6 py-3 md:hidden"
>
  <button
    onclick={() => goto("/menu")}
    class={active == "menu"
      ? "flex flex-col items-center text-amber-500"
      : "flex flex-col items-center text-stone-500"}
  >
    <span class="material-symbols-outlined">restaurant_menu</span>
    <span class="mt-1 text-[10px] tracking-tighter uppercase">Menu</span>
  </button>
  <button
    onclick={() => goto("/orders")}
    class={active == "orders"
      ? "flex flex-col items-center text-amber-500"
      : "flex flex-col items-center text-stone-500"}
  >
    <span class="material-symbols-outlined">receipt_long</span>
    <span class="mt-1 text-[10px] tracking-tighter uppercase">Orders</span>
  </button>
  <button
    class="relative -mt-10 flex h-16 w-16 items-center justify-center rounded-full border-4 border-stone-950 bg-[#C41E3A] shadow-2xl shadow-[#C41E3A]/40"
    onclick={() => goto("/cart")}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <!--Boxicons v3.0.8 https://boxicons.com | License  https://docs.boxicons.com/free-->
      <path
        d="M21 4H6.17l-.18-1.15A1 1 0 0 0 5 2H2v2h2.14l1.87 12.15A1 1 0 0 0 7 17h12v-2H7.86l-.31-2H19c.45 0 .84-.3.96-.73l2-7A1 1 0 0 0 21 3.99Zm-2.75 7H7.24l-.77-5h13.2l-1.43 5ZM8 18a2 2 0 1 0 0 4 2 2 0 1 0 0-4m9 0a2 2 0 1 0 0 4 2 2 0 1 0 0-4"
      ></path>
    </svg>
  </button>
  <button
    onclick={() => goto("/profile")}
    class={active == "profile"
      ? "flex flex-col items-center text-amber-500"
      : "flex flex-col items-center text-stone-500"}
  >
    <span class="material-symbols-outlined">person</span>
    <span class="mt-1 text-[10px] tracking-tighter uppercase">Profile</span>
  </button>
  <button class="flex flex-col items-center text-stone-500">
    <span class="material-symbols-outlined">more_horiz</span>
    <span class="mt-1 text-[10px] tracking-tighter uppercase">More</span>
  </button>
</nav>
