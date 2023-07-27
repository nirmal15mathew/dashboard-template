<script>
    import logo from "$lib/assets/s.png"
    import { MenuIcon } from "svelte-feather-icons";

</script>
<header class="grid grid-cols-[4fr_1fr]">
    <figure class="p-2 text-lg">
        <img src={logo} alt="S" class="h-8">
    </figure>
    <span class="p-2 hover:bg-slate-100 flex items-center">
        <MenuIcon size="1.2x" />
    </span>
</header>