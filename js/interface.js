function Interface ()
{

}
Interface.prototype = 
{
	gameInterface : function ()
	{
		var conteneurInterface = document.createElement('div');
		conteneurInterface.setAttribute("id","conteneurInterface");
		document.body.appendChild(conteneurInterface);

		var lifeInterface = document.createElement('div');
		lifeInterface.setAttribute("id","lifeInterface");
		lifeInterface.style.position='absolute';
		lifeInterface.style.marginTop='5px';
		lifeInterface.style.backgroundImage="url(img/coeur.png)";
		$('#conteneurInterface')[0].appendChild(lifeInterface);
		this.gameInterfaceLife();

		var goldInterface = document.createElement('div');
		goldInterface.setAttribute("id","goldInterface");		
		goldInterface.style.position='absolute';
		goldInterface.style.marginLeft='130px';
		$('#conteneurInterface')[0].appendChild(goldInterface);
		this.gameInterfaceGold();
		
	},
	gameInterfaceGold : function ()
	{
		$('#goldInterface').text(Self.Hero.gold)
	},
	gameInterfaceLife : function ()
	{
		var y =0;
		for(var i=0;i<=Self.Hero.life;i++)
		{
			$('#lifeInterface').css('width',y+'px');
			$('#lifeInterface').css('height','32PX');
			y+=36;
		}
	}

}