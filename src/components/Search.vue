<script>
import { mapActions, mapGetters } from "vuex"
export default {
    data(){
        return{
            searchValue:''
        }
    },
    computed:{
        ...mapGetters([
            'SEARCH_VALUE'
        ]),
        inp(){
            console.log(this.SEARCH_VALUE)
            return this.SEARCH_VALUE
        }
    },
    methods:{
        ...mapActions([
            'GET_SEARCH_VALUE_TO_VUEX'
        ]),
        search(value){
            this.GET_SEARCH_VALUE_TO_VUEX(value)

        }
    }
}

</script>

<template>

<div>
    <input type="text" name="" id="" placeholder="Поиск товаров..." class="input" v-model="searchValue">
    <img src="../assets/header/search.png" alt="Найти" class="search" @click="search(searchValue)">
</div>
</template>

<style lang="scss" scoped>
.input{
    width:50rem;
    height: 30px;
}

.search{
    position: absolute;
    top:40px;
    right:25%;
    cursor: pointer;
}

@media screen and (min-width:1650px) {
    .search{
        right:23%;
    }
    .input{
        width:75rem;
    }
}
</style>
