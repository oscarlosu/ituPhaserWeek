// Create Phaser game object variable
var game = new Phaser.Game(640, 480, Phaser.AUTO, 'gameDiv');
// Create game states
game.state.add('boot', bootState);
game.state.add('load', loadState);
game.state.add('menu', menuState);
game.state.add('play', playState);
game.state.add('end', endState);

// Start the game
game.state.start('boot');