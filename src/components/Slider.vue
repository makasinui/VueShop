<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';

export default {
  components:{Splide, SplideSlide},
  data() {
      return {
         
    }
}
}

</script>

<template>
<div class="slider container">
  <Splide :options="{ rewind: true, width:1400, height:250 }">
    <SplideSlide>
      <img src="../assets/Slider/1.png" alt="Sample 1">
    </SplideSlide>
    <SplideSlide>
      <img src="../assets/Slider/1.jpg" alt="Sample 2">
    </SplideSlide>
  </Splide></div>
</template>

<style lang="scss" scoped>
.slider{
  width:fit-content;
  overflow: hidden;
  padding-left: 300px;
  margin-top: 20px;
}



@media screen and (max-width:1600px) {
  .splide__slide img{
    width:1120px;
  }

}

</style>



