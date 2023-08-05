<script>
    import MainArea from "$lib/MainArea.svelte";
    import Card from "$lib/Card/Card.svelte";

    let cards = [
        {
            label: "Raspberry Pi",
            uptime: "11h",
            status: "online"
        },
        {
            label: "NodeMCU",
            uptime: "5h",
            status: "alert"
        },
        {
            label: "Arduino",
            uptime: "30mih",
            status: "offline"
        },
        
    ]
</script>

<svelte:head>
    <title>App - Home</title>
</svelte:head>
<div class="grid">
    <MainArea>
        <!-- Header -->
        <span slot="area-title">
            Home
        </span>

        <!-- Main Area -->
        <div slot="main-area" class="px-4 text-slate-700">
            <section>
                My Devices
            </section>
            <section class="my-4">
                <ul class="grid grid-cols-5 gap-4">
                    {#each cards as card}
                    <li>
                        <Card label={card.label} time_online={card.uptime}/>
                    </li>
                    {/each}
                </ul>
            </section>
        </div>
    </MainArea>
</div>