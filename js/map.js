function Map (i)
{
	this.heroFloor=544;
	this.mapStart=(-Self.Hero.heroSize);
	this.bodyHeight=($('body').css('height').replace(/[^-\d\.]/g, ''))*1;
	this.mapEnd=($('body').css('width').replace(/[^-\d\.]/g, ''))*1;
	this.heroFloorDiv=this.bodyHeight-(this.heroFloor+Self.Hero.heroSize);
	this.obstacleArray = i;
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
	creatMap : function ()
	{
		for(var i=0;i<Self.Map.obstacleArray.length;i++)
		{
			if(Self.Map.obstacleArray[i][4]==0)
			{
				this.creatObstacles(i);
			}
			if(Self.Map.obstacleArray[i][4]==1)
			{
				this.creatGold(i);
			}
		}
		this.creatGoldAnim();
	},
	creatObstacles : function (i)
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
		obstacle.style.backgroundImage="url(img/brick.png)";
		/*placement*/
	    document.body.appendChild(obstacle);
   	},
	creatGold : function (i)
	{
		var gold = document.createElement('div');
		gold.setAttribute('id','gold'+i);
		gold.setAttribute('class','gold');
		/*stylisation*/
		gold.style.position='absolute';
		gold.style.height=this.obstacleArray[i][0]+'px';
	    gold.style.width=this.obstacleArray[i][1]+'px';
		gold.style.marginTop=(this.obstacleArray[i][2]-8)+'px';/*-8 suite a la stylisation de la div hero et de la div obstacle en js*/  
		gold.style.marginLeft=this.obstacleArray[i][3]+'px';
		gold.style.backgroundImage="url(img/gold.png)";
		/*placement*/
	    document.body.appendChild(gold);
	},
	creatGoldAnim : function (i)
	{
	    var y=0;
	    var yCheck=1;

	    setInterval(function()
	    {
	    	y+=32*yCheck;
	    	if(y>63)
	    	{
	    		yCheck=-1;
	    	}
	    	if(y<1)
	    	{
	    		y=0;
	    		yCheck=1;
	    	}
	    	$('.gold').css("background-position", -y+"px 0px");
	    },300);		
	}
}