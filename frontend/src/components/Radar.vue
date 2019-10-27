
<script>
import { Radar } from "vue-chartjs";
export default {
  extends: Radar,
  name: "radar-chart",
  data: function() {
    return {
      data: {
        labels: [
          "Физмат",
          "Химия",
          "Биомед",
          "Гумманитарный профиль",
          "Физкультура"
        ],
        datasets: [
          {
            backgroundColor: "#9fdfcd",
            borderColor: "#9fdfcd",
            data: [20, 40, 80, 50, 40],
            label: "Профориентированность",
            fill: false
          }
        ]
      },
      options: {
        scale: {
          angleLines: {
            display: true
          },
          gridLines:{
              display: true,
              color: '#FF9F0F'
          },
          ticks: {
            suggestedMin: 0,
            suggestedMax: 100
          },
          pointLabels: {
              fontSize: 18,
              fontColor: '#FFFFFF'
          }
        },
        maintainAspectRatio: true,
        responsive: true,
        tooltips: {
          mode: "index",
          intersect: false,
          titleFontSize: 20,
          bodyFontSize: 20
        },
        legend: {
          labels: {
            fontSize: 20,
            fontColor: '#FFFFFF'
          }
        },
        spanGaps: false,
        elements: {
          line: {
            tension: 0.000001
          }
        }
      }
    };
  },
  mounted: function() {
    this.renderChart(this.data, this.options);
  }
};
</script>

<style>
</style>