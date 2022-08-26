// function odds(){
//     for(var i = 0; i < 20; i++) {
//         console.log((i*2)+1);
//     }
// }
// odds();
var x = 0;
var i = 0;
while (x < 20) {
    if(x > 0) {
        console.log(x);
    }
    x = (i*2)+1;
    i++;
}