window.onload = function() {

}

function keyPress() {
    window.addEventListener("keyup", function(e) {
        switch (e.key) {
            case 'w':
                fruit.type = 'apple';
                this.keysPressed.push(fruit);
                this.sendLightsToFirebase('red');
                break;
            case 'e':
                fruit.type = 'banana';
                this.keysPressed.push(fruit);
                this.sendLightsToFirebase('yellow');
                break;
            case 'r':
                fruit.type = 'celery';
                this.keysPressed.push(fruit);
                this.sendLightsToFirebase('green');
                break;
            case 't':
                fruit.type = 'blueberry';
                this.keysPressed.push(fruit);
                this.sendLightsToFirebase('blue');
                break;
        }
    });
}
