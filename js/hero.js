function Hero ()
{
	this.heroFloor=544;
	this.heroStyleTop = this.heroFloor/*($('#hero').css('top').replace(/[^-\d\.]/1, ''))*g*/;
	this.heroStyleLeft = 250/*($('#hero').css('margin-left').replace(/[^-\d\.]/g, ''))*1*/;
	this.heroMoveLeftBool = true;
	this.heroMoveRightBool = true;
	this.heroMoveJumpBool = true;
	/*ANIM*/
	this.heroMoveAnimeI = 0;
	this.heroMoveAnimeLeRi= 'right';
	this.heroMoveAnime = $('#hero').css('background-position');
	this.heroMoveJumpBoolAnim=true;

	this.heroMoveJumpInter = 'Interval';
	this.heroMoveLeftInter = 'Interval';
	this.heroMoveRightInter = 'Interval';
	this.heroMoveVal =2;
	this.fallBool=false;
	this.heroMoveJumpBoolInter = true;
	this.heroStyleTopI=0;
	this.heroStyleTopVal=-2;
	/**/
	this.heroJumpSize=76;
	this.heroFloorComp=0;
	this.heroFloorCompBool=false;
	/**/
	this.heroSize=64;
	/*gold*/
	this.gold=0;
	/*vie*/
	this.life=3;
	this.heroInvincibilityBool=false;
	this.invincInter=0;
	/*scoremob*/
	this.combo=0;
}
Hero.prototype =
{
	creatHero : function ()
	{
		/*creation*/
		var heroDiv = document.createElement('div');
		/*stylisation*/
		heroDiv.id='hero';
	    heroDiv.style.position='fixed';
		heroDiv.style.width='64px';
	    heroDiv.style.height='64px';
	    heroDiv.style.marginLeft='250px';
	    heroDiv.style.top=this.heroFloor;   
	    heroDiv.style.overflow='hidden';
	    heroDiv.style.backgroundPosition='0px 64px';
	    heroDiv.style.backgroundImage="url('img/mariosprite.png')";
	    /*placement*/
		document.body.appendChild(heroDiv);
   	},
	heroAnim : function (move1, move2)/*FAIRE UN SWITCH AVEC LES DIFFERENTE ANIM : SAUT,GAUCHE,DROITE,MARCHE,MORT,*/
	{
		if(!this.heroMoveJumpBoolAnim)
		{
			if(this.heroMoveAnimeLeRi == 'right')
			{
				this.heroMoveAnime='-320px 64px';
			}
			else
			{	
				this.heroMoveAnime='384px 64px'
			}
		}
		else
		{
			if(this.heroMoveAnimeI<15)
			{
				this.heroMoveAnime=move1;	
				this.heroMoveAnimeI+=1;
			}
			if(this.heroMoveAnimeI>14 && this.heroMoveAnimeI<30)
			{
				this.heroMoveAnime=move2;
				this.heroMoveAnimeI+=1;
			}
			if(this.heroMoveAnimeI>29)
			{
				this.heroMoveAnimeI=0;
			}
		}
	},
	heroLeftRight : function (v)
	{
		if(v=='right')
		{
			if(this.heroMoveRightBool)
			{
				this.heroMoveAnimeLeRi = 'right';
			}
		}
		if(v=='left')
		{
			if(this.heroMoveLeftBool)
			{
				this.heroMoveAnimeLeRi = 'left';
			}
		}
	},
	heroLeft : function ()
	{
		var self=this;
		this.heroLeftRight('left');
		this.heroMoveLeftBool = false;
		this.heroStyleLeft -= this.heroMoveVal;
		$('#hero').css('margin-left', this.heroSytleLeft);	
		Self.HeroCheck.heroMapCheck();
		this.heroMoveLeftInter = setInterval(function()
		{
			self.heroStyleLeft -= self.heroMoveVal;									
			self.heroAnim('128px 64px','256px 64px');
			$('#hero').css(
			{
				'margin-left': self.heroStyleLeft,
				"background-position": self.heroMoveAnime
			});		
			Self.HeroCheck.heroMapCheck();				
		},5);
	},
	heroRight : function ()
	{
		var self=this;
		this.heroLeftRight('right');
		this.heroMoveRightBool = false;
		this.heroStyleLeft += this.heroMoveVal;
		$('#hero').css('margin-left', this.heroStyleLeft);
		Self.HeroCheck.heroMapCheck();
		this.heroMoveRightInter = setInterval(function()
		{
			self.heroAnim('-64px 64px','-192px 64px');
			self.heroStyleLeft += self.heroMoveVal;
			$('#hero').css(
			{
				'margin-left': self.heroStyleLeft,
				'background-position': self.heroMoveAnime
			});
			Self.HeroCheck.heroMapCheck();
		},5);
	},
	heroJump : function ()
	{
		var self=this;
		this.heroFloorCompBool=true;
		this.heroMoveJumpBool=false;
		this.heroMoveJumpBoolAnim=false;
		this.heroAnim();
		Self.HeroCheck.heroMapCheck();
		this.heroMoveJumpInter = setInterval(
		function()
		{
			if(self.heroStyleTopI>self.heroJumpSize && self.heroMoveLeftBool && self.heroMoveRightBool|| Self.HeroCheck.fallBool)
			{
				if(self.heroMoveAnimeLeRi=='right')
				{
					self.heroMoveAnime='0px 64px';
				}
				else
				{
					self.heroMoveAnime='64px 64px';
				}
			}
			if(self.life>0)
			{
				$('#hero').css("background-position", self.heroMoveAnime);
			}
			if(self.heroStyleTopI>self.heroJumpSize && self.heroMoveJumpBoolInter || Self.HeroCheck.fallBool)
			{
				Self.HeroCheck.fallBool=false;
				self.heroMoveJumpBoolInter=false;
				self.heroMoveJumpBoolAnim=true;
				self.heroStyleTopVal=self.heroStyleTopVal*(-1);
			}
			if(self.heroStyleTop>self.heroFloor)	
			{
				self.heroStyleTopI=0;
				self.heroStyleTop=self.heroFloor+self.heroStyleTopVal;
				self.heroMoveJumpBool=true;
				self.heroFloorCompBool=true;
				self.heroMoveJumpBoolInter=true;
				self.heroStyleTopVal=self.heroStyleTopVal*(-1);
				clearInterval(self.heroMoveJumpInter);
			}
			self.heroStyleTopI+=1;
			self.heroStyleTop=self.heroStyleTop+self.heroStyleTopVal;
			$('#hero').css('top',self.heroStyleTop);
			Self.HeroCheck.heroMapCheck();
		},1);
	},
	heroMoveStop : function (evt)
	{
		if(evt.keyCode==68 && !this.heroMoveRightBool)
		{
			clearInterval(this.heroMoveRightInter);
			$('#hero').css('background-position', '0px 64px');
			this.heroMoveRightBool=true;
		}
		if(evt.keyCode==81 && !this.heroMoveLeftBool)
		{
			clearInterval(this.heroMoveLeftInter);
			$('#hero').css('background-position', '64px 64px');
			this.heroMoveLeftBool=true;
		}
		if(this.life<1)
		{
			clearInterval(this.heroMoveRightInter);
			clearInterval(this.heroMoveLeftInter);
		}
	},
	heroKillMob : function ()
	{
		if(this.life>0)
		{
			$('#hero').css("background-position","384px 64px")/*.animate(
				{top:"-=20"},500,function(){
				})*/;
		}
	},
	heroInvincibility : function ()
	{
		self=this;
		this.heroInvincibilityBool = true;
		var i = 0;
	   	if(this.life>0)
		{
		   	this.invincInter = setInterval(
		   	function()
		   	{
		   		if(i%2==1){$('#hero').css("opacity","1");}
		   		if(i%2==0){$('#hero').css("opacity","0.5");}
		   		if(i>25)
		   		{
		   			Self.Hero.heroInvincibilityBool = false;
		   			$('#hero').css("opacity","1");
					clearInterval(Self.Hero.invincInter);
		   		}
		   		i+=1;
		   	},50);
		}
	},
	heroDie : function ()
	{
		if(this.life<1)
		{
			$(document).off();
			this.heroMoveStop(0);
			$('#hero').css("background-position","448px 64px").delay(150).animate(
				{top:"-=100"},500,function()
				{
					$(this).animate({top:"+=300"},600);}
				);
		}
	}
}