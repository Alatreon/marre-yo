function HeroCheck ()
{
	this.heroPosCheck ='left';
	this.heroPosCheckV = 'bot';
<<<<<<< HEAD
	/*height+top*/
	this.obstacleHoriSizeB = Self.Map.obstacleHoriSizeB+Self.Map.obstacleHoriSizeT;
	/*width+left*/
	this.obstacleHoriSizeR = Self.Map.obstacleHoriSizeR+Self.Map.obstacleHoriSizeL;
	/*top*/
	this.obstacleHoriSizeT = Self.Map.obstacleHoriSizeT;
	/*left-herosize*/
	this.obstacleHoriSizeL = Self.Map.obstacleHoriSizeL-Self.Hero.heroSize;
=======
	this.obstacleHoriSizeT = (260);
	this.obstacleHoriSizeB = (260)+25;
	this.obstacleHoriSizeR = (494)+300;
	this.obstacleHoriSizeL = (494-64);
>>>>>>> 3489588837024f9933f5aaf6ccec1fa87674a3e5
	this.jumpSizeBool=false;
}

HeroCheck.prototype=
{
	heroMapCheckPos : function ()
	{
		this.heroMapCheckHorizontal();
		this.heroMapCheckVertical();
		Self.Map.mapScroll();
	},
	heroMapCheckVertical : function ()
	{
		/*TOP*/
<<<<<<< HEAD
		if(Self.Hero.heroStyleTop+Self.Hero.heroSize<this.obstacleHoriSizeT)
=======
		if(Self.Hero.heroStyleTop+64<this.obstacleHoriSizeT)
>>>>>>> 3489588837024f9933f5aaf6ccec1fa87674a3e5
		{
			this.heroPosCheckV='top';
		}
		/*MIDDLEL*/
<<<<<<< HEAD
		if(Self.Hero.heroStyleTop+Self.Hero.heroSize-2>this.obstacleHoriSizeT && Self.Hero.heroStyleTop+Self.Hero.heroSize<this.obstacleHoriSizeB+Self.Hero.heroSize)
=======
		if(Self.Hero.heroStyleTop+64-2>this.obstacleHoriSizeT && Self.Hero.heroStyleTop+64<this.obstacleHoriSizeB+64)
>>>>>>> 3489588837024f9933f5aaf6ccec1fa87674a3e5
		{
			this.heroPosCheckV='middleL';
		}
		/*BOT*/
<<<<<<< HEAD
		if(Self.Hero.heroStyleTop+Self.Hero.heroSize>this.obstacleHoriSizeB+Self.Hero.heroSize)
=======
		if(Self.Hero.heroStyleTop+64>this.obstacleHoriSizeB+64)
>>>>>>> 3489588837024f9933f5aaf6ccec1fa87674a3e5
		{
			this.heroPosCheckV='bot';
		}
	},
	heroMapCheckHorizontal : function ()
	{
		/*LEFT*/
		if(Self.Hero.heroStyleLeft<this.obstacleHoriSizeL && Self.Hero.heroStyleLeft<this.obstacleHoriSizeR)
		{
			if(this.heroPosCheck=='middle' && this.heroPosCheckV=='top' && Self.Hero.heroMoveJumpBool)
			{
				Self.Hero.fallBool=true;
				Self.Hero.heroJump(0);
			}
			this.heroPosCheck='left';
			Self.Hero.heroFloor=Self.Map.heroFloor;
		}
		/*MIDDLE*/
		if(Self.Hero.heroStyleLeft>this.obstacleHoriSizeL && Self.Hero.heroStyleLeft<this.obstacleHoriSizeR)
		{
			this.heroPosCheck='middle';
			if(Self.Hero.heroStyleTop<this.obstacleHoriSizeB+2 && this.heroPosCheckV=='bot')
			{
				this.jumpSizeBool=true;
			}
			else
			{
				this.jumpSizeBool=false;
			}
			if(this.heroPosCheckV=='bot'){Self.Hero.heroFloor=Self.Map.heroFloor;}
<<<<<<< HEAD
			if(this.heroPosCheckV=='top'){Self.Hero.heroFloor=this.obstacleHoriSizeT-Self.Hero.heroSize;}
=======
			if(this.heroPosCheckV=='top'){Self.Hero.heroFloor=this.obstacleHoriSizeT-64;}
>>>>>>> 3489588837024f9933f5aaf6ccec1fa87674a3e5
		}
		/*RIGHT*/
		if(Self.Hero.heroStyleLeft>this.obstacleHoriSizeL+2 && Self.Hero.heroStyleLeft>this.obstacleHoriSizeR)
		{
			if(this.heroPosCheck=='middle' && this.heroPosCheckV=='top' && Self.Hero.heroMoveJumpBool)
			{
				Self.Hero.fallBool=true;
				Self.Hero.heroJump(0);
			}
			this.heroPosCheck='right';
			Self.Hero.heroFloor=Self.Map.heroFloor;
		}
	},
	heroMapCheck : function (e)
	{
		this.heroMapCheckPos();
		if(e=='R')
		{
			if(this.heroPosCheck=='left' && Self.Hero.heroStyleLeft>this.obstacleHoriSizeL-4 && this.heroPosCheckV=='middleL')
			{
				Self.Hero.heroMoveVal=0;
			}
			else
			{
				Self.Hero.heroMoveVal=2;
			}}
		if(e=='L')
		{
			if(this.heroPosCheck=='right' && Self.Hero.heroStyleLeft<this.obstacleHoriSizeR+1 && this.heroPosCheckV=='middleL')
			{
				Self.Hero.heroMoveVal=0;
			}
			else
			{
				Self.Hero.heroMoveVal=2;
			}
		}
	}
}