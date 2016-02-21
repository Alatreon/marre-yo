function HeroCheck ()
{
	this.boolCheck=true;
	this.jumpSizeBool=false;
	this.colisionBorder=3;
	this.fallBool=false;
}

HeroCheck.prototype=
{
	heroMapCheck : function ()
	{
		Self.Map.mapScroll();
		
		for(var i=0;i<Self.Map.obstacleArray.length;i++)
		{
			var hero = {x: Self.Hero.heroStyleLeft, y: Self.Hero.heroStyleTop, width: Self.Hero.heroSize, height: Self.Hero.heroSize};
			var rect = {x: Self.Map.obstacleArray[i][3], y: Self.Map.obstacleArray[i][2], width: Self.Map.obstacleArray[i][1], height: Self.Map.obstacleArray[i][0]};

			if (hero.x - this.colisionBorder < rect.x + rect.width
			 && hero.x + hero.width + this.colisionBorder > rect.x
			 && hero.y - this.colisionBorder < rect.y + rect.height
			 && hero.y + this.colisionBorder + hero.height > rect.y)
			{
				if(Self.Map.obstacleArray[i][4]==0)
				{
					this.colObsCheck(i,hero,rect);
				}
				if(Self.Map.obstacleArray[i][4]==1)
				{
					this.colGoldCheck(i);
				}
				if(Self.Map.obstacleArray[i][4]==3)
				{
					this.colMobCheck(i,hero,rect);
				}
			}
		}
	},
	colObsCheck : function (i,hero,rect)
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
			{
				Self.Hero.heroMoveVal=0;
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
		if((hero.y + hero.height) - this.colisionBorder < rect.y && Self.Hero.heroMoveJumpBool && !this.fallBool)
		{
			/*droite vers la gauche*/
			if(hero.x - (this.colisionBorder/2) > rect.x + rect.width)
			{
				this.fallBool=true;
				Self.Hero.heroJump(0);
			}
			/*gauche vers la droite*/
			if((hero.x + Self.Hero.heroSize)+(this.colisionBorder/2) < rect.x)
			{
				this.fallBool=true;
				Self.Hero.heroJump(0);
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
	colGoldCheck : function (i)
	{
		$('#gold'+i).remove();
		Self.Map.obstacleArray[i][4]=2;
		Self.Hero.gold+=1;
		Self.Interface.gameInterfaceGold();
	},
	colMobCheck : function(i,hero,rect)
	{
		/*top*/
		if((hero.y + hero.height) - this.colisionBorder < rect.y)
		{
			Self.Map.obstacleArray[i][4]=4;
			Self.Hero.heroKillMob(i);
			Self.Mob.mobDie(i);
		}
		else
		{
			if(!Self.Hero.heroInvincibilityBool)
			{
				Self.Hero.life-=1;
				Self.Interface.gameInterfaceLife();
				Self.Hero.heroInvincibility();
				Self.Hero.heroDie();
			}
		}
	}
}