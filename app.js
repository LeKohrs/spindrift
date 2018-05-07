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
        showMain: true
    },
    methods: {
        keyPress: function() {
            window.addEventListener("keyup", e => {
                this.showDrink = true;
                this.showMain = false;
                switch (e.key) {
                    case 'w':
                        if(this.drink == this.drinks.HalfHalf.drink) {
                            this.reset();
                        }
                        else {
                            this.drink = {};
                            this.drink = this.drinks.HalfHalf.drink;
                        }
                        break;
                    case 'e':
                        if(this.drink == this.drinks.Strawberry.drink) {
                            this.reset();
                        }
                        else {
                            this.drink = {};
                            this.drink = this.drinks.Strawberry.drink;
                        }
                        break;
                    case 'r':
                        if(this.drink == this.drinks.Grapefruit.drink) {
                            this.reset();
                        }
                        else {
                            this.drink = {};
                            this.drink = this.drinks.Grapefruit.drink;
                        }
                        break;
                    case 't':
                        if(this.drink == this.drinks.Blackberry.drink) {
                            this.reset();
                        }
                        else {
                            this.drink = {};
                            this.drink = this.drinks.Blackberry.drink;
                        }
                        break;
                    case 'y':
                        if(this.drink == this.drinks.Cucumber.drink) {
                            this.reset();
                        }
                        else {
                            this.drink = {};
                            this.drink = this.drinks.Cucumber.drink;
                        }
                        break;
                    case 'u':
                        if(this.drink == this.drinks.Lemon.drink) {
                            this.reset();
                        }
                        else {
                            this.drink = {};
                            this.drink = this.drinks.Lemon.drink;
                        }
                        break;
                    case 'i':
                        if(this.drink == this.drinks.OrangeMango.drink) {
                            this.reset();
                        }
                        else {
                            this.drink = {};
                            this.drink = this.drinks.OrangeMango.drink;
                        }
                        break;
                    case 'o':
                        if(this.drink == this.drinks.RaspberryLime.drink) {
                            this.reset();
                        }
                        else {
                            this.drink = {};
                            this.drink = this.drinks.RaspberryLime.drink;
                        }
                        break;
                }
            });
        },
        reset: function() {
            this.showDrink = false;
            this.showMain = true;
            this.drink = {};
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
