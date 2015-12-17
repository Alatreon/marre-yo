function Map ()
{
	this.heroFloor=Self.Hero.heroFloor;
	this.mapStart=(-Self.Hero.heroSize);
	this.mapEnd=($('body').css('width').replace(/[^-\d\.]/g, ''))*1;
	/*height*/
	this.obstacleHoriSizeB = 100;
	/*width*/
	this.obstacleHoriSizeR = 500;
	/*top*/
	this.obstacleHoriSizeT = 473/*470bug*/;
	/*left*/
	this.obstacleHoriSizeL = 440;
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
		/*creation*/
		var obstacle = document.createElement('div');
		/*stylisation*/
	    obstacle.style.position='fixed';
    	obstacle.style.width=this.obstacleHoriSizeR+'px';
	    obstacle.style.height=(this.obstacleHoriSizeB)+'px';
	    obstacle.style.marginLeft=this.obstacleHoriSizeL+'px';
	    obstacle.style.marginTop=(this.obstacleHoriSizeT-8)+'px';/*-8 suite a la stylisation de la div hero et de la div obstacle en js*/   
	    obstacle.style.borderRadius='5px';
	    obstacle.style.backgroundColor='brown';
	    /*placement*/
    	document.body.appendChild(obstacle);
   	}
}