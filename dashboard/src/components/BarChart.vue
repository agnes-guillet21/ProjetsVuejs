<template>
    <div id="app" style="width: 500px;">
        <BarChart v-bind="barChartProps" :options="options" />
    </div>
</template>    

<script setup lang="ts">
    import { Chart, registerables} from 'chart.js';
    import { computed, ref } from "vue";
    import { BarChart, useBarChart} from "vue-chart-3";


Chart.register(...registerables)


type ChartProps = {
    data: [];
};

const props = defineProps<ChartProps>();

const chartData = computed(() => ({
    labels: ["US","UK","FR","AU","JP","CN"],
    datasets: [
        {
            data: props.data,
            backgroundColor : [
                "#77CEFF",
                "#0079AF",
                "#123E6B",
                "#97B0C4",
                "#A5C8ED",
                "#587aa3",
            ],

        }
    ],
}));

    const { barChartProps } = useBarChart({
        chartData,
    });
    
    const options = ref({
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display:false,
            },
            title: {
                display: true,
                text: " Revenus (in $) by countries",
            },
        },
    })


    </script>