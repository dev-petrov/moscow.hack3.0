
<script>
import { Bar } from "vue-chartjs";
export default {
  extends: Bar,
  name: "bar-chart",
  data: function() {
    return {
      data: {
        labels: ["Текущий тест"],
        datasets: [
          {
            label: "5А",
            backgroundColor: "#FF0000",
            borderColor: "#FF0000",
            borderWidth: 1,
            data: [3]
          },
          {
            label: "5Б",
            backgroundColor: "#FFBE00",
            borderColor: "FFBE00",
            borderWidth: 1,
            data: [4]
          },
          {
            label: "5В",
            backgroundColor: "#2DD700",
            borderColor: "#2DD700",
            borderWidth: 1,
            data: [1]
          },
          {
            label: "5Г",
            backgroundColor: "#133AAC",
            borderColor: "#133AAC",
            borderWidth: 1,
            data: [2]
          }
        ]
      },
      options: {
        scaleOverride: true,
        maintainAspectRatio: false,
        animation: false,
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
                min: 0
              }
            }
          ]
        },
        scaleBeginAtZero: true,
        responsive: false,
        legend: {
          position: "top"
        },
        title: {
          display: true,
          text: "Соревнуйся!"
        }
      }
    };
  },
  props: {
    values: Array
  },
  methods: {
    rerender: function() {
      for (var v of this.data.datasets) {
        v.data[0] += parseInt(Math.random() * (5 - 0) + 0);
      }
      this.renderChart(this.data, this.options);
    }
  },
  mounted: function() {
    this.renderChart(this.data, this.options);
  }
};
</script>

<style>
</style>