function Map ()
{
	this.heroFloor=300;
<<<<<<< HEAD
	this.mapStart=-Self.Hero.heroSize;
	this.mapEnd=($('body').css('width').replace(/[^-\d\.]/g, ''))*1;
	/*provisoire*/

	/*height*/
	this.obstacleHoriSizeB = 25;
	/*width*/
	this.obstacleHoriSizeR = 300;
	/*top*/
	this.obstacleHoriSizeT = 260;
	/*left*/
	this.obstacleHoriSizeL = 494/*-Self.Hero.heroSize*/;
}
Map.prototype = 
{
	mapScroll : function()
	{
		self=this;
		window.addEventListener('resize', function()
			{
=======
	this.mapEnd=($('body').css('width').replace(/[^-\d\.]/g, ''))*1;
	this.mapStart=-64;
}
Map.prototype = 
{	
	mapScroll : function()
	{
		self=this;
    	//window.addEventListener('resize', function(){console.log('addEventListener - resize');}, true);
		window.addEventListener('resize', function()
			{
				console.log(self.mapEnd);
>>>>>>> 3489588837024f9933f5aaf6ccec1fa87674a3e5
				self.mapEnd=($('body').css('width').replace(/[^-\d\.]/g, ''))*1;
			}
		);
		if(Self.Hero.heroStyleLeft<(Self.Map.mapStart)){$('#hero').css('margin-left', Self.Map.mapEnd+'px');Self.Hero.heroStyleLeft=Self.Map.mapEnd;}
		if(Self.Hero.heroStyleLeft>(Self.Map.mapEnd)){$('#hero').css('margin-left', Self.Map.mapStart+'px');Self.Hero.heroStyleLeft=Self.Map.mapStart;}
	},
<<<<<<< HEAD
	creatObstacles : function ()
	{
		/*creation*/
		var obstacle = document.createElement('div');
		/*stylisation*/
	    obstacle.style.position='relative';
    	obstacle.style.width=this.obstacleHoriSizeR+'px';
	    obstacle.style.height=this.obstacleHoriSizeB+'px';
	    obstacle.style.marginLeft=this.obstacleHoriSizeL+'px';
	    obstacle.style.marginTop=this.obstacleHoriSizeT+'px';   
	    obstacle.style.borderRadius='5px';
	    obstacle.style.backgroundColor='brown';
	    /*placement*/
    	document.body.appendChild(obstacle);
    	/*à continuer*/
   	}
=======
	creatObstacle : function ()
	{
	}
>>>>>>> 3489588837024f9933f5aaf6ccec1fa87674a3e5
}