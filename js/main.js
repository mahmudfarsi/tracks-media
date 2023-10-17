const $ = document;
const audio = $.querySelectorAll('audio');
const play = $.querySelectorAll('.fa-solid');


play.forEach(item=>{
  item.addEventListener('click',(e)=>{
    let dataItem = e.target.dataset.name;
    audio.forEach(value=>{
      if(value.dataset.name === dataItem){
        item.className = 'fa-solid fa-play';
        value.play();
        value.currentTime =0;
      }else{
        value.pause();
        item.className = 'fa-solid fa-pause';
      }
    })
  })
})