function Game ()
{	
	Self = this;
	this.Menu = new Menu;
	this.KeyboardKey = new KeyboardKey;
	this.Hero = new Hero;
	this.Map = new Map;
	this.HeroCheck = new HeroCheck;
}
Game.prototype=
{
	startStartMenu : function ()
	{
		this.Menu.startMenu();
		this.KeyboardKey.actionKeys();
	},
	gameStart : function () 
	{
		this.Hero.creatHero();
		this.Map.creatObstacles();
		this.Hero.heroMove();
	}
}