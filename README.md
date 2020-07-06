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

#### and return this

``` js
{
    info: 'Tottenham',
    pdata: '#AC#B1#C1#D8#E90175284#F3#I1#P^13#Q^0#',
    bcData: '20200706200000',
    ptData: 'L1-1-5-50345789-2-737_33_0',
    fdData: 'Tottenham v Everton',
    suData: '1',
    mlData: '90175284C1A_33_0/1777-90175284C1A_33_0',
    n2: 'Everton',
    li: '1502-1;AU=5',
    id: 'PC819460022',
    fi: '90175284'
}
```

## using Format Data for get game link

you can use this format data for get params of game in live of next 12h

~~~js
//insert params
game.getInplay(33, 0, 28, 28).then((rest) => {

    for (pull of rest) {
    	//create conditional of PT data
        if(pull.ptData.substring(0, 2) == 'L1'){
            //obtain link Id 
            var link = pull.ptData.substring(7, 15)
            //format Console return
			console.log('#######################')
			console.log('\x1b[31mgameName:\x1b[37m'+ pull.fdData)
		    console.log('\x1b[31mgameHash:\x1b[37m'+ pull.ptData)
		    console.log( `\x1b[31mgamelink: \x1b[37mhttps://www.bet365.com/#/IP/EV15${link}2C1\x1b[0m` )
		}
    }

}).catch((err) => {

    console.log('Error: ' + err)

})
~~~
and get this data

```sh
#######################
gameName:Tottenham v Everton
gameHash:L1-1-5-50345789-2-737_33_0
gamelink: https://www.bet365.com/#/IP/EV15503457892C1
#######################
gameName:Wycombe v Fleetwood Town
gameHash:L1-1-5-50346574-2-737_33_0
gamelink: https://www.bet365.com/#/IP/EV15503465742C1
#######################
gameName:Levante v Real Sociedad
gameHash:L1-1-5-50346951-2-737_33_0
gamelink: https://www.bet365.com/#/IP/EV15503469512C1
#######################
gameName:Sporting Gijón v Girona
gameHash:L1-1-5-50352884-2-737_33_0
gamelink: https://www.bet365.com/#/IP/EV15503528842C1
#######################
gameName:Heidenheim v Werder Bremen
gameHash:L1-1-5-50438746-2-737_33_0
gamelink: https://www.bet365.com/#/IP/EV15504387462C1
#######################
gameName:Botev Vratsa v Dunav Ruse
gameHash:L1-1-5-50437724-2-737_33_0
gamelink: https://www.bet365.com/#/IP/EV15504377242C1
#######################
gameName: FIF;N2=Tvååkers IF;FD=
gameHash:L1-1-5-50437924-2-737_33_0
gamelink: https://www.bet365.com/#/IP/EV15504379242C1
#######################
gameName:Kayserispor v Besiktas
gameHash:L1-1-5-50353304-2-737_33_0
gamelink: https://www.bet365.com/#/IP/EV15503533042C1
```
## contact

~~~json
{

    telegram: @VictorRatts,
    email: "victor.ratts13@gmail.com"

}
~~~
