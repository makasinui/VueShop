<script>
export default {
}
</script>

<template>

<div>
    <input type="text" name="" id="" placeholder="Поиск товаров..." class="input">
    <img src="../assets/header/search.png" alt="Найти" class="search">
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
