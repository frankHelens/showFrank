//果冻与布丁！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！

$("#yu_home_page").css("height", $(window).height() - $("#home_page > nav").height() - $(".mui-bar-tab").height());
$("#yu_choose_food").css("height", $(window).height() - $("#choose_food > nav").height() - $(".mui-bar-tab").height());
$("#yu_food").css("height", $(window).height() - $("#choose_food > nav").height() - $(".mui-bar-tab").height());
$(".yeee").css("height", $(".yeee").width() * 0.01 * $(document).width() * 280 / 200);
$("#yu_choose_food > div:nth-of-type(1) > div:nth-of-type(1)").css("width", $(window).width() - 130);
$("#yu_kexuan > div").css("height", $(window).height() - 50);
$(".yu_caipin > img").css("height", 40.14492754 * 0.01 * 92 * 0.01 * $(window).width() * 240 / 277)
$(".yu_caipin > div").css("height", $(".yu_caipin > img").height());
$("#yu_caixiangqing > div:nth-of-type(1)").css("height", $(document).height() - 50);
$("#shopping_mall >div:nth-of-type(2)").css("height", $(window).height() - $(".mui-bar-tab").height() - 50);
$("#shopping_mall >div:nth-of-type(3)").css("height", $(window).height() - $(".mui-bar-tab").height() - 50);
$("#discover > div:nth-of-type(1)").css("height",$(window).height() - $(".mui-bar-tab").height() - 50);
$("#discover > div:nth-of-type(2)").css("height",$(window).height() - $(".mui-bar-tab").height() - 50);
$("#personal_center > div:nth-of-type(1)").css("height",$(window).height() - $(".mui-bar-tab").height());
$(".windex > div:nth-of-type(1)").css("height",$(window).width()*24.13333333*0.01);
$("#personal_center > div:nth-of-type(2) >div").css("height",$(window).height() - 50);
$("#wfankui > div:nth-of-type(1)").css("height",$(window).height() - 50);
$("#wland > div:nth-of-type(1)").css("height",$(window).height() - 50);
$("#wzhuche > div").css("height",$(window).height() - 50);
$("#WPay_attentionWarp > div").css("height",$(window).height() - 50);
if($(window).height()>$(window).width()){
	$("#personal_center > div:nth-of-type(2) >div >div").css("height",$(window).height() - 50);
	$("#wland > div:nth-of-type(1) > div:nth-of-type(1)").css("height",$(window).height() - 50);
}else{
	$("#personal_center > div:nth-of-type(2) >div >div").css("height",$(window).width() - 50);
	$("#wland > div:nth-of-type(1) > div:nth-of-type(1)").css("height",$(window).width() - 50);
}
//购物车
$("#Wsection").css("height",$(window).height() - 50);
$("#WorderSection").css("height",$(window).height() - 50);
$("#WPayment > div").css("height",$(window).height() - 50);
$("#WDetailed > div").css("height",$(window).height() - 50);
if($(window).height()>$(window).width()){
	$("#WPayment_section").css("height",$(window).height() - 50);
	$("#UPwarp > div >div").css("height",$(window).height()-100);
}else{
	$("#WPayment_section").css("height",$(window).width() - 50);
	$("#UPwarp > div >div").css("height",$(window).width()-100);
}
//单品详情页
$("#HDPconcent1").css("height",$(window).height() - 100);
$("#HDPconcent2").css("height",$(window).height() - 100);
$("#ziliao> div").css("height",$(window).height() - 50);
$("#UPwarp > div").css("height",$(window).height()-100);
$("#PCwarp > div").css("height",$(window).height()-245)












window.onresize = function() {
	//装逼
	$("#zhuangb>img").css("top",$(window).height()/2-$("#zhuangb>img").height()/2)
	$("#yu_home_page").css("height", $(window).height() - $("#home_page > nav").height() - $(".mui-bar-tab").height());
	$("#yu_choose_food").css("height", $(window).height() - $("#choose_food > nav").height() - $(".mui-bar-tab").height());
	if(yu_food_bol) {
		$("#yu_food").css("height", $(window).height() - $("#choose_food > nav").height() - $(".mui-bar-tab").height() - $("#yu_choose_food > div:nth-of-type(1)").height());
	} else {
		$("#yu_food").css("height", $(window).height() - $("#choose_food > nav").height() - $(".mui-bar-tab").height());
	}
	$("#yu_food > div:nth-of-type(1) >div:nth-of-type(1)>.yeee").css("height", 26.66666667 * 0.01 * $(window).width() * 280 / 200);
	$("#yu_choose_food > div:nth-of-type(1) > div:nth-of-type(1)").css("width", $(document).width() - 130);
	$("#yu_kexuan > div").css("height", $(window).height() - 50);
	$(".yu_caipin > img").css("height", 40.14492754 * 0.01 * 92 * 0.01 * $(window).width() * 240 / 277)
	$(".yu_caipin > div").css("height", $(".yu_caipin > img").height());
	$("#yu_caixiangqing > div:nth-of-type(1)").css("height", $(window).height() - 50);
	$("#shopping_mall >div:nth-of-type(2)").css("height", $(window).height() - $(".mui-bar-tab").height() - 50);
	$("#shopping_mall >div:nth-of-type(3)").css("height", $(document).height() - $(".mui-bar-tab").height() - 50);
	$("#discover > div:nth-of-type(1)").css("height",$(window).height() - $(".mui-bar-tab").height() - 50);
	$("#discover > div:nth-of-type(2)").css("height",$(window).height() - $(".mui-bar-tab").height() - 50);
	$("#personal_center > div:nth-of-type(1)").css("height",$(window).height() - $(".mui-bar-tab").height());
	$(".windex > div:nth-of-type(1)").css("height",$(window).width()*24.13333333*0.01);
	$("#personal_center > div:nth-of-type(2) >div").css("height",$(window).height() - 50);
	$("#wfankui > div:nth-of-type(1)").css("height",$(window).height() - 50);
	$("#wland > div:nth-of-type(1)").css("height",$(window).height() - 50);
	$("#wzhuche > div").css("height",$(window).height() - 50);
	$("#WPay_attentionWarp > div").css("height",$(window).height() - 50);
	//购物车
	$("#Wsection").css("height",$(window).height() - 50);
	$("#WorderSection").css("height",$(window).height() - 50);
	$("#WPayment > div").css("height",$(window).height() - 50);
	$("#WDetailed > div").css("height",$(window).height() - 50);
	//单品详情
	$("#HDPconcent1").css("height",$(window).height() - 100);
	$("#HDPconcent2").css("height",$(window).height() - 100);
	$("#ziliao> div").css("height",$(window).height() - 50);
	$("#UPwarp > div").css("height",$(window).height()-100);
	$("#PCwarp > div").css("height",$(window).height()-245);
}

















//mui.init();
var gallery = mui('.mui-slider');
gallery.slider({
	interval: 1000 //自动轮播周期，若为0则不自动播放，默认为0；
});
var cityPicker = new mui.PopPicker({
	layer: 2
});
cityPicker.setData(cityData);
$("#home_page > nav > aside,#shopping_mall > nav > aside").on("touchstart", function() {
	cityPicker.show(function(items) {
		$("#home_page > nav > aside > span:nth-of-type(1),#shopping_mall > nav > aside > span:nth-of-type(1)").html(items[1].text)
			//返回 false 可以阻止选择框的关闭
			//return false;
	});
})

mui.init({
	pullRefresh: {
		container: "#y3333333u_home_page", //下拉刷新容器标识，querySelector能定位的css选择器均可，比如：id、.class等
		down: {
			height: 50, //可选,默认50.触发下拉刷新拖动距离,
			auto: false, //可选,默认false.自动下拉刷新一次
			contentdown: "下拉可以刷新", //可选，在下拉可刷新状态时，下拉刷新控件上显示的标题内容
			contentover: "释放立即刷新", //可选，在释放可刷新状态时，下拉刷新控件上显示的标题内容
			contentrefresh: "正在刷新...", //可选，正在刷新状态时，下拉刷新控件上显示的标题内容
			callback: down_yu_home_page //必选，刷新函数，根据具体业务来编写，比如通过ajax从服务器获取新数据；
		},
		up: {
			height: 50, //可选.默认50.触发上拉加载拖动距离
			auto: false, //可选,默认false.自动上拉加载一次
			contentrefresh: "正在加载...", //可选，正在加载状态时，上拉加载控件上显示的标题内容
			contentnomore: '没有更多数据了', //可选，请求完毕若没有更多数据时显示的提醒内容；
			callback: up_yu_home_page //必选，刷新函数，根据具体业务来编写，比如通过ajax从服务器获取新数据；
		}
	}
});
mui.init({
	pullRefresh: {
		container: "#yu_home_page", //待刷新区域标识，querySelector能定位的css选择器均可，比如：id、.class等
		up: {
			height: 50, //可选.默认50.触发上拉加载拖动距离
			auto: false, //可选,默认false.自动上拉加载一次
			contentrefresh: "正在加载...", //可选，正在加载状态时，上拉加载控件上显示的标题内容
			contentnomore: '没有更多数据了', //可选，请求完毕若没有更多数据时显示的提醒内容；
			callback: up_yu_home_page //必选，刷新函数，根据具体业务来编写，比如通过ajax从服务器获取新数据；
		}
	}
});

function down_yu_home_page() {
	//业务逻辑代码，比如通过ajax从服务器获取新数据；
	//注意，加载完新数据后，必须执行如下代码，注意：若为ajax请求，则需将如下代码放置在处理完ajax响应数据之后
	mui('#yu_home_page').pullRefresh().endPulldownToRefresh();
}

function up_yu_home_page() {
	//业务逻辑代码，比如通过ajax从服务器获取新数据；
	//注意：
	//1、加载完新数据后，必须执行如下代码，true表示没有更多数据了：
	//2、若为ajax请求，则需将如下代码放置在处理完ajax响应数据之后
	this.endPullupToRefresh(true | false);
}

//上啦加载
var ts = null;
var tm = null;
$("#yu_food > div:nth-of-type(1)").on("touchstart", function(event) {

	//	console.log($("#yu_food > div:nth-of-type(1)").scrollTop(),$("#yu_food > div:nth-of-type(1)>div").height() - $("#yu_food > div:nth-of-type(1)").height());
	if($("#yu_food > div:nth-of-type(1)>div").height() - $("#yu_food > div:nth-of-type(1)").height() - $("#yu_food > div:nth-of-type(1)").scrollTop() >= 2) {
		return
	}
	ts = event.originalEvent.targetTouches[0].pageY;
	$("#yu_food > div:nth-of-type(1)").on("touchmove", move);
	$(document).off();

})

function move(event) {
	tm = event.originalEvent.targetTouches[0].pageY;
	$(document).off();
	if($("#yu_food > div:nth-of-type(1)>div").height() - $("#yu_food > div:nth-of-type(1)").height() - $("#yu_food > div:nth-of-type(1)").scrollTop() >= 2) {
		return
	}
	if(ts - tm > 0) {
		$("#yu_food > div:nth-of-type(1)").css("top", 0 - (ts - tm) / 3)
		$(document).on("touchend", function() {
			ts = null;
			tm = null;
			$("#yu_food > div:nth-of-type(1)").animate({
				top: 0
			}, 300, function() {
				$("#yu_food > div:nth-of-type(1)").off("touchmove", move);
			})
		})
		stopDefault();
	}
}

//可选上拉
$("#yu_kexuan > div > div:nth-of-type(1)").on("touchstart", function(event) {
	//	console.log($("#yu_food > div:nth-of-type(1)").scrollTop(),$("#yu_food > div:nth-of-type(1)>div").height() - $("#yu_food > div:nth-of-type(1)").height());
	if($("#yu_kexuan > div > div:nth-of-type(1) >div").height() - $("#yu_kexuan > div > div:nth-of-type(1)").height() - $("#yu_kexuan > div > div:nth-of-type(1)").scrollTop() >= 2) {
		return
	}
	ts = event.originalEvent.targetTouches[0].pageY;
	$("#yu_kexuan > div > div:nth-of-type(1)").on("touchmove", move1);
})

function move1(event) {
//	$("#yu_kexuan > div > div:nth-of-type(1)").off("touchmove");
	tm = event.originalEvent.targetTouches[0].pageY;
	$(document).off();
	if(ts - tm > 0) {
		$("#yu_kexuan > div > div:nth-of-type(1)").css("top", 0 - (ts - tm) / 3)
		$(document).on("touchend", function() {
			$("#yu_kexuan > div > div:nth-of-type(1)").off("touchmove", move1);
			ts = null;
			tm = null;
			$("#yu_kexuan > div > div:nth-of-type(1)").animate({
				top: 0
			}, 300)
		})
		stopDefault();
	}
}

function stopDefault(e) {
	//阻止默认浏览器动作(W3C) 
	if(e && e.preventDefault)
		e.preventDefault();
	//IE中阻止函数器默认动作的方式 
	else
		window.event.returnValue = false;
	return false;
}

//下来
var yu_food_bol = false;

$("#choose_food > nav > span").on("touchstart", function() {
	if(yu_food_bol) {
		$("#yu_food").animate({
			"height": $(window).height() - $("#choose_food > nav").height() - $(".mui-bar-tab").height(),
			"top": 0
		}, function() {
			yu_food_bol = false;
		})
	} else {
		$("#yu_food").animate({
			"height": $(window).height() - $("#choose_food > nav").height() - $(".mui-bar-tab").height() - $("#yu_choose_food > div:nth-of-type(1)").height(),
			"top": 147
		}, function() {
			yu_food_bol = true;
		})
	}
})

//选菜
function yu_choose_food_xuan() {
	if(!yu_choose_food_bol) {
		return
	}
	$(this).off("touchend");
	if(!$(".yu_choose_food_box>div").length) {
		$("#yu_food").animate({
			"height": $(window).height() - $("#choose_food > nav").height() - $(".mui-bar-tab").height() - $("#yu_choose_food > div:nth-of-type(1)").height(),
			"top": 147
		}, function() {
			yu_food_bol = true;
		})
	}
	$(this).animate({
		"width": 0,
		"height": 0,
	}, 500, function() {
		$(".yu_choose_food_box").css("width", $(".yu_choose_food_box").width() + 101);
		$(this).css({
			"width": 85.71428571,
			"height": 120,
		})
		$(".yu_choose_food_box").append($(this));

		$(this).css("opacity", 0);
		$(this).animate({
			"opacity": 1,
		})
		$(this).children(".yu_choose_food_cha").on("touchend", yu_choose_food_cha);
	})
}
var yu_choose_food_bol = false;
$(".yeee").on("touchstart", function() {
	yu_choose_food_bol = true;
})
$("#yu_food > div").on("touchmove", function() {
	yu_choose_food_bol = false;
})
$(".yeee").on("touchend", yu_choose_food_xuan);

//取消选菜\
function yu_choose_food_cha() {
	$(this).off();
	$(this).parent().animate({
		"width": 0,
		"height": 0,
	}, 500, function() {
		$(this).css({
			"width": 26.66666667 + "%",
			"height": 26.66666667 * 0.01 * $(document).width() * 280 / 200,
			"top": -70,
			"left": -30,
			"opacity": 0
		})
		$(this).animate({
			"top": 0,
			"left": 0,
			"opacity": 1
		})
		$(".yu_choose_food_box").css("width", $(".yu_choose_food_box").width() - 101);
		$("#yu_food > div:nth-of-type(1) > div").append($(this));
		$(this).on("touchend", yu_choose_food_xuan);
		if($(".yu_choose_food_box>div").length == 0) {
			$("#yu_food").animate({
				"height": $(window).height() - $("#choose_food > nav").height() - $(".mui-bar-tab").height(),
				"top": 0
			}, function() {
				yu_food_bol = false;
			})
		}
	})
}

//可选菜 出现
$("#yu_choose_food > div:nth-of-type(1) > div:nth-of-type(2) > button").on("touchstart", function() {
	$("#yu_kexuan").animate({
		"left": 0
	})
})
$("#yu_kexuan > nav > span").on("touchstart", function() {
	$("#yu_kexuan").animate({
		"left": 100 + "%"
	})
	stopDefault();
})

//菜详情 出现
var yu_caipin_bol = false;
$(".yu_caipin").on("touchstart", function() {
	yu_caipin_bol = true;
});
$("#yu_kexuan").on("touchmove", function() {
	yu_caipin_bol = false;
});
$(".yu_caipin").on("touchend", yu_xiang);

var ganjin_bol = false;
$(".ganjina").on("touchstart", function() {
	yu_caipin_bol = true;
});
$("#shopping_mall > div:nth-of-type(3)").on("touchmove", function() {
	yu_caipin_bol = false;
});
$(".ganjina").on("touchend", yu_xiang);

function yu_xiang() {
	if(!yu_caipin_bol) {
		return
	};
	$("#yu_caixiangqing").animate({
		"left": 0
	})
}
$("#yu_caixiangqing > nav > span").on("touchstart", function() {
	$("#yu_caixiangqing").animate({
		"left": 101 + "%"
	})
	stopDefault();
})

//哥！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！
var Hbtn_btn_bol1 = true;
var Hbtn_btn_bol2 = false;
$(".btn1").on("touchstart", function() {
	if(Hbtn_btn_bol1) {
		return
	};
	$(".btn1").toggleClass('btn3');
	$('.btn2').toggleClass('btn4');
	$("#shopping_mall > div:nth-of-type(2)").show();
	$("#shopping_mall > div:nth-of-type(3)").hide();
	Hbtn_btn_bol2 = false;
	Hbtn_btn_bol1 = true;
})
$(".btn2").on("touchstart", function() {
	if(Hbtn_btn_bol2) {
		return
	};
	$(".btn1").toggleClass('btn3');
	$('.btn2').toggleClass('btn4');
	$("#shopping_mall > div:nth-of-type(3)").show();
	$("#shopping_mall > div:nth-of-type(2)").hide();
	Hbtn_btn_bol1 = false;
	Hbtn_btn_bol2 = true;
})

//mui('.mui-scroll-wrapper').scroll();
//mui('body').on('shown', '.mui-popover', function(e) {});
//mui('body').on('hidden', '.mui-popover', function(e) {
//	//console.log('hidden', e.detail.id);//detail为当前popover元素
//});

var Dbtn_bol1 = true;
var Dbtn_bol2 = false;
$(".Dbtn1").on("touchstart", function() {
	if(Dbtn_bol1) {
		return
	};
	$(".Dbtn1").toggleClass('btn3');
	$('.Dbtn2').toggleClass('btn4');
		$("#discover > div:nth-of-type(1)").show();
		$("#discover > div:nth-of-type(2)").hide();
	Dbtn_bol2 = false;
	Dbtn_bol1 = true;
})
$(".Dbtn2").on("touchstart", function() {
	if(Dbtn_bol2) {
		return
	};
	$(".Dbtn1").toggleClass('btn3');
	$('.Dbtn2').toggleClass('btn4');
		$("#discover > div:nth-of-type(2)").show();
		$("#discover > div:nth-of-type(1)").hide();
	Dbtn_bol1 = false;
	Dbtn_bol2 = true;
})










//我
var personal_center_bol = true;
$("#Windex2 ul li:nth-of-type(5)").on("touchstart",function(){
	personal_center_bol = false;
})
$("#Windex2 ul li:nth-of-type(5)").on("touchmove",function(){
	personal_center_bol = true;
})
$("#Windex2 ul li:nth-of-type(5)").on("touchend",function(){
	if(personal_center_bol){return}
	$("#personal_center > div:nth-of-type(2)").animate({
		"left":0
	})
})
$("#personal_center > div:nth-of-type(2) > nav > span").on("touchstart",function(){
	$("#personal_center > div:nth-of-type(2)").animate({
		"left":101 + "%"
	})
})

var geng_bol = true;
$("#personal_center > div:nth-of-type(2) >div >div li").eq(2).on("touchstart",function(){
	if(!geng_bol){return};
	geng_bol = false;
	$("#personal_center > div:nth-of-type(2) >div >div > div").html("已成功清除");
	$("#personal_center > div:nth-of-type(2) >div >div > div").fadeIn(1000,function(){
		$("#personal_center > div:nth-of-type(2) >div >div > div").fadeOut(1000,function(){
			geng_bol = true;
		});
	});
})
$("#personal_center > div:nth-of-type(2) >div >div li").eq(3).on("touchstart",function(){
	if(!geng_bol){return};
	geng_bol = false;
	$("#personal_center > div:nth-of-type(2) >div >div > div").html("已经是最新版本了");
	$("#personal_center > div:nth-of-type(2) >div >div > div").fadeIn(1000,function(){
		$("#personal_center > div:nth-of-type(2) >div >div > div").fadeOut(1000,function(){
			geng_bol = true;
		});
	});
})

$("#personal_center > div:nth-of-type(2) >div >div li").eq(0).on("touchstart",function(){
	$("#bangzhu").animate({
		"left":0
	})
})


$("#bangzhu > nav > span").on("touchstart",function(){
	$("#bangzhu").animate({
		"left":101 + "%"
	})
})
$("#personal_center > div:nth-of-type(2) >div >div li").eq(1).on("touchstart",function(){
	$("#wfankui").animate({
		"left":0
	})
	stopDefault();
})
$("#wfankui > nav > span:nth-of-type(1),#wfankui > nav > span:nth-of-type(2)").on("touchstart",function(){
	$("#wfankui").animate({
		"left":101 + "%"
	})
})

$("#personal_center > div:nth-of-type(2) >div >div li").eq(4).on("touchstart",function(){
	$("#wguanyu").animate({
		"left":0
	})
})

$("#wguanyu > nav > span").on("touchstart",function(){
	$("#wguanyu").animate({
		"left":101 + "%"
	})
})

$("#wguanyu > div li").eq(0).on("touchstart",function(){
	$("#whuan").animate({
		"left":0
	})
})

$("#whuan > nav > span").on("touchstart",function(){
	$("#whuan").animate({
		"left":101 + "%"
	})
})

$("#wfankui .mui-inline").on("touchstart",function(){
	$("#wfankui > div:nth-of-type(1) > .mui-content-padded > div:nth-of-type(2)").fadeIn();
	$("#wfankui > div:nth-of-type(1) > .mui-content-padded > div:nth-last-of-type(1)").fadeIn();
})
$("#wfankui > div:nth-of-type(1) > .mui-content-padded > div:nth-last-of-type(1)").on("touchstart",function(){
	$("#wfankui > div:nth-of-type(1) > .mui-content-padded > div:nth-of-type(2)").fadeOut();
	$("#wfankui > div:nth-of-type(1) > .mui-content-padded > div:nth-last-of-type(1)").fadeOut();
})
$("#wfankui > div:nth-of-type(1) > .mui-content-padded > div:nth-of-type(2) >div >p").on("touchend",function(){
	$("#wfankui textarea").text($(this).text());
	$("#wfankui > div:nth-of-type(1) > .mui-content-padded > div:nth-of-type(2)").fadeOut();
	$("#wfankui > div:nth-of-type(1) > .mui-content-padded > div:nth-last-of-type(1)").fadeOut();
})

//登陆页
$(".windex > div:nth-of-type(2) > button").on("touchstart",function(){
	$("#wland").animate({
		"left":0
	})
})
$("#wland > nav > span").on("touchstart",function(){
	$("#wland").animate({
		"left":101 + "%"
	})
})

//忘记密码
$("#wland > div:nth-of-type(1) > div:nth-of-type(1) .oauth-area a:nth-child(1)").on("touchstart",function(){
	$("#wforget").animate({
		"left":0
	})
})
$("#wforget > nav > span").on("touchstart",function(){
	$("#wforget").animate({
		"left":101+"%"
	})
})

//注册页
$("#wland > div:nth-of-type(1) > div:nth-of-type(1) .oauth-area a:nth-child(2)").on("touchstart",function(){
	$("#wzhuche").animate({
		"left":0
	})
})

$("#wzhuche > nav > span").on("touchstart",function(){
	$("#wzhuche").animate({
		"left":101+"%"
	})
})


//购物车
var wgouwuche_bol = true;
$(".gou,#Windex2 li:nth-of-type(1)").on("touchstart",function(){
	wgouwuche_bol = false;
})
$(".gou,#Windex2 li:nth-of-type(1)").on("touchmove",function(){
	wgouwuche_bol = true;
})

$(".gou,#Windex2 li:nth-of-type(1)").on("touchend",function(){
	if(wgouwuche_bol){return};
	$("#wgouwuche").animate({
		"left":0
	})
})

$("#wgouwuche > nav > span:nth-of-type(1)").on("touchstart",function(){
	$("#wgouwuche").animate({
		"left":101 + "%"
	})
})

$("#Wright").css("pointer-events", "none");

//mui('.mui-scroll-wrapper').scroll({
//	deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
//});
var Wshopbol = false;


//显示加减
$("#wgouwuche > nav > span:nth-of-type(2)").on("touchstart", function() {
	if(Wshopbol) {
		$(this).html("编辑");
		Wshopbol = false;
	} else {
		$(this).html("完成");
		Wshopbol = true;
	}
	if($("#wgouwuche > nav > span:nth-of-type(2)").html() == "编辑") {
		$(".Wjianjie div:nth-child(3)").show();
		$(".Wnum").hide();
		$(".Wcount").show();
	} else if($("#wgouwuche > nav > span:nth-of-type(2)").html() == "完成") {
		$(".Wjianjie div:nth-child(3)").hide();
		$(".Wnum").show();
		$(".Wcount").hide();
	}
});

//减
$(".Wnum button:nth-child(1)").on("touchstart", function() {
	var mins = $(this).next().val();
	mins--;
	if(mins <= 1) {
		mins = 1;
	}
	$(this).next().val(mins);
	$(this).parent().prev().children(".Wcount").html("×" + mins);
	money($(this));
});

$(".Wnum button:nth-child(3)").on("touchstart", function() {
	var Wplus = $(this).prev().val();
	Wplus++;
	$(this).prev().val(Wplus);
	$(this).parent().prev().children(".Wcount").html("×" + Wplus);
	money($(this));
});
//加

//全选
$("#Wleft").on("click", function() {
	if($(".Wallchoose").is(':checked')) {
		$("input[type='checkbox']").prop('checked', true);
		$("#Wright").css("pointer-events", "auto");
		money($(".Wallchoose"));
	} else {
		$("input[type='checkbox']").prop('checked', false);
		$("#Wright").css("pointer-events", "none");
		$(".totle div:nth-child(1)").html("合计：￥0.00");
		$(".totle div:nth-child(2)").html("总额：0.00");
	}
	allchoose();
});

//单选
$("#Wlistwarp input[type=checkbox]").on("click", function() {
	if($(this).is(':checked')) {
		$("#Wright").css("pointer-events", "auto");
		money($(this));
		$("#Wright").css("pointer-events", "auto");
	} else if(!$(this).is(':checked')) {
		var arr = [];
		for(var i = 0; i < $("#Wlistwarp input[type=checkbox]").length; i++) {
			if($("#Wlistwarp input[type=checkbox]").eq(i).is(":checked")) {
				arr.push($("#Wlistwarp input[type=checkbox]").eq(i));
			}
		}
		if(arr.length < 1) {
			$("#Wright").css("pointer-events", "none");
		}
		money($(this));
	}
	allchoose();
});

//删除
(function($) {
	$('#Wlistwarp').on('tap', '.mui-btn', function(event) {
		var elem = this;
		var li = elem.parentNode.parentNode;
		mui.confirm('确认删除该条记录？', 'Hello MUI', btnArray, function(e) {
			if(e.index == 0) {
				li.parentNode.removeChild(li);
				money($(this));
			} else {
				setTimeout(function() {
					$.swipeoutClose(li);
				}, 0);
			}
		});
	});
	var btnArray = ['确认', '取消'];
})(mui);


//算钱
function money(ele) {
	var sum = 0;
	var arr = [];
	for(var i = 0; i < $("#Wlistwarp input[type=checkbox]").length; i++) {
		if($("#Wlistwarp input[type=checkbox]").eq(i).is(":checked")) {
			arr.push($("#Wlistwarp input[type=checkbox]").eq(i));
		}
	}
	for(var j = 0; j < arr.length; j++) {
		if(arr[j].hasClass("Wallchoose")) {
			break;
		}
		$str = arr[j].next().children(".Wjianjie").children("div:nth-child(3)").html();
		$str2 = arr[j].next().children(".Wjianjie").next().html();
		sum += parseFloat($str.substr(1, $str.length)) * parseInt($str2.substr(1, $str2.length));
	}
	$(".totle div:nth-child(1)").html("合计：￥" + sum.toFixed(2));
	$(".totle div:nth-child(2)").html("总额：" + sum.toFixed(2));
	$("#Wfooter2 #Wleft2 span:nth-child(2)").html("￥" + sum.toFixed(2));
	$(".WOrderMoney").html("￥" + sum.toFixed(2));
}

//全选方法
function allchoose() {
	for(var i = 0; i < $("#Wlistwarp input[type=checkbox]").length; i++) {
		if(!$("#Wlistwarp input[type=checkbox]").eq(i).is(":checked")) {
			$(".Wallchoose").prop('checked', false);
			break;
		}
		$(".Wallchoose").prop('checked', true);

	}
}

//确认订单页
$("#Wright").on("touchstart",function(){
	$("#WThe_order").animate({
		"left":0
	})
})
$("#WThe_order > nav > span").on("touchstart",function(){
	$("#WThe_order").animate({
		"left":101 + "%"
	})
})
//去结算并在下一页生成
$("#Wright").on("touchstart", function() {
	$(".WorderBox").html("");
	var arr = [];
	var sum = 0;
	for(var i = 0; i < $("#Wlistwarp input[type=checkbox]").length; i++) {
		if($("#Wlistwarp input[type=checkbox]").eq(i).is(":checked")) {
			arr.push($("#Wlistwarp input[type=checkbox]").eq(i));
		}
	}
	for(var j = 0; j < arr.length; j++) {
		if(arr[j].hasClass("Wallchoose")) {
			break;
		}
		var Wimg = $("#Wlistwarp input[type=checkbox]").eq(j).next().children("img").attr("src");
		var Wjieshao = $("#Wlistwarp input[type=checkbox]").eq(j).next().children(".Wjianjie").children("div:nth-child(1)").html();
		var Wstr = $("#Wlistwarp input[type=checkbox]").eq(j).next().children(".Wjianjie").children("div:nth-child(3)").html();
		var Wqian = Wstr.substr(1,Wstr.length);
		var Wstr2 = $("#Wlistwarp input[type=checkbox]").eq(j).next().children(".Wcount").html();
		var Wcount = parseInt(Wstr2.substr(1, Wstr2.length));
		$('<div class="WorderList"><img src="' + Wimg + '"/><p class="WorderTitle">' + Wjieshao + '</p><span class="WorderMoney">￥' + Wqian * Wcount + '</span></div>').appendTo($(".WorderBox"));
		sum += Wcount;
	}
	$(".WorderBox").css("width", arr.length * 110);
	$("#WorderFloarRight>span").html("共" + sum + "件");
	$("#WThe_order").animate({
		"left": 0,
	})
});

var WorderFloarRight_bol = true;
$("#WorderFloarRight").on("touchstart",function(){
	WorderFloarRight_bol = false;
})
$("#WorderFloarRight").on("touchmove",function(){
	WorderFloarRight_bol = true;
})
$("#WorderFloarRight").on("touchend",function(){
	if(WorderFloarRight_bol){return};
	$("#WThe_order").animate({
		"left":-100 + "%"
	},function(){
		$("#WThe_order").css("left","101%")
	})
});


//支付配送
var WorderChoose_bol = true;
$("#Worder_distribution .WorderChoose").on("touchstart",function(){
	WorderChoose_bol = false;
})
$("#Worder_distribution .WorderChoose").on("touchmove",function(){
	WorderChoose_bol = true;
})
$("#Worder_distribution .WorderChoose").on("touchend",function(){
	if(WorderChoose_bol){return};
	$("#WPayment").animate({
		"left":0
	})
})
$("#WPayment > nav > span").on("touchstart",function(){
	$("#WPayment").animate({
		"left":101+"%"
	})
})
$("#WPayment_footer button").on("touchstart",function(){
	$("#WPayment").animate({
		"left":-100+"%"
	},function(){
		$("#WPayment").css("left","101%")
	})
})
//w喜欢的背景
$("#WPayment_section button").on("mousedown", function() {
	$(this).css({
		"background-color": "#fff"
	})
})
//改那堆东西的颜色
$("#WPayment_section li:nth-child(1) button").on("touchstart", function() {
	for(var i = 0; i < $("#WPayment_section li:nth-child(1) button").length; i++) {
		$("#WPayment_section li:nth-child(1) button").eq(i).css({
			"color": "black",
			"border": "1px solid #858585"
		})
	}
	$(this).css({
		"color": "#fd1e31",
		"border": "1px solid #b34a47"
	});
});

$("#WPayment_section li:nth-child(2) button").on("touchstart", function() {
	for(var i = 0; i < $("#WPayment_section li:nth-child(2) button").length; i++) {
		$("#WPayment_section li:nth-child(2) button").eq(i).css({
			"color": "black",
			"border": "1px solid #858585"
		})
	}
	$(this).css({
		"color": "#fd1e31",
		"border": "1px solid #b34a47"
	});
});

$("#WPayment_section li:nth-child(3) button").on("touchstart", function() {
	for(var i = 0; i < $("#WPayment_section li:nth-child(3) button").length; i++) {
		$("#WPayment_section li:nth-child(3) button").eq(i).css({
			"color": "black",
			"border": "1px solid #858585"
		})
	}
	$(this).css({
		"color": "#fd1e31",
		"border": "1px solid #b34a47"
	});
});
//那堆东西变颜色

//传值
$("#WPayment_footer button").on("touchstart", function() {
	for(var i = 0; i < $("#WPayment_section li:nth-child(1) button").length; i++) {
		if($("#WPayment_section li:nth-child(1) button").eq(i).css("color") == "rgb(253, 30, 49)") {
			$(".WZhifufangshi").html($("#WPayment_section li:nth-child(1) button").eq(i).html());
			break;
		}
	}
	for(var i = 0; i < $("#WPayment_section li:nth-child(2) button").length; i++) {
		if($("#WPayment_section li:nth-child(2) button").eq(i).css("color") == "rgb(253, 30, 49)") {
			$(".WKuaidifangshi").html($("#WPayment_section li:nth-child(2) button").eq(i).html());
			break;
		}
	}
	for(var i = 0; i < $("#WPayment_section li:nth-child(3) button").length; i++) {
		//			console.log($("#WPayment_section li:nth-child(3) button").eq(i).css("color") == "rgb(253, 30, 49)",$("#WPayment_section li:nth-child(3) button").eq(i).css("color"));
		if($("#WPayment_section li:nth-child(3) button").eq(i).css("color") == "rgb(253, 30, 49)") {
			$(".WSonghuoshijian").html($("#WPayment_section li:nth-child(3) button").eq(i).html());
			break;
		}
	}
});

//收获地址
var WOrderAddress_bol = true;
$("#WOrderAddress").on("touchstart",function(){
	WOrderAddress_bol = false;
})
$("#WOrderAddress").on("touchmove",function(){
	WOrderAddress_bol = true;
})
$("#WOrderAddress").on("touchend",function(){
	if(WOrderAddress_bol){return};
	$("#WDetailed").animate({
		"left":0
	})
})
$("#WDetailed > nav > span").on("touchstart",function(){
	$("#WDetailed").animate({
		"left":101 + "%"
	})
})
//创建收获地址
$("#Wincrease button").on("touchstart",function(){
	$("#WZengjia_Section li:nth-child(1) input").val("");
	$("#WZengjia_Section li:nth-child(2) input").val("");
	$("#WZengjia_Section li:nth-child(3) span:nth-child(2)").html("");
	$("#WZengjia_Section li:nth-child(4) textarea").val("");
	$("#WZengjia").animate({
		"left":0
	})
})
$("#WZengjia > nav > span:nth-of-type(1)").on("touchstart",function(){
	$("#WZengjia").animate({
		"left":101+"%"
	})
})

//创建收获地址
$("#WZengjia > nav > span:nth-of-type(2)").on("touchstart", function() {
	if($("#WZengjia_Section li:nth-child(1) input").val() == ""||$("#WZengjia_Section li:nth-child(2) input").val() == ""||$("#WZengjia_Section li:nth-child(3) span:nth-child(2)").html() == ""||$("#WZengjia_Section li:nth-child(4) textarea").val() == ""){
		mui.alert("麻烦填完整地址嘛","亲~","确认");
		return;
	}
	var name = $("#WZengjia_Section li:nth-child(1) input").val();
	var phone = $("#WZengjia_Section li:nth-child(2) input").val();
	var address = $("#WZengjia_Section li:nth-child(3) span:nth-child(2)").html() + $("#WZengjia_Section li:nth-child(4) textarea").val();
	$('<li class="mui-table-view-cell"><div class="mui-slider-right mui-disabled"><a class="mui-btn mui-btn-red">删除</a></div><div class="mui-slider-handle Wdetailed_address"><span>' + name + '</span><span>' + phone + '</span><div>' + address + '</div></div></li>').appendTo($("#Wlistwarps"));
	$("#Wlistwarps li").off("touchstart");
	WLIclick();
	$("#WZengjia").animate({
		"left": -100 + "%"
	},function(){
		$("#WZengjia").css("left","101%")
	})
})

//点击地址傻逼事件
var dandi_bol = false;
var WLIclick_bol = true;
function WLIclick () {
	$("#Wlistwarps li > div:nth-of-type(2)").on("touchstart",function(){
		WLIclick_bol = false;
	})
	$("#Wlistwarps li > div:nth-of-type(2)").on("touchmove",function(){
		WLIclick_bol = true;
	})
	$("#Wlistwarps li > div:nth-of-type(2)").on("touchend", function() {
		if(WLIclick_bol){return};
		if(dandi_bol){return};
		dandi_bol = true;
		var name = $(this).children().children("span:nth-child(1)").html();
		var phone = $(this).children().children("span:nth-child(2)").html();
		var address = $(this).children().children("div:nth-child(3)").html();
		$(".WOrderAddressname").html(name);
		$(".WOrderAddressphone").html(phone);
		$(".WOrderAddressdizhi span").html(" "+address);
		$("#WDetailed").animate({
			"left":-100 +"%"
		},function(){
			$("#WDetailed").css("left","101%")
			dandi_bol = false;
		})
	})
}

WLIclick();



//没办法一定要写	收获地址的三级联动
function san($, doc) {
	$.init();
	$.ready(function() {
		var cityPicker = new $.PopPicker({
			layer: 3
		});
		cityPicker.setData(cityData3);
		var showCityPicker = doc.getElementById('showCityPicker');
		var WResult = showCityPicker.getElementsByTagName('span')[1];
		showCityPicker.addEventListener('tap', function(event) {
			cityPicker.show(function(items) {
				WResult.innerText = (items[0] || {}).text + " " + (items[1] || {}).text + " " + (items[2] || {}).text;
				//返回 false 可以阻止选择框的关闭
				//return false;
			});
		}, false);
	});
}
san(mui,document);

$(".WPay_attentionImage img").css("line-height", $(".WPay_attentionImage").innerHeight() + "px");

(function($) {
	$('#WPay_attentionWarp_Section ul').on('touchstart', '.btn', function(event) {
		taren_bol = true;
		var elem = this;
		var li = elem.parentNode;
		mui.confirm('确定要取关此用户吗？从此桥归桥路归路？', '亲爱的用户', ['确认', '取消'], function(e) {
			if(e.index == 0) {
				li.parentNode.removeChild(li);
				quxiao_bol = false;
			} else {
				setTimeout(function() {
					$.swipeoutClose(li);
					quxiao_bol = false;
				}, 0);
			}
		});
	});
})(mui);

var WPay_attentionWarp_bol = true;
$(".wBox1>span:nth-of-type(1)").on("touchstart",function(){
	WPay_attentionWarp_bol = false;
})
$(".wBox1>span:nth-of-type(1)").on("touchmove",function(){
	WPay_attentionWarp_bol = true;
})
$(".wBox1>span:nth-of-type(1)").on("touchend",function(){
	if(WPay_attentionWarp_bol){return};
	$("#WPay_attentionWarp").animate({
		"left":0
	})
})
$("#WPay_attentionWarp > nav > span").on("touchstart",function(){
	$("#WPay_attentionWarp").animate({
		"left":101+"%"
	})
})



var gouzou_bol = false;
var gouzou_x = null;
var gouzou_y = null;
$(".gou").on("touchstart",function(){
	$(".gou").off("touchmove",gouzou);
	$(".gou").on("touchmove",gouzou);
});
function gouzou(event){
	if(gouzou_bol){return}
	gouzou_x = event.originalEvent.targetTouches[0].pageX-25;
	gouzou_y = event.originalEvent.targetTouches[0].pageY-25;
	if(gouzou_y<50){
		gouzou_y = 50
	}
	if(gouzou_y>$(document).height()-$(".mui-bar-tab").height() - 50){
		gouzou_y = $(document).height()-$(".mui-bar-tab").height() - 50;
	}
	if(gouzou_x<0){
		gouzou_x = 0;
	}
	if(gouzou_x>$(document).width()-50){
		gouzou_x = $(document).width()-50;
	}
	$(".gou").css("top",gouzou_y);
	$(".gou").css("left",gouzou_x);
	$(".gou").off("touchend",gouzou2);
	$(".gou").on("touchend",gouzou2)
}
function gouzou2(){
	if(gouzou_bol){return}
	gouzou_bol = true;
	if(gouzou_x+25>=$(document).width()/2){
		$(".gou").animate({
			"left":$(document).width()-50-0.008*$(document).width()
		},function(){
			$(".gou").css({
				"top":gouzou_y/$(document).height()*100 + "%",
				"left":"initial",
				"right":0.8 + "%"
			})
			gouzou_bol = false;
		})
	}else{
		$(".gou").animate({
			"left":0.8 + "%"
		},function(){
			$(".gou").css({
				"top":gouzou_y/$(document).height()*100 + "%"
			})
			gouzou_bol = false;
		})
	}
}

var Hconboxmin_bol = true;
$(".Hconboxmin").on("touchstart",function(){
	Hconboxmin_bol = false;
})
$(".Hconboxmin").on("touchmove",function(){
	Hconboxmin_bol = true;
})
$(".Hconboxmin").on("touchend",function(){
	if(Hconboxmin_bol){return};
	$("#HDwarp").animate({
		"left":0
	})
})
$("#HDwarp > nav > span:nth-of-type(1)").on("touchstart",function(){
	$("#HDwarp").animate({
		"left":101+"%"
	})
})



$(".HDPconcent_XQ > div:nth-of-type(1)").on("touchstart",function(){
	$(".HDPpic").show();
	$(".HDPPJ").hide();
	$(this).css("background-color","rgb(238,203,145)");
	$(".HDPconcent_XQ > div:nth-of-type(2)").css("background-color","rgb(235,234,228)");
})
$(".HDPconcent_XQ > div:nth-of-type(2)").on("touchstart",function(){
	$(".HDPpic").hide();
	$(".HDPPJ").show();
	$(this).css("background-color","rgb(238,203,145)");
	$(".HDPconcent_XQ > div:nth-of-type(1)").css("background-color","rgb(235,234,228)");
})

//帅气的上去姿势

$("#HDPconcent1").on("touchstart",function(event){
	if($("#HDPconcent1 > div").height()-$("#HDPconcent1").height()-$("#HDPconcent1").scrollTop() >= 2){return}
	ts = event.originalEvent.targetTouches[0].pageY;
	$("#HDPconcent1").off("touchmove",HDPconcent);
	$("#HDPconcent1").on("touchmove",HDPconcent);
})

function HDPconcent(event){
	if($("#HDPconcent1 > div").height()-$("#HDPconcent1").height()-$("#HDPconcent1").scrollTop() >= 2){return}
	tm = event.originalEvent.targetTouches[0].pageY;
	if(ts - tm > 0){
		$("#HDPconcent1").css("top",50-(ts-tm)/3);
		$("#HDPconcent1").off("touchend",HDPconcent1);
		$("#HDPconcent1").on("touchend",HDPconcent1);
		stopDefault();
	}
}
function HDPconcent1(){
	console.log(ts-tm);
	$("#HDPconcent1").off("touchmove",HDPconcent);
	if(ts-tm >= $("#HDPconcent1").height()/2){
		console.log("ye");
		$("#HDPconcent1").animate({
			"top":-100+"%"
		},"fast")
		$("#HDPconcent2").animate({
			"top":50
		},"fast",function(){
			$("#HDPconcent1").off("touchend",HDPconcent1);
			$("#HDPconcent1").off("touchmove",HDPconcent);
			ts = null;
			tm = null;
		})
	}else{
		console.log("noye");
		$("#HDPconcent1").animate({
			"top":50
		},function(){
			$("#HDPconcent1").off("touchend",HDPconcent1);
			$("#HDPconcent1").off("touchmove",HDPconcent);
			ts = null;
			tm = null;
		})
	}
}


//骚包的下来动作



$("#HDPconcent2").on("touchstart",function(event){
	if($("#HDPconcent2").scrollTop() != 0){return}
	ts = event.originalEvent.targetTouches[0].pageY;
	$("#HDPconcent2").off("touchmove",HDPconcent3);
	$("#HDPconcent2").on("touchmove",HDPconcent3);
})

function HDPconcent3(event){
	if($("#HDPconcent2").scrollTop() != 0){return}
	tm = event.originalEvent.targetTouches[0].pageY;
	if(tm - ts > 10){
		$("#HDPconcent2").css("top",50+(tm-ts)/3);
		$("#HDPconcent2").off("touchend",HDPconcent4);
		$("#HDPconcent2").on("touchend",HDPconcent4);
		stopDefault();
	}
}
function HDPconcent4(){
	$("#HDPconcent2").off("touchmove",HDPconcent3);
	if(tm - ts >= $("#HDPconcent2").height()/2){
		$("#HDPconcent2").animate({
			"top":100+"%"
		},"fast")
		$("#HDPconcent1").animate({
			"top":50
		},"fast",function(){
			$("#HDPconcent2").off("touchend",HDPconcent3);
			$("#HDPconcent2").off("touchmove",HDPconcent4);
			ts = null;
			tm = null;
		})
	}else{
		$("#HDPconcent2").animate({
			"top":50
		},function(){
			$("#HDPconcent2").off("touchend",HDPconcent3);
			$("#HDPconcent2").off("touchmove",HDPconcent4);
			ts = null;
			tm = null;
		})
	}
}

//搜索页面
$("#shopping_mall > nav > span:nth-of-type(1)").on("touchstart",function(){
	$("#search").animate({
		"left":0
	})
})
$("#search > nav > span:nth-of-type(1)").on("touchstart",function(){
	$("#search").animate({
		"left":101+"%"
	})
})


var vip_bol = true;
$("#Windex2 li:nth-of-type(2)").on("touchstart",function(){
	vip_bol = false;
})
$("#Windex2 li:nth-of-type(2)").on("touchmove",function(){
	vip_bol = true;
})
$("#Windex2 li:nth-of-type(2)").on("touchend",function(){
	if(vip_bol){return}
	$("#vip").animate({
		"left":0
	})
})



$("#vip>.ZStop>span:nth-of-type(2)").on("touchstart",function(){
	$("#vip").animate({
		"left":101 + "%"
	})
})


var zhuangb_bol = true;
var zhuangb_h = 0;
$(".changlumeimei > img:nth-of-type(1)").on("touchstart",function(){
	zhuangb_bol = false;
	zhuangb_h = $(this).height();
	$("#zhuangb>img").attr("src",$(this).attr("src"));
	$("#zhuangb>img").css("top",$(this).offset().top);
})
$(".changlumeimei > img:nth-of-type(1)").on("touchmove",function(){
	zhuangb_bol = true;
})
$(".changlumeimei > img:nth-of-type(1)").on("touchend",function(){
	if(zhuangb_bol){return}
	$("#zhuangb>img").animate({
		"top":$(window).height()/2-(zhuangb_h/2)
	})
	$("#zhuangb").fadeIn();
})
$("#zhuangb").on("touchstart",function(){
	$("#zhuangb").fadeOut()
})

var zan_bol = true;
$(".changlumeimei > span:nth-of-type(3)").on("touchstart",function(){
	zan_bol = false;
})
$(".changlumeimei > span:nth-of-type(3)").on("touchmove",function(){
	zan_bol = true;
})
$(".changlumeimei > span:nth-of-type(3)").on("touchend",function(){
	if(zan_bol){return};
	$("#zan").animate({
		"left":0
	})
})
$("#zan .ZStop span:nth-of-type(2)").on("touchstart",function(){
	$("#zan").animate({
		"left":101+"%"
	})
})

$("#promptBtn").on("touchstart",function(){
	$("#zan .dashang input").val("");
	$("#zan .dashang").fadeIn();
})
$("#zan .dashang .mui-icon").on("touchstart",function(){
	$("#zan .dashang").fadeOut();
})


var chou_bol = true;
$(".windex > div:nth-of-type(1)").on("touchstart",function(){
	chou_bol = false;
})
$(".windex > div:nth-of-type(1)").on("touchmove",function(){
	chou_bol = true;
})
$(".windex > div:nth-of-type(1)").on("touchend",function(){
	if(chou_bol){return}
	$("#ziliao").animate({
		"left":0
	})
})
$("#ziliao > nav > span:nth-of-type(1)").on("touchstart",function(){
	$("#ziliao").animate({
		"left":101+"%"
	})
})
$("#ziliao > nav > span:nth-of-type(2)").on("touchstart",function(){
	$("#ziliao").animate({
		"left":-100+"%"
	},function(){
		$("#ziliao").css("left","101%")
	})
})


//发布
var UPwarp_bol = true;
$("#Windex2 li:nth-of-type(4)").on("touchstart",function(){
	UPwarp_bol = false;
})
$("#Windex2 li:nth-of-type(4)").on("touchmove",function(){
	UPwarp_bol = true;
})
$("#Windex2 li:nth-of-type(4)").on("touchend",function(){
	if(UPwarp_bol){return}
	$("#UPwarp").animate({
		"left":0
	})
})
$("#UPwarp > nav > span").on("touchstart",function(){
	$("#UPwarp").animate({
		"left":101+"%"
	})
})
$("#UPwarp > footer").on("touchstart",function(){
	$("#UPwarp").animate({
		"left":-100+"%"
	},function(){
		$("#UPwarp").css("left","101%")
	})
})
var taren_bol = true;
$("#WPay_attentionWarp_Section li,.changlumeimei > img:nth-of-type(2)").on("touchstart",function(){
	taren_bol = false;
})
$("#WPay_attentionWarp_Section li,.changlumeimei > img:nth-of-type(2)").on("touchmove",function(){
	taren_bol = true;
})
$("#WPay_attentionWarp_Section li,.changlumeimei > img:nth-of-type(2)").on("touchend",function(){
	if(taren_bol){return}
	$("#PCwarp").animate({
		"left":0
	})
})
$("#PCwarp > nav > div > span:nth-of-type(1)").on("touchstart",function(){
	$("#PCwarp").animate({
		"left":101+"%"
	})
})


$("#HDwarp > nav > span:nth-of-type(2)").on("touchstart",function(){
	$("#HDwarp > aside").fadeIn();
})
$("#HDwarp > aside").on("touchstart",function(){
	$("#HDwarp > aside").fadeOut();
})

var time = new Date();
var timet = time.getTime();
var time1t = timet + 9213000;
var time2t = timet + 21966000;
var timemove = function(){
	var times = new Date();
	var ms1 = time1t - times.getTime();
	var h1 = parseInt(ms1%(1000*60*60*24)/(1000*60*60));
	var m1 = parseInt(ms1%(1000*60*60)/(1000*60));
	var s1 = parseInt(ms1%(1000*60)/1000);
	if(h1<10){
		$("#yu_pbuy > div:nth-of-type(1) > div:nth-of-type(1)").html("0" + h1);
	}else{
		$("#yu_pbuy > div:nth-of-type(1) > div:nth-of-type(1)").html(h1);
	}
	if(m1<10){
		$("#yu_pbuy > div:nth-of-type(1) > div:nth-of-type(2)").html("0" + m1);
	}else{
		$("#yu_pbuy > div:nth-of-type(1) > div:nth-of-type(2)").html(m1);
	}
	if(s1<10){
		$("#yu_pbuy > div:nth-of-type(1) > div:nth-of-type(3)").html("0" + s1);
	}else{
		$("#yu_pbuy > div:nth-of-type(1) > div:nth-of-type(3)").html(s1);
	}
	var ms2 = time2t - times.getTime();
	var h2 = parseInt(ms2%(1000*60*60*24)/(1000*60*60));
	var m2 = parseInt(ms2%(1000*60*60)/(1000*60));
	var s2 = parseInt(ms2%(1000*60)/1000);
	if(h2<10){
		$("#yu_pbuy > div:nth-of-type(2) > div:nth-of-type(1)").html("0" + h2);
	}else{
		$("#yu_pbuy > div:nth-of-type(2) > div:nth-of-type(1)").html(h2);
	}
	if(m2<10){
		$("#yu_pbuy > div:nth-of-type(2) > div:nth-of-type(2)").html("0" + m2);
	}else{
		$("#yu_pbuy > div:nth-of-type(2) > div:nth-of-type(2)").html(m2);
	}
	if(s2<10){
		$("#yu_pbuy > div:nth-of-type(2) > div:nth-of-type(3)").html("0" + s2);
	}else{
		$("#yu_pbuy > div:nth-of-type(2) > div:nth-of-type(3)").html(s2);
	}
	window.requestAnimationFrame(timemove)
}
timemove()
