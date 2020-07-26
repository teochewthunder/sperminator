let bonusTemplate = 
{
	width: 10,
	height: 10,
	background:
	{
		cx: 5,
		cy: 5,
		r: 5,
		defs:
		{
			radialGradient:
			{
				id: "healBackground",
				cx: "20%",
				cy: "20%",
				r: "50%",
				fx: "20%",
				fy: "10%"
			},
			stops: 
			[
				{offset: "10%", style: "stop-color:rgb(255, 255, 255); stop-opacity:1"},
				{offset: "100%", style: "stop-color:rgb(200, 200, 200); stop-opacity:1"}
			]
		}		
	},
	cross:
	{
		path: 
		[
			[4, 2],
			[2, 0],
			[0, 2],
			[2, 0],
			[0, 2],
			[-2, 0],
			[0, 2],
			[-2, 0],
			[0, -2],
			[-2, 0],
			[0, -2],
			[2, 0]
		]
	},
	star:
	{
		path: 
		[
			[5, 2],
			[1, 2],
			[2, 0],
			[-2, 1],
			[1, 2],
			[-2, -1],
			[-2, 1],
			[1, -2],
			[-2, -1],
			[2, 0]
		]
	},
	bolt:
	{
		path: 
		[
			[4.5, 1.5],
			[2, 0],
			[-1.5, 2],
			[2, 0],
			[-3, 5],
			[1, -4],
			[-1.5, 0]
		]
	},
	shield:
	{
		cx: 5,
		cy: 5,
		r: 2,
		defs:
		{
			radialGradient:
			{
				id: "bonusShield",
				cx: "20%",
				cy: "20%",
				r: "50%",
				fx: "20%",
				fy: "10%"
			},
			stops: 
			[
				{offset: "10%", style: "stop-color:rgb(200, 200, 255); stop-opacity:1"},
				{offset: "100%", style: "stop-color:rgb(0, 0, 255); stop-opacity:1"}
			],
			stops2: 
			[
				{offset: "10%", style: "stop-color:rgb(255, 255, 200); stop-opacity:1"},
				{offset: "100%", style: "stop-color:rgb(255, 255, 0); stop-opacity:1"}
			],			
		}
	},
	render: function (obj, scale, speed, type)
	{
		obj.addClass("bonus");
		obj.attr("style", "width:" + (this.width * scale) + "px; height:" + (this.height * scale) + "px");

		var svg = $("<svg></svg>");

		var background = $("<circle></circle>");
		background.attr("cx", (this.background.cx * scale) + "px");
		background.attr("cy", (this.background.cy * scale) + "px");
		background.attr("r", (this.background.r * scale) + "px");
		background.attr("fill", "url(#" + this.background.defs.radialGradient.id + ")");

		svg.append(background);

		var animBackground = $("<animate></animate>");
		animBackground.attr("id", "animBackground");
		animBackground.attr("attributeName", "r");
		animBackground.attr("from", (this.background.r * scale) + "px");
		animBackground.attr("to", ((this.background.r * scale) - (scale * 0.5)) + "px");
		animBackground.attr("fill", "remove");
		animBackground.attr("begin", "0s");
		animBackground.attr("dur", speed + "s");
		animBackground.attr("repeatCount", "indefinite");

		//background.append(animBackground);

		var defs = $("<defs></defs>");
		var radialGradient = $("<radialGradient></radialGradient>");
		radialGradient.attr("id", this.background.defs.radialGradient.id);
		radialGradient.attr("cx", this.background.defs.radialGradient.cx);
		radialGradient.attr("cy", this.background.defs.radialGradient.cy);
		radialGradient.attr("r", this.background.defs.radialGradient.r);
		radialGradient.attr("fx", this.background.defs.radialGradient.fx);
		radialGradient.attr("fy", this.background.defs.radialGradient.fy);

		this.background.defs.stops.forEach((s) => {
  			var stop = $("<stop></stop>");
  			stop.attr("offset", s.offset);
  			stop.attr("style", s.style);

  			radialGradient.append(stop);
		});
 
		defs.append(radialGradient);

		svg.append(defs);

		if (type == "heal")
		{
			var cross = $("<path></path>");
			var d = "";

			this.cross.path.forEach((p, i) => {
	  			if (i == 0) d = d + "M ";
	  			if (i >= 1) d = d + "l ";

	  			d = d + (p[0] * scale) + " ";
	  			d = d + (p[1] * scale) + " ";

	  			if (i == this.cross.path.length - 1) d = d + "Z";
			});

			cross.attr("d", d);	
			cross.attr("fill", "rgb(255, 0, 0)");
			cross.attr("stroke", "rgb(155, 0, 0)");
			cross.attr("stroke-width", "1px");

			svg.append(cross);	
		}

		if (type == "power")
		{
			var star = $("<path></path>");
			var d = "";

			this.star.path.forEach((p, i) => {
	  			if (i == 0) d = d + "M ";
	  			if (i >= 1) d = d + "l ";

	  			d = d + (p[0] * scale) + " ";
	  			d = d + (p[1] * scale) + " ";

	  			if (i == this.star.path.length - 1) d = d + "Z";
			});

			star.attr("d", d);	
			star.attr("fill", "rgb(255, 255, 0)");
			star.attr("stroke", "rgb(155, 155, 0)");
			star.attr("stroke-width", "1px");

			svg.append(star);	
		}

		if (type == "energy")
		{
			var bolt = $("<path></path>");
			var d = "";

			this.bolt.path.forEach((p, i) => {
	  			if (i == 0) d = d + "M ";
	  			if (i >= 1) d = d + "l ";

	  			d = d + (p[0] * scale) + " ";
	  			d = d + (p[1] * scale) + " ";

	  			if (i == this.bolt.path.length - 1) d = d + "Z";
			});

			bolt.attr("d", d);	
			bolt.attr("fill", "rgb(255, 200, 0)");
			bolt.attr("stroke", "rgb(155, 100, 0)");
			bolt.attr("stroke-width", "1px");

			svg.append(bolt);	
		}

		if (type == "shield")
		{
			var shield;

			shield = $("<circle></circle>");
			shield.attr("cx", (this.shield.cx * scale) + "px");
			shield.attr("cy", (this.shield.cy * scale) + "px");
			shield.attr("r", (this.shield.r * scale * 2.5) + "px");
			shield.attr("fill", "url(#" + this.shield.defs.radialGradient.id + ")");

			svg.append(shield);	

			shield = $("<circle></circle>");
			shield.attr("cx", (this.shield.cx * scale) + "px");
			shield.attr("cy", (this.shield.cy * scale) + "px");
			shield.attr("r", (this.shield.r * scale * 1.5) + "px");
			shield.attr("fill", "url(#" + this.shield.defs.radialGradient.id + "2)");

			svg.append(shield);	

			shield = $("<circle></circle>");
			shield.attr("cx", (this.shield.cx * scale) + "px");
			shield.attr("cy", (this.shield.cy * scale) + "px");
			shield.attr("r", (this.shield.r * scale) + "px");
			shield.attr("fill", "url(#" + this.shield.defs.radialGradient.id + ")");

			svg.append(shield);	

			var radialGradient;
			radialGradient = $("<radialGradient></radialGradient>");
			radialGradient.attr("id", this.shield.defs.radialGradient.id);
			radialGradient.attr("cx", this.shield.defs.radialGradient.cx);
			radialGradient.attr("cy", this.shield.defs.radialGradient.cy);
			radialGradient.attr("r", this.shield.defs.radialGradient.r);
			radialGradient.attr("fx", this.shield.defs.radialGradient.fx);
			radialGradient.attr("fy", this.shield.defs.radialGradient.fy);

			this.shield.defs.stops.forEach((s) => {
	  			var stop = $("<stop></stop>");
	  			stop.attr("offset", s.offset);
	  			stop.attr("style", s.style);

	  			radialGradient.append(stop);
			});
	 
			defs.append(radialGradient);	

			radialGradient = $("<radialGradient></radialGradient>");
			radialGradient.attr("id", this.shield.defs.radialGradient.id + "2");
			radialGradient.attr("cx", this.shield.defs.radialGradient.cx);
			radialGradient.attr("cy", this.shield.defs.radialGradient.cy);
			radialGradient.attr("r", this.shield.defs.radialGradient.r);
			radialGradient.attr("fx", this.shield.defs.radialGradient.fx);
			radialGradient.attr("fy", this.shield.defs.radialGradient.fy);

			this.shield.defs.stops2.forEach((s) => {
	  			var stop = $("<stop></stop>");
	  			stop.attr("offset", s.offset);
	  			stop.attr("style", s.style);

	  			radialGradient.append(stop);
			});
	 
			defs.append(radialGradient);				
		}

		obj.append(svg);

		obj.html(obj.html());
	}
};