let game = 
{
	paused: true,
	speed: config.speed.normal, 
	timer: undefined,
	progress: 0,
	stage: "",
	bossAppeared: false,
	sperminator:
	{
		heal: {value: 100, max: 100},
		power: {value: 0, max: 100},
		energy: {value: 100, max: 100},
		shield: {value: 0, max: 100},
		hero: false,
		x1: 0,
		y1: 0,
		x2: 0,
		y2: 0
	},
	boss:
	{
		x1: 0,
		y1: 0,
		x2: 0,
		y2: 0
	},
	init: function()
	{
		this.paused = true;
		story.beginStory("cover");

		$("body").keypress(
			(e) => 
			{
				if (e.which == 97) //"a"
				{
					e.preventDefault();
					this.moveLeft();
				}

				if (e.which == 100) //"d"
				{
					e.preventDefault();
					this.moveRight();
				}

				if (e.which == 119) //"w"
				{
					e.preventDefault();
					this.turbo();
				}
			}
		);

		bonusTemplate.render($("#healIcon"), 2, 0, "heal");
		bonusTemplate.render($("#energyIcon"), 2, 0, "energy");
		bonusTemplate.render($("#powerIcon"), 2, 0, "power");
		bonusTemplate.render($("#shieldIcon"), 2, 0, "shield");
	},
	startTimer: function()
	{
		if (this.timer == undefined)
		{
			this.timer = setInterval
			(
				() => 
				{ 
					if (!this.paused) 
					{
						if (this.progress <= 500 && !this.bossAppeared)
						{
							this.bossAppeared = true;
							this.paused = true;
							story.beginStory(this.stage + "Boss");
						}
						else
						{
							this.moveMapArea(); 
						}
					}
				},
				50
			);
		}
	},
	stopTimer: function()
	{
		clearTimeout(this.timer);
		this.timer = undefined;
	},
	moveMapArea: function()
	{
		if (this.bossAppeared)
		{
			this.moveBoss();
		}

		this.progress = this.progress - this.speed;
	
		var height = config.getMapHeight(this.stage);
		var width = config.getMapWidth(this.stage);

		$("#mapArea").attr("style", "margin-top:-" + this.progress + "px; width:" + width + "px; height:" + height + "px");
		$("#mapArea").attr("data-y", -this.progress);
		this.populateSperminator(null);
		this.collisionDetection();
		this.removeEncounters();

		if (this.speed == config.speed.turbo)
		{
			this.sperminator.energy.value -= config.damage.turbo.energy;	
		}

		if (this.sperminator.hero)
		{
			this.sperminator.power.value -= config.damage.power.power;	
		}

		this.sperminator.shield.value -= config.damage.shield.shield;

		this.normalizeStatLevels();

		if (this.progress < 50)
		{
			story.beginNotification("victory");
		}

		if (this.progress < 0)
		{
			this.progress = 0;
			this.stopTimer();

			if (this.stage == "stage3")
			{
				story.beginStory("victory");
			}
			else
			{
				if (this.stage == "stage1") 
				{
					this.stage = "stage2";
				} 
				else
				{
					if (this.stage == "stage2") this.stage = "stage3";
				}
				
				story.beginStory(this.stage + "Start");
			}
		}
	},
	beginStage: function(type)
	{
		$("#mapArea").html("");
		$("#gameContainer").show();

		this.stage = type;
		this.paused = false;
		this.bossAppeared = false;
		this.progress = config.getMapHeight(this.stage) - 400;

		this.sperminator.heal.value = 100;
		this.sperminator.energy.value = 100;
		this.sperminator.power.value = 0;
		this.sperminator.shield.value = 0;
		this.sperminator.hero = false;
		this.speed = config.speed.normal;

		mapTemplate.render($("#mapArea"), this.stage);
		this.insertGameArea($("#mapArea"));
		this.populateGameArea($(".gameArea"));
		this.populateSperminator($(".gameArea"));
		this.displayStatLevels();

		this.startTimer();
	},
	endStage: function()
	{
		$("#mapArea").html("");
		$("#gameContainer").hide();

		this.stopTimer();
	},
	insertGameArea: function(obj)
	{
		var gameArea = $("<div></div>");
		gameArea.attr("style", "margin-left:-" + (config.getMapWidth(this.stage) - config.getWallWidth(this.stage)) + "px;width:" + (config.getMapWidth(this.stage) - (config.getWallWidth(this.stage) * 2)) + "px; height:" + config.getMapHeight(this.stage) + "px");
		gameArea.addClass("gameArea");
		obj.append(gameArea);
	},
	populateGameArea: function(obj)
	{
		this.populateBoss($(".gameArea"));

		var encounterSizes = config.getMapEncounterSizes(this.stage);
		var encounterPossibilities = 
		config.encounterChance.none 
		+ config.encounterChance.bubble[this.stage].chance 
		+ config.encounterChance.sperm[this.stage].chance 
		+ config.encounterChance.germ[this.stage].chance 
		+ config.encounterChance.heal[this.stage].chance
		+ config.encounterChance.power[this.stage].chance
		+ config.encounterChance.energy[this.stage].chance 
		+ config.encounterChance.shield[this.stage].chance;

		var typeCount = 
		{
			bubble: 0,
			sperm: 0,
			germ: 0,
			heal: 0,
			power: 0,
			energy: 0,
			shield: 0
		};

  		for (var i = 500; i < config.getMapHeight(this.stage) - 300; i += 100)
  		{
	   		for (var j = 5; j < (config.getMapWidth(this.stage) - (config.getWallWidth(this.stage) * (this.stage == "stage1" ? 2.5 : 4))); j += 20)
	  		{
	  			var encounter = config.generateRandomNo(0, encounterPossibilities);
	  			
	  			if (encounter > config.encounterChance.none)
	  			{
		  			var div = $("<div></div>");

		  			if (encounter < config.encounterChance.none + config.encounterChance.bubble[this.stage].chance)
		  			{
		  				if (typeCount.bubble < config.encounterChance.bubble[this.stage].max)
		  				{
		  					var encounterSize = encounterSizes["bubble"][config.generateRandomNo(0, encounterSizes["bubble"].length - 1)];
		  					typeCount.bubble++;
			  				obstacleTemplate.render(div, encounterSize, config.generateRandomNo(1, 5), "bubble");
		  					div.attr("style", "width:" + (obstacleTemplate.width * encounterSize) + "px;height:" + (obstacleTemplate.height * encounterSize) + "px;position: absolute; margin-left:" + j + "px;margin-top:" + i + "px");
		  					div.attr("data-x1", j);
		  					div.attr("data-y1", i);
		  					div.attr("data-x2", j + (obstacleTemplate.width * encounterSize));
		  					div.attr("data-y2", i + (obstacleTemplate.height * encounterSize));
		  					div.attr("data-size", encounterSize);
		  					div.attr("data-type", "bubble");
		  					div.addClass("encounter");
		  				}
		  			}
		  			else if (encounter < config.encounterChance.none + config.encounterChance.bubble[this.stage].chance + config.encounterChance.sperm[this.stage].chance) 
		  			{
		  				if (typeCount.sperm < config.encounterChance.sperm[this.stage].max)
		  				{
		  					typeCount.sperm++;
		  					spermTemplate.render(div, 2, config.generateRandomNo(1, 3), []);
		  					div.attr("style", "width:" + (spermTemplate.width * 2) + "px;height:" + (spermTemplate.height * 2) + "px;position: absolute; margin-left:" + j + "px;margin-top:" + i + "px");
		  					div.attr("data-x1", j);
		  					div.attr("data-y1", i);
		  					div.attr("data-x2", j + (spermTemplate.width * 2));
		  					div.attr("data-y2", i + (spermTemplate.height * 2));
		  					div.attr("data-size", encounterSize);
		  					div.attr("data-type", "sperm");
		  					div.addClass("encounter");
		  				}
		  			}
					else if (encounter < config.encounterChance.none + config.encounterChance.bubble[this.stage].chance + config.encounterChance.sperm[this.stage].chance + config.encounterChance.germ[this.stage].chance) 
		  			{
		  				if (typeCount.germ < config.encounterChance.germ[this.stage].max)
		  				{
		  					var encounterSize = encounterSizes["bubble"][config.generateRandomNo(0, encounterSizes["bubble"].length - 1)];
		  					typeCount.germ++;
			  				obstacleTemplate.render(div, encounterSize, config.generateRandomNo(1, 5), "germ");
			  				div.attr("style", "width:" + (obstacleTemplate.width * encounterSize) + "px;height:" + (obstacleTemplate.height * encounterSize) + "px;position: absolute; margin-left:" + j + "px;margin-top:" + i + "px");
		  					div.attr("data-x1", j);
		  					div.attr("data-y1", i);
		  					div.attr("data-x2", j + (obstacleTemplate.width * encounterSize));
		  					div.attr("data-y2", i + (obstacleTemplate.height * encounterSize));
		  					div.attr("data-size", encounterSize);
		  					div.attr("data-type", "germ");
			  				div.addClass("encounter");
		  				}
		  			}
					else if (encounter < config.encounterChance.none + config.encounterChance.bubble[this.stage].chance + config.encounterChance.sperm[this.stage].chance + config.encounterChance.germ[this.stage].chance + config.encounterChance.heal[this.stage].chance) 
		  			{
		  				if (typeCount.heal < config.encounterChance.heal[this.stage].max)
		  				{
		  					typeCount.heal++;
		  					bonusTemplate.render(div, 2, 1, "heal");
		  					div.attr("style", "width:" + (bonusTemplate.width * 2) + "px;height:" + (bonusTemplate.height * 2) + "px;position: absolute; margin-left:" + j + "px;margin-top:" + i + "px");
		  					div.attr("data-x1", j);
		  					div.attr("data-y1", i);
		  					div.attr("data-x2", j + (bonusTemplate.width * 2));
		  					div.attr("data-y2", i + (bonusTemplate.height * 2));
		  					div.attr("data-size", encounterSize);
		  					div.attr("data-type", "heal");
		  					div.addClass("encounter");
		  				}
		  			}
					else if (encounter < config.encounterChance.none + config.encounterChance.bubble[this.stage].chance + config.encounterChance.sperm[this.stage].chance + config.encounterChance.germ[this.stage].chance + config.encounterChance.heal[this.stage].chance + config.encounterChance.power[this.stage].chance) 
		  			{
		  				if (typeCount.power < config.encounterChance.power[this.stage].max)
		  				{
		  					typeCount.power++;
		  					bonusTemplate.render(div, 2, 1, "power");
		  					div.attr("style", "width:" + (bonusTemplate.width * 2) + "px;height:" + (bonusTemplate.height * 2) + "px;position: absolute; margin-left:" + j + "px;margin-top:" + i + "px");
		  					div.attr("data-x1", j);
		  					div.attr("data-y1", i);
		  					div.attr("data-x2", j + (bonusTemplate.width * 2));
		  					div.attr("data-y2", i + (bonusTemplate.height * 2));
		  					div.attr("data-size", encounterSize);
		  					div.attr("data-type", "power");
		  					div.addClass("encounter");
		  				}
		  			}
					else if (encounter < config.encounterChance.none + config.encounterChance.bubble[this.stage].chance + config.encounterChance.sperm[this.stage].chance + config.encounterChance.germ[this.stage].chance + config.encounterChance.heal[this.stage].chance + config.encounterChance.power[this.stage].chance + config.encounterChance.energy[this.stage].chance) 
		  			{
		  				if (typeCount.energy < config.encounterChance.energy[this.stage].max)
		  				{
		  					typeCount.energy++;
		  					bonusTemplate.render(div, 2, 1, "energy");
		  					div.attr("style", "width:" + (bonusTemplate.width * 2) + "px;height:" + (bonusTemplate.height * 2) + "px;position: absolute; margin-left:" + j + "px;margin-top:" + i + "px");
		  					div.attr("data-x1", j);
		  					div.attr("data-y1", i);
		  					div.attr("data-x2", j + (bonusTemplate.width * 2));
		  					div.attr("data-y2", i + (bonusTemplate.height * 2));
		  					div.attr("data-size", encounterSize);
		  					div.attr("data-type", "energy");
		  					div.addClass("encounter");
		  				}
		  			}
					else if (encounter < config.encounterChance.none + config.encounterChance.bubble[this.stage].chance + config.encounterChance.sperm[this.stage].chance + config.encounterChance.germ[this.stage].chance + config.encounterChance.heal[this.stage].chance + config.encounterChance.power[this.stage].chance + config.encounterChance.energy[this.stage].chance + config.encounterChance.shield[this.stage].chance) 
		  			{
		  				if (typeCount.shield < config.encounterChance.shield[this.stage].max)
		  				{
		  					typeCount.shield++;
		  					bonusTemplate.render(div, 2, 1, "shield");
		  					div.attr("style", "width:" + (bonusTemplate.width * 2) + "px;height:" + (bonusTemplate.height * 2) + "px;position: absolute; margin-left:" + j + "px;margin-top:" + i + "px");
		  					div.attr("data-x1", j);
		  					div.attr("data-y1", i);
		  					div.attr("data-x2", j + (bonusTemplate.width * 2));
		  					div.attr("data-y2", i + (bonusTemplate.height * 2));
		  					div.attr("data-size", encounterSize);
		  					div.attr("data-type", "shield");
		  					div.addClass("encounter");		  					
		  				}
		  			}

		  			obj.append(div);
	  			}
	  		} 			
  		}
	},
	populateBoss: function(obj)
	{
		var gameMiddle = (config.getMapWidth(this.stage) - (config.getWallWidth(this.stage) * 2)) / 2;

		var spermContainer = $("<div></div>");
		spermContainer.addClass("encounter");	
		spermContainer.attr("id", "boss");
		obj.append(spermContainer);	

		var sperm = $("<div></div>");
		spermContainer.append(sperm);
		var boss = "boss1";

		if (this.stage == "stage1")
		{
			spermTemplate.render(sperm, 4, 1, ["boss1"]);
			boss = "boss1";
		}

		if (this.stage == "stage2")
		{
			spermTemplate.render(sperm, 4, 1, ["boss2"]);
			boss = "boss2";
		}

		if (this.stage == "stage3")
		{
			spermTemplate.render(sperm, 4, 1, ["boss3"]);
			boss = "boss3";
		}

		spermContainer.attr("data-x1", gameMiddle);
		spermContainer.attr("data-y1", 300);
		spermContainer.attr("data-x2", gameMiddle + (spermTemplate.width * 4));
		spermContainer.attr("data-y2", 300 + (spermTemplate.height * 4));
		spermContainer.attr("data-type", boss);
		spermContainer.attr("data-size", 1);

		this.boss.x1 = gameMiddle;
		this.boss.y1 = 300;
		this.boss.x2 = gameMiddle + (spermTemplate.width * 2);
		this.boss.y2 = 300 + (spermTemplate.height * 2);

		$("#boss").attr("style", "width: " + (spermTemplate.width * 4) + "px; height: " + (spermTemplate.height * 4) + "px; position: absolute; margin-top: 300px; margin-left:" + gameMiddle + "px;");

		if (this.stage == "stage2")
		{
			for (var i = 0; i <= 7; i++)
			{
				var spermContainer = $("<div></div>");
				spermContainer.addClass("encounter");	
				obj.append(spermContainer);	

				var sperm = $("<div></div>");
				spermContainer.append(sperm);

				spermTemplate.render(sperm, 2, 1, ["boss2"]);

				spermContainer.attr("data-x1", i * 50);
				spermContainer.attr("data-y1", 400);
				spermContainer.attr("data-x2", gameMiddle + (spermTemplate.width * 2));
				spermContainer.attr("data-y2", 400 + (spermTemplate.height * 2));
				spermContainer.attr("data-type", "sperm");
				spermContainer.attr("data-size", 2);

				spermContainer.attr("style", "width: " + (spermTemplate.width * 2) + "px; height: " + (spermTemplate.height * 2) + "px; position: absolute; margin-top: 400px; margin-left:" + (i * 50) + "px;");
			}
		}

		if (this.stage == "stage3")
		{
			for (var i = 0; i <= 5; i++)
			{
				var germContainer = $("<div></div>");
				germContainer.addClass("encounter");	
				obj.append(germContainer);	

				var germ = $("<div></div>");
				germContainer.append(germ);

				obstacleTemplate.render(germ, 4, 1, "germ");

				germContainer.attr("data-x1", i * 50);
				germContainer.attr("data-y1", 400);
				germContainer.attr("data-x2", gameMiddle + (obstacleTemplate.width * 4));
				germContainer.attr("data-y2", 400 + (obstacleTemplate.height * 4));
				germContainer.attr("data-type", "germ");
				germContainer.attr("data-size", 4);

				germContainer.attr("style", "width: " + (obstacleTemplate.width * 4) + "px; height: " + (obstacleTemplate.height * 4) + "px; position: absolute; margin-top: 400px; margin-left:" + (i * 50) + "px;");
			}

			for (var i = 0; i <= 3; i++)
			{
				var germContainer = $("<div></div>");
				germContainer.addClass("encounter");	
				obj.append(germContainer);	

				var germ = $("<div></div>");
				germContainer.append(germ);

				obstacleTemplate.render(germ, 6, 1, "germ");

				germContainer.attr("data-x1", i * 80);
				germContainer.attr("data-y1", 500);
				germContainer.attr("data-x2", gameMiddle + (obstacleTemplate.width * 6));
				germContainer.attr("data-y2", 500 + (obstacleTemplate.height * 6));
				germContainer.attr("data-type", "germ");
				germContainer.attr("data-size", 6);

				germContainer.attr("style", "width: " + (obstacleTemplate.width * 6) + "px; height: " + (obstacleTemplate.height * 6) + "px; position: absolute; margin-top: 500px; margin-left:" + (i * 80) + "px;");
			}
		}
	},
	moveBoss: function()
	{
		var marginLeft = 0;
		var canLeft = false;
		var canRight = false;

		if (this.boss.x1 > 10)
		{
			canLeft = true;
		}

		if (this.boss.x1 < (config.getMapWidth(this.stage) - (config.getWallWidth(this.stage) * 2) - 20))
		{
			canRight = true;
		}

		if (canLeft && canRight)
		{
			var marginLeft = (config.generateRandomNo(0, 1) == 0 ? -10 : 10);
		}
		else
		{
			if (canLeft) marginLeft = -10;
			if (canRight) marginLeft = 10;
		}
		
		this.boss.x1 += marginLeft;

		$("#boss").attr("data-x1", this.boss.x1);
		$("#boss").attr("data-y1", this.boss.y1);
		$("#boss").attr("data-x2", this.boss.x1 + (spermTemplate.width * 2));
		$("#boss").attr("data-y2", this.boss.y1 + (spermTemplate.height * 2));

		$("#boss").attr("style", "width: " + (spermTemplate.width * 2) + "px; height: " + (spermTemplate.height * 2) + "px; position: absolute; margin-top: " + this.boss.y1 + "px; margin-left:" + this.boss.x1 + "px;");
	},
	populateSperminator: function(obj)
	{
		if (obj)
		{
			var gameMiddle = (config.getMapWidth(this.stage) - (config.getWallWidth(this.stage) * 2)) / 2;

			var spermContainer = $("<div></div>");	
			spermContainer.attr("id", "sperminator");
			obj.append(spermContainer);	

			var sperm = $("<div></div>");
			spermContainer.append(sperm);
			spermTemplate.render(sperm, 2, 1, ["forward"]);	

			this.sperminator.x1 = gameMiddle;
			this.sperminator.y1 = this.progress + 200
			this.sperminator.x2 = gameMiddle + (spermTemplate.width * 2);
			this.sperminator.y2 = this.progress + 200 + (spermTemplate.height * 2);

			$("#sperminator").attr("style", "width: " + (spermTemplate.width * 2) + "px; height: " + (spermTemplate.height * 2) + "px; margin-top: " + this.sperminator.y1 + "px; margin-left:" + this.sperminator.x1 + "px;");
		}
		else
		{
			this.sperminator.x2 = this.sperminator.x1 + (spermTemplate.width * 2);
			this.sperminator.y1 = this.progress + 200;
			this.sperminator.y2 = this.progress + 200 + (spermTemplate.height * 2);
			$("#sperminator").attr("style", "width: " + (spermTemplate.width * 2) + "px; height: " + (spermTemplate.height * 2) + "px; margin-top: " + this.sperminator.y1 + "px; margin-left:" + this.sperminator.x1 + "px;");
		}	
	},
	collisionDetection: function()
	{
		var encounters = $(".encounter:not(.collided)");
		encounters.each
		(
			(i) => 
			{
				if 
				(
					(
						(	//checking if any of target's four corners are within source's area.
							$(encounters[i]).attr("data-x1") > this.sperminator.x1 
							&& $(encounters[i]).attr("data-x1") < this.sperminator.x2
							&& $(encounters[i]).attr("data-y1") > this.sperminator.y1
							&& $(encounters[i]).attr("data-y1") < this.sperminator.y2
						)
						||
						(
							$(encounters[i]).attr("data-x1") > this.sperminator.x1 
							&& $(encounters[i]).attr("data-x1") < this.sperminator.x2
							&& $(encounters[i]).attr("data-y2") > this.sperminator.y1
							&& $(encounters[i]).attr("data-y2") < this.sperminator.y2
						)
						||
						(
							$(encounters[i]).attr("data-x2") > this.sperminator.x1 
							&& $(encounters[i]).attr("data-x2") < this.sperminator.x2
							&& $(encounters[i]).attr("data-y2") > this.sperminator.y1
							&& $(encounters[i]).attr("data-y2") < this.sperminator.y2
						)
						||
						(
							$(encounters[i]).attr("data-x2") > this.sperminator.x1 
							&& $(encounters[i]).attr("data-x2") < this.sperminator.x2
							&& $(encounters[i]).attr("data-y1") > this.sperminator.y1
							&& $(encounters[i]).attr("data-y1") < this.sperminator.y2
						)	
					)
					||
					(	//checking if any of source's four corners are inside target's area.
						(
							this.sperminator.x1 > $(encounters[i]).attr("data-x1")
							&& this.sperminator.x1 < $(encounters[i]).attr("data-x2")
							&& this.sperminator.y1 > $(encounters[i]).attr("data-y1")
							&& this.sperminator.y1 < $(encounters[i]).attr("data-y2")
						)
						||
						(
							this.sperminator.x1 > $(encounters[i]).attr("data-x1")
							&& this.sperminator.x1 < $(encounters[i]).attr("data-x2")
							&& this.sperminator.y2 > $(encounters[i]).attr("data-y1")
							&& this.sperminator.y2 < $(encounters[i]).attr("data-y2")
						)
						||
						(
							this.sperminator.x2 > $(encounters[i]).attr("data-x1")
							&& this.sperminator.x2 < $(encounters[i]).attr("data-x2")
							&& this.sperminator.y1 > $(encounters[i]).attr("data-y1")
							&& this.sperminator.y1 < $(encounters[i]).attr("data-y2")
						)
						||
						(
							this.sperminator.x2 > $(encounters[i]).attr("data-x1")
							&& this.sperminator.x2 < $(encounters[i]).attr("data-x2")
							&& this.sperminator.y2 > $(encounters[i]).attr("data-y1")
							&& this.sperminator.y2 < $(encounters[i]).attr("data-y2")
						)
					)
				)
				{
					if ($(encounters[i]).attr("data-type") != "bubble")
					{
						if ($(encounters[i]).attr("data-type").indexOf("boss") == -1)
						{
							$(encounters[i]).addClass("collided");
						}
						
						this.handleCollision($(encounters[i]));
					}
				}		
			}
		);
	},
	handleCollision: function(obj)
	{
		var size = obj.attr("data-size");
		switch (obj.attr("data-type"))
		{
			case "germ":
				if (this.sperminator.shield.value == 0) 
				{
					var toHeal = size * config.damage.germ.heal;
					this.sperminator.heal.value -= toHeal;

					spermTemplate.injured($("#sperminator"));
					spermTemplate.makeSpeech($("#sperminator"), "neg");
				}
				break;

			case "sperm":
				if (this.sperminator.hero && this.sperminator.shield.value > 0)
				{
					obj.hide();

					var toHeal = size * config.damage.sperm.energy;
					this.sperminator.heal.value += toHeal;

					spermTemplate.powerUp($("#sperminator"));
					spermTemplate.makeSpeech($("#sperminator"), "pos");
				} 

				if (!this.sperminator.hero) 
				{
					var toEnergy = size * config.damage.sperm.energy;
					this.sperminator.energy.value -= toEnergy;					

					spermTemplate.injured($("#sperminator"));
					spermTemplate.makeSpeech($("#sperminator"), "neg");
				}					 

				if (this.sperminator.shield.value == 0) 
				{
					var toHeal = size * config.damage.sperm.heal;
					this.sperminator.heal.value -= toHeal;

					spermTemplate.injured($("#sperminator"));
					spermTemplate.makeSpeech($("#sperminator"), "neg");
				}

				break;

			case "heal":
				obj.hide();
				var toHeal = size * config.bonus.heal.heal;
				this.sperminator.heal.value += toHeal;

				spermTemplate.powerUp($("#sperminator"));
				spermTemplate.makeSpeech($("#sperminator"), "pos");			
				break;

			case "power":
				obj.hide();
				var toPower = size * config.bonus.power.power;
				this.sperminator.power.value += toPower;

				spermTemplate.powerUp($("#sperminator"));
				spermTemplate.makeSpeech($("#sperminator"), "pos");
				break;

			case "energy":
				obj.hide();
				var toEnergy = size * config.bonus.energy.energy;
				this.sperminator.energy.value += toEnergy;

				spermTemplate.powerUp($("#sperminator"));
				spermTemplate.makeSpeech($("#sperminator"), "pos");
				break;

			case "shield":
				obj.hide();
				var toShield = size * config.bonus.shield.shield;
				this.sperminator.shield.value += toShield;

				spermTemplate.powerUp($("#sperminator"));
				spermTemplate.makeSpeech($("#sperminator"), "pos");
				break;

			case "boss1":
				if (this.sperminator.shield.value == 0) 
				{
					var toHeal = size * config.damage.boss1.heal;
					this.sperminator.heal.value -= toHeal;

					spermTemplate.injured($("#sperminator"));
					spermTemplate.makeSpeech($("#sperminator"), "neg");
				}

				if (!this.sperminator.hero) 
				{
					var toEnergy = size * config.damage.boss1.energy;
					this.sperminator.energy.value -= toEnergy;					

					spermTemplate.injured($("#sperminator"));
					spermTemplate.makeSpeech($("#sperminator"), "neg");
				}
				break;

			case "boss2":
				if (this.sperminator.shield.value == 0) 
				{
					var toHeal = size * config.damage.boss2.heal;
					this.sperminator.heal.value -= toHeal;

					spermTemplate.injured($("#sperminator"));
					spermTemplate.makeSpeech($("#sperminator"), "neg");
				}

				if (!this.sperminator.hero) 
				{
					var toEnergy = size * config.damage.boss2.energy;
					this.sperminator.energy.value -= toEnergy;					

					spermTemplate.injured($("#sperminator"));
					spermTemplate.makeSpeech($("#sperminator"), "neg");
				}
				break;

			case "boss3":
				if (this.sperminator.shield.value == 0) 
				{
					var toHeal = size * config.damage.boss3.heal;
					this.sperminator.heal.value -= toHeal;

					spermTemplate.injured($("#sperminator"));
					spermTemplate.makeSpeech($("#sperminator"), "neg");
				}

				if (!this.sperminator.hero) 
				{
					var toEnergy = size * config.damage.boss3.energy;
					this.sperminator.energy.value -= toEnergy;					

					spermTemplate.injured($("#sperminator"));
					spermTemplate.makeSpeech($("#sperminator"), "neg");
				}
				break;

			default:
				break;
		}

		this.normalizeStatLevels();
	},
	normalizeStatLevels: function()
	{
		if (this.sperminator.heal.value > this.sperminator.heal.max) this.sperminator.heal.value = this.sperminator.heal.max;
		if (this.sperminator.power.value > this.sperminator.power.max) this.sperminator.power.value = this.sperminator.power.max;
		if (this.sperminator.energy.value > this.sperminator.energy.max) this.sperminator.energy.value = this.sperminator.energy.max;
		if (this.sperminator.shield.value > this.sperminator.shield.max) this.sperminator.shield.value = this.sperminator.shield.max;

		if (this.sperminator.heal.value < 0) this.sperminator.heal.value = 0;
		if (this.sperminator.power.value < 0) this.sperminator.power.value = 0;
		if (this.sperminator.energy.value < 0) this.sperminator.energy.value = 0;
		if (this.sperminator.shield.value < 0) this.sperminator.shield.value = 0;

		this.displayStatLevels();
		this.handleStatLevels();
	},
	displayStatLevels: function()
	{
		$("#meterEnergy").attr("style", "margin-top:" + (((this.sperminator.energy.max - this.sperminator.energy.value) / this.sperminator.energy.max) * 350) + "px");
		$("#meterHeal").attr("style", "margin-top:" + (((this.sperminator.heal.max - this.sperminator.heal.value) / this.sperminator.heal.max) * 350) + "px");
		$("#meterPower").attr("style", "margin-top:" + (((this.sperminator.power.max - this.sperminator.power.value) / this.sperminator.power.max) * 350) + "px");
		$("#meterShield").attr("style", "margin-top:" + (((this.sperminator.shield.max - this.sperminator.shield.value) / this.sperminator.shield.max) * 350) + "px");
	},
	handleStatLevels: function()
	{
		if ((this.sperminator.shield.value == this.sperminator.shield.max && this.sperminator.hero)
			|| (this.sperminator.shield.value > 0 && this.sperminator.power.value == this.sperminator.power.max)
			)
		{
			this.paused = true;
			story.beginNotification("hero_shield");

			this.sperminator.hero = true;
		}
		else
		{
			if (this.sperminator.shield.value == this.sperminator.shield.max)
			{
				this.paused = true;
				story.beginNotification("shield");
			}

			if (this.sperminator.power.value == this.sperminator.power.max)
			{
				this.paused = true;
				story.beginNotification("hero");

				this.sperminator.hero = true;
			}
		}

		if (this.sperminator.heal.value == 0)
		{
			this.paused = true;
			story.beginNotification("defeat");
		}

		if (this.sperminator.energy.value == 0)
		{
			this.speed = config.speed.normal;
		}
	},
	removeEncounters: function()
	{
		var vpHeight = 400; //viewport height
		var mapY = Math.abs($("#mapArea").attr("data-y"));

		var encounters = $(".encounter");
		encounters.each
		(
			(i) => 
			{
				if ($(encounters[i]).attr("data-y2") > vpHeight + mapY)
				{
					encounters[i].remove();
				}				
			}
		);
	},
	moveLeft: function()
	{
		if (this.paused) return;

		if (this.sperminator.x1 > 0)
		{
			this.sperminator.x1 = this.sperminator.x1 - 1;
			this.populateSperminator(null);
		}
	},
	moveRight: function()
	{
		if (this.paused) return;

		if (this.sperminator.x1 < (config.getMapWidth(this.stage) - (config.getWallWidth(this.stage) * 2) - 20))
		{
			this.sperminator.x1 = this.sperminator.x1 + 1;
			this.populateSperminator(null);
		}
	},
	turbo: function()
	{
		if (this.speed == config.speed.turbo)
		{
			this.speed = config.speed.normal;
		}
		else
		{
			if (this.sperminator.energy.value > 0)
			{
				this.speed = config.speed.turbo;
			}			
		}
	},	
}