let mapTemplate = 
{
	stage1:
	{
		wall:
		{
			color: "rgb(0, 0, 0)",
			sectionInterval: 50,
			variance: 5
		},
		defs:
		{
			linearGradient:
			{
				id: "mapStage1",
				x1: "0%",
				y1: "0%",
				x2: "100%",
				y2: "0%"
			},
			stops: 
			[
				{offset: "10%", style: "stop-color:rgb(50, 50, 50); stop-opacity:1"},
				{offset: "50%", style: "stop-color:rgb(150, 150, 150); stop-opacity:1"},
				{offset: "60%", style: "stop-color:rgb(150, 150, 150); stop-opacity:1"},
				{offset: "90%", style: "stop-color:rgb(50, 50, 50); stop-opacity:1"}
			]		
		}
	},
	stage2:
	{
		wall:
		{
			color: "rgb(100, 0, 0)",
			sectionInterval: 100,
			variance: 10
		},
		defs:
		{
			linearGradient:
			{
				id: "mapStage2",
				x1: "0%",
				y1: "0%",
				x2: "100%",
				y2: "0%"
			},
			stops: 
			[
				{offset: "10%", style: "stop-color:rgb(150, 50, 50); stop-opacity:1"},
				{offset: "50%", style: "stop-color:rgb(250, 150, 150); stop-opacity:1"},
				{offset: "60%", style: "stop-color:rgb(250, 150, 150); stop-opacity:1"},
				{offset: "90%", style: "stop-color:rgb(150, 50, 50); stop-opacity:1"}
			]		
		}
	},
	stage3:
	{
		wall:
		{
			color: "rgb(100, 0, 0)",
			sectionInterval: 100,
			variance: 10
		},
		defs:
		{
			linearGradient:
			{
				id: "mapStage3",
				x1: "0%",
				y1: "0%",
				x2: "100%",
				y2: "0%"
			},
			stops: 
			[
				{offset: "10%", style: "stop-color:rgb(50, 0, 0); stop-opacity:1"},
				{offset: "50%", style: "stop-color:rgb(150, 50, 50); stop-opacity:1"},
				{offset: "60%", style: "stop-color:rgb(150, 50, 50); stop-opacity:1"},
				{offset: "90%", style: "stop-color:rgb(50, 0, 0); stop-opacity:1"}
			]		
		}
	},
	render: function (obj, type)
	{
		var height = config.getMapHeight(type);
		var width = config.getMapWidth(type);

		obj.addClass("map");
		obj.attr("style", "margin-top:-" + game.progress + "px; width:" + width + "px; height:" + height + "px");

		var svg = $("<svg></svg>");

		var defs = $("<defs></defs>");

		var stage = this[type];

		var bg = $("<rect></rect>");
  		bg.attr("x", "0px");
  		bg.attr("y", "0px");
  		bg.attr("width", width + "px");
  		bg.attr("height", height + "px");
  		bg.attr("fill", "url(#" + stage.defs.linearGradient.id + ")");

  		svg.append(bg);

  		var path = [];
  		path.push([0, height, null, null]);
  		path.push([config.getWallWidth(type), 0, null, null]);

  		for (var i = height; i > 0; i -= stage.wall.sectionInterval)
  		{
  			path.push([config.generateRandomNo(-stage.wall.variance, stage.wall.variance), -25, 0, -stage.wall.sectionInterval]);
  		}

  		path.push([0, 0, -config.getWallWidth(type), 0]);

		var wall = $("<path></path>");
		var d = "";

		path.forEach((p, i) => {
  			if (i == 0) d = d + "M ";
  			if (i == 1) d = d + "l ";
  			if (i >= 2) d = d + "q ";

  			d = d + p[0] + " ";
  			d = d + p[1] + " ";
  			if (p[2] != null) d = d + p[2] + " ";
  			if (p[3] != null) d = d + p[3] + " ";

  			if (i == path.length - 1) d = d + "Z";
		});

		wall.attr("d", d);
		wall.attr("fill", stage.wall.color);

		var wall2 = $("<path></path>");
		wall2.attr("d", d);
		wall2.attr("fill", stage.wall.color);
		wall2.attr("transform", "scale(-1, 1) translate(-400,0)");

		svg.append(wall);
		svg.append(wall2);

		var linearGradient = $("<linearGradient></linearGradient>");
		linearGradient.attr("id", stage.defs.linearGradient.id);
		linearGradient.attr("x1", stage.defs.linearGradient.x1);
		linearGradient.attr("y1", stage.defs.linearGradient.y1);
		linearGradient.attr("x2", stage.defs.linearGradient.x2);
		linearGradient.attr("y2", stage.defs.linearGradient.y2);

		stage.defs.stops.forEach((s) => {
  			var stop = $("<stop></stop>");
  			stop.attr("offset", s.offset);
  			stop.attr("style", s.style);

  			linearGradient.append(stop);
		});

		defs.append(linearGradient); 

		svg.append(defs);

		obj.append(svg);

		obj.html(obj.html());
	}
};