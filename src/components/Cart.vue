<script>

export default {
  modules:{

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

<div>
    <a href="">
        <span class="cart">Корзина</span>
    </a> 
</div>
</template>

<style lang="scss" scoped>

.cart{
    text-transform: uppercase;
    font-size: 18px;
    padding:1px;
    font-family: 'Roboto', 'Arial';
    &:hover{
        border-bottom:1px solid black;
    }
}

.cart-num{
    background-color: red;
    border-radius: 50%;
}
</style>



