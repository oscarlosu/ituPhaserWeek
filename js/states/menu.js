var menuState = {
    create: function() {
        // Display name of the game
        var nameLabel = game.add.text(80, 80, 'Color Experiment', {font: '50px Arial', fill: '#ffffff'});
        // Give instructions on how to start the game
        var startLabel = game.add.text(80, game.world.height - 80, 'Press "W" key to start the game', {font: '25px Arial', fill: '#ffffff'});
        // Define w key
        var wKey = game.input.keyboard.addKey(Phaser.Keyboard.W);
        // When the player presses the W key, call start function
        wKey.onDown.addOnce(this.start, this);
    },
    start: function() {
        game.state.start('play');
    }
};