<script>
import CartItem from "./CartItem.vue"
import { mapGetters } from "vuex"
export default {
  components:{
      CartItem
  }
  ,
  data() {
      return {
          cart:0,
          isOpen:false
  }
},
props:{
    cart_data:{
        type:Array,
        default(){
            return []
        }
    }
},
computed:{
    ...mapGetters([
        'CART'
    ])
}
}

</script>

<template>

<div>
    <span class="cart" @click.prevent="isOpen=!isOpen">Корзина</span>
    <div v-show="CART.length" class="dot">•</div>
    <div class="modal" v-show="isOpen">
        <div class="modal-show">
            <div class="close" @click.prevent="isOpen=!isOpen">
                ✕
            </div>
            <div class="cart__item">
                <CartItem
                v-for="item in cart_data"
                :key="item.article"
                :cart_item_data="item" />
            </div>
            
        </div>
    </div>
    
</div>
</template>

<style lang="scss" scoped>

.cart__item{
    margin-top: 5%;
    margin-bottom:5%;
}
.dot{
    position: absolute;
    top:20px;
    right:223px;
    color:rgb(199, 55, 55);
    font-size: 50px;
}

.cart{
    text-transform: uppercase;
    font-size: 18px;
    padding:1px;
    font-family: 'Roboto', 'Arial';
    cursor:pointer;
    &:hover{
        border-bottom:1px solid black;
    }
}

.cart-num{
    background-color: red;
    border-radius: 50%;
}
.close{
    position: absolute;
    cursor:pointer;
    top:1%;
    right:3%;
    font-size: 30px;
}
.modal{
        position:fixed;
        top:0;
        right:0;
        bottom:0;
        left:0;
        z-index:1000;
        background: rgba(0,0,0,0.9);
        display: flex;
        justify-content: center;
        align-items: flex-start;
        overflow-y:scroll;
        padding:60px 15px;
    }
    .modal-show{
        width: 100%;
        max-width: 1500px;
        min-height:600px;
        height: auto;
        margin: 250px;
        background: #f9f9f9;
        border-radius: 3px;
        position: relative;
        box-shadow: 0 5px 15px black;
    }
</style>



