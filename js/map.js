function Map ()
{
	this.heroFloor=550;
	this.mapStart=(-Self.Hero.heroSize);
	this.bodyHeight=($('body').css('height').replace(/[^-\d\.]/g, ''))*1;
	this.mapEnd=($('body').css('width').replace(/[^-\d\.]/g, ''))*1;
	this.heroFloorDiv=this.bodyHeight-(this.heroFloor+Self.Hero.heroSize);
;	this.obstacleArray = [[25,100,450,275],[25,100,500,75],[25,100,475,475],[25,100,350,475],[25,100,150,25],[25,100,250,250],[25,100,150,675]];
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
	},/**/
	backgroundStyle : function()
	{
		var backgroundImage=document.body.style;	
		backgroundImage.backgroundImage="url(img/backgroundmin.png)";
		backgroundImage.backgroundPosition='0px  '+(this.heroFloor+Self.Hero.heroSize)+'px';
		
		/*creation du sol*/
		var bottomBackgroundDiv = document.createElement('div');
		bottomBackgroundDiv.setAttribute('id','bottomBackgroundDiv');
		/*stylisation*/
	    bottomBackgroundDiv.style.position='absolute';
		bottomBackgroundDiv.style.backgroundImage="url(img/bot.png)";
		bottomBackgroundDiv.style.backgroundPosition='0px  0px';
	    bottomBackgroundDiv.style.width=this.mapEnd;
	    bottomBackgroundDiv.style.height=this.heroFloorDiv;
	    bottomBackgroundDiv.style.marginTop=(this.heroFloor+Self.Hero.heroSize)-8;
	    bottomBackgroundDiv.style.marginLeft='-8px';
	    /*placement*/
		document.body.appendChild(bottomBackgroundDiv);
	},
	creatObstacles : function ()
	{
		this.backgroundStyle();

		for(var i=0;i<this.obstacleArray.length;i++)
		{
			/*creation*/
			var obstacle = document.createElement('div');
			obstacle.setAttribute('id','obstacle'+i);
			/*stylisation*/
		    obstacle.style.position='absolute';
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