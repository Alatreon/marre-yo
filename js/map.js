function Map ()
{
	this.heroFloor=Self.Hero.heroFloor;
	this.mapStart=(-Self.Hero.heroSize);
	this.mapEnd=($('body').css('width').replace(/[^-\d\.]/g, ''))*1;
	/*height*/
	this.obstacleHoriSizeB = 25;
	/*width*/
	this.obstacleHoriSizeR = 100;
	/*top*/
	this.obstacleHoriSizeT = 520/*470bug*/;
	/*left*/
	this.obstacleHoriSizeL = 440;
	this.obstacleArray = [[25,100,520,200],[25,100,520,440]];
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
		backgroundImage.backgroundPosition='0px  -657px';/*-1034px -870px*/
	},
	creatObstacles : function ()
	{
		this.backgroundStyle();

		for(var i=0;i<this.obstacleArray.length;i++)
		{
			/*creation*/
			var obstacle = document.createElement('div');
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