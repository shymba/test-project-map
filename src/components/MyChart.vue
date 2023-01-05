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
import * as chartConfig from '@/components/chartConfig'


ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export default {
  name: 'MyChart',
  components: {
    Bar
  },
  data() {
    return chartConfig
  },
  // data() {
  //   return {
  //     data: {
  //       labels: ['January', 'February', 'March'],
  //       // labels: [],
  //       datasets: [
  //           {
  //             data: [40, 20, 12, 55, 20, 64]
  //             // data: []
  //           }
  //       ]
  //     },
  //     options: {
  //       responsive: true
  //     }
  //   }
  // },
  // methods: {
    // async fetchComments() {
    //   // console.log(this.data.datasets[0].data)
    //   // console.log(this.data.labels)
    //
    //   const response = await axios.get('https://jsonplaceholder.typicode.com/comments');
    //   const res = response.data
    //   const arr = []
    //   let label2 = []
    //   let data2 = this.data.datasets[0].data;
    //
    //   for(let i=0; i<=11; i++) {
    //     arr.push(i)
    //   }
    //   this.data.datasets[0].data = arr
    //   console.log(this.data.datasets[0].data)
    //
    //   for(let k=0; k<=15; k++) {
    //     label2.push(k)
    //   }
    //   this.data.labels = label2
    //   console.log(this.data.labels)

      // res.forEach((el) => {
      //   const lbl = el.id
      //   label2.push(lbl)
      //
      //   this.data.labels = label2;
      // })
      //
      // res.forEach((el) => {
      //   const lngth = el.email.indexOf('@')
      //   arr.push(lngth)
      //
      //   data2 = arr;
      //
      //   this.data.datasets[0].data = data2;
      // })
      // console.log(this.data.datasets[0].data)
      // console.log(this.data.labels)
    // }
  // },
  beforeMount() {
    this.fetchComments();
  },
  async mounted() {
    await this.fetchComments();
  },
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