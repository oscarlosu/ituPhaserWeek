var bootState = {
	create: function () {
		// Start physics engine
		game.physics.startSystem(Phaser.Physics.ARCADE);
		// Call load state
		game.state.start('load');
	}
};