function Hero ()
{
	this.heroStyleTop = ($('#hero').css('top').replace(/[^-\d\.]/g, ''))*1;
	this.heroStyleLeft = ($('#hero').css('margin-left').replace(/[^-\d\.]/g, ''))*1;
	this.heroMoveLeftBool = true;
	this.heroMoveRightBool = true;
	this.heroMoveJumpBool = true;
	this.heroMoveAnimeI = 0;
	this.heroMoveAnimeLeRi= 'right';
	this.heroMoveAnime = $('#hero').css('background-position');
	this.heroMoveJumpInter = 'Interval';
	this.heroMoveLeftInter = 'Interval';
	this.heroMoveRightInter = 'Interval';
	this.heroMoveVal =2;
	this.fallBool=false;
	this.heroMoveJumpBoolInter = true;
	this.heroMoveJumpBoolAnim=true;
	this.heroStyleTopI=0;
	this.heroStyleTopVal=-2;
	/**/
	this.heroJumpSize=75;
	this.heroFloor=300;
	this.heroFloorComp=0;
	this.heroFloorCompBool=false;
	/**/
	this.heroSize=64;
}
Hero.prototype =
{
	heroAnim : function (move1, move2)
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
	heroMoveFunc : function (evt)
	{
		var self=this;
		this.heroLeft(evt);
		this.heroRight(evt);
		this.heroJump(evt);
	},
	heroLeft : function (evt)
	{
		var self=this;
		if(evt.keyCode==81 && this.heroMoveLeftBool)
		{	
			this.heroLeftRight('left');
			this.heroMoveLeftBool = false;
			Self.HeroCheck.heroMapCheck('L');
			this.heroStyleLeft -= this.heroMoveVal;
			$('#hero').css('margin-left', this.heroSytleLeft);	
			this.heroMoveLeftInter = setInterval(function()
			{
				Self.HeroCheck.heroMapCheck('L');
				self.heroStyleLeft -= self.heroMoveVal;									
				self.heroAnim('128px 64px','256px 64px');
				$('#hero').css(
				{
					'margin-left': self.heroStyleLeft,
					"background-position": self.heroMoveAnime
				});						
			},5);
		}

	},
	heroRight : function (evt)
	{
		var self=this;
		if(evt.keyCode==68 && this.heroMoveRightBool)
		{	
			this.heroLeftRight('right');
			this.heroMoveRightBool = false;
			Self.HeroCheck.heroMapCheck('R');
			this.heroStyleLeft += this.heroMoveVal;
			$('#hero').css('margin-left', this.heroStyleLeft);
			this.heroMoveRightInter = setInterval(function()
			{
				Self.HeroCheck.heroMapCheck('R');
				self.heroAnim('-64px 64px','-192px 64px');
				self.heroStyleLeft += self.heroMoveVal;
				$('#hero').css(
				{
					'margin-left': self.heroStyleLeft,
					'background-position': self.heroMoveAnime
				});
			},5);
		}
	},
	heroJump : function (evt)
	{
		var self=this;
		if( !typeof(evt.keyCode) == 'number' )
		{
			evt.keyCode=0;
		}
		if(evt.keyCode==32 && this.heroMoveJumpBool || evt.keyCode==90 && this.heroMoveJumpBool || this.fallBool)
		{
			this.heroFloorCompBool=true;
			this.heroMoveJumpBool=false;
			this.heroMoveJumpBoolAnim=false;
			this.heroAnim();
			Self.HeroCheck.heroMapCheckPos();
			this.heroMoveJumpInter = setInterval(
				function()
				{
					Self.HeroCheck.heroMapCheckPos();
					if(self.heroStyleTopI>self.heroJumpSize && self.heroMoveLeftBool && self.heroMoveRightBool || Self.HeroCheck.jumpSizeBool || self.fallBool)
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
					$('#hero').css("background-position", self.heroMoveAnime);
					if(self.heroStyleTopI>self.heroJumpSize && self.heroMoveJumpBoolInter || Self.HeroCheck.jumpSizeBool || self.fallBool)
					{
						self.fallBool=false;
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
					Self.HeroCheck.heroMapCheckPos();
				},1);
		}
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
	},
	heroMove : function()
	{
		var self=this;
		$(document).bind('keydown', function(evt)
		{
			self.heroMoveFunc(evt);
		});
		$(document).bind('keyup', function(evt)
		{
			self.heroMoveStop(evt);
		});
	}
}