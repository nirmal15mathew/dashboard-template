<script lang="ts">
    import "../app.css";
    import Sidebar from "../lib/Sidebar.svelte";
    import { page } from "$app/stores";
    let sidebar_menu_items = [
        {
            label: "Home",
            path: "/",
        },
        {
            label: "Dashboard",
            path: "/dashboard",
        },
        {
            label: "Profile",
            path: "/profile",
        },
    ];
</script>

<div class="grid grid-cols-layout h-screen bg-slate-50 dark:bg-gray-800">
    <!-- Sidebar -->
    <div class="grid grid-rows-1 p-2">
        <Sidebar
            menu_items={sidebar_menu_items}
            current_path={$page.url.pathname}
        />
    </div>
    <!-- Main menu -->
    <div class="p-2 grid">
        <slot />
    </div>
</div>
