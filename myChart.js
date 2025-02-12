// bar graph
const labels = [
  '10',
  '15',
  '20',
  '25',
  '30',
  '35',
  '40'
];

const data = {
  labels:labels,
  datasets:[{
    label:"BETWEEN SEPT 9-27",
    backgroundColor:'#fe9e43',
    data:[7, 15, 24, 20, 19, 55, 37]
  }]

};

const config = {
  type:'bar',
  data:data,
  options:{}
};
const chart = document.getElementById('myChart');

const myChar = new Chart(document.getElementById('myChart'), config);


//toggle side bar

const side_menu = document.querySelector('.menu-icon');
const right_bar = document.querySelector('.side-right-icon');
const close_menu_left = document.querySelector('.close-icon-left');
const close_menu_right = document.querySelector('.close-icon-right');
const right_container = document.querySelector('.right-container');
const left_container = document.querySelector('.left-container');

side_menu.addEventListener('click', ()=>{
  left_container.style.display="block";
  left_container.style.width="4em";
  left_container.style.tranform="translateX(200%)"
});

close_menu_left.addEventListener('click', ()=>{
  left_container.style.display="none";
  left_container.style.width="0";
});

close_menu_right.addEventListener('click', ()=>{
  right_container.style.width="0";
  right_container.style.display="none";

})

right_bar.addEventListener('click', ()=>{
  // right_container.style.width="90%";
  right_container.style.display="block";


});
