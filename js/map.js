function Map ()
{
	this.heroFloor=600;
	this.mapStart=(-Self.Hero.heroSize);
	this.bodyHeight=($('body').css('height').replace(/[^-\d\.]/g, ''))*1;
	this.mapEnd=($('body').css('width').replace(/[^-\d\.]/g, ''))*1
;	this.obstacleArray = [[25,100,450,275],[25,100,550,75],[25,100,475,475],[25,100,350,475],[25,100,150,25],[25,100,250,250],[25,100,550,675]];
}
Map.prototype = 
{
	mapScroll : function()
	{
		self=this;
		window.addEventListener('resize', function()
			{
				self.mapEnd=($('body').css('width').replace(/[^-\d\.]/g, ''))*1;
			}
		);			
		if(Self.Hero.heroStyleLeft<(Self.Map.mapStart)){$('#hero').css('margin-left', Self.Map.mapEnd+'px');Self.Hero.heroStyleLeft=Self.Map.mapEnd;}
		if(Self.Hero.heroStyleLeft>(Self.Map.mapEnd)){$('#hero').css('margin-left', Self.Map.mapStart+'px');Self.Hero.heroStyleLeft=Self.Map.mapStart;}
	},
	backgroundStyle : function()
	{
		var backgroundImage=document.body.style;
		backgroundImage.backgroundImage="url(img/backgroundmin.png)";
		backgroundImage.backgroundPosition='0px  -'+(this.bodyHeight-Self.Hero.heroSize)+'px';
	},
	creatObstacles : function ()
	{
		this.backgroundStyle();

		for(var i=0;i<this.obstacleArray.length;i++)
		{
			/*creation*/
			var obstacle = document.createElement('div');
			obstacle.setAttribute('id','obstacle'+i)
			/*stylisation*/
		    obstacle.style.position='fixed';
		    obstacle.style.height=this.obstacleArray[i][0]+'px';
	    	obstacle.style.width=this.obstacleArray[i][1]+'px';
		    obstacle.style.marginTop=(this.obstacleArray[i][2]-8)+'px';/*-8 suite a la stylisation de la div hero et de la div obstacle en js*/  
		    obstacle.style.marginLeft=this.obstacleArray[i][3]+'px'; 
		    obstacle.style.borderRadius='5px';
		    obstacle.style.backgroundColor='brown';
		    /*placement*/
	    	document.body.appendChild(obstacle);
    	}
   	}
}