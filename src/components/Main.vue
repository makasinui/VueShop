<script>
import Slider from './Slider.vue'
import MenuVue from "./Menu.vue"
import CatalogVue from './Catalog.vue'
import FooterVue from './Footer.vue'
  import HeaderVue from "./Header.vue"
export default {
  data() {
      return {
         
    }
},
components:{Slider, MenuVue, CatalogVue,FooterVue, HeaderVue}
}



</script>

<template>
<HeaderVue></HeaderVue>
<main class="container">
    <Slider></Slider>
    <MenuVue></MenuVue>
    <CatalogVue />
    <div class="ask">
      <button class="ask_"><a href="mailto:mks.shi@ya.ru">Написать нам</a></button>
    </div>
</main>
<FooterVue></FooterVue>
</template>

<style lang="scss" scoped>
.ask{
  position:fixed;
  right:10px;
  top:55%;
}

.ask_{
  display: flex;
  justify-content: center;
  align-items: center;
  width:110px;
  height:40px;
  color:white;
  background-color:rgb(31, 96, 160);
  transform:rotate(90deg);
  &:hover{
    background-color:rgb(23, 69, 116);
    cursor:pointer;
  }
  a{
    color:white;
    
  }

}
</style>



