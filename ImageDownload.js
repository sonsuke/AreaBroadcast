
require('date-utils');
var nowTime = new Date();
var minutes = nowTime.getMinutes();
var ArrayMinutes = String(minutes).split('');
console.log(ArrayMinutes);

if(ArrayMinutes[1] % 5 == 0){

}else if(0<ArrayMinutes[1]<5){
  ArrayMinutes[1] = 0;
}else{
  ArrayMinutes[1] = 5;
}
var format = nowTime.toFormat("YYYYMMDDHH24"+ArrayMinutes[0]+ArrayMinutes[1]);
console.log(format);

var req = require('request');
var fs = require('fs');

req(
  {method: 'GET', url: "http://www.jma.go.jp/jp/radnowc/imgs/radar/205/"+format+"-00.png", encoding: null},
  function (error, response, body){
    if(!error && response.statusCode === 200){
      fs.writeFileSync(format+'.png', body, 'binary');
    }
  }
);
