// line Graph

const labels1 = [0, 1, 3,4,5,8,9];
const data1 = {
  labels:labels1,
  datasets:[{
    label:"",
    backgroundColor:'#6f54e1', //
    data:[0,3,5,4,9,7,2]
  }]
};
const config1 = {
  type:'line',
  data:data1,
  options:{}
}

const label2 = [0, 1, 3,4,5,8,9];
const data2 = {
  labels:label2,
  datasets:[{
    label:"",
    backgroundColor:'#fe9e43', //
    data:[0,2,6,9,3,4,2]
  }]
};
const config2 = {
  type:'line',
  data:data2,
  options:{}
}

const char1 = document.getElementById('btc__graph');
const myChar1 = new Chart(document.getElementById('btc__graph'), config1);

const char2 = document.getElementById('eth__graph');
const myChar2 = new Chart(document.getElementById('eth__graph'), config2);
