// Initialize Firebase
var config = {
    apiKey: "AIzaSyD-ayFxsfLD0_PrBZht9Z93iWWpSdgahOE",
    authDomain: "spindrift-4f1b2.firebaseapp.com",
    databaseURL: "https://spindrift-4f1b2.firebaseio.com",
    projectId: "spindrift-4f1b2",
    storageBucket: "",
    messagingSenderId: "505378437671"
};
firebase.initializeApp(config);

const database = firebase.database()

var app = new Vue({
    el: '#app',
    data: {
        drinks: [],
        drink: {},
        showDrink: false,
        showMain: true,
        keyTick: 0,
        firstWarning: false,
        finalWarning: false,
        alarm: false,
        shutdown: false,
        laCroix: false,
        currentDrink: null
    },
    methods: {
        keyPress: function() {
            window.addEventListener("keydown", e => {
                if(e.key === 'w' || e.key === 'e' || e.key === 'r' || e.key === 't' || e.key === 'y' || e.key === 'u' || e.key === 'u' || e.key === 'i' || e.key === 'o') {
                    this.keyTick++
                    if(this.keyTick >= 20 && this.keyTick <= 80) {
                        this.firstWarning = true
                    }
                    else if (this.keyTick >= 81 && this.keyTick <= 120) {
                        this.firstWarning = false
                        this.finalWarning = true
                    }
                    else if (this.keyTick >= 121 && this.keyTick <= 180) {
                        this.finalWarning = false
                        this.alarm = true
                        let alarm = document.getElementsByClassName('alarm-bell')[0]
                        alarm.play()                
                    }
                    else if (this.keyTick >= 181) {
                        this.alarm = false
                        let alarm = document.getElementsByClassName('alarm-bell')[0]
                        alarm.pause()
                        alarm.currentTime = 0
                        this.shutdown = true                      
                    }
                }
                if (e.key === 'd') {
                    this.laCroix = true
                    let alarm = document.getElementsByClassName('alarm-bell')[0]
                    alarm.play()
                }   
            });
            window.addEventListener("keyup", e => {
                if(e.key === 'p'){
                    this.reset()
                }
                switch (e.key) {
                    case 'w':
                        this.drink = {}
                        this.drink = this.drinks.HalfHalf.drink;
                        this.currentDrink = 'HalHalf'
                        this.resetWarnings()
                        this.showDrinks()
                        break;
                    case 'e':
                        this.drink = {}
                        this.drink = this.drinks.Strawberry.drink;
                        this.currentDrink = 'Strawberry'
                        this.resetWarnings()
                        this.showDrinks()
                        break;
                    case 'r':
                        this.drink = {}
                        this.drink = this.drinks.Grapefruit.drink;
                        this.currentDrink = 'Grapefruit'
                        this.resetWarnings()
                        this.showDrinks()
                        break;
                    case 't':
                        this.drink = {}
                        this.drink = this.drinks.Blackberry.drink;
                        this.currentDrink = 'Blackberry'
                        this.resetWarnings()
                        this.showDrinks()
                        break;
                    case 'y':
                        this.drink = {}
                        this.drink = this.drinks.Cucumber.drink;
                        this.currentDrink = 'Cucumber'
                        this.resetWarnings()
                        this.showDrinks()
                        break;
                    case 'u':
                        this.drink = {}
                        this.drink = this.drinks.Lemon.drink;
                        this.currentDrink = 'Lemon'
                        this.resetWarnings()
                        this.showDrinks()
                        break;
                    case 'i':
                        this.drink = {}
                        this.drink = this.drinks.OrangeMango.drink;
                        this.currentDrink = 'OrangeMango'
                        this.resetWarnings()
                        this.showDrinks()
                        break;
                    case 'o':
                        this.drink = {}
                        this.drink = this.drinks.RaspberryLime.drink;
                        this.currentDrink = 'RaspberryLime'
                        this.resetWarnings()
                        this.showDrinks()
                        break;
                    case 'd':
                        this.laCroix = false
                        let alarm = document.getElementsByClassName('alarm-bell')[0]
                        alarm.pause()
                        alarm.currentTime = 0
                        break
                    case 's':
                        console.log(this.drinks)
                        break
                    case 'a':
                        console.log(this.drinks)
                        break
                }
            });
        },
        showDrinks: function() {
            this.showDrink = true
            this.showMain = false
        },
        reset: function() {
            this.firstWarning = false
            this.finalWarning = false
            this.alarm = false
            this.shutdown = false            
            this.showDrink = false;
            this.showMain = true;
            this.drink = {};
            this.keyTick = 0;
        },
        resetWarnings: function() {
            this.keyTick = 0
            this.firstWarning = false
            this.finalWarning = false
            this.alarm = false  
            let alarm = document.getElementsByClassName('alarm-bell')[0]
            alarm.pause()
            alarm.currentTime = 0
        }
    },
    mounted() {
        this.keyPress();
    },
    created() {
        database.ref('drinks').on('value', snapshot => {
            this.drinks = snapshot.val();
        })
        // console.log(this.drinks);
    }
})
