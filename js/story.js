let story = 
{
	beginStory: function(type)
	{
		$("#storyContainer").show();
		$("#storyContainer").html("");

		var panel  = $("<div></div>");
		panel.addClass("panel");
		$("#storyContainer").append(panel);

		var content = $("<div></div>");
		content.addClass("content");
		panel.append(content);

		var buttons = $("<div></div>");
		buttons.addClass("buttons");
		panel.append(buttons);

		if (type == "cover")
		{
			var title = "<h1>精子大俠</h1>";
			var h2 = "<h2>精典的英雄豪杰!</h2>";

			var spermContainer = $("<div></div>");
			spermContainer.attr("style", "width: 60px; margin: 0 auto 0 auto");

			var sperm = $("<div></div>");
			spermContainer.append(sperm);
			spermTemplate.render(sperm, 6, 1, ["mask_front", "shield_front"]);

			content.append(title);
			content.append(h2);
			content.append(spermContainer);

			var button = $("<button></button>");
			button.addClass("primary");
			button.html("开始 &#9654;");
			button.on("click", ()=>{this.endStory(); this.beginStory("stage1Start");});
			buttons.append(button);
		}

		if (type == "stage1Start")
		{
			var contentLeft = $("<div></div>");
			contentLeft.addClass("content_left");
			var contentRight = $("<div></div>");
			contentRight.addClass("content_right");

			var title = "<h1>第一关</h1>";
			var h2 = "<h2>出人头地</h2>";

			var spermContainer = $("<div></div>");
			spermContainer.attr("style", "width: 60px; float:right");

			var sperm = $("<div></div>");
			spermContainer.append(sperm);
			spermTemplate.render(sperm, 6, 1, ["front"]);

			var text = "<p>兄妹们收到信号,准备出发完成任务!</p><p>精子当中只有一个能够达标! 那还会是谁呢? 当然是远在天边近在眼前,你老子我!</p>";

			contentLeft.append(title);
			contentLeft.append(h2);
			contentRight.append(spermContainer);
			contentRight.append(text);
			content.append(contentLeft);
			content.append(contentRight);

			for(var i = 0; i <= 15; i++)
			{
				var spermContainer = $("<div></div>");
				spermContainer.attr("style", "position: absolute;width: 20px; filter:opacity(10%); transform:rotate(-20deg); float:right; margin-top: 120px; margin-left:" + (25 * (i + 1)) + "px;");

				var sperm = $("<div></div>");
				spermContainer.append(sperm);
				spermTemplate.render(sperm, 2, 1, []);
				contentLeft.append(spermContainer);	
			}

			for(var i = 0; i <= 8; i++)
			{
				var spermContainer = $("<div></div>");
				spermContainer.attr("style", "position: absolute;width: 20px; filter:opacity(30%); transform:rotate(-20deg); float:left; margin-top: 80px; margin-left:" + (45 * (i + 1)) + "px;");

				var sperm = $("<div></div>");
				spermContainer.append(sperm);
				spermTemplate.render(sperm, 2, 1, []);
				contentLeft.append(spermContainer);	
			}

			for(var i = 0; i <= 5; i++)
			{
				var spermContainer = $("<div></div>");
				spermContainer.attr("style", "position: absolute; width: 40px; filter:opacity(50%); transform:rotate(-20deg); float:left; margin-top: 10px; margin-left:" + (55 * (i + 1)) + "px;");

				var sperm = $("<div></div>");
				spermContainer.append(sperm);
				spermTemplate.render(sperm, 4, 1, []);
				contentLeft.append(spermContainer);
			}

			var button = $("<button></button>");
			button.addClass("primary");
			button.html("开始 &#9654;");
			button.on("click", ()=>{this.endStory(); game.beginStage("stage1");});
			buttons.append(button);
		}

		if (type == "stage2Start")
		{
			var contentLeft = $("<div></div>");
			contentLeft.addClass("content_left");
			var contentRight = $("<div></div>");
			contentRight.addClass("content_right");

			var title = "<h1>第二关</h1>";
			var h2 = "<h2>比肩作战</h2>";

			var spermContainer = $("<div></div>");
			spermContainer.attr("style", "width: 60px; float:right");

			var sperm = $("<div></div>");
			spermContainer.append(sperm);
			spermTemplate.render(sperm, 6, 1, ["front"]);

			var text = "<p>哎哟的吗!</p><p>看来没好日子过!这些细菌可不是闹着玩的!一不小心就上让我西天!</p>";

			contentLeft.append(title);
			contentLeft.append(h2);
			contentRight.append(spermContainer);
			contentRight.append(text);
			content.append(contentLeft);
			content.append(contentRight);

			var germContainer = $("<div></div>");
			germContainer.attr("style", "position: absolute;width: 20px; transform:rotate(120deg); float:left; margin-top: 80px; margin-left:50px;");

			var germ = $("<div></div>");
			germContainer.append(germ);
			obstacleTemplate.render(germ, 6, 1, "germ");
			contentLeft.append(germContainer);	

			var germContainer = $("<div></div>");
			germContainer.attr("style", "position: absolute;width: 20px; transform:rotate(40deg); float:left; margin-top: 60px; margin-left:150px;");

			var germ = $("<div></div>");
			germContainer.append(germ);
			obstacleTemplate.render(germ, 12, 1, "germ");
			contentLeft.append(germContainer);	

			var germContainer = $("<div></div>");
			germContainer.attr("style", "position: absolute;width: 20px; transform:rotate(-10deg); float:left; margin-top: 80px; margin-left:150px;");

			var germ = $("<div></div>");
			germContainer.append(germ);
			obstacleTemplate.render(germ, 10, 1, "germ");
			contentLeft.append(germContainer);

			var germContainer = $("<div></div>");
			germContainer.attr("style", "position: absolute;width: 20px; transform:rotate(10deg); float:left; margin-top: 200px; margin-left:280px;");

			var germ = $("<div></div>");
			germContainer.append(germ);
			obstacleTemplate.render(germ, 4, 1, "germ");
			contentLeft.append(germContainer);

			var button = $("<button></button>");
			button.addClass("primary");
			button.html("继续 &#9654;");
			button.on("click", ()=>{this.endStory(); game.beginStage("stage2");});
			buttons.append(button);
		}

		if (type == "stage3Start")
		{
			var contentLeft = $("<div></div>");
			contentLeft.addClass("content_left");
			var contentRight = $("<div></div>");
			contentRight.addClass("content_right");

			var title = "<h1>第三关</h1>";
			var h2 = "<h2>到达目标</h2>";

			var spermContainer = $("<div></div>");
			spermContainer.attr("style", "width: 60px; float:right");

			var sperm = $("<div></div>");
			spermContainer.append(sperm);
			spermTemplate.render(sperm, 6, 1, ["front"]);

			var text = "<p>越来越危险了,但是为了将来不得不面对挑战!</p><p>势在必得!</p>";

			contentLeft.append(title);
			contentLeft.append(h2);
			contentRight.append(spermContainer);
			contentRight.append(text);
			content.append(contentLeft);
			content.append(contentRight);

			var germContainer = $("<div></div>");
			germContainer.attr("style", "position: absolute;width: 20px; transform:rotate(120deg); float:left; margin-top: 80px; margin-left:50px;");

			var germ = $("<div></div>");
			germContainer.append(germ);
			obstacleTemplate.render(germ, 6, 1, "germ");
			contentLeft.append(germContainer);	

			var spermContainer = $("<div></div>");
			spermContainer.attr("style", "position: absolute;width: 20px; filter:opacity(50%); transform:rotate(-20deg); float:left; margin-top: 120px; margin-left:150px;");

			var sperm = $("<div></div>");
			spermContainer.append(sperm);
			spermTemplate.render(sperm, 2, 1, []);
			contentLeft.append(spermContainer);	

			var germContainer = $("<div></div>");
			germContainer.attr("style", "position: absolute;width: 20px; transform:rotate(40deg); float:left; margin-top: 10px; margin-left:150px;");

			var germ = $("<div></div>");
			germContainer.append(germ);
			obstacleTemplate.render(germ, 12, 1, "germ");
			contentLeft.append(germContainer);	

			var germContainer = $("<div></div>");
			germContainer.attr("style", "position: absolute;width: 20px; transform:rotate(10deg); float:left; margin-top: 200px; margin-left:280px;");

			var germ = $("<div></div>");
			germContainer.append(germ);
			obstacleTemplate.render(germ, 4, 1, "germ");
			contentLeft.append(germContainer);

			var spermContainer = $("<div></div>");
			spermContainer.attr("style", "position: absolute;width: 20px; filter:opacity(50%); transform:rotate(-20deg); float:left; margin-top: 80px; margin-left:100px;");

			var sperm = $("<div></div>");
			spermContainer.append(sperm);
			spermTemplate.render(sperm, 2, 1, []);
			contentLeft.append(spermContainer);	

			var spermContainer = $("<div></div>");
			spermContainer.attr("style", "position: absolute;width: 20px; transform:rotate(-20deg); float:left; margin-top: 20px; margin-left:250px;");

			var sperm = $("<div></div>");
			spermContainer.append(sperm);
			spermTemplate.render(sperm, 4, 1, []);
			contentLeft.append(spermContainer);	

			var button = $("<button></button>");
			button.addClass("primary");
			button.html("继续 &#9654;");
			button.on("click", ()=>{this.endStory(); game.beginStage("stage3");});
			buttons.append(button);
		}

		if (type == "stage1Boss")
		{
			var contentLeft = $("<div></div>");
			contentLeft.addClass("content_left");
			var contentRight = $("<div></div>");
			contentRight.addClass("content_right");

			var spermContainer = $("<div></div>");
			spermContainer.attr("style", "width: 80px; float:right;margin-top:40%;margin-right:20%");

			var sperm = $("<div></div>");
			spermContainer.append(sperm);
			spermTemplate.render(sperm, 8, 1, ["front"]);

			var text = "<p style='width:30%;float:right;margin-top:60%'>前辈,小弟多多得罪了!</p>";

			contentRight.append(spermContainer);
			contentRight.append(text);

			var spermContainer = $("<div></div>");
			spermContainer.attr("style", "width: 80px; float:left;margin-top:10%;margin-left:20%");

			var sperm = $("<div></div>");
			spermContainer.append(sperm);
			spermTemplate.render(sperm, 8, 1, ["boss1"]);

			var text = "<p style='width:30%;float:left;margin-top:20%'>臭小子,你还真以为我摆平不了你?!<br /><br />看我怎么收拾你!</p>";

			contentLeft.append(spermContainer);
			contentLeft.append(text);

			content.append(contentLeft);
			content.append(contentRight);

			var button = $("<button></button>");
			button.addClass("primary");
			button.html("继续 &#9654;");
			button.on("click", ()=>{this.endStory(); game.paused = false;});
			buttons.append(button);
		}

		if (type == "stage2Boss")
		{
			var contentLeft = $("<div></div>");
			contentLeft.addClass("content_left");
			var contentRight = $("<div></div>");
			contentRight.addClass("content_right");

			var spermContainer = $("<div></div>");
			spermContainer.attr("style", "width: 80px; float:right;margin-top:40%;margin-right:20%");

			var sperm = $("<div></div>");
			spermContainer.append(sperm);
			spermTemplate.render(sperm, 8, 1, ["front"]);

			var text = "<p style='width:30%;float:right;margin-top:60%'>以多欺少?!<br /><br />太不要脸了吧!</p>";

			contentRight.append(spermContainer);
			contentRight.append(text);

			var spermContainer = $("<div></div>");
			spermContainer.attr("style", "width: 80px; float:left;margin-top:10%;margin-left:20%");

			var sperm = $("<div></div>");
			spermContainer.append(sperm);
			spermTemplate.render(sperm, 8, 1, ["boss2"]);

			var text = "<p style='width:30%;float:left;margin-top:20%'>有本事就放马过来!<br /><br />兄弟们,上!</p>";

			contentLeft.append(spermContainer);
			contentLeft.append(text);

			content.append(contentLeft);
			content.append(contentRight);

			var button = $("<button></button>");
			button.addClass("primary");
			button.html("继续 &#9654;");
			button.on("click", ()=>{this.endStory(); game.paused = false;});
			buttons.append(button);
		}

		if (type == "stage3Boss")
		{
			var contentLeft = $("<div></div>");
			contentLeft.addClass("content_left");
			var contentRight = $("<div></div>");
			contentRight.addClass("content_right");

			var spermContainer = $("<div></div>");
			spermContainer.attr("style", "width: 80px; float:right;margin-top:40%;margin-right:20%");

			var sperm = $("<div></div>");
			spermContainer.append(sperm);
			spermTemplate.render(sperm, 8, 1, ["front"]);

			var text = "<p style='width:30%;float:right;margin-top:60%'>哇塞,真不简单!</p>";

			contentRight.append(spermContainer);
			contentRight.append(text);

			var spermContainer = $("<div></div>");
			spermContainer.attr("style", "width: 80px; float:left;margin-top:10%;margin-left:20%");

			var sperm = $("<div></div>");
			spermContainer.append(sperm);
			spermTemplate.render(sperm, 8, 1, ["boss3"]);

			var text = "<p style='width:30%;float:left;margin-top:20%'>老娘就不相信你的命比我的硬!<br /><br />小子,今天让你瞧瞧我的厉害!</p>";

			contentLeft.append(spermContainer);
			contentLeft.append(text);

			content.append(contentLeft);
			content.append(contentRight);

			var button = $("<button></button>");
			button.addClass("primary");
			button.html("继续 &#9654;");
			button.on("click", ()=>{this.endStory(); game.paused = false;});
			buttons.append(button);
		}
	},
	endStory: function()
	{
		$("#storyContainer").hide();
		$("#storyContainer").html("");
	},
	beginNotification: function(type)
	{
		$("#overlayContainer").show();
		$("#overlayContainer").html("");

		var panel  = $("<div></div>");
		panel.addClass("panel");
		$("#overlayContainer").append(panel);

		var content = $("<div></div>");
		content.addClass("content");
		panel.append(content);

		var buttons = $("<div></div>");
		buttons.addClass("buttons");
		panel.append(buttons);

		if (type == "hero")
		{
			panel.addClass("glory");

			var title = "<h1>精子大俠!</h1>";
			$(title).addClass("glory");

			var spermContainer = $("<div></div>");
			spermContainer.attr("style", "width: 60px; margin: 0 auto 0 auto");

			var sperm = $("<div></div>");
			spermContainer.append(sperm);
			spermTemplate.render(sperm, 6, 1, ["mask_front"]);

			content.append(title);
			content.append(spermContainer);

			var button = $("<button></button>");
			button.addClass("primary");
			button.html("继续 &#9654;");
			button.on("click", ()=>
				{
					this.endNotification(); 
					game.paused = false;
					spermTemplate.render($("#sperminator"), 2, 2, ["forward", "mask_forward"]);
				}
			);
			buttons.append(button);
		}

		if (type == "shield")
		{
			panel.addClass("glory");
			
			var title = "<h1>无敌挡箭牌!</h1>";
			$(title).addClass("glory");

			var spermContainer = $("<div></div>");
			spermContainer.attr("style", "width: 60px; margin: 0 auto 0 auto");

			var sperm = $("<div></div>");
			spermContainer.append(sperm);
			spermTemplate.render(sperm, 6, 1, ["front", "shield_front"]);

			content.append(title);
			content.append(spermContainer);

			var button = $("<button></button>");
			button.addClass("primary");
			button.html("继续 &#9654;");
			button.on("click", ()=>
				{
					this.endNotification(); 
					game.paused = false;
					spermTemplate.render($("#sperminator"), 2, 2, ["forward", "shield_forward"]);
				}
			);
			buttons.append(button);
		}

		if (type == "hero_shield")
		{
			panel.addClass("glory");
			
			var title = "<h1>无敌精子大俠!</h1>";

			var spermContainer = $("<div></div>");
			spermContainer.attr("style", "width: 60px; margin: 0 auto 0 auto");

			var sperm = $("<div></div>");
			spermContainer.append(sperm);
			spermTemplate.render(sperm, 6, 1, ["mask_front", "shield_front"]);

			content.append(title);
			content.append(spermContainer);

			var button = $("<button></button>");
			button.addClass("primary");
			button.html("继续 &#9654;");
			button.on("click", ()=>
				{
					this.endNotification(); 
					game.paused = false;
					spermTemplate.render($("#sperminator"), 2, 2, ["forward", "mask_forward", "shield_forward"]);
				}
			);
			buttons.append(button);
		}

		if (type == "defeat")
		{
			panel.addClass("defeat");

			var title = "<h1>失败者</h1>";

			var spermContainer = $("<div></div>");
			spermContainer.attr("style", "width: 60px; margin: 0 auto 0 auto");

			var sperm = $("<div></div>");
			spermContainer.append(sperm);
			spermTemplate.render(sperm, 6, 1, ["front"]);

			content.append(title);
			content.append(spermContainer);

			var button = $("<button></button>");
			button.html("从头开始 &#9654;");
			button.addClass("primary");
			button.on("click", ()=>
				{
					this.endNotification(); 
					game.paused = false;
					//render sperm hero
				}
			);

			buttons.append(button);

			var button = $("<button></button>");
			button.html("放弃");
			button.on("click", ()=>
				{
					this.endNotification(); 
					game.paused = false;
					//render sperm hero
				}
			);
			buttons.append(button);
		}

		if (type == "victory")
		{
			panel.addClass("glory");

			var title = "<h1>胜利者</h1>";

			var spermContainer = $("<div></div>");
			spermContainer.attr("style", "width: 60px; margin: 0 auto 0 auto");

			var sperm = $("<div></div>");
			spermContainer.append(sperm);
			spermTemplate.render(sperm, 6, 1, ["front"]);

			content.append(title);
			content.append(spermContainer);

			var button = $("<button></button>");
			button.html("继续 &#8634;");
			button.addClass("primary");
			button.on("click", ()=>
				{
					this.endNotification(); 
					game.paused = false;
				}
			);
			buttons.append(button);
		}

		if (type == "pause")
		{
			var title = "<h1>暂停</h1>";

			var spermContainer = $("<div></div>");
			spermContainer.attr("style", "width: 60px; margin: 0 auto 0 auto");

			var sperm = $("<div></div>");
			spermContainer.append(sperm);
			spermTemplate.render(sperm, 6, 1, ["front"]);

			content.append(title);
			content.append(spermContainer);

			var button = $("<button></button>");
			button.addClass("primary");
			button.html("继续 &#9654;");
			button.on("click", ()=>
				{
					this.endNotification(); 
					game.paused = false;
					//render sperm hero
				}
			);
			buttons.append(button);

			var button = $("<button></button>");
			button.html("放弃");
			button.on("click", ()=>
				{
					this.endNotification(); 
					game.paused = false;
					//render sperm hero
				}
			);
			buttons.append(button);
		}

		if (type == "help")
		{
			var title = "<h1>指示</h1>";

			var txt = "<p>xxxx</p>";

			content.append(title);
			content.append(txt);

			var button = $("<button></button>");
			button.addClass("primary");
			button.html("继续 &#9654;");
			button.on("click", ()=>
				{
					this.endNotification(); 
					game.paused = false;
					//render sperm hero
				}
			);
			buttons.append(button);
		}
	},
	endNotification: function()
	{
		$("#overlayContainer").hide();
		$("#overlayContainer").html("");
	}
};