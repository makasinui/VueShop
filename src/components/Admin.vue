
<template>
<HeaderVue/> 
<main class="admin container">
<section class="admin_items">
    <div class="canvas-1">
        <span class="canvas_text">График покупок</span>
        <canvas width="500" height="500" id="canvas"></canvas>
    </div>
    <div class="canvas-2">
        <span class="canvas_text">График соотношение пользователей к покупателям </span>  
        <canvas id="chart" width="300" height="300"></canvas>  
    </div>   
</section>
 
</main>

</template>

<script>
import HeaderVue from './Header.vue'
document.addEventListener('DOMContentLoaded',()=>{
    
    let canvas = document.getElementById('canvas');
    let ctx = canvas.getContext('2d');
    ctx.fillStyle = "black"; // Задаём чёрный цвет для линий
    ctx.lineWidth = 2.0; // Ширина линии
    ctx.beginPath(); // Запускает путь
    ctx.moveTo(30, 10); // Указываем начальный путь
    ctx.lineTo(30, 460); // Перемешаем указатель
    ctx.lineTo(500, 460); // Ещё раз перемешаем указатель
    ctx.stroke(); // Делаем контур
    // Цвет для рисования
    ctx.fillStyle = "black";
    // Цикл для отображения значений по Y
    for(let i = 0; i < 6; i++) {
        ctx.fillText((5 - i) * 20 + "", 4, i * 80 + 60);
        ctx.beginPath();
        ctx.moveTo(25, i * 80 + 60);
        ctx.lineTo(30, i * 80 + 60);
        ctx.stroke();
    }
    
    let labels = ["ЯНВАРЬ", "ФЕВРАЛЬ", "МАРТ", "АПРЕЛЬ", "МАЙ"];
    
    for(let i=0; i<5; i++) {
        ctx.fillText(labels[i], 50+ i*100, 475);
    }

    let data = [ 10, 53, 39, 54, 21 ]; 
 
// Назначаем зелёный цвет для графика
ctx.fillStyle = "green"; 
// Цикл для от рисовки графиков
for(let i=0; i<data.length; i++) { 
    var dp = data[i]; 
    ctx.fillRect(40 + i*100, 460-dp*5 , 50, dp*5); 
}

var drawingCanvas = document.getElementById('chart');
var num = 75
if(drawingCanvas && drawingCanvas.getContext) {
  var context = drawingCanvas.getContext('2d');
  // рисуем окружность
  context.fillStyle = "red";
  context.strokeStyle = "#ddd";
  context.beginPath();
  context.arc(100,100,86,0,Math.PI*2,true);
  context.closePath();
  context.fill();
 
  // рисуем сектор окружности num%
  context.fillStyle = "green";
  context.beginPath();
  context.moveTo(100, 100);
  //координаты старта определяем так чтоб закрашенная область всегда была снизу
  var start=(Math.PI/180)*90-((Math.PI/180)*num*360/100)/2
  context.arc(100,100,86,start,start+(Math.PI/180)*num*360/100,false);
  context.closePath();
  context.fill();
 
  // закрашиваем внутреннюю окружность меньшего радиуса
  context.fillStyle = "#F8F8F8";
  context.beginPath();
  context.arc(100,100,54,0,Math.PI*2,true);
  context.closePath();
  context.fill();
 
  // пишем текст
  context.fillStyle = "green";
  context.font = "20pt Tahoma";
  context.textAlign = "center";
  context.textBaseline = 'middle';
  var x=drawingCanvas.width/2;
  var y=drawingCanvas.height/2;
  context.fillText(num+"%"+' покупателей', x,y+80);

}
})

export default {
  components:{
      HeaderVue
  }
  ,
  data() {
      return {
          cart:0,

  }
}
}

</script>


<style lang="scss" scoped>
.canvas_text{
    font-size: 24px;
}
.admin_items{
    display: flex;
    
}
#canvas {
    border: 1px solid black;
}
canvas{
    margin-top: .5%;
}

.canvas-1, .canvas-2{
    margin-top: 3%;
    display: flex;
    flex-direction: column;
    width:30%;
}

.canvas-2{
    margin-left:auto;
}
</style>



