var sum = 0;
$(document).ready(function() {

	//全选
	$(".all_check").click(function() {
		allCheckFun();
	});

	//加
	addFun();

	//减
	reductionFun();

	//总价格
	cleckboxClickFun();

	$("#effectTop").click(function() {
		$("#effect").show();
		$("#main,footer").hide();
	});
	$(".b_r").click(function() {
		$("#effect").hide();
		$("#main,footer").show();
	});

});

//全选方法
function allCheckFun() {
	var allCheck = document.querySelector(".all_check")
	var checkboxs = document.querySelectorAll(".ckbx");
	if(allCheck.checked) {
		sum = 0;
		for(var i = 0; i < checkboxs.length; i++) {
			if(!checkboxs[i].checked) {
				checkboxs[i].checked = true;
			}
		}
		var numbers = $(".reduction").next();
		var prices = $(".reduction").parent().prev();
		var numberEnd = Array();
		var priceEnd = Array();
		for(var j = 0; j < numbers.length; j++) {
			numberEnd[j] = numbers[j].innerHTML;
		}
		for(var k = 0; k < prices.length; k++) {
			priceEnd[k] = prices[k].innerHTML.substring(1)
		}

		for(var l = 0; l < checkboxs.length; l++) {
			sum += numberEnd[l] * priceEnd[l];
		}
		$(".addSum").text("￥" + sum.toFixed(2));

	} else {
		for(var j = 0; j < checkboxs.length; j++) {
			if(checkboxs[j].checked) {
				checkboxs[j].checked = false;
			}
		}
		sum = 0;
		$(".addSum").text("￥0.00");

	}
}

//加
function addFun() {
	var adds = document.querySelectorAll(".add");
	for(var i = 0; i < adds.length; i++) {
		adds[i].onclick = function() {
			var contextPrev = $(this).prev();
			var contextInt = parseInt(contextPrev.text());
			var endAdd = contextInt + 1;
			contextPrev.text(endAdd);
			sumFun();
		}
	}
}

//減
function reductionFun() {
	var reductions = document.querySelectorAll(".reduction");
	for(var i = 0; i < reductions.length; i++) {
		reductions[i].onclick = function() {
			var contextPrev = $(this).next();
			var contextInt = parseInt(contextPrev.text());
			var endReduction;
			if(contextInt > 1) {
				endReduction = contextInt - 1;

			} else {
				endReduction = 1;
			}
			contextPrev.text(endReduction);
			sumFun();
		}
	}
}

function cleckboxClickFun() {
	var checkboxs = document.querySelectorAll(".ckbx");
	for(var i = 0; i < checkboxs.length; i++) {
		checkboxs[i].onclick = function() {
			sumFun();
		}
	}
}

//总价
function sumFun() {
	sum = 0;
	var checkboxs = document.querySelectorAll("section");
	var ckBox, num, priceEnd;
	for(var i = 0; i < checkboxs.length; i++) {
		ckBox = checkboxs[i].querySelector(".ckbx");
		num = checkboxs[i].querySelector(".number").innerHTML;
		var price = checkboxs[i].querySelector(".price").innerHTML;
		priceEnd = price.substr(1);
		var ckBoxType = ckBox.checked;
		if(ckBoxType) {
			sum += priceEnd * num;
			console.log(sum);
			$(".addSum").text("￥" + sum.toFixed(2));
		}
	}
}