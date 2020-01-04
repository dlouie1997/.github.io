//make form

var createForm = document.createElement("form");

//heading
var heading = document.createElement('h2');
heading.innerHTML = "Which of these design tasks can you do? Select your proficiency at doing the task.";
createForm.appendChild(heading);

document.body.append(createForm);

//array of questions
var topics = ["Advertising Materials","Artwork","Biz Collateral","Blogging","Book Art","Book Design","Book Illustration","Brand Design","Brand Management","Branding","Brochure/flyer","Business Cards","Business Cards","Clothing","Clothing Design","Drawing","Email Signature","Graphic Design","Letterhead","Logo Design","Marketing","Powerpoint Slides - General","Powerpoint Slides - Investor Pitchdeck Content Familiarity","Product Labels","Product Packaging","Promotional Video","Social Media Marketing Designs","Storyboarding","UI/US Design - Apps for Android","UI/UX Design - Apps for iOS","UI/UX Design - Software for Desktop Computers","Web Art/Digital Art","Website Design","Wireframes"];

var createFollowArray = [];

//questions

for(var i = 0; i < topics.length; i++) {
	
	var createTopic = document.createElement("div");
	createTopic.setAttribute("id", "topicName" + i);
	createForm.append(createTopic);
	
	var spanDiv = document.createElement("div");
	createForm.append(spanDiv);
	
	var spanQ = document.createElement("span");
	spanQ.style.columns = "2000px 2";
	spanQ.innerHTML = topics[i];
	spanQ.setAttribute("class", "designTasks");
	spanQ.style.display = "inline-block";
	createTopic.appendChild(spanQ);

    var inputElement1 = document.createElement("input");
	inputElement1.setAttribute("type", "radio");
	inputElement1.setAttribute("name", "optionType" + i);
	inputElement1.setAttribute("id", "Cant" + i);
  inputElement1.setAttribute('onchange', 'hidefollow(this,' + i + ')');
	/*inputElement1.onchange = function() {
		console.log("hi");
		if(this.checked){ 
      document.getElementById(createFollowArray[i]).style.display = "none";
			//createFollow.style.display = "none";
console.log(createFollowArray);
console.log(document.getElementById(createFollowArray[i]));	console.log(document.getElementById(createFollowArray[i]).style.display);
		}else{
      document.getElementById(createFollowArray[i]).style.display = "block";
			//createFollow.style.display = "block";
			console.log("block");
		}
	};*/
	createTopic.appendChild(inputElement1);

	var q1Label = document.createElement("label");
	q1Label.innerHTML = "I can't do this.";
	createTopic.appendChild(q1Label);
	
	var inputElement2 = document.createElement("input");
	inputElement2.setAttribute("type", "radio");
	inputElement2.setAttribute("name", "optionType" + i);
	inputElement2.setAttribute("class", "Novice");
  inputElement2.setAttribute('onchange', 'showfollow(this,' + i + ')');
	createTopic.appendChild(inputElement2);

	var q2Label = document.createElement("label");
	q2Label.innerHTML = "Novice - Willing to learn and try it.";
	createTopic.appendChild(q2Label);
	
	var inputElement3 = document.createElement("input");
	inputElement3.setAttribute("type", "radio");
	inputElement3.setAttribute("name", "optionType" + i);
	inputElement3.setAttribute("class", "Inter");
  inputElement3.setAttribute('onchange', 'showfollow(this,' + i + ')');
	createTopic.appendChild(inputElement3);

	var q3Label = document.createElement("label");
	q3Label.innerHTML = "Intermediate - Talented or experienced doing this, but not an expert.";
	createTopic.appendChild(q3Label);
	
	var inputElement4 = document.createElement("input");
	inputElement4.setAttribute("type", "radio");
	inputElement4.setAttribute("name", "optionType" + i);
	inputElement4.setAttribute("class", "Expert");
  inputElement4.setAttribute('onchange', 'showfollow(this,' + i + ')');
	createTopic.appendChild(inputElement4);

	var q4Label = document.createElement("label");
	q4Label.innerHTML = "Expert - Talented and experienced at doing this.";
	createTopic.appendChild(q4Label);
	
	//Add a horizontal line
	var linebreak = document.createElement("hr");
	createTopic.appendChild(linebreak);
	
	
	//Follow up
	var createFollow = document.createElement("div");
	createFollow.setAttribute("id", "followName" + i);
  createFollowArray[i] = "followName" + i;
  createFollow.style.display = "none";
	createTopic.append(createFollow);
	
	var spanFollow = document.createElement("span");
	spanFollow.innerHTML = "How long would it take to complete the task from first attempt to completion?";
	createFollow.appendChild(spanFollow);
	
	//5 hours or less
	var inputElement1a = document.createElement("input");
	inputElement1a.setAttribute("type", "radio");
	inputElement1a.setAttribute("name", "time");
	inputElement1a.setAttribute("id", "less5");
	createFollow.appendChild(inputElement1a);

	var q1aLabel = document.createElement("label");
	q1aLabel.innerHTML = "5 hours or less";
	createFollow.appendChild(q1aLabel);
	
	//5-10
	var inputElement1b = document.createElement("input");
	inputElement1b.setAttribute("type", "radio");
	inputElement1b.setAttribute("name", "time");
	inputElement1b.setAttribute("id", "5to10");
	createFollow.appendChild(inputElement1b);

	var q1bLabel = document.createElement("label");
	q1bLabel.innerHTML = "5-10 hours";
	createFollow.appendChild(q1bLabel);
	
	//10-15
	var inputElement1c = document.createElement("input");
	inputElement1c.setAttribute("type", "radio");
	inputElement1c.setAttribute("name", "time");
	inputElement1c.setAttribute("id", "10to15");
	createFollow.appendChild(inputElement1c);

	var q1cLabel = document.createElement("label");
	q1cLabel.innerHTML = "10-15 hours";
	createFollow.appendChild(q1cLabel);
	
	//15-20
	var inputElement1d = document.createElement("input");
	inputElement1d.setAttribute("type", "radio");
	inputElement1d.setAttribute("name", "time");
	inputElement1d.setAttribute("id", "15to20");
	createFollow.appendChild(inputElement1d);

	var q1dLabel = document.createElement("label");
	q1dLabel.innerHTML = "15-20 hours";
	createFollow.appendChild(q1dLabel);
	
	//20-25
	var inputElement1e = document.createElement("input");
	inputElement1e.setAttribute("type", "radio");
	inputElement1e.setAttribute("name", "time");
	inputElement1e.setAttribute("id", "20to25");
	createFollow.appendChild(inputElement1e);

	var q1eLabel = document.createElement("label");
	q1eLabel.innerHTML = "20-25 hours";
	createFollow.appendChild(q1eLabel);
	
	//25-30
	var inputElement1f = document.createElement("input");
	inputElement1f.setAttribute("type", "radio");
	inputElement1f.setAttribute("name", "time");
	inputElement1f.setAttribute("id", "25to30");
	createFollow.appendChild(inputElement1f);

	var q1fLabel = document.createElement("label");
	q1fLabel.innerHTML = "25-30 hours";
	createFollow.appendChild(q1fLabel);
	
	//30-35
	var inputElement1g = document.createElement("input");
	inputElement1g.setAttribute("type", "radio");
	inputElement1g.setAttribute("name", "time");
	inputElement1g.setAttribute("id", "30to35");
	createFollow.appendChild(inputElement1g);

	var q1gLabel = document.createElement("label");
	q1gLabel.innerHTML = "30-35 hours";
	createFollow.appendChild(q1gLabel);
	
	//35-40
	var inputElement1h = document.createElement("input");
	inputElement1h.setAttribute("type", "radio");
	inputElement1h.setAttribute("name", "time");
	inputElement1h.setAttribute("id", "35to40");
	createFollow.appendChild(inputElement1h);

	var q1hLabel = document.createElement("label");
	q1hLabel.innerHTML = "35-40 hours";
	createFollow.appendChild(q1hLabel);
	
	//40+
	var inputElement1i = document.createElement("input");
	inputElement1i.setAttribute("type", "radio");
	inputElement1i.setAttribute("name", "time");
	inputElement1i.setAttribute("id", "40up");
	createFollow.appendChild(inputElement1i);

	var q1iLabel = document.createElement("label");
	q1iLabel.innerHTML = "40+ hours";
	createFollow.appendChild(q1iLabel);
	
	//Add a horizontal line
	linebreak = document.createElement("hr");
	createFollow.appendChild(linebreak);
	
}

/******************************************************************************
BONUS
*******************************************************************************/

var heading = document.createElement('h2');
heading.innerHTML = "Which of these other tasks can you do? Select your proficency at doing the task.";
createForm.appendChild(heading);

var topicsBonus = ["Digital marketing specialist","Mobile software developer","Pay per click specialist","Search engine optimization specialist", "Social media marketing expert"];

for(var i = 0; i < topicsBonus.length; i++) {
	
	var createTopicBonus = document.createElement("div");
	createTopicBonus.setAttribute("id", "topicBonus" + i);
	createForm.append(createTopicBonus);
		
	var spanB = document.createElement("span");
	spanB.innerHTML = topicsBonus[i];
	createTopicBonus.appendChild(spanB);

    var inputElement1B = document.createElement("input");
	inputElement1B.setAttribute("type", "radio");
	inputElement1B.setAttribute("name", "optionTypeB" + i);
	inputElement1B.setAttribute("id", "Cant" + i);
	createTopicBonus.appendChild(inputElement1B);

	var q1LabelB = document.createElement("label");
	q1LabelB.innerHTML = "I can't do this.";
	createTopicBonus.appendChild(q1LabelB);
	
	var inputElement2B = document.createElement("input");
	inputElement2B.setAttribute("type", "radio");
	inputElement2B.setAttribute("name", "optionTypeB" + i);
	inputElement2B.setAttribute("class", "Novice");
	createTopicBonus.appendChild(inputElement2B);

	var q2LabelB = document.createElement("label");
	q2LabelB.innerHTML = "Novice - Willing to learn and try it.";
	createTopicBonus.appendChild(q2LabelB);
	
	var inputElement3B = document.createElement("input");
	inputElement3B.setAttribute("type", "radio");
	inputElement3B.setAttribute("name", "optionTypeB" + i);
	inputElement3B.setAttribute("class", "Inter");
	createTopicBonus.appendChild(inputElement3B);

	var q3LabelB = document.createElement("label");
	q3LabelB.innerHTML = "Intermediate - Talented or experienced doing this, but not an expert.";
	createTopicBonus.appendChild(q3LabelB);
	
	var inputElement4B = document.createElement("input");
	inputElement4B.setAttribute("type", "radio");
	inputElement4B.setAttribute("name", "optionTypeB" + i);
	inputElement4B.setAttribute("class", "Expert");
	createTopicBonus.appendChild(inputElement4B);

	var q4LabelB = document.createElement("label");
	q4LabelB.innerHTML = "Expert - Talented and experienced at doing this.";
	createTopicBonus.appendChild(q4LabelB);
	
	//Add a horizontal line
	var linebreakB = document.createElement("hr");
	createTopicBonus.appendChild(linebreakB);
}




/*
var cantArray = document.getElementById("Cant");
for (var i = 0; i < topics.length; i++) {
	var cantArray = document.getElementById("Cant" + i);
}
var followup = document.getElementById("invisible");
if(cantArray.checked) {
	followup.style.display = "none";
	console.log("hide!");
}else{
	followup.style.display = "block";
	console.log("show!");
}
*/

function showfollow(s, t)
{
  if(s.checked)
    {
      document.getElementById(createFollowArray[t]).style.display = "block";
    }
}

function hidefollow(s, t)
{
  if(s.checked)
    {
      document.getElementById(createFollowArray[t]).style.display = "none";
    }
}

/*
function changeitem (s, t)
{
  console.log("hi");
		if(s.checked)
    { 
      document.getElementById(createFollowArray[t]).style.display = "none";
			//createFollow.style.display = "none";
console.log(createFollowArray);
console.log(document.getElementById(createFollowArray[t]));	console.log(document.getElementById(createFollowArray[t]).style.display);
		}else{
      document.getElementById(createFollowArray[t]).style.display = "block";
			//createFollow.style.display = "block";
			console.log("block");
    }
}
*/