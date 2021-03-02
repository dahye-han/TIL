// console.log('argv 속성의 파라미터 수 : ' + process.argv.length);
// console.dir(process.argv);

// if (process.argv.length > 2) {
//     console.log('세 번째 파라미터의 값 : %s', process.argv[2]);
// }

// process.argv.forEach(function(item, index) {
//     console.log(index + ':' , item);
// });

// console.log(process.env);
// console.log('OS 환경 변수의 값 : ' + process.env['os']);

var http = require('http');

var server = http.createServer();

var port = 3000;
server.listen(port, function(){
    console.log('웹 서버가 시작되었습니다. : %d', port);
})

