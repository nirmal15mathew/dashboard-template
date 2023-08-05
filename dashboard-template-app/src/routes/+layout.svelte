<script lang="ts">
    import "../app.css";
    import Sidebar from "../lib/Sidebar.svelte";
    import Header from "$lib/Header.svelte";
    import { HomeIcon, BarChart2Icon, UserIcon, SettingsIcon } from "svelte-feather-icons"
    import { page } from "$app/stores";
    let sidebar_menu_items = [
        {
            label: "Home",
            path: "/",
            iconComponent: HomeIcon,
            iconProps: {
                size: "1.3x"
            }
        },
        {
            label: "Dashboard",
            path: "/dashboard",
            iconComponent: BarChart2Icon,
            iconProps: {
                size: "1.3x"
            }
        },
        {
            label: "Settings",
            path: "/settings",
            iconComponent: SettingsIcon,
            iconProps: {
                size: "1.3x"
            }
        },
        {
            label: "Profile",
            path: "/profile",
            iconComponent: UserIcon,
            iconProps: {
                size: "1.3x"
            }
        },
    ];
</script>

<div class="grid grid-cols-layout h-screen bg-slate-100 dark:bg-gray-800">
    <!-- Sidebar -->
    <div class="grid grid-rows-1 p-2">
        <Sidebar
            menu_items={sidebar_menu_items}
            current_path={$page.url.pathname}
        >
        <div slot="header">
            <Header></Header>
        </div>
    </Sidebar>
    </div>
    <!-- Main menu -->
    <div class="p-2 grid">
        <slot />
    </div>
</div>
