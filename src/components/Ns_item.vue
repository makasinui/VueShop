<script>

export default {

  data() {
      return {
          cart:0,
  }
},
    props:{
        news:{
            type: Object,
            default(){
                return {}
            }
        }
    }
}

</script>

<template>
<div class="news-list-item">
    <span class="header">{{news.header}}</span><br>
    <span class="date">{{news.date}}</span><br>
    <span class="text">{{news.text}}</span><br>
    <br>
</div>
</template>

<style lang="scss" scoped>
    
    .header{
        color:#4d3eac;
        font-size: 45px;
        font-family: 'Roboto';
    }

    .date{
        font-size: 20px;
        color:gray;
    }

    .text{
        font-size: 28px;
    }
</style>



