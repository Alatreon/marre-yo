function HeroCheck ()
{
	this.boolCheck=true;
	this.jumpSizeBool=false;
	this.colisionBorder=3;
}

HeroCheck.prototype=
{
	heroMapCheck : function ()
	{
		/* Ajouter une boucle de colision et des que qq rentre en colision noter l'id de l'obstacle et l'utiliser ici*/

		for(var i=0;i<Self.Map.obstacleArray.length;i++)
		{
			var hero = {x: Self.Hero.heroStyleLeft, y: Self.Hero.heroStyleTop, width: Self.Hero.heroSize, height: Self.Hero.heroSize};
			var rect = {x: Self.Map.obstacleArray[i][3], y: Self.Map.obstacleArray[i][2], width: Self.Map.obstacleArray[i][1], height: Self.Map.obstacleArray[i][0]};

			if (hero.x - this.colisionBorder < rect.x + rect.width && hero.x + hero.width + this.colisionBorder > rect.x && hero.y - this.colisionBorder < rect.y + rect.height && hero.height + hero.y + this.colisionBorder > rect.y)
			{
				this.colCheck(i,hero,rect);
			}
		}
	},
	colCheck : function (i,hero,rect)
	{
			if (hero.x < rect.x + rect.width && hero.x + hero.width > rect.x && hero.y < rect.y + rect.height && hero.height + hero.y > rect.y && this.boolCheck)
			{
				this.boolCheck=false;
				/*gauche vers la droite*/
				if((hero.x + Self.Hero.heroSize)-this.colisionBorder < rect.x)
				{
					Self.Hero.heroMoveVal=0;
				}
				/*droite vers la gauche*/
				if(hero.x + this.colisionBorder > rect.x + rect.width)
				
{					Self.Hero.heroMoveVal=0;
				}
				/*top*/
				if((hero.y + hero.height) - this.colisionBorder < rect.y)
				{
					Self.Hero.heroFloor=(rect.y - hero.height);
					Self.Hero.heroMoveVal=2; 
				}
				/*bot*/
				if(hero.y + this.colisionBorder > rect.y + rect.height)
				{
					Self.Hero.heroJumpSize=rect.y + rect.height - hero.y;
					Self.Hero.heroMoveVal=2;
				}
			}

			//reinitialisation
			
			if ((hero.x + Self.Hero.heroSize) < rect.x || hero.x > rect.x + rect.width || (hero.y + hero.height) < rect.y || hero.y > rect.y + rect.height)
			{
				this.boolCheck=true;
				Self.Hero.heroMoveVal=2;
				Self.Hero.heroFloor=Self.Map.heroFloor;
				Self.Hero.heroJumpSize=76;
				this.jumpSizeBool=false;
			}

	},
	heroColCheck : function (i,hero,rect)
	{

	}
}