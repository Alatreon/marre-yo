function Menu () 
{
	this.screenViewVal=0;
	this.startMenuCtas=['Jouer','Creer','Options'];
	this.modalInGameCtas=['Reprendre','Options','Accueil'];
	this.optionsMenuCtas=['Options 1','Options 2','Retour'];
}
Menu.prototype = 
{
	startMenu : function ()
	{
		self=this;
		this.createMenu(this.startMenuCtas,350,50,10,false);

		document.getElementById('cta0').addEventListener('click',function()
		{
			self.actionMenu(0);
		});
		document.getElementById('cta1').addEventListener('click',function()
		{
			//self.actionMenu(x);
		});
		document.getElementById('cta2').addEventListener('click',function()
		{
			self.actionMenu(2);
		});
	},	
	optionsStartMenu : function ()
	{
		self=this;
		this.createMenu(this.optionsMenuCtas,350,50,10,false);
		document.getElementById('cta0').addEventListener('click',function()
		{
			//self.actionMenu(x);
		});
		document.getElementById('cta1').addEventListener('click',function()
		{
			//self.actionMenu(x);
		});
		document.getElementById('cta2').addEventListener('click',function()
		{
			self.actionMenu(3);
		});
	},	
	modalInGameMenu : function ()
	{
		self=this;
		this.createMenu(this.modalInGameCtas,350,50,10,true);

		document.getElementById('cta0').addEventListener('click',function()
		{
			self.actionMenu(6);
		});
		document.getElementById('cta1').addEventListener('click',function()
		{
			//self.actionMenu(x);
		});
		document.getElementById('cta2').addEventListener('click',function()
		{
			self.actionMenu(7);
		});
	},	
	optionsInGameMenu : function ()
	{
		self=this;
		this.createMenu(this.optionsMenuCtas,350,50,10,true);
		document.getElementById('cta0').addEventListener('click',function()
		{
			//self.actionMenu(x);
		});
		document.getElementById('cta1').addEventListener('click',function()
		{
			//self.actionMenu(x);
		});
		document.getElementById('cta2').addEventListener('click',function()
		{
			self.actionMenu(3);
		});
	},	
	creatModal : function()
	{
		var menuModal = document.createElement('div');
		menuModal.setAttribute('id','modal');
		/*stylisation*/
	    menuModal.style.position='relative';
	    menuModal.style.background="rgba(0, 0, 0, 0.40)";/*'black';*/
	    //menuModal.style.opacity='0.5';
	    menuModal.style.height='100%';
		menuModal.style.width='100%';
		menuModal.style.marginTop='-8px';
		menuModal.style.marginLeft='-8px';
	    /*placement*/
	    document.body.appendChild(menuModal);
	},
	createMenu : function(a,widthCta,heightCta,interCta,modalTF)
	{
		var marginTopConteneurCta=(($('body').css('height').replace(/[^-\d\.]/g, '')*1)-((a.length*heightCta)+((a.length-1)*interCta)))/2;
		var marginLeftConteneurCta=(($('body').css('width').replace(/[^-\d\.]/g, '')*1)-widthCta)/2;

		/*creation du conteneur*/
		var menuConteneurCta = document.createElement('div');
	    menuConteneurCta.style.position='absolute';
		menuConteneurCta.setAttribute('class','conteneur');
		menuConteneurCta.style.marginTop=marginTopConteneurCta;
		menuConteneurCta.style.marginLeft=marginLeftConteneurCta;	
		/*creation de la modal ou pas*/	
		if(modalTF)
		{
			this.creatModal();
	    	document.getElementById('modal').appendChild(menuConteneurCta);
		}
		else
		{
	    	document.body.appendChild(menuConteneurCta);
	    }
		/*creation des ctas*/
		for(var i=0;i<this.startMenuCtas.length;i++)
		{
			this.creatCta(a,widthCta,heightCta,interCta,i);
		}

		/*redimensionnement de la fenetre*/
		window.addEventListener('resize', function()
		{
			marginLeftConteneurCta=(($('body').css('width').replace(/[^-\d\.]/g, '')*1)-widthCta)/2;
			marginTopConteneurCta=(($('body').css('height').replace(/[^-\d\.]/g, '')*1)-((a.length*heightCta)+((a.length-1)*interCta)))/2;
			for(var i=0; i<a.length; i++)
			{
	    		document.getElementsByClassName('conteneur')[0].style.marginLeft=marginLeftConteneurCta+'px';
	    		document.getElementsByClassName('conteneur')[0].style.marginTop=marginTopConteneurCta+'px';
	    	}
		});		
	},
	creatCta : function(a,widthCta,heightCta,interCta,i)
	{
		var menuCta = document.createElement('div');
		menuCta.setAttribute('id','cta'+i);
		menuCta.setAttribute('class','cta');
		/*stylisation*/
	    menuCta.style.position='relative';
	    menuCta.style.height=heightCta+'px';
		menuCta.style.width=widthCta+'px';
		menuCta.style.marginTop=interCta+'px';
	    menuCta.style.borderRadius='10px';
	    /*placement*/
		document.getElementsByClassName('conteneur')[0].appendChild(menuCta);
	    /*ecriture*/
		$('#cta'+i).text(a[i]);
	},
	actionMenu : function(i)
	{
		switch(i)
		{
			case 0:
				this.destroyMenu();
				Self.gameStart();
				this.screenViewVal=1;
				break;
			case 1:
				/*Self.gameCrea():*/
				break;
			case 2:
				this.destroyMenu();
				this.optionsStartMenu();
				break;		
			case 3:
				this.destroyMenu();
				this.startMenu();
				break;		
			case 4:
				this.destroyMenu();
				this.startMenu();
				break;		
			case 5:
				this.optionsInGameMenu();
				this.startMenu();
				break;	
			case 6:
				/*Crade, a modifier*/
				Self.KeyboardKey.menuEchape=true;
				this.destroyMenu();
				break;	
			case 7:
				/*Crade, a modifier*/
				$('div').remove();
				Self.KeyboardKey.menuEchape=true;
				this.startMenu();
				this.screenViewVal=0;
				break;	
		}
	},
	destroyMenu : function()
	{
		$('#modal').remove();
		$('.conteneur').remove();
	}
}		