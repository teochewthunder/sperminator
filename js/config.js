var config = 
{
	speed:
	{
		normal: 2,
		turbo: 10
	},
	bonus:
	{
		heal:
		{
			heal: 10
		},
		power:
		{
			power: 10
		},
		energy:
		{
			energy: 10
		},
		shield:
		{
			shield: 100
		},
	},
	damage:
	{
		boss1:
		{
			heal: 10,
			energy: 50
		},
		boss2:
		{
			heal: 20,
			energy: 50
		},
		boss3:
		{
			heal: 50,
			energy: 50
		},
		sperm:
		{
			heal: 1,
			energy: 5
		},
		germ:
		{
			heal: 5
		},
		turbo:
		{
			energy: 0.1
		},
		power:
		{
			power: 0.1
		},
		shield:
		{
			shield: 0.1
		}
	},
	encounterChance:
	{
		none: 100,
		bubble:
		{
			stage1: {chance:5, max:50},
			stage2: {chance:5, max:100},
			stage3: {chance:5, max:100}
		},
		sperm: 
		{
			stage1: {chance:5, max:50},
			stage2: {chance:2, max:30},
			stage3: {chance:2, max:10}
		},
		germ:
		{
			stage1: {chance:0, max:0},
			stage2: {chance:1, max:20},
			stage3: {chance:2, max:30}
		},
		heal:
		{
			stage1: {chance:5, max:10},
			stage2: {chance:5, max:10},
			stage3: {chance:5, max:10}
		},
		power:
		{
			stage1: {chance:5, max:10},
			stage2: {chance:5, max:10},
			stage3: {chance:5, max:10}
		},
		energy:
		{
			stage1: {chance:5, max:10},
			stage2: {chance:5, max:10},
			stage3: {chance:5, max:10}
		},
		shield:
		{
			stage1: {chance:2, max:2},
			stage2: {chance:2, max:3},
			stage3: {chance:2, max:4}
		}		
	},
	getMapHeight: function(mapType)
	{
		if (mapType == "stage1") return 5500;
		if (mapType == "stage2") return 6500;
		if (mapType == "stage3") return 6000;
	},	
	getMapWidth: function(mapType)
	{
		if (mapType == "stage1") return 400;
		if (mapType == "stage2") return 400;
		if (mapType == "stage3") return 400;
	},
	getWallWidth: function(mapType)
	{
		if (mapType == "stage1") return 100;
		if (mapType == "stage2") return 10;
		if (mapType == "stage3") return 10;
	},
	getMapEncounterSizes: function(mapType)
	{
		if (mapType == "stage1") 
		{
			return {bubble: [1, 2, 4]};
		}

		if (mapType == "stage2") 
		{
			return {bubble: [1, 2, 4], germ: [1, 2]};
		}

		if (mapType == "stage3") 
		{
			return {bubble: [1, 2, 4], germ: [1, 2]};
		}
	},
	generateRandomNo: function(min, max)
	{
		return Math.floor((Math.random() * (max - min + 1)) + min);
	},
};