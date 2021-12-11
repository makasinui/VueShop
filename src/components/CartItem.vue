<script>
import { mapActions } from "vuex"
export default {
  modules:{

  }
  ,
  data() {
      return {
          cart:0,
  }
},
  props:{
    cart_item_data:{
      type: Object,
      default(){
        return {

        }
      }
    }
  },
  computed:{
        ...mapActions([
        'REMOVE_FROM_CART'
    ])
  },
  mounted(){
  },
  methods:{
    deleteFromCart(){
      this.$emit('deleteFromCart')
    }
  }
}

</script>

<template>

<div class="cart_i">
  <div class="cart-item">
    <img :src="require('../assets/catalog/'+cart_item_data.url)" alt="">
    <div class="info">
      <p>{{cart_item_data.name}}</p>
      <p>{{cart_item_data.price}}₽</p>
    </div>
    <div class="kolvo">
  {{cart_item_data.kolvo}}
    </div>
    <div class="all">
      
    </div>
    <button @click.prevent="deleteFromCart()">Удалить</button>
  </div>
</div>
</template>

<style lang="scss" scoped>

.cart_i{
  width:100%;
  display: flex;
  justify-content: center;
}

  .cart-item{
    display: flex;
    justify-content: center;
    width:50%;
    border:1px solid gray;
    
  }

  .info{
    width:400px;
  }

  img{
    width:100px;
  }

  button{
    display: flex;
    justify-content: center;
    margin-top: 6%;
    height:20px;
    align-items: center;
  }

</style>



