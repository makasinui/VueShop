<script>
export default {
}
</script>

<template>

<footer>
    <div class="row">
        <div class="col-3">
            <span>+7-999-928-12-12</span>
            <span>+7-999-928-12-12</span>
        </div>

        <div class="col-3">
            <span>
                г.Ростов-на-Дону <br>
                ул. Московская 29а
            </span>
        </div>

        <div class="col-3">
            <span>
                <svg width="25" height="25" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M48 24C48 10.7438 37.2562 0 24 0C10.7438 0 0 10.7438 0 24C0 35.9813 8.775 45.9094 20.25 47.7094V30.9375H14.1562V24H20.25V18.7125C20.25 12.6984 23.8313 9.375 29.3156 9.375C31.9406 9.375 34.6875 9.84375 34.6875 9.84375V15.75H31.6594C28.6781 15.75 27.75 17.6016 27.75 19.5V24H34.4062L33.3422 30.9375H27.75V47.7094C39.225 45.9094 48 35.9813 48 24Z" fill="#1877F2"/>
                    <path d="M33.3422 30.9375L34.4062 24H27.75V19.5C27.75 17.6016 28.6781 15.75 31.6594 15.75H34.6875V9.84375C34.6875 9.84375 31.9406 9.375 29.3156 9.375C23.8313 9.375 20.25 12.6984 20.25 18.7125V24H14.1562V30.9375H20.25V47.7094C21.4734 47.9016 22.725 48 24 48C25.275 48 26.5266 47.9016 27.75 47.7094V30.9375H33.3422Z" fill="white"/>
                </svg>
                <span>@favorit</span>
                </span>
        </div>
    </div>
</footer>
</template>

<style lang="scss" scoped>
    footer{
        width:100%;
        margin-top: 4%;
        background-color:#C6D6FF;
        height:100px;
    }

    .row{
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    .col-3{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 1.5%;
        span{
            font-family: Roboto;
            font-style: normal;
            font-weight: normal;
            font-size: 18px;
            line-height: 21px;
            color: #000000;
            display: flex;
            align-items: center;
            margin-top: 2%;
        }
        svg{
            display: flex;
        }
        
    }
</style>
