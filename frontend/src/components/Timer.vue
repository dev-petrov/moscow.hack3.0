<template>
  <div>
      <h1>{{time}}</h1>
  </div>
</template>

<script>
export default {
    name:'timer',
    props: {
        max: Number,
        timeIsOver: Function
    },
    computed:{
    },
    data:function(){
        return { 
            time:'',
            interval: '',
            timer: 0,
        }
    },
    methods:{
        calculateTime: function(){
            var hour = parseInt(this.timer / 3600);
            var s = this.timer;
            s -= hour * 3600;  
            var min = parseInt(s/60);
            s -= min * 60;
            this.timer -= 1;
            if (this.timer < 0){
                clearInterval(this.interval);
                this.timeIsOver();
            }
            if (s < 10){
                s = '0' + s;
            }
            if (min < 10){
                min = '0' + min;
            }
            this.time = `${hour}:${min}:${s}`
        }
    },
    mounted:function(){
        this.timer = this.max
        this.interval = setInterval(this.calculateTime, 1000)
    }
}
</script>

<style>

</style>