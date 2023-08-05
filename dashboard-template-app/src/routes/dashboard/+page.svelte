<script>
    import MainArea from "$lib/MainArea.svelte";
    import Chart from "$lib/Chart.svelte";

    let bars_data = [
        {
            val: 50,
        },
        {
            val: 60
        },
        {
            val: 33
        }
    ];
</script>

<svelte:head>
    <title>App - Dashboard</title>
</svelte:head>
<div class="grid">
    <MainArea>
        <span slot="area-title">Dashboard</span>
        <main slot="main-area" class="p-2">
            <div class="p-2">Chart</div>
            <div class="p-2 bg-slate-100">
                <Chart
                    chart_height={150}
                    chart_width={100}
                    show_axes={false}
                    {bars_data}
                    show_background={false}
                    bar_spacing={25}
                />
            </div>
        </main>
    </MainArea>
</div>
