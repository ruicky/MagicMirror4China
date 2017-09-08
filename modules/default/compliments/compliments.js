/* global Log, Module, moment */

/* Magic Mirror
 * Module: Compliments
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 */
Module.register("compliments", {

	// Module config defaults.
	defaults: {
		compliments: {
			anytime: [
				"明天是世上增值最快的一块土地，因它充满了希望。",
				"人生重要的不是所站的位置，而是所朝的方向。",
				"如果不想做点事情，就甭想到达这个世界上的任何地方。",
				"没有退路就是最好的退路，拒绝机会就是拒绝财富。",
				"追求自己的梦想，坚持到底！",
				"沉沉的黑夜都是白天的前奏。",
				"想法决定行动，行动决定结果",
				"把自己当傻瓜，不懂就问，你会学的更多。",
				'人"的结构就是相互支撑，"众"人的事业需要每个人的参与。',
				"只要我们能梦想的，我们就能实现。",
				"未遭拒绝的成功决不会长久。",
				"一切都是自己争得的！",
				"选择比努力重要，选择不对努力白费！",
				"没有比人更高的山，没有比脚更长的路！",
				"苦想没盼头，苦干有奔头。",
				"世间的活动，缺点虽多，但仍是美好的。",
				"任何业绩的质变都来自于量变的积累。",
				"有理想在的地方，地狱就是天堂。",
				'你可以选择这样的"三心二意"：信心、恒心、决心；创意、乐意。',
				"人失败并不是成功之母；只有检讨才是成功之母",
				"人生方向最重要。",
				"三军可夺帅也，匹夫不可夺志也。",
				"漫无目的的生活就像出海航行而没有指南针。",
				"坚持不懈，直到成功！！",
				"乐观者在灾祸中看到机会；悲观者在机会中看到灾祸。",
				"怠惰是贫穷的制造厂。",
				"明天的希望，让我们忘了今天的痛苦。",
				"在泪水中浸泡过的微笑最灿烂，从迷惘中走出来的灵魂最清醒。",
				"平平淡淡，顺其自然！",
				"最好的节约是珍惜时间，最大的浪费是虚度年华。",
				"生当作人杰，死亦为鬼雄，至今思项羽，不肯过江东。",
				"走自己的路让狗去叫吧！",
				"相信就有可能！",
				"人生的一半是问题，另一半是如何解决问题。",
				"学做任何事得按部就班，急不得。",
				"拥有梦想只是一种智力，实现梦想才是一种能力。",
				"我努力我成功！",
				"强烈的信仰会赢取坚强的人，然后又使他们更坚强。",
				"幸福不是因为你拥有得多，而是由于你计较得少。",
				"处事谦和必能心旷神怡",
				"人生没有彩排，只有现场直播，所以每一件事都要努力做得最好！",
				"当一个人用工作去迎接光明，光明很快就会来照耀着他。",
				"不怕输在起点，就怕输在转折点",
				"穷且益坚，不坠青云之志。",
				"坚韧是成功的一大要素，只要在门上敲得够久、够大声，终会把人唤醒的。",
				"永远做正直的人，永远做正确的事。",
				"只要自己愉快便是最好的。",
				"孤单寂寞与被遗弃感是最可怕的贫穷。",
				"一个人最大的破产是绝望，最大的资产是希望。",
				"要铭记在心；每天都是一年中最美好的日子。",
				"独聚会眼的人，永远是把握机会的人！",
				"无私是稀有的道德，因为从它身上是无利可图的。",
				"努力一定有结果，但不一定有好结果",
				"两粒种子，一片森林。",
				"有希望在的地方，痛苦也成欢乐。",
				"天才是百分之一的灵感加上百分之九十九的努力。",
				'不能够"只存在於蠢人的字典里。',
				"任何的限制，都是从自己的内心开始的。",
				"业精于勤荒于嬉；行成于思毁于随！",
				"战胜自己，而不是别人。",
				'诚心诚意，"诚"字的另一半就是成功。',
				"成功的信念在人脑中的作用就如闹钟，会在你需要时将你唤醒。",
				"用最少的浪费面对现在。",
			],
			morning: [
				"行动是治愈恐惧的良药，而犹豫、拖延将不断滋养恐惧。",
				"人只有献身于社会，才能找出那短暂而有风险的生命的意义。",
				"不戚戚于贫贱，不汲汲于富贵。",
				"贫穷是不需要计划的，致富才需要一个周密的计划",
				"行动不一定带来快乐，而无行动则决无快乐。",
				"快乐不是因为拥有的多而是计较的少。",
				"心若在，梦就在。",
				"充满着欢乐与斗争精神的人们，永远带着欢乐，欢迎雷霆与阳光。",
				"自己要先看得起自己，别人才会看得起你。",
				"成功呈概率分布，关键是你能不能坚持到成功开始呈现的那一刻。",
				"生活若剥去理想、梦想、幻想，那生命便只是一堆空架子。",
				"人格的完善是本，财富的确立是末",
				"倾材足以聚人，量宽足已得人，身先足以率人，律己足以服人，得人心者得天下！",
				"事实上，成功仅代表了你工作的1%，成功是99%失败的结果。",
				"年轻是我们唯一拥有权利去编织梦想的时光。",
				"冬天已经到来，春天还会远吗？",
				"自古成功在尝试。",
				"选择比努力更重要。",
				"我们打开心门！我相信没人会伤害我们！",
				"芸芸众生，孰不爱生？爱生之极，进而爱群。",
				"只要路是对的，就不怕路远。",
				"心有多大，舞台就有多大！",
				"常求有利别人，不求有利自己。",
				"每一件事都要用多方面的角度来看它。",
				"智慧+进取=成功。",
				"生气是拿别人做错的事来惩罚自己。",
				"但愿每次回忆，对生活都不感到负疚。",
				"没有失败，只有停止成功。",
				"如果你希望成功，以恒心为良友，以经验为参谋，以小心为兄弟，以希望为哨兵。",
				"放弃你不想要的，寻找你想要的",
				"生活真象这杯浓酒，不经三番五次的提炼呵，就不会这样可口！",
				"君子喻于义，小人喻于利。",
				"性格决定命运，选择大于努力。",
				"总结成功的经验能够让人越来越聪明，总结失败的原因能够让人越来越谨慎。",
				"肯承认错误则错已改了一半。",
				"人生伟业的建立，不在能知，乃在能行。",
				"每一发奋努力的背后，必有加倍的赏赐。",
			],
			afternoon: [
				"生命之灯因热情而点燃，生命之舟因拼搏而前行。",
				"一切都会过去的",
				"很多失败不是由于才能有限，而是由于没有坚持到底。",
				"有梦想就有希望。",
				"明知山有虎。偏向虎山行！",
				"世界会向那些有目标和远见的人让路",
				"不论你在什么时候开始，重要的是开始之后就不要停止。",
				"未曾失败的人恐怕也未曾成功过。",
				"人只要不失去方向，就不会失去自己。",
				"少一点预设的期待，那份对人的关怀会更自在。",
				"老骥伏枥，志在千里；烈士暮年，壮心不已。",
				"股票有涨有落，然而打着信心标志的股票将使你永涨无落。",
			],
			evening: [
				"晚安～好梦香甜",
				"深夜明月圆圆，祝你美梦连连",
			]
		},
		updateInterval: 30000,
		remoteFile: null,
		fadeSpeed: 4000
	},

	// Set currentweather from module
	currentWeatherType: "",

	// Define required scripts.
	getScripts: function() {
		return ["moment.js"];
	},

	// Define start sequence.
	start: function() {
		Log.info("Starting module: " + this.name);

		this.lastComplimentIndex = -1;

		if (this.config.remoteFile != null) {
			this.complimentFile((response) => {
				this.config.compliments = JSON.parse(response);
			});
		}

		// Schedule update timer.
		var self = this;
		setInterval(function() {
			self.updateDom(self.config.fadeSpeed);
		}, this.config.updateInterval);
	},

	/* randomIndex(compliments)
	 * Generate a random index for a list of compliments.
	 *
	 * argument compliments Array<String> - Array with compliments.
	 *
	 * return Number - Random index.
	 */
	randomIndex: function(compliments) {
		if (compliments.length === 1) {
			return 0;
		}

		var generate = function() {
			return Math.floor(Math.random() * compliments.length);
		};

		var complimentIndex = generate();

		while (complimentIndex === this.lastComplimentIndex) {
			complimentIndex = generate();
		}

		this.lastComplimentIndex = complimentIndex;

		return complimentIndex;
	},

	/* complimentArray()
	 * Retrieve an array of compliments for the time of the day.
	 *
	 * return compliments Array<String> - Array with compliments for the time of the day.
	 */
	complimentArray: function() {
		var hour = moment().hour();
		var compliments;

		if (hour >= 3 && hour < 12 && this.config.compliments.hasOwnProperty("morning")) {
			compliments = this.config.compliments.morning.slice(0);
		} else if (hour >= 12 && hour < 17 && this.config.compliments.hasOwnProperty("afternoon")) {
			compliments = this.config.compliments.afternoon.slice(0);
		} else if(this.config.compliments.hasOwnProperty("evening")) {
			compliments = this.config.compliments.evening.slice(0);
		}

		if (typeof compliments === "undefined") {
			compliments = new Array();
		}

		if (this.currentWeatherType in this.config.compliments) {
			compliments.push.apply(compliments, this.config.compliments[this.currentWeatherType]);
		}

		compliments.push.apply(compliments, this.config.compliments.anytime);

		return compliments;
	},

	/* complimentFile(callback)
	 * Retrieve a file from the local filesystem
	 */
	complimentFile: function(callback) {
		var xobj = new XMLHttpRequest();
		xobj.overrideMimeType("application/json");
		xobj.open("GET", this.file(this.config.remoteFile), true);
		xobj.onreadystatechange = function() {
			if (xobj.readyState == 4 && xobj.status == "200") {
				callback(xobj.responseText);
			}
		};
		xobj.send(null);
	},

	/* complimentArray()
	 * Retrieve a random compliment.
	 *
	 * return compliment string - A compliment.
	 */
	randomCompliment: function() {
		var compliments = this.complimentArray();
		var index = this.randomIndex(compliments);

		return compliments[index];
	},

	// Override dom generator.
	getDom: function() {
		var complimentText = this.randomCompliment();

		var compliment = document.createTextNode(complimentText);
		var wrapper = document.createElement("div");
		wrapper.className = this.config.classes ? this.config.classes : "thin xlarge bright";
		wrapper.appendChild(compliment);

		return wrapper;
	},


	// From data currentweather set weather type
	setCurrentWeatherType: function(data) {
		var weatherIconTable = {
			"01d": "day_sunny",
			"02d": "day_cloudy",
			"03d": "cloudy",
			"04d": "cloudy_windy",
			"09d": "showers",
			"10d": "rain",
			"11d": "thunderstorm",
			"13d": "snow",
			"50d": "fog",
			"01n": "night_clear",
			"02n": "night_cloudy",
			"03n": "night_cloudy",
			"04n": "night_cloudy",
			"09n": "night_showers",
			"10n": "night_rain",
			"11n": "night_thunderstorm",
			"13n": "night_snow",
			"50n": "night_alt_cloudy_windy"
		};
		this.currentWeatherType = weatherIconTable[data.weather[0].icon];
	},


	// Override notification handler.
	notificationReceived: function(notification, payload, sender) {
		if (notification == "CURRENTWEATHER_DATA") {
			this.setCurrentWeatherType(payload.data);
		}
	},

});