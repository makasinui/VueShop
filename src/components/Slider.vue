<script>


export default {
data () {
		return {
			// Всего слайдов
      sliderAllCount: 0,
      // Номер активного слайда
      sliderActive: 1,
      // Отступ тела со слайдами в контейнере
      sliderOffsetLeft: 0,
      // Шаг одного слайда = его длина
      sliderOffsetStep: 0,
      // Список изображений
      sliderList: [
        {img: 'https://www.zg66.ru/images/2021/03/26/390597_big.jpg'},
        {img: 'https://s1.1zoom.me/b5050/610/301588-alexfas01_1600x1200.jpg'},
      
			]
		}
	},
	
	methods: {
    // Иницилизация слайдера
    initSlider: function () {
			// Получаем элементы сладера и его слайдов
      let sliderBody = this.$el.querySelector('.js-slider')
      let sliderSlidies = sliderBody.querySelectorAll('.js-slide')
			// Записываем длину одного слайда для перелистывания
      this.sliderOffsetStep = 1600
      
			// Общее количество слайдов для стопов
      this.sliderAllCount = sliderSlidies.length
    },

		// Открыть слайд по номеру
    openSlide: function (id) {
      if (id > 0 && id <= this.sliderAllCount) {
        this.sliderActive = id
				// Сдвигаем элемент со слайдами
        this.sliderOffsetLeft = -(this.sliderActive * this.sliderOffsetStep - this.sliderOffsetStep)
      }
    },

    // Следующий слайд
    nextSlide: function () {
      if (this.sliderActive < this.sliderAllCount) {
        this.sliderActive += 1
				this.openSlide(this.sliderActive)
      }
    },

    // Предыдущий слайд
    prevSlide: function () {
      if (this.sliderActive > 1) {
        this.sliderActive -= 1
				this.openSlide(this.sliderActive)
      }
    }
  },

  mounted () {
    this.initSlider()

    // Перенастройка слайдера при ресайзе окна
    window.addEventListener('resize', () => {
      this.initSlider()
      this.openSlide(this.sliderActive)
    })
  }
}

</script>

<template>
<div class="slider container">

	
	<div class="action">
    <button v-on:click='prevSlide'>Предыдущий</button>
    <button v-on:click='nextSlide'>Следующий</button>
  </div>

	
	<div class='slider js-slider'>
		<div class="slider__body" v-bind:style='{left: sliderOffsetLeft + "px"}'>
			<div class="slider__slide js-slide" v-for='(slide,index) in sliderList' :key=index ><img :src=slide.img alt="" class="img"></div>
		</div>
	</div>


</div>

</template>

<style lang="scss" scoped>
.slider{
  width:fit-content;
  overflow: hidden;
  padding-left: 250px;
  margin-top: 20px;
}

.action{
  margin-left: 600px;
}



$slider-height: 400px;
$slide-width: 100%;

.slider {
	width: 100%;
	height: $slider-height;
	position: relative;
	overflow: hidden;
	
	&__body {
		min-width: auto;
		height: $slider-height;
		display: flex;
		position: relative;
		align-items: stretch;
		transition: all .5s ease;
	}
	
	&__slide {
    min-width: $slide-width;
		height: 200px;
		background-size: cover;
		background-position: center;
		img{
      max-width:800px;
      max-height: 500px;

    }
	}
}



</style>



