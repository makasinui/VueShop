<script>
import CartItem from "./CartItem.vue"
import { mapGetters, mapActions } from "vuex"
export default {
  components:{
      CartItem
  }
  ,
  data() {
      return {
          cart:0,
          isOpen:false,
          buyModal:false,
          email:'',
          tel:'',
          fio:''

  }
},
props:{ //задаём входные значения
    cart_data:{
        type:Array,
        default(){
            return []
        }
    }
},
computed:{
    ...mapGetters([ //получаем геттер корзины
        'CART'
    ]),
    ...mapActions([
        'DELETE_FROM_CART' //метод для удаления товара с корзины
    ]),
    cartTotalCost() { //функция, которая подсчитывает общее кол-во стоимости товара
        let result = 0
        for (let item of this.cart_data) {
           result +=item.price
        }
        return result
    }
    
},
methods:{
    deleteFromCart(index){ //удаление товара с корзины
        let vm = this.$store.state.cart //store - хранилище данных VUE, мы получаем конкретный элемень корзины, обращаясь к состоянию.
        vm.splice(index,1)
        this.$store.state.cartCount -=1
        this.DELETE_FROM_CART
    },
    checkValues(){ //валидация данных формы
        this.buyModal = !this.buyModal
        if(this.email.length < 3 || this.fio.length < 3 || this.tel.length <3)  {
            alert('Некоторые поля не заполнены полностью*')
        }
    }
}
}

</script>

<template>

<div>
    <span class="cart" @click.prevent="isOpen=!isOpen">Корзина</span>
    <div v-show="CART.length" class="dot">•</div>
    <div class="modal" v-show="isOpen">
        <div class="modal-show">
            <div v-if="!CART.length" class="empty"> <!--v-if директива, которая показывает элемент в случае если выполнено условие-->
                Пока ничего не добавлено
            </div>
            <div class="close" @click.prevent="isOpen=!isOpen">
                ✕
            </div>
            <div class="cart__item"> <!--v-for - аналог for в обычном JS. :key - задаём уникальный ключ элемента. :cart_item_data - передаём пропсы-->
                <CartItem
                v-for="(item,index) in cart_data" 
                :key="item.article"
                :cart_item_data="item"
                @deleteFromCart="deleteFromCart(index)"
                 />
            </div>
            <div v-show="CART.length" class="count">
                Всего в корзине: {{$store.state.cartCount}}
            </div>
            <div v-show="CART.length" class="total">
                Стоимость:{{cartTotalCost}} рублей
            </div>

            <div v-show="CART.length" class="form">
                <form class="form_contacts">
                    <span>Ваш телефон*</span>
                    <input type="tel" name="" placeholder="+7" v-model="tel" id="" maxlength="12">
                    <span>Ваш email*</span>
                    <input type="email" name="" id="" v-model="email" placeholder="email...">
                    <span>Ваше ФИО*</span>
                    <input type="text" name="" id="" v-model="fio" placeholder="ФИО...">
                    <div class="buy">
                        <button @click.prevent="checkValues">Купить</button>
                    </div>        
                </form>
            </div>

            
        </div>
    </div>
    
</div>
</template>

<style lang="scss" scoped>



.empty{
    font-size: 40px;
}

.form{
    margin-top: 5%;
    text-align:center;
    font-size: 25px;
    input{
        width:12%;
        margin:0 auto;
    }
}

.form_contacts{
    display: flex;
    justify-content: center;
    flex-direction: column;
    
}

.cart__item{
    margin-top: 5%;
    margin-bottom:5%;
}
.dot{
    position: absolute;
    top:20px;
    right:103px;
    color:rgb(199, 55, 55);
    font-size: 50px;
}

.count, .total{
    font-size: 35px;
    text-align: center;
    margin-bottom:20px;
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

.buy{
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
}

button{
    display: flex;
    justify-content: center;
    margin-top: 3%;
    height:50px;
    width:200px;
    align-items: center;
    font-size: 40px;
    background-color:rgb(20, 199, 80);
    border-radius: 10px;
    border:0;
    cursor:pointer;
    &:hover{
        transition:0.5s all;
        background-color:rgb(29, 165, 74);
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



