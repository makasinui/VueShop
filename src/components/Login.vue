<script>

export default {
  modules:{

  },
    data() {
        return {
            isOpen:0,
            login:'',
            password:'',
            correct:false,
            text:''
        }
    },
    methods:{
        check(){
            if(this.login=='admin' && this.password=='admin'){
                this.correct = !this.correct
                this.$router.push('/admin')
            } else{
                if(this.login!='' && this.password!='')
                this.text = 'Неправильный логин/пароль'
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
                <form action="" @submit.prevent="check">
                    <input required type="text" v-model="login"  name="login" id="login" placeholder="Login"> *
                    <input required type="password" v-model="password"  name="pass" id="pass" placeholder="Password"> * <br>
                    <button type="submit" value="Войти">Войти</button>
                </form>
                <br>
                {{this.text}}
            </div>
        </div>
    </div>
</div>
</template>

<style lang="scss" scoped>

input,button{
    margin-left:50px;
}
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
        height: 180px;
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



