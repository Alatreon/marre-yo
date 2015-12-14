function Game ()
{	
	Self=this;		
	this.Hero=new Hero;
	this.Map=new Map;
	this.HeroCheck=new HeroCheck;

}
Game.prototype=
{
	gameStart : function () 
	{				
<<<<<<< HEAD
		this.Map.creatObstacles();
=======
>>>>>>> 3489588837024f9933f5aaf6ccec1fa87674a3e5
		this.Hero.heroMove();
	}
}