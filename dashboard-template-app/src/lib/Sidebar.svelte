<script lang="ts">
    import { LogOutIcon } from "svelte-feather-icons";
    import SidebarItem from "./SidebarItem.svelte";
    interface MenuItem {
        label: String;
        path: string;
        iconProps: Object,
        iconComponent: ConstructorOfATypedSvelteComponent
    }
    export let menu_items: MenuItem[] = [];
    export let current_path: string = "";
</script>

<div class="bg-gray-100 p-2 rounded-md dark:bg-slate-600 shadow grid grid-rows-sidebar">
    <div class="grid">
        <slot name="header"></slot>
    </div>
    <div class="mt-2">
        <ul class="flex gap-2 flex-col">
            {#each menu_items as item}
                <li>
                    <a href={item.path}>
                        <SidebarItem label={item.label} isActive={item.path == current_path} icon={item.iconComponent} iconProps={item.iconProps}></SidebarItem>
                    </a>
                </li>
            {/each}
        </ul>
    </div>
    <div class="flex flex-col justify-end">
        <SidebarItem label="Logout" icon={LogOutIcon} iconProps={{size: "1.2x"}}></SidebarItem>
    </div>
</div>
