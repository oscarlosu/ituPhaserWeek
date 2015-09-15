var playState = {
	create: function() {
	    // Prepare keyboard for input
	    this.keyboard = game.input.keyboard;
	    // Create player sprite
	    this.player = game.add.sprite(16, 16, 'player');
	    game.physics.enable(this.player, Phaser.Physics.ARCADE);
	    // Create win sprite
	    this.win = game.add.sprite(256, 256, 'win');
	    game.physics.enable(this.win, Phaser.Physics.ARCADE);
	},
	update: function() {
		// WHen the player sprite touches the win sprite, call end function
		game.physics.arcade.overlap(this.player, this.win, this.end, null, null);
		// React to player input
		// Horizontal movement
	    if(this.keyboard.isDown(Phaser.Keyboard.A)) {
	    	this.player.body.velocity.x = -175;
	    } else if(this.keyboard.isDown(Phaser.Keyboard.D)) {
			this.player.body.velocity.x = 175;
	    } else {
	    	this.player.body.velocity.x = 0;
	    }	    
	    // Vertical movement
	    if(this.keyboard.isDown(Phaser.Keyboard.W)) {
	    	this.player.body.velocity.y = -175;
	    } else if(this.keyboard.isDown(Phaser.Keyboard.S)) {
			this.player.body.velocity.y = 175;
	    } else {
	    	this.player.body.velocity.y = 0;
	    }
	},
	end: function() {
		game.state.start('end');
	}
};