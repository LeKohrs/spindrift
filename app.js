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

const database = firebase.database();
const dbRefButton = firebase.database().ref('buttons');

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
        currentDrink: null,
        allDrinks: ['HalfHalf', 'Strawberry', 'Grapefruit', 'Blackberry', 'Cucumber', 'Lemon', 'OrangeMango', 'RaspberryLime']
    },
    methods: {
        keyPress: function() {
            window.addEventListener("keydown", e => {
                if(e.key === 'r' || e.key === 'u' || e.key === 'o') {
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
                    case 'r':
                        this.drink = {}
                        this.drink = this.drinks.Grapefruit.drink;
                        this.currentDrink = 'Grapefruit'
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
                        this.nextDrink()
                        console.log(this.currentDrink)
                        break
                    case 'a':
                        this.previousDrink()
                        console.log(this.currentDrink)
                        break
                }
            });
        },
        nextDrink: function() {
            for (let i = 0, l = this.allDrinks.length; i < l; i++) {
                if (this.currentDrink === this.allDrinks[i]) {
                    if (this.currentDrink === this.allDrinks[this.allDrinks.length - 1]) {
                        this.currentDrink = this.allDrinks[0]
                        this.sortDrinks(this.currentDrink)
                        return
                    }
                    else {
                        this.currentDrink = this.allDrinks[i + 1]
                        this.sortDrinks(this.currentDrink)
                        return
                    }
                }
            }
        },
        previousDrink: function() {
            for (let i = 0, l = this.allDrinks.length; i < l; i++) {
                if (this.currentDrink === this.allDrinks[i]) {
                    if (this.currentDrink === this.allDrinks[0]) {
                        this.currentDrink = this.allDrinks[this.allDrinks.length - 1]
                        this.sortDrinks(this.currentDrink)
                        return
                    }
                    else {
                        this.currentDrink = this.allDrinks[i - 1]
                        this.sortDrinks(this.currentDrink)
                        return
                    }
                }
            }
        },
        sortDrinks: function(drink) {
            if(drink === 'Lemon') {
                this.drink = this.drinks.Lemon.drink;
            }
            else if (drink === 'HalfHalf') {
                this.drink = this.drinks.HalfHalf.drink;
            }
            else if (drink === 'Strawberry') {
                this.drink = this.drinks.Strawberry.drink;
            }
            else if (drink === 'Grapefruit') {
                this.drink = this.drinks.Grapefruit.drink;
            }
            else if (drink === 'Blackberry') {
                this.drink = this.drinks.Blackberry.drink;
            }
            else if (drink === 'Cucumber') {
                this.drink = this.drinks.Cucumber.drink;
            }
            else if (drink === 'OrangeMango') {
                this.drink = this.drinks.OrangeMango.drink;
            }
            else if (drink === 'RaspberryLime') {
                this.drink = this.drinks.RaspberryLime.drink;
            }

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
        let alarm = document.getElementsByClassName('alarm-bell')[0]
        database.ref('drinks').on('value', snapshot => {
            this.drinks = snapshot.val();
        });
        dbRefButton.on("value", snap => {
            let larcroxButtonValue = snap.val().lacroix;
            if(larcroxButtonValue) {
                this.laCroix = false;
                alarm.pause();
            }
            else {
                this.laCroix = true;
                alarm.play();
            }
        });
    }
})
