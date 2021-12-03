<script>
import SearchVue from "./Search.vue"
import CartVue from "./Cart.vue"
import Login from './Login.vue'
export default {
    components:{
        SearchVue
        ,
        CartVue,
        Login
    },
  data() {
      return {

      }
  }
}
</script>

<template>

<header class="container">
    <div class="content">
        <article class="top">
            <div class="logo">
               <a href=""><img src="../assets/header/logo.png" alt=""></a>
            </div>

            <div class="search">
                <SearchVue />
            </div>

            <Login />

            <div class="cart">
                <CartVue />
            </div>
        </article>



        <article class="bottom">
            <nav class="menu">
                <ul>
                    <router-link to="/about-us">
                        <li>О нас</li>
                    </router-link>
                        <router-link to="/delivery">
                            <li>Доставка</li>
                        </router-link>
                        <router-link to="/payment">
                            <li>Оплата</li>
                        </router-link>
                        <router-link to="/contacts">
                            <li>Контакты</li>
                        </router-link>
                        <router-link to="/contacts">
                            <li>Новости</li>
                        </router-link>
                </ul>
            </nav>
        </article>
        



    </div>
</header>

</template>

<style lang="scss" scoped>

.top{
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.search{
    margin-right: 5%;
}

.login{
    text-transform: uppercase;
    font-size: 18px;
    padding:1px;
    font-family: 'Roboto', 'Arial';
    &:hover{
        border-bottom:1px solid black;
}
}

.menu {
    background-color: #08169B;
    ul{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        padding:15px 0px;
        li{
            opacity: 0.6;
            font-size:18px;
            font-family: "Roboto";
            color:white;
            &:hover{
                transition: all 0.2s;
                opacity: 1;
            }
        }
       
    }
}
</style>



