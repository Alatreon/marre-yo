function Mob ()
{
	this.setAnim=[];
}
Mob.prototype =
{
	creatMobs : function ()
	{
		for(var i=0;i<Self.Map.obstacleArray.length;i++)
		{
			if(Self.Map.obstacleArray[i][4]==3)
			{
				this.creatMob(/*Self.Map.obstacleArray[i][5],*/i);
			}
		}
	},
	creatMob : function (i)
	{	
		var mob = document.createElement('div');
		mob.setAttribute('id',/*mobName*/'mob'+i);
		mob.setAttribute('class','mob');
		/*stylisation*/
		mob.style.position='absolute';
		mob.style.height=Self.Map.obstacleArray[i][0]+'px';
	    mob.style.width=Self.Map.obstacleArray[i][1]+'px';
		mob.style.marginTop=(Self.Map.obstacleArray[i][2]-8)+'px';/*-8 suite a la stylisation de la div hero et de la div obstacle en js*/  
		mob.style.marginLeft=Self.Map.obstacleArray[i][3]+'px';
		mob.style.backgroundPosition="0px -32px";
		mob.style.backgroundImage="url(img/mobsprite.png)";
		document.body.appendChild(mob);
		this.creatMobAnim(i);
	},
	creatMobAnim : function (i)
	{
		var y=0;
		var j=($('#mob'+i).css('margin-left').replace(/[^-\d\.]/g, ''))*1;;
		var yCheck=1;
		var self=this;
	   	this.setAnim[i]=setInterval(function()
	   	{
			Self.HeroCheck.heroMapCheck();
	   		j-=1;

	   		$('#mob'+i).css("margin-left", j);

	    	y+=32*yCheck;
	    	if(y>31)
	    	{
	    		yCheck=-1;
	    	}
	    	if(y<1)
	    	{
	    		y=0;
	    		yCheck=1;
	    	}
	    	Self.Map.obstacleArray[i][3]=j;/**/
	    	$('#mob'+i).css("background-position", -y+"px -32px");
	   	},200);
	},
	mobDie : function (i)
	{
		if(!Self.Hero.heroInvincibilityBool)
		{
			$('#mob'+i).css("background-position", "-64px -32px")
			clearInterval(this.setAnim[i]);
				setTimeout(function()
				{
					$('#mob'+i).css("background-position", "-896px -32px")
				},500);}
		}
}