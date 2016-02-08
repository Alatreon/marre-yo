function KeyboardKey ()
{
	this.menuEchape=true;
}
KeyboardKey.prototype=
{
	actionKeys : function () 
	{
		var self=this;
		$(document).bind('keydown', function(evt)
		{
			self.echape(evt);
		
		});

	},
	echape : function (evt)
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
						console.log("r")
						Self.Menu.destroyMenu();
					}
				}	
			break;
		}	
	}
}