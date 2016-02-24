function Hero ()
{
	this.heroFloor=544;
	this.heroStyleTop = this.heroFloor/*($('#hero').css('top').replace(/[^-\d\.]/1, ''))*g*/;
	this.heroStyleLeft = 250/*($('#hero').css('margin-left').replace(/[^-\d\.]/g, ''))*1*/;
	this.heroMoveLeftBool = true;
	this.heroMoveRightBool = true;
	this.heroMoveJumpBool = true;
	/*ANIM*/
	this.heroMoveAnimeVal;
	this.heroMoveAnime=0;
	this.heroMoveAnimeOption=1;
	this.heroMoveAnimeI = 0;

	this.heroMoveJumpInter = 'Interval';
	this.heroMoveLeftInter = 'Interval';
	this.heroMoveRightInter = 'Interval';
	this.heroMoveVal=2;
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
	heroLeft : function ()
	{
		this.heroMoveLeftBool = false;
		this.heroMoveAnimeOption=0;
		this.heroMoveAnime=1;
		this.heroAnim();
		this.heroStyleLeft -= this.heroMoveVal;		
		$('#hero').css({'margin-left': this.heroStyleLeft});
		Self.HeroCheck.heroMapCheck();
	},
	heroRight : function ()
	{
		this.heroMoveRightBool = false;
		this.heroMoveAnimeOption=0;
		this.heroMoveAnime=2;
		this.heroAnim();
		this.heroStyleLeft += this.heroMoveVal;
		$('#hero').css({'margin-left': this.heroStyleLeft});
		Self.HeroCheck.heroMapCheck();
	},
	heroJump : function ()
	{
		var self=this;
		this.heroFloorCompBool=true;
		this.heroMoveJumpBool=false;
		this.heroMoveJumpInter = setInterval(
		function()
		{
			self.heroAnim();
			if(!this.heroMoveLeftBool && !this.heroMoveLeftBool)
			{
				Self.HeroCheck.heroMapCheck();
			}
			if(self.heroStyleTopI>self.heroJumpSize && self.heroMoveJumpBoolInter || Self.HeroCheck.fallBool)
			{
				Self.HeroCheck.fallBool=false;
				self.heroMoveJumpBoolInter=false;
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
		},1);
	},
	heroMoveStop : function (evt)
	{
		if(evt.keyCode==81 && !this.heroMoveLeftBool)
		{
			clearInterval(this.heroMoveLeftInter);
			this.heroMoveAnimeOption=0;
			this.heroMoveAnime=0;
			this.heroAnim();
			this.heroMoveLeftBool=true;
		}
		if(evt.keyCode==68 && !this.heroMoveRightBool)
		{
			clearInterval(this.heroMoveRightInter);
			this.heroMoveAnimeOption=1;
			this.heroMoveAnime=0;
			this.heroAnim();
			this.heroMoveRightBool=true;
		}
	},
	heroKillMob : function ()
	{
		self=this;
			$('#hero').css("background-position","384px 64px")
			.animate(
				{top:"-=20"},500,function(){
					Self.HeroCheck.fallBool=true;
					self.heroJump();
				});
	},
	heroInvincibility : function ()
	{
		self=this;
		this.heroInvincibilityBool = true;
		var i = 0;
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
	},
	heroDie : function ()
	{
		if(this.life<1)
		{
			$(document).off();
			this.heroMoveAnime=0;
			this.heroMoveAnimeOption=2;
			this.heroAnim();
			$('#hero').delay(150).animate(
				{top:"-=100"},500,function()
					{
						$(this).animate({top:"+=300"},600);
					}
				);
		}
	},
	heroAnim : function ()
	{
		console.log(this.heroMoveAnime+' '+this.heroMoveAnimeOption);
		switch(this.heroMoveAnime)
		{
			case 0:
			/*stop*/
				/*au sol*/
				if(this.heroMoveJumpBool){
					if(this.heroMoveAnimeOption==0)
					{
						this.heroMoveAnimeVal='64px 64px';
					}
					else if(this.heroMoveAnimeOption==1)
					{
						this.heroMoveAnimeVal='0px 64px';
					}
				}
				/*saute*/
				else if(!this.heroMoveJumpBool)
				{
					if (this.heroMoveAnimeOption==0)
					{
						if(this.heroStyleTopVal==2){this.heroMoveAnimeVal='64px 64px';}else{this.heroMoveAnimeVal='384px 64px';}
					}
					else if (this.heroMoveAnimeOption==1)
					{
						if(this.heroStyleTopVal==2){this.heroMoveAnimeVal='0px 64px';}else{this.heroMoveAnimeVal='-320px 64px';}
					}
				}
				/*mort*/
				if(this.heroMoveAnimeOption==2)
				{
					this.heroMoveAnimeVal='448px 64px';
				}
			break;

			case 1:
			/*gauche*/			
				console.log('L'+this.heroMoveAnimeOption);
				if (this.heroMoveJumpBool)
				{
				/*au sol*/
					if(this.heroMoveAnimeOption==0)
					{
					 	if(this.heroMoveAnimeI<15)
					 	{	
					 		this.heroMoveAnimeVal='128px 64px';	
					 		this.heroMoveAnimeI+=1;
					 	}
					 	if(this.heroMoveAnimeI>14 && this.heroMoveAnimeI<30)
					 	{
							this.heroMoveAnimeVal='256px 64px';
					 		this.heroMoveAnimeI+=1;
					 	}
					 	if(this.heroMoveAnimeI>29)
					 	{
					 		this.heroMoveAnimeI=0;
					 	}
					}
				}
				else if (!this.heroMoveJumpBool)
				{
				/*saute*/
					if(this.heroMoveAnimeOption==0)
					{
						if(this.heroStyleTopVal==2){this.heroMoveAnimeVal='64px 64px';}else{this.heroMoveAnimeVal='384px 64px';}
					}
				}
			break;

			case 2:		
			/*droite*/
				console.log('R'+this.heroMoveAnimeOption);
				if (this.heroMoveJumpBool)
				{
				/*au sol*/
					if(this.heroMoveAnimeOption==0)
					{
					 	if(this.heroMoveAnimeI<15)
					 	{
					 		this.heroMoveAnimeVal='-64px 64px';
							this.heroMoveAnimeI+=1;
						}
						if(this.heroMoveAnimeI>14 && this.heroMoveAnimeI<30)
						{
					 		this.heroMoveAnimeVal='-192px 64px';
							this.heroMoveAnimeI+=1;
						}
						if(this.heroMoveAnimeI>29)
						{
							this.heroMoveAnimeI=0;
						}
					}
				}
				else if (!this.heroMoveJumpBool)
				{
				/*saute*/
					if(this.heroMoveAnimeOption==0)
					{
						if(this.heroStyleTopVal==2){this.heroMoveAnimeVal='0px 64px';}else{this.heroMoveAnimeVal='-320px 64px';}
					}
				}
			break;
		}
		/*style*/
		$('#hero').css({"background-position": this.heroMoveAnimeVal});		
	}
}