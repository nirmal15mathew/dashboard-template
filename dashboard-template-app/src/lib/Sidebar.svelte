<script lang="ts">
    import SidebarItem from "./SidebarItem.svelte";
    interface MenuItem {
        label: String;
        path: string;
    }
    export let menu_items: MenuItem[] = [];
    export let current_path: string = "";
</script>

<div class="bg-gray-100 p-2 rounded-md dark:bg-slate-600 shadow grid grid-rows-sidebar">
    <div>
        <ul class="flex gap-2 flex-col">
            {#each menu_items as item}
                <li>
                    <a href={item.path}>
                        <SidebarItem label={item.label} isActive={item.path == current_path}></SidebarItem>
                    </a>
                </li>
            {/each}
        </ul>
    </div>
    <div class="flex flex-col justify-end">
        <SidebarItem label="Logout"></SidebarItem>
    </div>
</div>
