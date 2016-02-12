function Game ()
{	
	Self = this;
	this.Menu = new Menu;
	this.KeyboardKey = new KeyboardKey;
	this.Interface = new Interface;
	this.Mob = new Mob;
	this.Hero = new Hero;
	this.Map = new Map(
			[
				[32,128,128,32,0],
				[32,128,480,96,0],
				[32,128,256,224,0],	
				[32,128,128,416,0],	
				[32,128,400,416,0],
				[32,128,352,672,0],
				[32,128,512,672,0],
				[32,128,144,736,0],
				[32,24,64,64,1],
				[32,24,196,800,1],
				[32,24,196,1150,1],
				[32,24,560,608,1],
				[32,31,576,150,3],
				[32,31,576,350,3],
				[32,31,576,1150,3]

			]);
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
		this.Map.creatMap();
		this.Map.backgroundStyle();
		this.Mob.creatMobs();
		this.Hero.creatHero();
		this.Hero.heroMove();
		this.Interface.gameInterface();
	}
}