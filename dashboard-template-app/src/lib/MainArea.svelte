<div class="bg-gray-100 p-2 rounded-md grid grid-rows-main dark:bg-slate-600 shadow">
    <header class="flex p-2">
        <h1 class="text-xl font-semibold px-2 text-slate-800">
            <slot name="area-title"></slot>
        </h1>
    </header>
    <main>
        <slot name="main-area"></slot>
    </main>
</div>