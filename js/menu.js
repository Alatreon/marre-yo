function Menu () 
{
	this.screenViewVal=0;
	this.startMenuCtas=['Test1','Test2'];
}
Menu.prototype = 
{
	startMenu : function ()
	{
		for(var i=0;i<this.startMenuCtas.length;i++)
		{
			/*creation*/
			var startMenuCta = document.createElement('div');
			startMenuCta.setAttribute('id','obstacle'+i)
			/*stylisation*/
		    startMenuCta.style.position='fixed';
		    obstacle.style.height=this.obstacleArray[i][0]+'px';
	    	startMenuCta.style.width=this.obstacleArray[i][1]+'px';
		    startMenuCta.style.marginTop=(this.obstacleArray[i][2]-8)+'px';
		    startMenuCta.style.marginLeft=this.obstacleArray[i][3]+'px'; 
		    startMenuCta.style.borderRadius='5px';
		    startMenuCta.style.backgroundColor='brown';
		    /*placement*/
	    	document.body.appendChild(obstacle);
    	}
	}
}