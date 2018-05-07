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
        shutdown: false
    },
    methods: {
        keyPress: function() {
            window.addEventListener("keydown", e => {
                if(e.key === 'w' || e.key === 'e' || e.key === 'r' || e.key === 't' || e.key === 'y' || e.key === 'u' || e.key === 'u' || e.key === 'i' || e.key === 'o') {
                    console.log(e.key)
                    this.keyTick++
                    if(this.keyTick >= 20 && this.keyTick <= 40) {
                        this.firstWarning = true
                        console.log('get a room')
                    }
                    else if (this.keyTick >= 41 && this.keyTick <= 60) {
                        this.firstWarning = false
                        this.finalWarning = true
                        console.log('Let go of the can')
                    }
                    else if (this.keyTick >= 61 && this.keyTick <= 100) {
                        this.finalWarning = false
                        this.alarm = true
                        let alarm = document.getElementsByClassName('alarm-bell')[0]
                        alarm.play()
                        console.log('alarm bells')                        
                    }
                    else if (this.keyTick >= 101) {
                        this.alarm = false
                        let alarm = document.getElementsByClassName('alarm-bell')[0]
                        alarm.pause()
                        alarm.currentTime = 0
                        this.shutdown = true
                        console.log("You're done. Move along")                        
                    }
                }   
            });
            window.addEventListener("keyup", e => {
                this.showDrink = true
                this.showMain = false
                if(e.keyCode === 32){
                    this.reset()
                }
                switch (e.key) {
                    case 'w':
                        this.drink = {};
                        this.drink = this.drinks.HalfHalf.drink;
                        break;
                    case 'e':
                        this.drink = {};
                        this.drink = this.drinks.Strawberry.drink;
                        break;
                    case 'r':
                        this.drink = {};
                        this.drink = this.drinks.Grapefruit.drink;
                        break;
                    case 't':
                        this.drink = {};
                        this.drink = this.drinks.Blackberry.drink;
                        break;
                    case 'y':
                        this.drink = {};
                        this.drink = this.drinks.Cucumber.drink;
                        break;
                    case 'u':
                        this.drink = {};
                        this.drink = this.drinks.Lemon.drink;
                        break;
                    case 'i':
                        this.drink = {};
                        this.drink = this.drinks.OrangeMango.drink;
                        break;
                    case 'o':
                        this.drink = {};
                        this.drink = this.drinks.RaspberryLime.drink;
                        break;
                }
            });
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
