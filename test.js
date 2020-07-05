// import package
const inplay = require('./index');
//define inplay
let game = new inplay();
//insert params
game.getInplay(33, 0, 28, 28).then((rest) => {
    for (data of rest) {
        console.log(rest.ptData)
    }
}).catch((err) => {
    console.log('Error: ' + err)
})