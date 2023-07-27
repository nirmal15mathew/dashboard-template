<script lang="ts">
    export let label: String = "Untitled";
    export let time_online: string = "";
</script>
<div class="p-4 rounded-lg border-2 hover:border-slate-500 grid-rows-[1fr_4fr_1fr]">
    <div class="flex justify-end">
        <div class="p-1 rounded-full bg-green-400 w-1 h-1"></div>
        <div class="p-1 rounded-full bg-yellow-400 w-1 h-1"></div>
        <div class="p-1 rounded-full bg-red-400 w-1 h-1"></div>
    </div>
    <header>
        <h1 class="text-slate-700">
            {label}
        </h1>
    </header>
    <section class="text-sm text-slate-400">
        {time_online}
    </section>
</div>