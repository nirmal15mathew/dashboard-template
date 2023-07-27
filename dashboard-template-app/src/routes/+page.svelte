<script>
    import MainArea from "$lib/MainArea.svelte";
    import Card from "$lib/Card/Card.svelte";
</script>

<svelte:head>
    <title>App - Home</title>
</svelte:head>
<div class="grid">
    <MainArea>
        <span slot="area-title">
            Home
        </span>
        <div slot="main-area" class="px-4 text-slate-700">
            <section>
                My Devices
            </section>
            <section class="my-4">
                <ul class="grid grid-cols-5 gap-4">
                    <li>
                        <Card label="Raspberry Pi" time_online="11h"/>
                    </li>
                    <li>
                        <Card label="Nodemcu" time_online="5h"/>
                    </li>
                    <li>
                        <Card label="Arduino" time_online="30min"/>
                    </li>
                </ul>
            </section>
        </div>
    </MainArea>
</div>