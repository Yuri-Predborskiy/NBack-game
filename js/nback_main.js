var nBack = nBack || {};

nBack.game = new Phaser.Game(600, 800, Phaser.AUTO, '');

var gameWorld = [];
var randomTile = 0;
var timer = 0;
var randomColor = 0;
var frame = "";
var color = "";
var delay = 0;
var gameFrame = 0;
var nBack_frames = 0;
var nBack_colors = 0;
var gameState = { color: "", position: 0 };
var Score = 0;
var scoreString = 'Your Score is ';
var rightOrWrong = "";
var scoreText;
var messageText;
var nbackText;
var nback_text = 'number of frames back is ';

nBack.game.state.add('Preload', nBack.Preload);
nBack.game.state.add('MainMenu', nBack.MainMenu);
nBack.game.state.add('Game', nBack.Game);

nBack.game.state.start('Preload');