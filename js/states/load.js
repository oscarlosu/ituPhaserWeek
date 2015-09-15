var loadState = {
    preload: function() {
        // Add loading label
        var loadingLabel = game.add.text(80, 150, 'loading...', {font: '30px Courier', fill: '#ffffff'});
        // Load assets
        game.load.image('player', 'assets/yellow.png');
        game.load.image('win', 'assets/grey.png');
    },
    create: function() {
    	// Call menu state
        game.state.start('menu');
    }
};