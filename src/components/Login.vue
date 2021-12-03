<script>

export default {
  modules:{

  },
    data() {
        return {
            isOpen:0,
            login:'',
            password:'',
            correct:false
        }
    },
    methods:{
        check(){
            if(this.login=='admin' && this.password=='admin'){
                this.correct = !this.correct
                
            }
        }
    }
}

</script>

<template>

<div class="modal" >
    <span class="span"><a href="" @click.prevent="isOpen=!isOpen">Войти</a></span>
    <div class="modal-" v-show="isOpen">
        <div class="modal-show">
            <div class="text-head">
                Войти
            </div>
            <div class="close" @click.prevent="isOpen=!isOpen">
                ✕
            </div>
            <div class="login">
                <form>
                    Login<input type="text" v-model="login" style="margin-left:23px;" name="login" id="login">
                    Password<input type="password" v-model="password" name="pass" id="pass">
                    <router-link :to='{name:"Contacts",params:{login:"admin",password:"admin"}}'><button @click.prevent="check">Войти</button></router-link>
                </form>
            </div>
        </div>
    </div>
</div>
</template>

<style lang="scss" scoped>
    .modal-{
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
        height: 150px;
        margin: 250px;
        background: #f9f9f9;
        border-radius: 3px;
        position: relative;
        box-shadow: 0 5px 15px black;
    }

.span{
    text-transform: uppercase;
    font-size: 18px;
    padding:1px;
    font-family: 'Roboto', 'Arial';
    &:hover{
        border-bottom:1px solid black;
    }
}

.login{
    display: flex;
    flex-direction: column;
    width:50%;
    margin:0 auto;
    input{
        margin-top: 2%;
    }
}
.text-head{
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 36px;
    line-height: 42px;
    color: #000000;
    width:15%;
    margin:0 auto;
    margin-top: 3%;
}

.close{
    position: absolute;
    cursor:pointer;
    top:5%;
    right:5%;
}



</style>



