<script>
import HeaderVue from './Header.vue'
import MenuVue from './Menu.vue'
import FooterVue from './Footer.vue'
export default {
  components:{
      HeaderVue,MenuVue,FooterVue
  }
  ,
  data() {
      return {
          cart:0,
  }
}
}

</script>

<template>
<HeaderVue/> 
<main class="contacts container">
 <MenuVue/>
 <section class="section-with-text">
     <div class="text-head-section">
        Контакты
     </div>
     <div class="text-section">
<br>
Телефон для связи: +7 (920) 345-61-42 - Viber, WatsApp
<br><br>
Электронная почта: antiques37@yandex.ru
<br><br>
ООО «Рога и копыта», ИНН 0000000000, р/счет №400000000000000000, БИК 042406608 (организация существует с 2021 года)
<br><br>
Склад интернет-магазина находится по адресу г.Ростов-на-Дону <br>
ул. Московская 29а, пункт выдачи заказов интернет магазина "Мыльная сказка"
<br><br>
Пункт выдачи работает по графику (по Московскому времени):
Пн 7.30 до 16.30
Вт 7.30 до 16.30
Ср 7.30 до 16.30
Чт 7.30 до 16.30
Пт 7.30 до 16.30
Сб выходной
Вс выходной
<br><br><br><br><br><br>
     </div>
 </section>
 
</main>
<FooterVue/>
</template>

<style lang="scss">
</style>



