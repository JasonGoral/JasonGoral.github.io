$(document).ready(function(){

$("div.target").click(function(){
	$(this).removeClass("unpicked hot cold");
	$(this).addClass("hot");
	$(this).siblings().removeClass("unpicked hot cold");
	$(this).siblings().addClass("cold");
	});

$("#roundUp").click(function()	{
	let checkArr = $(".hot.right");
	console.log(checkArr.length);
	switch (checkArr.length)  {
		case 0:
		$("#answerBox").html("<p><em>0</em> Correct Answers! There are no correct answers selected, maybe you didn't select any, maybe you just have horrible luck.  Either way you should try again. </p>");
			break;
		case 1:
		$("#answerBox").html("<p><em>1</em> Correct Answer!  It's a start? Statistically you should have gotten 2 and a half answers correct, just reguess and you should do better. </p>");
			break;
			case 2:
		$("#answerBox").html("<p><em>2</em> Correct Answers! That's some solid guessing, or perhaps a passing knowlege of Luka.  Don't feel bad some of those questions were tough! </p>");
			break;
			case 3:
		$("#answerBox").html("<p><em>3</em> Correct Answers! A little better than guessing, feel free to change up some of those answers and try again. Do it for Luka. </p>");
			break;
			case 4:
		$("#answerBox").html("<p><em>4</em> Correct Answers! That's not too bad at all, you seem to have at least met Luka. Maybe ask him for some hints when you see him next. </p>");
			break;
			case 5:
		$("#answerBox").html("<p><em>5</em> Correct Answers! Half right, way to go. Half wrong though, there's half a chance you can do better by changing some answers.</p>");
			break;
			case 6:
		$("#answerBox").html("<p><em>6</em> Correct Answers! Way to go, that's some decent answers there. We have informed Luka of you results and he seems mildly impressed!</p>");
			break;
			case 7:
		$("#answerBox").html("<p><em>7</em> Correct Answers! Wow, you sure know a lot about Luka! Are you a relative? Even if you are that's some solid Luka knowledge.</p>");
			break;
			case 8:
		$("#answerBox").html("<p><em>8</em> Correct Answers! That is pretty impressive, it's obvious you have been around Luka before and have been paying attention. Are you available for babysitting?</p>");
			break;
			case 9:
		$("#answerBox").html("<p><em>9</em> Correct Answers! So close to perfection, you know your Luka! We have told Luka of your score and he just wet himself with excitement!</p>");
			break;
			case 10:
		$("#answerBox").html("<p><em>10</em> Correct Answers! Grand Slam, perfect score! Are you available for babysitting? I think you would be perfect.</p>");
			break;

		default:
		$("#answerBox").html("<p>Dang, busted!</p>");
		break;
	}

	});

});
