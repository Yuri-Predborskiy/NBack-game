var nBack = nBack || {};

nBack.Preload = function() {};

nBack.Preload.prototype = {
    preload: function() {
        this.load.image('red0', 'img/red0.png');
        this.load.image('blue0', 'img/blue0.png');
        this.load.image('red1', 'img/red1.png');
        this.load.image('blue1', 'img/blue1.png');
        this.load.image('red2', 'img/red2.png');
        this.load.image('blue2', 'img/blue2.png');
        this.load.image('red3', 'img/red3.png');
        this.load.image('blue3', 'img/blue3.png');    
        this.load.image('red4', 'img/red4.png');
        this.load.image('blue4', 'img/blue4.png');
        this.load.image('red5', 'img/red5.png');
        this.load.image('blue5', 'img/blue5.png');
        this.load.image('red6', 'img/red6.png');
        this.load.image('blue6', 'img/blue6.png');
        this.load.image('red7', 'img/red7.png');
        this.load.image('blue7', 'img/blue7.png');
        this.load.image('red8', 'img/red8.png');
        this.load.image('blue8', 'img/blue8.png');    
        this.load.image('grid', 'img/grid.png');
        
        this.load.image('2back_1color', 'img/2BACK_1COLOR_BUTTON.png');
        this.load.image('2back_2color', 'img/2BACK_2COLOR_BUTTON.png');
        this.load.image('3back_1color', 'img/3BACK_1COLOR_BUTTON.png');
        this.load.image('3back_2color', 'img/3BACK_2COLOR_BUTTON.png');
        this.load.image('4back_1color', 'img/4BACK_1COLOR_BUTTON.png');
        this.load.image('4back_2color', 'img/4BACK_2COLOR_BUTTON.png');
    },
    create: function() {
        this.state.start('MainMenu');
    }
};