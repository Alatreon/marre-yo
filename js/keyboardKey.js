function KeyboardKey ()
{
	this.menuEchape=true;
}
KeyboardKey.prototype=
{
	actionKeys : function () 
	{
		this.echape();
	},
	echape : function ()
	{	
		var self=this;
		$(document).bind('keydown', function(evt)
		{
			console.log('e');
			switch(evt.keyCode)
			{
				case 27:
					if(Self.Menu.screenViewVal==1)
					{
						if(self.menuEchape)
						{
							console.log('a');
							self.menuEchape=false;		
							Self.Menu.modalInGameMenu();
						}
						else
						{
							console.log('b');
							self.menuEchape=true;	
							Self.Menu.destroyMenu();
						}
					}	
				break;
			}
		});
	}
}