<script lang="ts">
    import "./sidebar.css"
    export let label: String = "";
    export let isActive: boolean = false;
</script>

<div
    class={isActive
        ? "sidebar-item is-active"
        : "sidebar-item"}
>
    {label}
</div>
