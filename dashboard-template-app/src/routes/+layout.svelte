<script>
    import "../app.css"
    import Sidebar from "../lib/Sidebar.svelte"
</script>

<div class="grid grid-cols-layout h-screen bg-slate-50 dark:bg-gray-800">
    <div class="grid grid-rows-1 p-2">
        <Sidebar />
    </div>
    <div class="p-2 grid">
        <slot></slot>
    </div>
</div>