let spermTemplate = 
{
	width: 10,
	height: 30,
	tail: 
	{   
		path: 
		[
			[2, 8, null, null],
			[4, 0, null, null],
			[1, 2, -1, 5],
			[-2, 2, 1, 5],
			[1, 2, -1, 5],
			[-1, 1, 0, 5],
			[-2, -2, -1, -5],
			[2, -3, 1, -5],
			[-2, -2, -1, -5],
			[2, -3, -1, -5]
		],
		altpath:
		[  
			[2, 8, null, null],
			[4, 0, null, null],
			[-1, 2, 0, 5],
			[1, 3, -1, 5],
			[-1, 1, 0, 5],
			[1, 2, 0, 5],
			[0, -2, -1, -5],
			[-1, -3, 0, -5],
			[2, -2, 1, -5],
			[-1, -2, -1, -5]
		]		
	},
	head:
	{
		cx: 5,
		cy: 5,
		r: 4,
		defs:
		{
			radialGradient:
			{
				id: "spermHead",
				cx: "20%",
				cy: "20%",
				r: "50%",
				fx: "20%",
				fy: "10%"
			},
			stops: 
			[
				{offset: "10%", style: "stop-color:rgb(200, 200, 200); stop-opacity:1"},
				{offset: "100%", style: "stop-color:rgb(255, 255, 255); stop-opacity:1"}
			]
		}		
	},
	sunglasses:
	{
		cx: 3,
		cy: 4,
		rx: 2,
		ry: 1.5,
		defs:
		{
			linearGradient:
			{
				id: "sunglasses",
				x1: "0%",
				y1: "0%",
				x2: "100%",
				y2: "100%"
			},
			stops: 
			[
				{offset: "10%", style: "stop-color:rgb(0, 0, 0); stop-opacity:1"},
				{offset: "50%", style: "stop-color:rgb(100, 100, 100); stop-opacity:1"},
				{offset: "75%", style: "stop-color:rgb(0, 0, 0); stop-opacity:1"}
			]
		}
	},
	sunglassesForward:
	{
		cx: 3,
		cy: 3,
		rx: 2,
		ry: 1,
		rotate: 20
	},
	mask:
	{
		path: 
		[
			[5, 7, null, null],
			[-4, -1, null, null],
			[-0.5, -5, 4, -5],
			[5, 0, 4, 5]
		],
		defs:
		{
			radialGradient:
			{
				id: "spermMask",
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
			]
		},
		star:
		{
			path: 
			[
				[5, 1.5],
				[0.5, 1],
				[1, 0],
				[-1, 0.5],
				[0.5, 1],
				[-1, -0.5],
				[-1, 0.5],
				[0.5, -1],
				[-1, -0.5],
				[1, 0],
			]
		},
		eyeholes:
		{
			cx: 3,
			cy: 5,
			rx: 1.5,
			ry: 1	
		}
	},
	maskForward:
	{
		star:
		{
			path: 
			[
				[5, 0.5],
				[0.5, 1],
				[1, 0],
				[-1, 0.5],
				[0.5, 1],
				[-1, -0.5],
				[-1, 0.5],
				[0.5, -1],
				[-1, -0.5],
				[1, 0],
			]
		},
		eyeholes:
		{
			cx: 3,
			cy: 2.5,
			rx: 1.5,
			ry: 0.5,
			rotate: 30		
		}
	},
	shield:
	{
		cx: 6,
		cy: 15,
		rx: 2,
		ry: 3,
		defs:
		{
			radialGradient:
			{
				id: "spermShield",
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
	shieldForward:
	{
		cx: 5,
		cy: 2,
		rx: 2.5,
		ry: 1
	},
	boss1:
	{
		hair:
		{
			path: 
			[
				[1, 1.5],
				[4, -0.5],
				[4, 0.5],
				[-1, 0.5],
				[1.5, 0.5],
				[-1.5, 0],
				[1, 1],
				[-1.5, -0.5],
				[0, 1],
				[-1.5, -1],
				[-0.5, 2],
				[-0.5, -2],
				[-0.5, 2],
				[-0.5, -2],
				[-1.5, 2],
				[0, -1.5],
				[-1, 1],
				[1, -1.5],
				[-1, 0.5],
				[1, -1.5]
			]			
		},
		cigar:
		{
			cx: 7,
			cy: 7,
			rx: 2,
			ry: 0.5
		},
		smoke:
		{
			path: 
			[
				[8, 10, null, null],
				[2, -3, 0, -5],
				[-3, -2, 0, -5],
				[-3, 2, 1, 5],
				[2, 2, -1, 5]
			],
			altpath:
			[
				[8, 10, null, null],
				[-1, -1, 0, -4],
				[1, -1, 0, -4],
				[1, 1, 1, 4],
				[-1, 1, -1, 4]
			],
		}
	},
	boss2:
	{
		hair:
		{
			path: 
			[
				[5, 4.5, null, null],
				[-4, 0, null, null],
				[0, -4, 4, -4.5],
				[4, 0, 4, 4.5]
			],
			defs:
			{
				radialGradient:
				{
					id: "boss2Hair",
					cx: "20%",
					cy: "20%",
					r: "50%",
					fx: "20%",
					fy: "10%"
				},
				stops: 
				[
					{offset: "10%", style: "stop-color:rgb(100, 0, 0); stop-opacity:1"},
					{offset: "100%", style: "stop-color:rgb(50, 0, 0); stop-opacity:1"}
				]
			}	
		},
		dreads:
		{
			cx: 1.5,
			cy: 6,
			rx: 0.5,
			ry: 4
		},
		mustache:
		{
			path: 
			[
				[5, 7, null, null],
				[-2, 0.5, -2, 2],
				[0, 0, 2, -1],
				[0, 0, 2, 1],
				[1, -1, -2, -2]
			],
			altpath: 
			[
				[5, 7, null, null],
				[-2, 0, -2, 2],
				[0, 0, 2, -1],
				[0, 0, 2, 1],
				[1, -1.5, -2, -2]
			]	
		},
		bandana:
		{
			x: 1,
			y: 3.5,
			width: 8,
			height: 1.5
		}
	},
	boss3:
	{
		upperlip:
		{
			path: 
			[
				[4, 7, null, null],
				[0.5, -1, 1, -0.5],
				[0.5, -0.5, 1, 0.5]
			],
			altpath: 
			[
				[4, 7, null, null],
				[0.5, -1.5, 1, -0.5],
				[0.5, -1, 1, 0.5]
			]	
		},
		lowerlip:
		{
			path: 
			[
				[4, 7, null, null],
				[1, 1, 2, 0]
			],
			altpath: 
			[
				[4, 7, null, null],
				[1, 1.5, 2, 0]
			]		
		},
		shades:
		{
			path: 
			[
				[2, 4, null, null],
				[1.5, 3, 3, 0]
			],
			defs:
			{
				linearGradient:
				{
					id: "boss3Shades",
					x1: "0%",
					y1: "0%",
					x2: "100%",
					y2: "100%"
				},
				stops: 
				[
					{offset: "10%", style: "stop-color:rgb(0, 0, 0); stop-opacity:1"},
					{offset: "50%", style: "stop-color:rgb(100, 100, 100); stop-opacity:1"},
					{offset: "75%", style: "stop-color:rgb(0, 0, 0); stop-opacity:1"}
				]
			}
		},
		earrings:
		{
			cx: 1,
			cy: 7,
			rx: 0.5,
			ry: 1
		},
	},
	render: function (obj, scale, speed, options)
	{
		obj.html("");
		
		obj.addClass("sperm");
		obj.attr("style", "width:" + (this.width * scale) + "px; height:" + (this.height * scale) + "px");

		var svg = $("<svg></svg>");

		var tail = $("<path></path>");
		var d = "";
		var altd = "";

		this.tail.path.forEach((p, i) => {
  			if (i == 0) d = d + "M ";
  			if (i == 1) d = d + "l ";
  			if (i >= 2) d = d + "q ";

  			d = d + (p[0] * scale) + " ";
  			d = d + (p[1] * scale) + " ";
  			if (p[2] != null) d = d + (p[2] * scale) + " ";
  			if (p[3] != null) d = d + (p[3] * scale) + " ";

  			if (i == this.tail.path.length - 1) d = d + "Z";
		});

		this.tail.altpath.forEach((p, i) => {
  			if (i == 0) altd = altd + "M ";
  			if (i == 1) altd = altd + "l ";
  			if (i >= 2) altd = altd + "q ";

  			altd = altd + (p[0] * scale) + " ";
  			altd = altd + (p[1] * scale) + " ";
  			if (p[2] != null) altd = altd + (p[2] * scale) + " ";
  			if (p[3] != null) altd = altd + (p[3] * scale) + " ";

  			if (i == this.tail.altpath.length - 1) altd = altd + "Z";
		});

		tail.attr("d", d);
		tail.attr("fill", "rgb(255, 255, 255)");
		tail.addClass("tail");

		var animTail1 = $("<animate></animate>");
		animTail1.attr("id", "animTail1");
		animTail1.attr("attributeName", "d");
		animTail1.attr("from", d);
		animTail1.attr("to", altd);
		animTail1.attr("fill", "remove");
		animTail1.attr("begin", "0s;animTail2.end");
		animTail1.attr("dur", speed + "s");
		animTail1.attr("repeatCount", "1");

		var animTail2 = $("<animate></animate>");
		animTail2.attr("id", "animTail2");
		animTail2.attr("attributeName", "d");
		animTail2.attr("from", altd);
		animTail2.attr("to", d);
		animTail2.attr("fill", "remove");
		animTail2.attr("begin", "animTail1.end");
		animTail2.attr("dur", speed + "s");
		animTail2.attr("repeatCount", "1");

		tail.append(animTail1);
		tail.append(animTail2);

		svg.append(tail);

		var head = $("<circle></circle>");
		head.attr("cx", (this.head.cx * scale) + "px");
		head.attr("cy", (this.head.cy * scale) + "px");
		head.attr("r", (this.head.r * scale) + "px");
		head.attr("fill", "url(#" + this.head.defs.radialGradient.id + ")");
		head.addClass("head");

		var animHead1 = $("<animate></animate>");
		animHead1.attr("id", "animHead1");
		animHead1.attr("attributeName", "cy");
		animHead1.attr("from", (this.head.cy * scale) + "px");
		animHead1.attr("to", ((this.head.cy * scale) + (0.5 * scale)) + "px");
		animHead1.attr("fill", "remove");
		animHead1.attr("begin", "0s;animHead2.end");
		animHead1.attr("dur", speed + "s");
		animHead1.attr("repeatCount", "1");

		var animHead2 = $("<animate></animate>");
		animHead2.attr("id", "animHead2");
		animHead2.attr("attributeName", "cy");
		animHead2.attr("from", ((this.head.cy * scale) + (0.5 * scale)) + "px");
		animHead2.attr("to", (this.head.cy * scale) + "px");
		animHead2.attr("fill", "remove");
		animHead2.attr("begin", "animHead1.end");
		animHead2.attr("dur", speed + "s");
		animHead2.attr("repeatCount", "1");

		head.append(animHead1);
		head.append(animHead2);

		svg.append(head);

		var defs = $("<defs></defs>");
		var radialGradient = $("<radialGradient></radialGradient>");
		radialGradient.attr("id", this.head.defs.radialGradient.id);
		radialGradient.attr("cx", this.head.defs.radialGradient.cx);
		radialGradient.attr("cy", this.head.defs.radialGradient.cy);
		radialGradient.attr("r", this.head.defs.radialGradient.r);
		radialGradient.attr("fx", this.head.defs.radialGradient.fx);
		radialGradient.attr("fy", this.head.defs.radialGradient.fy);

		this.head.defs.stops.forEach((s) => {
  			var stop = $("<stop></stop>");
  			stop.attr("offset", s.offset);
  			stop.attr("style", s.style);

  			radialGradient.append(stop);
		});
 
		defs.append(radialGradient);

		//if there are extras
		if (options.length > 0)
		{
			//normal face
			if (options.indexOf("front") != -1)
			{
				var sunglasses;
				sunglasses = $("<ellipse></ellipse>");
				sunglasses.attr("rx", (this.sunglasses.rx * scale) + "px");
				sunglasses.attr("ry", (this.sunglasses.ry * scale) + "px");
				sunglasses.attr("fill", "url(#" + this.sunglasses.defs.linearGradient.id + ")");
				sunglasses.attr("stroke", "rgb(100, 100, 100)");
				sunglasses.attr("stroke-width", "2px");
				svg.append(sunglasses);
				sunglasses.attr("cx", (this.sunglasses.cx * scale) + "px");
				sunglasses.attr("cy", (this.sunglasses.cy * scale) + "px");

				sunglasses = $("<ellipse></ellipse>");
				sunglasses.attr("rx", (this.sunglasses.rx * scale) + "px");
				sunglasses.attr("ry", (this.sunglasses.ry * scale) + "px");
				sunglasses.attr("fill", "url(#" + this.sunglasses.defs.linearGradient.id + ")");
				sunglasses.attr("stroke", "rgb(100, 100, 100)");
				sunglasses.attr("stroke-width", "2px");
				svg.append(sunglasses);
				sunglasses.attr("cx", ((this.width * scale) - (this.sunglasses.cx * scale)) + "px");
				sunglasses.attr("cy", (this.sunglasses.cy * scale) + "px");

				var linearGradient = $("<linearGradient></linearGradient>");
				linearGradient.attr("id", this.sunglasses.defs.linearGradient.id);
				linearGradient.attr("x1", this.sunglasses.defs.linearGradient.x1);
				linearGradient.attr("y1", this.sunglasses.defs.linearGradient.y1);
				linearGradient.attr("x2", this.sunglasses.defs.linearGradient.x2);
				linearGradient.attr("y2", this.sunglasses.defs.linearGradient.y2);

				this.sunglasses.defs.stops.forEach((s) => {
		  			var stop = $("<stop></stop>");
		  			stop.attr("offset", s.offset);
		  			stop.attr("style", s.style);

		  			linearGradient.append(stop);
				});

  				defs.append(linearGradient); 			
			}

			//normal forward
			if (options.indexOf("forward") != -1)
			{
				var sunglasses;
				sunglasses = $("<ellipse></ellipse>");
				sunglasses.attr("rx", (this.sunglassesForward.rx * scale) + "px");
				sunglasses.attr("ry", (this.sunglassesForward.ry * scale) + "px");
				sunglasses.attr("fill", "rgb(0, 0, 0)");
				sunglasses.attr("stroke", "rgb(100, 100, 100)");
				sunglasses.attr("stroke-width", "2px");
				sunglasses.attr("transform", "rotate(-" + this.sunglassesForward.rotate + "," + (this.sunglassesForward.cx * scale) + "," + (this.sunglassesForward.cy * scale) + ")");
				svg.append(sunglasses);
				sunglasses.attr("cx", (this.sunglassesForward.cx * scale) + "px");
				sunglasses.attr("cy", (this.sunglassesForward.cy * scale) + "px");

				sunglasses = $("<ellipse></ellipse>");
				sunglasses.attr("rx", (this.sunglassesForward.rx * scale) + "px");
				sunglasses.attr("ry", (this.sunglassesForward.ry * scale) + "px");
				sunglasses.attr("fill", "rgb(0, 0, 0)");
				sunglasses.attr("stroke", "rgb(100, 100, 100)");
				sunglasses.attr("stroke-width", "2px");
				sunglasses.attr("transform", "rotate(" + this.sunglassesForward.rotate + "," + ((this.width * scale) - (this.sunglassesForward.cx * scale)) + "," + (this.sunglassesForward.cy * scale) + ")");
				svg.append(sunglasses);
				sunglasses.attr("cx", ((this.width * scale) - (this.sunglassesForward.cx * scale)) + "px");
				sunglasses.attr("cy", (this.sunglassesForward.cy * scale) + "px");
			}

			//mask front

			if (options.indexOf("mask_front") != -1)
			{
				var mask = $("<path></path>");
				var d = "";

				this.mask.path.forEach((p, i) => {
		  			if (i == 0) d = d + "M ";
		  			if (i == 1) d = d + "l ";
		  			if (i >= 2) d = d + "q ";

		  			d = d + (p[0] * scale) + " ";
		  			d = d + (p[1] * scale) + " ";
		  			if (p[2] != null) d = d + (p[2] * scale) + " ";
		  			if (p[3] != null) d = d + (p[3] * scale) + " ";

		  			if (i == this.mask.path.length - 1) d = d + "Z";
				});

				mask.attr("d", d);	
				mask.attr("fill", "url(#" + this.mask.defs.radialGradient.id + ")");

				svg.append(mask);

				var star = $("<path></path>");
				var d = "";

				this.mask.star.path.forEach((p, i) => {
		  			if (i == 0) d = d + "M ";
		  			if (i >= 1) d = d + "l ";

		  			d = d + (p[0] * scale) + " ";
		  			d = d + (p[1] * scale) + " ";

		  			if (i == this.mask.star.path.length - 1) d = d + "Z";
				});

				star.attr("d", d);	
				star.attr("fill", "rgb(255, 255, 0)");

				svg.append(star);

				var eyeholes;
				eyeholes = $("<ellipse></ellipse>");
				eyeholes.attr("rx", (this.mask.eyeholes.rx * scale) + "px");
				eyeholes.attr("ry", (this.mask.eyeholes.ry * scale) + "px");
				eyeholes.attr("fill", "rgb(255, 255, 255)");
				eyeholes.attr("stroke", "rgb(0, 0, 100)");
				eyeholes.attr("stroke-width", "2px");
				svg.append(eyeholes);
				eyeholes.attr("cx", (this.mask.eyeholes.cx * scale) + "px");
				eyeholes.attr("cy", (this.mask.eyeholes.cy * scale) + "px");

				eyeholes = $("<ellipse></ellipse>");
				eyeholes.attr("rx", (this.mask.eyeholes.rx * scale) + "px");
				eyeholes.attr("ry", (this.mask.eyeholes.ry * scale) + "px");
				eyeholes.attr("fill", "rgb(255, 255, 255)");
				eyeholes.attr("stroke", "rgb(0, 0, 100)");
				eyeholes.attr("stroke-width", "2px");
				svg.append(eyeholes);
				eyeholes.attr("cx", ((this.width * scale) - (this.mask.eyeholes.cx * scale)) + "px");
				eyeholes.attr("cy", (this.mask.eyeholes.cy * scale) + "px");

				var radialGradient = $("<radialGradient></radialGradient>");
				radialGradient.attr("id", this.mask.defs.radialGradient.id);
				radialGradient.attr("cx", this.mask.defs.radialGradient.cx);
				radialGradient.attr("cy", this.mask.defs.radialGradient.cy);
				radialGradient.attr("r", this.mask.defs.radialGradient.r);
				radialGradient.attr("fx", this.mask.defs.radialGradient.fx);
				radialGradient.attr("fy", this.mask.defs.radialGradient.fy);

				this.mask.defs.stops.forEach((s) => {
		  			var stop = $("<stop></stop>");
		  			stop.attr("offset", s.offset);
		  			stop.attr("style", s.style);

		  			radialGradient.append(stop);
				});
		 
				defs.append(radialGradient);
			}

			//mask forward

			if (options.indexOf("mask_forward") != -1)
			{
				var mask = $("<circle></circle>");
				mask.attr("cx", (this.head.cx * scale) + "px");
				mask.attr("cy", (this.head.cy * scale) + "px");
				mask.attr("r", (this.head.r * scale) + "px");
				mask.attr("fill", "url(#" + this.mask.defs.radialGradient.id + ")");

				var animMask1 = $("<animate></animate>");
				animMask1.attr("id", "animMask1");
				animMask1.attr("attributeName", "cy");
				animMask1.attr("from", (this.head.cy * scale) + "px");
				animMask1.attr("to", ((this.head.cy * scale) + (0.5 * scale)) + "px");
				animMask1.attr("fill", "remove");
				animMask1.attr("begin", "0s;animMask2.end");
				animMask1.attr("dur", speed + "s");
				animMask1.attr("repeatCount", "1");

				var animMask2 = $("<animate></animate>");
				animMask2.attr("id", "animMask2");
				animMask2.attr("attributeName", "cy");
				animMask2.attr("from", ((this.head.cy * scale) + (0.5 * scale)) + "px");
				animMask2.attr("to", (this.head.cy * scale) + "px");
				animMask2.attr("fill", "remove");
				animMask2.attr("begin", "animMask1.end");
				animMask2.attr("dur", speed + "s");
				animMask2.attr("repeatCount", "1");

				mask.append(animMask1);
				mask.append(animMask2);

				svg.append(mask);

				var radialGradient = $("<radialGradient></radialGradient>");
				radialGradient.attr("id", this.mask.defs.radialGradient.id);
				radialGradient.attr("cx", this.mask.defs.radialGradient.cx);
				radialGradient.attr("cy", this.mask.defs.radialGradient.cy);
				radialGradient.attr("r", this.mask.defs.radialGradient.r);
				radialGradient.attr("fx", this.mask.defs.radialGradient.fx);
				radialGradient.attr("fy", this.mask.defs.radialGradient.fy);

				this.mask.defs.stops.forEach((s) => {
		  			var stop = $("<stop></stop>");
		  			stop.attr("offset", s.offset);
		  			stop.attr("style", s.style);

		  			radialGradient.append(stop);
				});
		 
				defs.append(radialGradient);

				var star = $("<path></path>");
				var d = "";

				this.mask.star.path.forEach((p, i) => {
		  			if (i == 0) d = d + "M ";
		  			if (i >= 1) d = d + "l ";

		  			d = d + (p[0] * scale) + " ";
		  			d = d + (p[1] * scale) + " ";

		  			if (i == this.mask.star.path.length - 1) d = d + "Z";
				});

				star.attr("d", d);	
				star.attr("fill", "rgb(255, 255, 0)");
				star.attr("transform", "scale(1, 0.5) rotate(180," + (this.head.cx * scale) + "," + (this.head.cy * scale) + ")");

				svg.append(star);

				var eyeholes;
				eyeholes = $("<ellipse></ellipse>");
				eyeholes.attr("rx", (this.maskForward.eyeholes.rx * scale) + "px");
				eyeholes.attr("ry", (this.maskForward.eyeholes.ry * scale) + "px");
				eyeholes.attr("fill", "rgb(255, 255, 255)");
				eyeholes.attr("stroke", "rgb(0, 0, 100)");
				eyeholes.attr("stroke-width", "2px");
				eyeholes.attr("transform", "rotate(-" + this.maskForward.eyeholes.rotate + "," + (this.maskForward.eyeholes.cx * scale) + "," + (this.maskForward.eyeholes.cy * scale) + ")");
				svg.append(eyeholes);
				eyeholes.attr("cx", (this.maskForward.eyeholes.cx * scale) + "px");
				eyeholes.attr("cy", (this.maskForward.eyeholes.cy * scale) + "px");

				eyeholes = $("<ellipse></ellipse>");
				eyeholes.attr("rx", (this.maskForward.eyeholes.rx * scale) + "px");
				eyeholes.attr("ry", (this.maskForward.eyeholes.ry * scale) + "px");
				eyeholes.attr("fill", "rgb(255, 255, 255)");
				eyeholes.attr("stroke", "rgb(0, 0, 100)");
				eyeholes.attr("stroke-width", "2px");
				eyeholes.attr("transform", "rotate(" + this.maskForward.eyeholes.rotate + "," + ((this.width * scale) - (this.maskForward.eyeholes.cx * scale)) + "," + (this.maskForward.eyeholes.cy * scale) + ")");
				svg.append(eyeholes);
				eyeholes.attr("cx", ((this.width * scale) - (this.maskForward.eyeholes.cx * scale)) + "px");
				eyeholes.attr("cy", (this.maskForward.eyeholes.cy * scale) + "px");
			}

			//shield front
			if (options.indexOf("shield_front") != -1)
			{
				var shield;
				shield = $("<ellipse></ellipse>");
				shield.attr("rx", (this.shield.rx * scale * 2) + "px");
				shield.attr("ry", (this.shield.ry * scale * 2) + "px");
				shield.attr("fill", "url(#" + this.shield.defs.radialGradient.id + ")");
				shield.attr("cx", (this.shield.cx * scale) + "px");
				shield.attr("cy", (this.shield.cy * scale) + "px");					
				svg.append(shield);

				shield = $("<ellipse></ellipse>");
				shield.attr("rx", (this.shield.rx * scale * 1.5) + "px");
				shield.attr("ry", (this.shield.ry * scale * 1.5) + "px");
				shield.attr("fill", "url(#" + this.shield.defs.radialGradient.id + "2)");
				shield.attr("cx", ((this.shield.cx * scale) + (scale * 0.5)) + "px");
				shield.attr("cy", (this.shield.cy * scale) + "px");					
				svg.append(shield);

				shield = $("<ellipse></ellipse>");
				shield.attr("rx", (this.shield.rx * scale) + "px");
				shield.attr("ry", (this.shield.ry * scale) + "px");
				shield.attr("fill", "url(#" + this.shield.defs.radialGradient.id + ")");
				shield.attr("cx", ((this.shield.cx * scale) + (scale * 1)) + "px");
				shield.attr("cy", (this.shield.cy * scale) + "px");					
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

			//shield forward
			if (options.indexOf("shield_forward") != -1)
			{
				var shield;
				shield = $("<ellipse></ellipse>");
				shield.attr("rx", (this.shieldForward.rx * scale * 2) + "px");
				shield.attr("ry", (this.shieldForward.ry * scale * 2) + "px");
				shield.attr("fill", "url(#" + this.shield.defs.radialGradient.id + ")");
				shield.attr("cx", (this.shieldForward.cx * scale) + "px");
				shield.attr("cy", (this.shieldForward.cy * scale) + "px");					
				svg.append(shield);

				shield = $("<ellipse></ellipse>");
				shield.attr("rx", (this.shieldForward.rx * scale * 1.5) + "px");
				shield.attr("ry", (this.shieldForward.ry * scale * 1.5) + "px");
				shield.attr("fill", "url(#" + this.shield.defs.radialGradient.id + "2)");
				shield.attr("cx", (this.shieldForward.cx * scale) + "px");
				shield.attr("cy", ((this.shieldForward.cy * scale) - (scale * 0.5)) + "px");					
				svg.append(shield);

				shield = $("<ellipse></ellipse>");
				shield.attr("rx", (this.shieldForward.rx * scale) + "px");
				shield.attr("ry", (this.shieldForward.ry * scale) + "px");
				shield.attr("fill", "url(#" + this.shield.defs.radialGradient.id + ")");
				shield.attr("cx", (this.shieldForward.cx * scale) + "px");
				shield.attr("cy", ((this.shieldForward.cy * scale) - (scale * 1)) + "px");					
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

			//boss 1
			if (options.indexOf("boss1") != -1)
			{
				var hair = $("<path></path>");
				var d = "";

				this.boss1.hair.path.forEach((p, i) => {
		  			if (i == 0) d = d + "M ";
		  			if (i >= 1) d = d + "l ";

		  			d = d + (p[0] * scale) + " ";
		  			d = d + (p[1] * scale) + " ";

		  			if (i == this.boss1.hair.path.length - 1) d = d + "Z";
				});

				hair.attr("d", d);	
				hair.attr("fill", "rgb(100, 255, 100)");

				svg.append(hair);

				var cigar = $("<ellipse></ellipse>");

				cigar.attr("rx", (this.boss1.cigar.rx * scale) + "px");
				cigar.attr("ry", (this.boss1.cigar.ry * scale) + "px");
				cigar.attr("fill", "rgb(100, 0, 0)");
				cigar.attr("cx", (this.boss1.cigar.cx * scale) + "px");
				cigar.attr("cy", (this.boss1.cigar.cy * scale) + "px");	
				cigar.attr("transform", "rotate(45, " + ((this.boss1.cigar.cx * scale) - (this.boss1.cigar.rx * scale)) + ", " + (this.boss1.cigar.cy * scale) + ")");				
				svg.append(cigar);

				var smoke = $("<path></path>");
				var d = "";
				var altd = "";

				this.boss1.smoke.path.forEach((p, i) => {
		  			if (i == 0) d = d + "M ";
		  			if (i >= 1) d = d + "q ";

		  			d = d + (p[0] * scale) + " ";
		  			d = d + (p[1] * scale) + " ";
		  			if (p[2] != null) d = d + (p[2] * scale) + " ";
		  			if (p[3] != null) d = d + (p[3] * scale) + " ";

		  			if (i == this.boss1.smoke.path.length - 1) d = d + "Z";
				});

				this.boss1.smoke.altpath.forEach((p, i) => {
		  			if (i == 0) altd = altd + "M ";
		  			if (i >= 1) altd = altd + "q ";

		  			altd = altd + (p[0] * scale) + " ";
		  			altd = altd + (p[1] * scale) + " ";
		  			if (p[2] != null) altd = altd + (p[2] * scale) + " ";
		  			if (p[3] != null) altd = altd + (p[3] * scale) + " ";

		  			if (i == this.boss1.smoke.altpath.length - 1) altd = altd + "Z";
				});

				smoke.attr("d", d);
				smoke.attr("fill", "rgba(100, 100, 100, 0.7)");

				var animSmoke1 = $("<animate></animate>");
				animSmoke1.attr("id", "animSmoke1");
				animSmoke1.attr("attributeName", "d");
				animSmoke1.attr("from", d);
				animSmoke1.attr("to", altd);
				animSmoke1.attr("fill", "remove");
				animSmoke1.attr("begin", "0s;animSmoke2.end");
				animSmoke1.attr("dur", (speed * 2) + "s");
				animSmoke1.attr("repeatCount", "1");

				var animSmoke2 = $("<animate></animate>");
				animSmoke2.attr("id", "animSmoke2");
				animSmoke2.attr("attributeName", "d");
				animSmoke2.attr("from", altd);
				animSmoke2.attr("to", d);
				animSmoke2.attr("fill", "remove");
				animSmoke2.attr("begin", "animSmoke1.end");
				animSmoke2.attr("dur", (speed * 2) + "s");
				animSmoke2.attr("repeatCount", "1");

				smoke.append(animSmoke1);
				smoke.append(animSmoke2);

				svg.append(smoke);
			}

			//boss 2
			if (options.indexOf("boss2") != -1)
			{
				var dreads;

				dreads = $("<ellipse></ellipse>");
				dreads.attr("rx", (this.boss2.dreads.rx * scale) + "px");
				dreads.attr("ry", (this.boss2.dreads.ry * scale) + "px");
				dreads.attr("fill", "rgb(50, 0, 0)");
				dreads.attr("cx", (this.boss2.dreads.cx * scale) + "px");
				dreads.attr("cy", (this.boss2.dreads.cy * scale) + "px");	
				svg.append(dreads);

				dreads = $("<ellipse></ellipse>");
				dreads.attr("rx", (this.boss2.dreads.rx * scale) + "px");
				dreads.attr("ry", (this.boss2.dreads.ry * scale * 0.5) + "px");
				dreads.attr("fill", "rgb(50, 0, 0)");
				dreads.attr("cx", (this.boss2.dreads.cx * scale * 1.5) + "px");
				dreads.attr("cy", ((this.boss2.dreads.cy * scale) - (0.5 * scale)) + "px");	
				svg.append(dreads);

				dreads = $("<ellipse></ellipse>");
				dreads.attr("rx", (this.boss2.dreads.rx * scale) + "px");
				dreads.attr("ry", (this.boss2.dreads.ry * scale * 0.5) + "px");
				dreads.attr("fill", "rgb(50, 0, 0)");
				dreads.attr("cx", (this.boss2.dreads.cx * scale * 2) + "px");
				dreads.attr("cy", ((this.boss2.dreads.cy * scale) - (1.5 * scale)) + "px");	
				svg.append(dreads);

				dreads = $("<ellipse></ellipse>");
				dreads.attr("rx", (this.boss2.dreads.rx * scale * 1.5) + "px");
				dreads.attr("ry", (this.boss2.dreads.ry * scale) + "px");
				dreads.attr("fill", "rgb(50, 0, 0)");
				dreads.attr("cx", (this.boss2.dreads.cx * scale * 5.5) + "px");
				dreads.attr("cy", (this.boss2.dreads.cy * scale) + "px");	
				svg.append(dreads);

				dreads = $("<ellipse></ellipse>");
				dreads.attr("rx", (this.boss2.dreads.rx * scale) + "px");
				dreads.attr("ry", (this.boss2.dreads.ry * scale * 0.5) + "px");
				dreads.attr("fill", "rgb(50, 0, 0)");
				dreads.attr("cx", (this.boss2.dreads.cx * scale * 5) + "px");
				dreads.attr("cy", ((this.boss2.dreads.cy * scale) - (0.5 * scale)) + "px");	
				svg.append(dreads);

				dreads = $("<ellipse></ellipse>");
				dreads.attr("rx", (this.boss2.dreads.rx * scale) + "px");
				dreads.attr("ry", (this.boss2.dreads.ry * scale * 0.5) + "px");
				dreads.attr("fill", "rgb(50, 0, 0)");
				dreads.attr("cx", (this.boss2.dreads.cx * scale * 4.5) + "px");
				dreads.attr("cy", ((this.boss2.dreads.cy * scale) - (1.5 * scale)) + "px");	
				svg.append(dreads);

				var hair = $("<path></path>");
				var d = "";

				this.boss2.hair.path.forEach((p, i) => {
		  			if (i == 0) d = d + "M ";
		  			if (i == 1) d = d + "l ";
		  			if (i >= 2) d = d + "q ";

		  			d = d + (p[0] * scale) + " ";
		  			d = d + (p[1] * scale) + " ";
		  			if (p[2] != null) d = d + (p[2] * scale) + " ";
		  			if (p[3] != null) d = d + (p[3] * scale) + " ";

		  			if (i == this.boss2.hair.path.length - 1) d = d + "Z";
				});

				hair.attr("d", d);
				hair.attr("fill", "url(#" + this.boss2.hair.defs.radialGradient.id + ")");

				var radialGradient = $("<radialGradient></radialGradient>");
				radialGradient.attr("id", this.boss2.hair.defs.radialGradient.id);
				radialGradient.attr("cx", this.boss2.hair.defs.radialGradient.cx);
				radialGradient.attr("cy", this.boss2.hair.defs.radialGradient.cy);
				radialGradient.attr("r", this.boss2.hair.defs.radialGradient.r);
				radialGradient.attr("fx", this.boss2.hair.defs.radialGradient.fx);
				radialGradient.attr("fy", this.boss2.hair.defs.radialGradient.fy);

				this.boss2.hair.defs.stops.forEach((s) => {
		  			var stop = $("<stop></stop>");
		  			stop.attr("offset", s.offset);
		  			stop.attr("style", s.style);

		  			radialGradient.append(stop);
				});
		 
				defs.append(radialGradient);

				svg.append(hair);

				var bandana = $("<rect></rect>");
				bandana.attr("x", (this.boss2.bandana.x * scale) + "px");
				bandana.attr("y", (this.boss2.bandana.y * scale) + "px");
				bandana.attr("width", (this.boss2.bandana.width * scale) + "px");
				bandana.attr("height", (this.boss2.bandana.height * scale) + "px");
				bandana.attr("fill", "rgb(155, 0, 0)");

				svg.append(bandana);

				var mustache = $("<path></path>");
				var d = "";
				var altd = "";

				this.boss2.mustache.path.forEach((p, i) => {
		  			if (i == 0) d = d + "M ";
		  			if (i >= 1) d = d + "q ";

		  			d = d + (p[0] * scale) + " ";
		  			d = d + (p[1] * scale) + " ";
		  			if (p[2] != null) d = d + (p[2] * scale) + " ";
		  			if (p[3] != null) d = d + (p[3] * scale) + " ";

		  			if (i == this.boss2.mustache.path.length - 1) d = d + "Z";
				});

				this.boss2.mustache.altpath.forEach((p, i) => {
		  			if (i == 0) altd = altd + "M ";
		  			if (i >= 1) altd = altd + "q ";

		  			altd = altd + (p[0] * scale) + " ";
		  			altd = altd + (p[1] * scale) + " ";
		  			if (p[2] != null) altd = altd + (p[2] * scale) + " ";
		  			if (p[3] != null) altd = altd + (p[3] * scale) + " ";

		  			if (i == this.boss2.mustache.altpath.length - 1) altd = altd + "Z";
				});

				mustache.attr("d", d);
				mustache.attr("fill", "rgb(50, 0, 0)");

				var animMustache1 = $("<animate></animate>");
				animMustache1.attr("id", "animMustache1");
				animMustache1.attr("attributeName", "d");
				animMustache1.attr("from", d);
				animMustache1.attr("to", altd);
				animMustache1.attr("fill", "remove");
				animMustache1.attr("begin", "0s;animMustache2.end");
				animMustache1.attr("dur", speed + "s");
				animMustache1.attr("repeatCount", "1");

				var animMustache2 = $("<animate></animate>");
				animMustache2.attr("id", "animMustache2");
				animMustache2.attr("attributeName", "d");
				animMustache2.attr("from", altd);
				animMustache2.attr("to", d);
				animMustache2.attr("fill", "remove");
				animMustache2.attr("begin", "animMustache1.end");
				animMustache2.attr("dur", speed + "s");
				animMustache2.attr("repeatCount", "1");

				mustache.append(animMustache1);
				mustache.append(animMustache2);

				svg.append(mustache);
			}

			//boss 3
			if (options.indexOf("boss3") != -1)
			{
				var d = "";

				this.boss3.shades.path.forEach((p, i) => {
		  			if (i == 0) d = d + "M ";
		  			if (i >= 1) d = d + "q ";

		  			d = d + (p[0] * scale) + " ";
		  			d = d + (p[1] * scale) + " ";
		  			if (p[2] != null) d = d + (p[2] * scale) + " ";
		  			if (p[3] != null) d = d + (p[3] * scale) + " ";

		  			if (i == this.boss3.shades.path.length - 1) d = d + "Z";
				});

				var shades; 
				shades = $("<path></path>");
				shades.attr("d", d);
				shades.attr("fill", "url(#" + this.boss3.shades.defs.linearGradient.id + ")");
				shades.attr("stroke-width", "2px");
				shades.attr("stroke", "rgb(255, 255, 0)");
				svg.append(shades);

				shades = $("<path></path>");
				shades.attr("d", d);
				shades.attr("fill", "url(#" + this.boss3.shades.defs.linearGradient.id + ")");
				shades.attr("stroke-width", "2px");
				shades.attr("stroke", "rgb(255, 255, 0)");
				shades.attr("transform", "translate(" + (scale * 3) + ", 0)");
				svg.append(shades);

				var linearGradient = $("<linearGradient></linearGradient>");
				linearGradient.attr("id", this.boss3.shades.defs.linearGradient.id);
				linearGradient.attr("x1", this.boss3.shades.defs.linearGradient.x1);
				linearGradient.attr("y1", this.boss3.shades.defs.linearGradient.y1);
				linearGradient.attr("x2", this.boss3.shades.defs.linearGradient.x2);
				linearGradient.attr("y2", this.boss3.shades.defs.linearGradient.y2);

				this.boss3.shades.defs.stops.forEach((s) => {
		  			var stop = $("<stop></stop>");
		  			stop.attr("offset", s.offset);
		  			stop.attr("style", s.style);

		  			linearGradient.append(stop);
				});

  				defs.append(linearGradient); 

				var earrings; 
				earrings = $("<ellipse></ellipse>");
				earrings.attr("stroke-width", "2px");
				earrings.attr("stroke", "rgb(255, 255, 0)");
				earrings.attr("cx", (this.boss3.earrings.cx * scale) + "px");
				earrings.attr("cy", (this.boss3.earrings.cy * scale) + "px");
				earrings.attr("rx", (this.boss3.earrings.rx * scale) + "px");
				earrings.attr("ry", (this.boss3.earrings.ry * scale) + "px");
				earrings.attr("fill", "none");
				svg.append(earrings);

				earrings = $("<ellipse></ellipse>");
				earrings.attr("stroke-width", "2px");
				earrings.attr("stroke", "rgb(255, 255, 0)");
				earrings.attr("cx", ((this.width - this.boss3.earrings.cx) * scale) + "px");
				earrings.attr("cy", (this.boss3.earrings.cy * scale) + "px");
				earrings.attr("rx", (this.boss3.earrings.rx * scale) + "px");
				earrings.attr("ry", (this.boss3.earrings.ry * scale) + "px");
				earrings.attr("fill", "none");
				svg.append(earrings);

				var upperlip = $("<path></path>");
				var d = "";
				var altd = "";

				this.boss3.upperlip.path.forEach((p, i) => {
		  			if (i == 0) d = d + "M ";
		  			if (i == 1) d = d + "q ";

		  			d = d + (p[0] * scale) + " ";
		  			d = d + (p[1] * scale) + " ";
		  			if (p[2] != null) d = d + (p[2] * scale) + " ";
		  			if (p[3] != null) d = d + (p[3] * scale) + " ";

		  			if (i == this.boss3.upperlip.path.length - 1) d = d + "Z";
				});

				this.boss3.upperlip.altpath.forEach((p, i) => {
		  			if (i == 0) altd = altd + "M ";
		  			if (i >= 1) altd = altd + "q ";

		  			altd = altd + (p[0] * scale) + " ";
		  			altd = altd + (p[1] * scale) + " ";
		  			if (p[2] != null) altd = altd + (p[2] * scale) + " ";
		  			if (p[3] != null) altd = altd + (p[3] * scale) + " ";

		  			if (i == this.boss3.upperlip.altpath.length - 1) altd = altd + "Z";
				});

				upperlip.attr("d", d);
				upperlip.attr("fill", "rgb(255, 0, 0)");
				upperlip.addClass("upperlip");

				var animUpperlip1 = $("<animate></animate>");
				animUpperlip1.attr("id", "animUpperlip1");
				animUpperlip1.attr("attributeName", "d");
				animUpperlip1.attr("from", d);
				animUpperlip1.attr("to", altd);
				animUpperlip1.attr("fill", "remove");
				animUpperlip1.attr("begin", "0s;animUpperlip2.end");
				animUpperlip1.attr("dur", speed + "s");
				animUpperlip1.attr("repeatCount", "1");

				var animUpperlip2 = $("<animate></animate>");
				animUpperlip2.attr("id", "animUpperlip2");
				animUpperlip2.attr("attributeName", "d");
				animUpperlip2.attr("from", altd);
				animUpperlip2.attr("to", d);
				animUpperlip2.attr("fill", "remove");
				animUpperlip2.attr("begin", "animUpperlip1.end");
				animUpperlip2.attr("dur", speed + "s");
				animUpperlip2.attr("repeatCount", "1");

				upperlip.append(animUpperlip1);
				upperlip.append(animUpperlip2);

				svg.append(upperlip);

				var lowerlip = $("<path></path>");
				var d = "";
				var altd = "";

				this.boss3.lowerlip.path.forEach((p, i) => {
		  			if (i == 0) d = d + "M ";
		  			if (i == 1) d = d + "q ";

		  			d = d + (p[0] * scale) + " ";
		  			d = d + (p[1] * scale) + " ";
		  			if (p[2] != null) d = d + (p[2] * scale) + " ";
		  			if (p[3] != null) d = d + (p[3] * scale) + " ";

		  			if (i == this.boss3.lowerlip.path.length - 1) d = d + "Z";
				});

				this.boss3.lowerlip.altpath.forEach((p, i) => {
		  			if (i == 0) altd = altd + "M ";
		  			if (i >= 1) altd = altd + "q ";

		  			altd = altd + (p[0] * scale) + " ";
		  			altd = altd + (p[1] * scale) + " ";
		  			if (p[2] != null) altd = altd + (p[2] * scale) + " ";
		  			if (p[3] != null) altd = altd + (p[3] * scale) + " ";

		  			if (i == this.boss3.lowerlip.altpath.length - 1) altd = altd + "Z";
				});

				lowerlip.attr("d", d);
				lowerlip.attr("fill", "rgb(255, 0, 0)");
				lowerlip.addClass("lowerlip");

				var animLowerlip1 = $("<animate></animate>");
				animLowerlip1.attr("id", "animLowerlip1");
				animLowerlip1.attr("attributeName", "d");
				animLowerlip1.attr("from", d);
				animLowerlip1.attr("to", altd);
				animLowerlip1.attr("fill", "remove");
				animLowerlip1.attr("begin", "0s;animLowerlip2.end");
				animLowerlip1.attr("dur", speed + "s");
				animLowerlip1.attr("repeatCount", "1");

				var animLowerlip2 = $("<animate></animate>");
				animLowerlip2.attr("id", "animLowerlip2");
				animLowerlip2.attr("attributeName", "d");
				animLowerlip2.attr("from", altd);
				animLowerlip2.attr("to", d);
				animLowerlip2.attr("fill", "remove");
				animLowerlip2.attr("begin", "animLowerlip1.end");
				animLowerlip2.attr("dur", speed + "s");
				animLowerlip2.attr("repeatCount", "1");

				lowerlip.append(animLowerlip1);
				lowerlip.append(animLowerlip2);

				svg.append(lowerlip);
			}
		}

		svg.append(defs);

		obj.append(svg);

		obj.html(obj.html());
	},
	injured: function(obj)
	{
		var head = obj.find("circle.head");
		var tail = obj.find("path.tail");

		head.attr("fill", "rgb(255, 0, 0)");
		tail.attr("fill", "rgb(255, 0, 0)");

		setTimeout
		(
			() =>
			{
				head.attr("fill", "url(#" + this.head.defs.radialGradient.id + ")");
				tail.attr("fill", "rgb(255, 255, 255)");
			},
			500
		)
	},
	powerUp: function(obj)
	{
		var head = obj.find("circle.head");
		var tail = obj.find("path.tail");

		head.attr("fill", "rgb(255, 255, 0)");
		tail.attr("fill", "rgb(255, 255, 0)");

		setTimeout
		(
			() =>
			{
				head.attr("fill", "url(#" + this.head.defs.radialGradient.id + ")");
				tail.attr("fill", "rgb(255, 255, 255)");
			},
			500
		)
	},
	makeSpeech: function(obj, type)
	{
		$(".speech").remove();

		var balloon = $("<div></div>");
		balloon.addClass("speech");
		obj.append(balloon);

		var pointer = $("<div></div>");
		pointer.addClass("pointer");
		pointer.addClass("up");		
		pointer.html("&#9650;");

		balloon.append(pointer);

		var content = $("<div></div>");
		content.addClass("content");		
		content.html(this.getSpeech(type));

		balloon.append(content);

		setTimeout
		(
			() =>
			{
				$(".speech").remove();
			},
			1000
		)
	},
	getSpeech: function(type)
	{
		var phrases = 
		[
			{pos: "&hearts;", neg: "#@!$"},
			{pos: "哇塞", neg: "哎哟的妈"},
			{pos: "正点!", neg: "他妈的!"},
			{pos: "爽!", neg: "哇靠"},
		]

		var index = config.generateRandomNo(0, phrases.length - 1);

		return phrases[index][type];
	}
};