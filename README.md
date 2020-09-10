![logo](https://raw.githubusercontent.com/victorratts13/pulldata-bet365-api/master/assets/PULLDATA-BET365.png)

 

![version](https://img.shields.io/badge/Version-2.0-blue) ![env](https://img.shields.io/badge/enviroment-Node-green) ![pack](https://img.shields.io/badge/package-NPM-red)

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

``` sh
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

## get Nexts Games

for get next games use this.

``` js
game.getNexts(33, 0, 28, 28).then((nexts) => {
    console.log(nexts)
}).catch((err) => {
    console.log(err)
})
```

this code return this

``` js
{
    info: 'SV UNDEBA',
    bcData: '20200707003000',
    ptData: 'L1-1-5-50463301-2-737_33_0',
    fdData: 'SV UNDEBA v RKSV Centro Dominguito',
    mlData: '90897722C1A_33_0/1777-90897722C1A_33_0',
    n2: 'RKSV Centro Dominguito',
    id: 'PC865475127',
    fi: '90897722'
},
```
> - info: name of team
> - bcData: Date Time format of game
> - ptData: info of link and open markets
> - fdData: Game Name
> - mlData: info of FI hash and connect markets
> - n2: name of guest Team
> - id: id of game
> - fi: FId bet365 of game

## Get Matchs

to get game matches you can use this:

```javascript
game.getMatchs(33, 0, 28, 28).then((nexts) => {
	for(matchs of nexts){
		console.log(matchs)
		//console.log(matchs.first.NNA)
		//console.log(matchs.first.NNA)
	}
}).catch((err) => {
	console.log(err)
})
```
and return this
```javascript
{
  first: {
    NBC: '20200729010000',
    NFS: '0',
    NPT: '',
    NMT: '1',
    NCL: '1',
    NCC: 'Mexico Apertura',
    NTR: '',
    NIA: '1',
    NPD: '#AC#B1#C1#D8#E91567768#F3#',
    NCB: 'AI#AG#AR#AW#BS#BB#BZ#BM#BO#BR#VG#CA#KY#CL#CO#CR#CU#DM#DO#EC#SV#GF#GD#GP#GT#GY#HT#HN#JM#MQ#MX#MS#AN#NI#PA#PY#PE#PR#KN#LC#VC#SR#TC#TT#US#UY',
    NVI: 'VE#FK#UM#GS#PM;VI=7',
    NNA: 'Monterrey vs Toluca',
    NKI: '6 vs 2',
    NKC: '#F0F0F0,#022857,#F0F0F0,#F0F0F0,#C40010,#0046A8,#022857 vs #C40010,#C40010,#C40010,#C40010,#C40010,#0046A8,#C40010;'
  },
  data: {
    CTID: '907485142',
    CTOR: '2',
    CTCL: '1',
    CTFI: '91567768',
    CTNA: 'Toluca',
    CTN2: '2',
    CTOD: '6/1',
    CTHA: '',
    CTHD: '',
    CTSU: '0',
    CTBS: 'Toluca',
    CTPH: '0',
    CTLA: ';'
  }
}
```
## get All events

this method you can get all games (in play and matchs)

~~~js
game.getAllGames(33, 0, 28, 28).then((plays) => {
	//console.log(plays)
	for(loop of plays){
		console.log(loop)
	}
})
~~~

this method returns a javascript object with all data 

~~~js
{
  type: 'eventPlay',
  data: {
    ID: 'PC993345835',
    NA: 'LA Galaxy II',
    N2: 'San Diego Loyal',
    FD: 'LA Galaxy II v San Diego Loyal',
    FI: '92863934',
    BC: '20200910030000',
    LI: '1502-1',
    PD: '#AC#B1#C1#D8#E92863934#F3#I1#P^13#Q^0#',
    IT: 'ACB1C1D13F2Q1F12RCC-PA-AEACB1C1D8E92863934F3I1P13Q0',
    FS: '0',
    MR: '28'
  }
}
~~~

## contact

~~~json
{

    telegram: @VictorRatts,
    email: "victor.ratts13@gmail.com"

}
~~~
