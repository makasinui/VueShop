<script>

export default {
  props:{
      catalog_data:{

      }
  }
  ,
  data() {
      return {
        
  }
}
}

</script>

<template>
    <div class="catalog-item">
        <figure>
            <img src="../assets/catalog/ssr.png" alt="">
        
        <figcaption>
            <span class="item-text"><br>
                Монета СССР 1 рубль <br> 1980г
                <br><br>
                155P
            </span>
            <br><br>
            <div class="btn"><button>Купить</button></div>
        </figcaption>
        </figure>
    </div>
    
</template>

<style lang="scss" scoped>

figure{
    margin:0 0 0 2%;
}

.item-text{
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    color: #000000;

}
.catalog-item{
    width:350px;

}

.btn{
    margin-left:8%;
}

button{
    width: 187px;
    height: 52px;
    background: #1a68cd;
    border-radius: 8px;
    border:1px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    color: #FFFFFF;
    text-transform: uppercase;

    &:hover{
        transition: 0.5s all;
        background:#1554a7;
        cursor:pointer;
    }
}
</style>



