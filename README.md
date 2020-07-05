![logo](https://raw.githubusercontent.com/victorratts13/pulldata-bet365-api/master/assets/PULLDATA-BET365.png)
 
![version](https://img.shields.io/badge/Version-1.0.0-brightgreen) ![env](https://img.shields.io/badge/enviroment-Node-green) ![pack](https://img.shields.io/badge/package-NPM-red)

## Pull data bet365
package for analyzing live games and in-play events.

## install

~~~bash
~$ npm install pulldata-bet-api --save
~~~

## use

~~~javascript
// import package
const inplay = require('pulldata-bet-api');
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
~~~

## contact

~~~json
{
    telegram: @VictorRatts,
    email: "victor.ratts13@gmail.com"
}
~~~
