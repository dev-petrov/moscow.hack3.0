
<script>
import { Line } from "vue-chartjs";
export default {
  name: "line-chart",
  extends: Line,
  props: {},
  data: function() {
    return {
      data: {
        labels: [
          "Понедельник",
          "Вторник",
          "Среда",
          "Четверг",
          "Пятница",
          "Суббота"
        ],
        datasets: [
          {
            label: "Математика",
            backgroundColor: "#f87979",
            borderColor: "#f87979",
            data: [5, 2, 3, 4, 3],
            fill: false
          },
          {
            label: "Русский язык",
            backgroundColor: "#faca45",
            borderColor: "#faca45",
            data: [3, 5, 5, 3, 4],
            fill: false
          },
          {
            label: "История",
            backgroundColor: "#9fdfcd",
            borderColor: "#9fdfcd",
            data: [2, 3, 5, 5, 5],
            fill: false
          },
          {
            label: "Химия",
            backgroundColor: "#e47312",
            borderColor: "#e47312",
            data: [5, 4, 4, 5, 5],
            fill: false
          }
        ]
      },
      options: {
        responsive: false,
        title: {
          display: true,
          text: "Успеваемость ученика за неделю",
          fontSize: 20
        },
        legend: {
          labels: {
            fontSize: 20
          }
        },
        tooltips: {
          mode: "index",
          intersect: false,
          titleFontSize: 20,
          bodyFontSize: 20
        },
        hover: {
          mode: "nearest",
          intersect: true
        },
        scales: {
          pointLabels: {
            fontSize: 20
          },
          xAxes: [
            {
              display: true,
              scaleLabel: {
                display: true,
                labelString: "Дни недели",
                fontSize: 20
              }
            }
          ],
          yAxes: [
            {
              display: true,
              scaleLabel: {
                display: true,
                labelString: "Оценки",
                fontSize: 20
              }
            }
          ]
        }
      }
    };
  },
  computed: {},
  mounted() {
    this.renderChart(this.data, this.options);
  }
};
</script>

<style>
</style>