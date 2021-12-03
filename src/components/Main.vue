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
 
</main>
<FooterVue></FooterVue>
</template>

<style lang="scss" scoped>

</style>



