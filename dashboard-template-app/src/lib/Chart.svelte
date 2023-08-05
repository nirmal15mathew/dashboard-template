<script lang="ts">
    interface BarData {
        val: number;
    }
    export let barPos = 40;
    export let bar_width = 10;
    export let chart_height = 300;
    export let chart_width = 500;
    export let chart_color = "#1ac9e6";
    export let bar_spacing = 17;
    export let axis_padding = 20;
    export let show_random = false;
    export let bars_data: BarData[] = [];
    export let show_axes = true;
    export let show_background = true;

    function generateRandomPoints(num: number) {
        for (let i = 0; i < num; i++) {
            bars_data.push({ val: Math.random() * 100 + 5 });
        }
    }
    if (show_random) {
        generateRandomPoints(13);
    }
</script>

<div style="border-radius: 1em;">
    <svg
        version="1.1"
        width={chart_width}
        height={chart_height}
        xmlns="http://www.w3.org/2000/svg"
    >
        {#if show_background}
        <rect width="100%" height="100%" fill="white" rx="5" />
        {/if}
        {#if show_axes}
        <line
            x1={barPos - 20}
            y1={chart_height - axis_padding}
            x2={bars_data.length * (bar_width + bar_spacing - 5)}
            y2={chart_height - axis_padding}
            stroke="black"
            stroke-width="0.5"
        />
        <line
            x1={barPos - 20}
            y1={chart_height - axis_padding}
            x2={barPos - 20}
            y2="20"
            stroke="black"
            stroke-width="0.5"
        />
        {/if}
        {#each bars_data as bar, i}
            <circle
                cx={barPos + i * bar_spacing}
                cy={chart_height - bar.val - axis_padding}
                r={bar_width / 2}
                fill={chart_color}
            />
            <rect
                width={bar_width}
                height={bar.val}
                x={barPos + i * bar_spacing - bar_width / 2}
                y={chart_height - bar.val - axis_padding}
                fill={chart_color}
            />
        {/each}
    </svg>
</div>
