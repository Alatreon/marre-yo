function HeroCheck ()
{
	this.heroPosCheck =[];
	this.heroPosCheckV = [];
	this.jumpSizeBool=false;
	this.herofloorHighest=Self.Hero.heroFloor;
}

HeroCheck.prototype=
{
	heroMapCheckPos : function (a,b,c,d,i,f)
	{
		this.heroMapCheckHorizontal(a,b,c,d,i);
		this.heroMapCheckVertical(a,b,c,d,i);
		Self.Map.mapScroll();
	},
	heroMapCheckHorizontal : function (a,b,c,d,i)
	{
		/*LEFT*/
		if(Self.Hero.heroStyleLeft<d && Self.Hero.heroStyleLeft<b)
		{
			if(this.heroPosCheck[i]=='middle' && this.heroPosCheckV[i]=='top' && Self.Hero.heroMoveJumpBool)
			{
				Self.Hero.fallBool=true;
				Self.Hero.heroJump(0);
			}
			this.heroPosCheck[i]='left';
			Self.Hero.heroFloor=Self.Map.heroFloor;
		}
		/*MIDDLE*/
		if(Self.Hero.heroStyleLeft>d && Self.Hero.heroStyleLeft+2<b)
		{
			this.heroPosCheck[i]='middle';
			if(Self.Hero.heroStyleTop<a+2 && this.heroPosCheckV[i]=='bot')
			{
				this.jumpSizeBool=true;
			}
			else
			{
				this.jumpSizeBool=false;
			}
			if(this.heroPosCheckV[i]=='bot'){Self.Hero.heroFloor=Self.Map.heroFloor;}
			if(this.heroPosCheckV[i]=='top')
			{
				if((c-Self.Hero.heroSize)<Self.Hero.heroFloor)
				{
					Self.Hero.heroFloor=(c-Self.Hero.heroSize);
				}
			}
		}
		/*RIGHT*/
		if(Self.Hero.heroStyleLeft>d+2 && Self.Hero.heroStyleLeft>b)
		{
			if(this.heroPosCheck[i]=='middle' && this.heroPosCheckV[i]=='top' && Self.Hero.heroMoveJumpBool)
			{
				Self.Hero.fallBool=true;
				Self.Hero.heroJump(0);
			}
			this.heroPosCheck[i]='right';
			Self.Hero.heroFloor=Self.Map.heroFloor;

		}
	},
	heroMapCheckVertical : function (a,b,c,d,i)
	{
		/*TOP*/
		if(Self.Hero.heroStyleTop+Self.Hero.heroSize<c)
		{
			this.heroPosCheckV[i]='top';
		}
		/*MIDDLEL*/
		if(Self.Hero.heroStyleTop+Self.Hero.heroSize-2>c && Self.Hero.heroStyleTop+Self.Hero.heroSize<a+Self.Hero.heroSize)
		{
			this.heroPosCheckV[i]='middleL';
		}
		/*BOT*/
		if(Self.Hero.heroStyleTop+Self.Hero.heroSize>a+Self.Hero.heroSize)
		{
			this.heroPosCheckV[i]='bot';
		}
	},
	heroMapCheck : function (e)
	{
		for(var i=0;i<Self.Map.obstacleArray.length;i++)
		{
			/*height+top*/
			var a = Self.Map.obstacleArray[i][0]+Self.Map.obstacleArray[i][2];
			/*width+left*/
			var b = Self.Map.obstacleArray[i][1]+Self.Map.obstacleArray[i][3];
			/*top*/
			var c = Self.Map.obstacleArray[i][2];
			/*left-herosize*/
			var d = Self.Map.obstacleArray[i][3]-Self.Hero.heroSize;

			this.heroMapCheckPos(a,b,c,d,i);

			$('#div'+i).text('div'+i+' a:'+a+' b:'+b+' c:'+c+' d:'+d);

			$('#heroInfo'+i).text('heroLeft:'+Self.Hero.heroStyleLeft+' heroTop:'+Self.Hero.heroStyleTop+' heroPosCheck['+i+']:'+this.heroPosCheck[i]+' heroPosCheckV['+i+']:'+this.heroPosCheckV[i]);

			$('#condtest'+i).text(i+' - '+Self.Hero.heroStyleLeft+'>'+(b-10)+' && '+Self.Hero.heroStyleLeft+'<'+(d-10));

			$('#obstacle'+i).text(i);

			if(e=='R')
			{
				/* pour les performances il faut convertir les strings d'etat en booleens exemple la strings this.heroPosCheckV[i]=='middleL' par this.HeroPosmiddeLBool[i]==true */
				if(this.heroPosCheck[i]=='left' && Self.Hero.heroStyleLeft>(d-4) && this.heroPosCheckV[i]=='middleL')
				{
					Self.Hero.heroMoveVal=0;
				}
			}
			if(e=='L')
			{
				if(this.heroPosCheck[i]=='right' && Self.Hero.heroStyleLeft<(b+1) && this.heroPosCheckV[i]=='middleL')
				{
					Self.Hero.heroMoveVal=0;
				}
			}
			if(this.heroPosCheckV[i]!='middleL' && (Self.Hero.heroStyleLeft>(b-10) || Self.Hero.heroStyleLeft<(d+10)))
			{
				Self.Hero.heroMoveVal=2;
			}
		}
	}
}