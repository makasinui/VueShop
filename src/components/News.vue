<script>

export default {
  props:{
      news_list:{
          type: Object,
          default(){
              return {}
          }
      }
  },
  data() {
      return {}
}
}

</script>

<template>

<li class="news-item">
    <div class="news-text news-header">{{news_list.header}}</div>
    <div class="news-text news-main">
        {{news_list.main}}    
    </div>
    <a href="">
        <div class="news-text news-full">
            читать далее..
        </div>
    </a>
</li>
</template>

<style lang="scss" scoped>
.news-text{
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    color: #000000;
}

.news-item{
    padding:10px;
}

.news-main, .news-full{
    margin-top: 5%;
}

.news-full{
    float:right;
    color: #352281;
}
</style>



