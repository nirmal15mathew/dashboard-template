<script lang="ts">
    import type { SvelteComponent } from "svelte";
    import "./sidebar.css"
    export let label: String = "";
    export let isActive: boolean = false;
    export let icon: ConstructorOfATypedSvelteComponent;
    export let iconProps: Object;
</script>

<div
    class={isActive
        ? "sidebar-item is-active"
        : "sidebar-item"}
>
    <span>
        <svelte:component this={icon} {...iconProps}></svelte:component>
    </span>
    <span class="px-2">
        {label}
    </span>
</div>
