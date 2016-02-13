function KeyboardKey ()
{
	this.menuEchape=true;
	this.test='';
}
KeyboardKey.prototype=
{
	actionKeys : function () 
	{
		var self=this;
		$(document).bind('keydown', function(evt)
		{
			self.keyDown(evt);
			console.log("r")
		});
		$(document).bind('keyup', function(evt)
		{
			self.keyUp(evt);
		});

	},
	keyDown : function (evt)
	{	
		switch(evt.keyCode)
		{
			case 27:
				if(Self.Menu.screenViewVal==1)
				{
					if(self.menuEchape)
					{
						self.menuEchape=false;		
						Self.Menu.modalInGameMenu();
					}
					else
					{
						self.menuEchape=true;
						Self.Menu.destroyMenu();
					}
				}
			break;
			case 32:
				if(evt.keyCode==32 && Self.Hero.heroMoveJumpBool || evt.keyCode==90 && Self.Hero.heroMoveJumpBool || Self.HeroCheck.fallBool)
				{
					Self.Hero.heroJump();
				}
			break;
			case 68:
				// if(this.test!='droite')
				// {
				// 	this.test='gauche';
					if(evt.keyCode==68 && Self.Hero.heroMoveRightBool)
					{
						Self.Hero.heroRight();				
					}
					// console.log(this.test)
				// }
			 break;
			case 81:
				// if(this.test!='gauche')
				// {
					// this.test='droite';
					if(evt.keyCode==81 && Self.Hero.heroMoveLeftBool)
					{
						Self.Hero.heroLeft();				
					}
					// console.log(this.test)
				// }
			break;
		}	
	},
	keyUp : function (evt)
	{
		this.test='';
		Self.Hero.heroMoveStop(evt);
	}
}