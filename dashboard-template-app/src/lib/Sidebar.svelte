<script>
    import "./sidebar.css"
    let menu_items = ["Home", "Dashboard", "Profile"]
    let active_index = 0
</script>
<div class="bg-gray-100 p-2 rounded-md dark:bg-slate-600">
    <ul class="flex gap-2 flex-col">
        {#each menu_items as item, i}
        <li>
            <a href={i != 0 ? item.toLocaleLowerCase(): "/"}>
                <div class={i === active_index ? "sidebar-item is-active" : "sidebar-item"}>
                    {item}
                </div>
            </a>
        </li>
        {/each}
    </ul>
</div>