let obstacleTemplate = 
{
	width: 10,
	height: 10,
	germ:
	{
		balls:
		[
			{
				cx: 5,
				cy: 6,
				r: 3,
				change: "cy",
				changeTo: 4
			},
			{
				cx: 7,
				cy: 5,
				r: 1.5,
				change: "cx",
				changeTo: 2
			},
			{
				cx: 2,
				cy: 3,
				r: 1.5,
				change: "cy",
				changeTo: 7
			},
			{
				cx: 6,
				cy: 2,
				r: 1.5,
				change: "cx",
				changeTo: 2
			},
			{
				cx: 2,
				cy: 8,
				r: 1,
				change: "cy",
				changeTo: 3
			},
			{
				cx: 8,
				cy: 7,
				r: 1,
				change: "cy",
				changeTo: 3
			},
			{
				cx: 6,
				cy: 6,
				r: 1,
				change: "cx",
				changeTo: 3
			},
			{
				cx: 5,
				cy: 8,
				r: 1,
				change: "cy",
				changeTo: 3
			},
			{
				cx: 7,
				cy: 7,
				r: 1.5,
				change: "cy",
				changeTo: 3
			},
		],
		defs:
		{
			radialGradient:
			{
				id: "obstacleGerm",
				cx: "20%",
				cy: "20%",
				r: "50%",
				fx: "20%",
				fy: "10%"
			},
			stops: 
			[
				{offset: "10%", style: "stop-color:rgb(0, 255, 0); stop-opacity:1"},
				{offset: "100%", style: "stop-color:rgb(0, 55, 0); stop-opacity:1"}
			]		
		}
	},
	bubble:
	{
		cx: 5,
		cy: 5,
		r: 5,
		defs:
		{
			radialGradient:
			{
				id: "obstacleBubble",
				cx: "20%",
				cy: "20%",
				r: "50%",
				fx: "20%",
				fy: "10%"
			},
			stops: 
			[
				{offset: "10%", style: "stop-color:rgb(255, 255, 255); stop-opacity:0.3"},
				{offset: "100%", style: "stop-color:rgb(255, 255, 255); stop-opacity:0.1"}
			]		
		}		
	},
	render: function (obj, scale, speed, type)
	{
		obj.addClass("obstacle");
		obj.attr("style", "width:" + (this.width * scale) + "px; height:" + (this.height * scale) + "px");

		var svg = $("<svg></svg>");

		var defs = $("<defs></defs>");

		if (type == "germ")
		{
			this.germ.balls.forEach((b) => {
	  			var ball = $("<circle></circle>");
	  			ball.attr("cx", (b.cx * scale) + "px");
	  			ball.attr("cy", (b.cy * scale) + "px");
	  			ball.attr("r", (b.r * scale) + "px");
	  			ball.attr("fill", "url(#" + this.germ.defs.radialGradient.id + ")");

	  			svg.append(ball);

				var animBall1 = $("<animate></animate>");
				animBall1.attr("id", "animBall1");
				animBall1.attr("attributeName", b.change);
				animBall1.attr("from", (b[b.change] * scale) + "px");
				animBall1.attr("to", (b.changeTo * scale) + "px");
				animBall1.attr("fill", "remove");
				animBall1.attr("begin", "0s;animBall2.end");
				animBall1.attr("dur", speed + "s");
				animBall1.attr("repeatCount", "1");

				ball.append(animBall1);

				var animBall2 = $("<animate></animate>");
				animBall2.attr("id", "animBall2");
				animBall2.attr("attributeName", b.change);
				animBall2.attr("from", (b.changeTo * scale) + "px");
				animBall2.attr("to", (b[b.change] * scale) + "px");
				animBall2.attr("fill", "remove");
				animBall2.attr("begin", "animBall1.end");
				animBall2.attr("dur", speed + "s");
				animBall2.attr("repeatCount", "1");

				ball.append(animBall2);
			});

			var radialGradient = $("<radialGradient></radialGradient>");
			radialGradient.attr("id", this.germ.defs.radialGradient.id);
			radialGradient.attr("cx", this.germ.defs.radialGradient.cx);
			radialGradient.attr("cy", this.germ.defs.radialGradient.cy);
			radialGradient.attr("r", this.germ.defs.radialGradient.r);
			radialGradient.attr("fx", this.germ.defs.radialGradient.fx);
			radialGradient.attr("fy", this.germ.defs.radialGradient.fy);

			this.germ.defs.stops.forEach((s) => {
	  			var stop = $("<stop></stop>");
	  			stop.attr("offset", s.offset);
	  			stop.attr("style", s.style);

	  			radialGradient.append(stop);
			});
	 
			defs.append(radialGradient);			
		}

		if (type == "bubble")
		{
  			var bubble = $("<circle></circle>");
  			bubble.attr("cx", (this.bubble.cx * scale) + "px");
  			bubble.attr("cy", (this.bubble.cy * scale) + "px");
  			bubble.attr("r", (this.bubble.r * scale) + "px");
  			bubble.attr("fill", "url(#" + this.bubble.defs.radialGradient.id + ")");
	  		bubble.attr("stroke", "rgba(255, 255, 255, 0.2)");	  			
	  		bubble.attr("stoke-width", "1px");  			

  			svg.append(bubble);

			var radialGradient = $("<radialGradient></radialGradient>");
			radialGradient.attr("id", this.bubble.defs.radialGradient.id);
			radialGradient.attr("cx", this.bubble.defs.radialGradient.cx);
			radialGradient.attr("cy", this.bubble.defs.radialGradient.cy);
			radialGradient.attr("r", this.bubble.defs.radialGradient.r);
			radialGradient.attr("fx", this.bubble.defs.radialGradient.fx);
			radialGradient.attr("fy", this.bubble.defs.radialGradient.fy);

			this.bubble.defs.stops.forEach((s) => {
	  			var stop = $("<stop></stop>");
	  			stop.attr("offset", s.offset);
	  			stop.attr("style", s.style);

	  			radialGradient.append(stop);
			});
	 
			defs.append(radialGradient);

			var animBubble1 = $("<animate></animate>");
			animBubble1.attr("id", "animBubble1");
			animBubble1.attr("attributeName", "r");
			animBubble1.attr("from", (this.bubble.r * scale) + "px");
			animBubble1.attr("to", (this.bubble.r * scale * 0.5) + "px");
			animBubble1.attr("fill", "remove");
			animBubble1.attr("begin", "0s;animBubble2.end");
			animBubble1.attr("dur", speed + "s");
			animBubble1.attr("repeatCount", "1");

			bubble.append(animBubble1);

			var animBubble2 = $("<animate></animate>");
			animBubble2.attr("id", "animBubble2");
			animBubble2.attr("attributeName", "r");
			animBubble2.attr("from", (this.bubble.r * scale * 0.5) + "px");
			animBubble2.attr("to", (this.bubble.r * scale) + "px");
			animBubble2.attr("fill", "remove");
			animBubble2.attr("begin", "animBubble1.end");
			animBubble2.attr("dur", speed + "s");
			animBubble2.attr("repeatCount", "1");

			bubble.append(animBubble2);
		}

		svg.append(defs);

		obj.append(svg);

		obj.html(obj.html());
	}
};