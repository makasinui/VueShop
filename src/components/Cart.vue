<script>
import CartItem from "./CartItem.vue"
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
}
}

</script>

<template>

<div>
    <span class="cart" @click.prevent="isOpen=!isOpen">Корзина</span>
    <div class="modal" v-show="isOpen">
        <div class="modal-show">
            <div class="close" @click.prevent="isOpen=!isOpen">
                ✕
            </div>
        </div>
    </div>
    <cart-item></cart-item>
</div>
</template>

<style lang="scss" scoped>

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
        max-width: 500px;
        height: 180px;
        margin: 250px;
        background: #f9f9f9;
        border-radius: 3px;
        position: relative;
        box-shadow: 0 5px 15px black;
    }
</style>



