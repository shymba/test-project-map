<template>
  <div class="chart-wrapper">
    <Bar :data="data" :options="options" />
  </div>
</template>

<script>
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js'
import { Bar } from 'vue-chartjs';
import {data, options} from '@/components/chartConfig'
import axios from "axios";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export default {
  name: 'MyChart',
  components: {
    Bar
  },
  data() {
    return {
      data: {
        labels: [],
        datasets: [
          {
            label: 'Data One',
            backgroundColor: '#f87979',
            data: []
          }
        ]
      }
    }
  },
  methods: {
    async fetchComments() {
      const response = await axios.get('https://jsonplaceholder.typicode.com/comments');
      const res = response.data
      const arr = []
      let label2 = []
      let data2 = []

      res.forEach((el) => {
        const lbl = el.id;
        const lngth = el.email.indexOf('@');
        label2.push(lbl);
        arr.push(lngth);

        data2 = arr;
      })

      console.log('func')

      return {
        data: {
          labels: label2,
          datasets: [
            {
              label: 'Data One',
              backgroundColor: '#f87979',
              data: data2
            }
          ]
        },
      }
    }
  },
  async created() {
    this.data = (await this.fetchComments()).data;
  }
}
</script>

<style lang="scss" scoped>
.chart-wrapper {
  canvas {
    width: 100%;
    height: 100vh;
  }
}
</style>