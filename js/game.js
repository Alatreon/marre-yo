function Game ()
{	
	Self = this;		
	this.Hero = new Hero;
	this.Map = new Map;
	this.HeroCheck = new HeroCheck;
	this.Menu = new Menu;
}
Game.prototype=
{
	startMenu : function ()
	{
		this.Menu.startMenu();
	},
	gameStart : function () 
	{
		this.Hero.creatHero();
		this.Map.creatObstacles();
		this.Hero.heroMove();
	}
}