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
		this.Map.creatObstacles();
		this.Hero.heroMove();
	}
}