// import package
const inplay = require('./index');
//define inplay
let game = new inplay();
//insert params
game.getInplay(33, 0, 28, 28).then((rest) => {
    for (pull of rest) {
    	//console.log(pull)
        if(pull.ptData.substring(0, 2) == 'L1'){
			//console.log(pull)
			var link = pull.ptData.substring(7, 15)
			console.log('#######################')
			console.log('\x1b[31mgameName:\x1b[37m'+ pull.fdData)
		    console.log('\x1b[31mgameHash:\x1b[37m'+ pull.ptData)
		    console.log(`\x1b[31mgamelink: \x1b[37mhttps://www.bet365.com/#/IP/EV15${link}2C1\x1b[0m`)
		}
    }
}).catch((err) => {
    console.log('Error: ' + err)
})