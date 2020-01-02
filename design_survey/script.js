//make form

var createForm = document.createElement("form");
createForm.setAttribute("id", "myForm");
createForm.method = "post";
createForm.action = "https://getform.io/f/72e307f5-c286-4eb3-a043-1b1a8620d02c";
/******************************************************************************
CONTACT INFO
*******************************************************************************/
var info = document.createElement("h2");
info.innerHTML = "Contact Info";
createForm.appendChild(info);

//first name
var myFName = document.createElement("label");
myFName.setAttribute("for", "fName");
myFName.innerHTML = " First Name: ";
var textInput = document.createElement("input");
textInput.setAttribute("type", "text");
textInput.setAttribute("name", "firstName");
textInput.setAttribute("id", "fName");
createForm.appendChild(myFName);
createForm.appendChild(textInput);
	
//last name
myLName = document.createElement("label");
myLName.setAttribute("for", "lName");
myLName.innerHTML = " Last Name: ";
textInput = document.createElement("input");
textInput.setAttribute("type", "text");
textInput.setAttribute("name", "lastName");
textInput.setAttribute("id", "lName");
createForm.appendChild(myLName);
createForm.appendChild(textInput);

//email
myEmail = document.createElement("label");
myEmail.setAttribute("for", "eMail");
myEmail.innerHTML = " E-mail: ";
textInput = document.createElement("input");
textInput.setAttribute("type", "email");
textInput.setAttribute("name", "emailaddress");
textInput.setAttribute("id", "eMail");
createForm.appendChild(myEmail);
createForm.appendChild(textInput);

//phone number
myTel = document.createElement("label");
myTel.setAttribute("for", "phone");
myTel.innerHTML = " Phone number: ";
textInput = document.createElement("input");
textInput.setAttribute("type", "tel");
textInput.setAttribute("name", "telephone");
textInput.setAttribute("id", "phone");
createForm.appendChild(myTel);
createForm.appendChild(textInput);

//Add a horizontal line
	var linebreak = document.createElement("hr");
	createForm.appendChild(linebreak);
	
/******************************************************************************
TASKS
*******************************************************************************/

//heading
var heading = document.createElement("h2");
heading.innerHTML = "Which of these design tasks can you do? Select your proficiency at doing the task.";
createForm.appendChild(heading);

var wrapperForm = document.getElementById("wrapper");
wrapperForm.append(createForm);

//array of questions
var topics = ["Advertising Materials","Artwork","Biz Collateral","Blogging","Book Art","Book Design","Book Illustration","Brand Design","Brand Management","Branding","Brochure/flyer","Business Cards","Clothing","Clothing Design","Drawing","Email Signature","Graphic Design","Letterhead","Logo Design","Marketing","Powerpoint Slides - General","Powerpoint Slides - Investor Pitchdeck Content Familiarity","Product Labels","Product Packaging","Promotional Video","Social Media Marketing Designs","Storyboarding","UI/US Design - Apps for Android","UI/UX Design - Apps for iOS","UI/UX Design - Software for Desktop Computers","Web Art/Digital Art","Website Design","Wireframes"];

var createFollowArray = [];

//questions

for(var i = 0; i < topics.length; i++) {
/******************************************************************************
INITIAL 
*******************************************************************************/	
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
	
	//creates label for answer
	var q1Label = document.createElement("label");
	q1Label.setAttribute("for", "Cant" + i);
	//creates radio button and properties
    var inputElement1 = document.createElement("input");
	inputElement1.setAttribute("type", "radio");
	inputElement1.setAttribute("name", topics[i] + "optionType" + i);
	inputElement1.setAttribute("id", "Cant" + i);
	inputElement1.setAttribute("value", "Cant");
	inputElement1.setAttribute('onchange', 'hidefollow(this,' + i + ')');
	//adds radio button
	createTopic.appendChild(inputElement1);
	//adds answer text
	q1Label.innerHTML = "I can't do this.";
	createTopic.appendChild(q1Label);
	
	var q2Label = document.createElement("label");
	q2Label.setAttribute("for", "Novice" + i);
	var inputElement2 = document.createElement("input");
	inputElement2.setAttribute("type", "radio");
	inputElement2.setAttribute("name", topics[i] + "optionType" + i);
	inputElement2.setAttribute("id", "Novice" + i);
	inputElement2.setAttribute("value", "Novice");
	inputElement2.setAttribute('onchange', 'showfollow(this,' + i + ')');
	createTopic.appendChild(inputElement2);

	q2Label.innerHTML = "Novice - Willing to learn and try it.";
	createTopic.appendChild(q2Label);
	
	var q3Label = document.createElement("label");
	q3Label.setAttribute("for", "Inter" + i);
	var inputElement3 = document.createElement("input");
	inputElement3.setAttribute("type", "radio");
	inputElement3.setAttribute("name", topics[i] + "optionType" + i);
	inputElement3.setAttribute("id", "Inter" + i);
	inputElement3.setAttribute("value", "Intermediate");
	inputElement3.setAttribute('onchange', 'showfollow(this,' + i + ')');
	createTopic.appendChild(inputElement3);

	q3Label.innerHTML = "Intermediate - Talented or experienced doing this, but not an expert.";
	createTopic.appendChild(q3Label);
	
	var q4Label = document.createElement("label");
	q4Label.setAttribute("for", "Expert" + i);
	var inputElement4 = document.createElement("input");
	inputElement4.setAttribute("type", "radio");
	inputElement4.setAttribute("name", topics[i] + "optionType" + i);
	inputElement4.setAttribute("id", "Expert" + i);
	inputElement4.setAttribute("value", "Expert");
	inputElement4.setAttribute('onchange', 'showfollow(this,' + i + ')');
	createTopic.appendChild(inputElement4);

	q4Label.innerHTML = "Expert - Talented and experienced at doing this.";
	createTopic.appendChild(q4Label);
	
	//Add a horizontal line
	var linebreak = document.createElement("hr");
	createTopic.appendChild(linebreak);
	
/******************************************************************************
FOLLOW UP 
*******************************************************************************/
	var createFollow = document.createElement("div");
	createFollow.setAttribute("id", "followName" + i);
	createFollowArray[i] = "followName" + i;
	createFollow.style.display = "none";
	createFollow.style.color = "blue";
	createTopic.append(createFollow);
	
	var spanFollow = document.createElement("span");
	spanFollow.innerHTML = "How long would it take to complete the task from first attempt to completion?";
	createFollow.appendChild(spanFollow);
	var lineGap = document.createElement("br");
	createFollow.appendChild(lineGap);
	
	//5 hours or less
	var q1aLabel = document.createElement("label");
	q1aLabel.setAttribute("for", "less5" + i);
	var inputElement1a = document.createElement("input");
	inputElement1a.setAttribute("type", "radio");
	inputElement1a.setAttribute("name", "time" + i);
	inputElement1a.setAttribute("id", "less5" + i);
	inputElement1a.setAttribute("value", "<5");
	createFollow.appendChild(inputElement1a);

	q1aLabel.innerHTML = "5 hours or less";
	createFollow.appendChild(q1aLabel);
	
	//5-10
	var q1bLabel = document.createElement("label");
	q1bLabel.setAttribute("for", "5to10" + i);
	var inputElement1b = document.createElement("input");
	inputElement1b.setAttribute("type", "radio");
	inputElement1b.setAttribute("name", "time" + i);
	inputElement1b.setAttribute("id", "5to10" + i);
	inputElement1b.setAttribute("value", "5to10");
	createFollow.appendChild(inputElement1b);

	q1bLabel.innerHTML = "5-10 hours";
	createFollow.appendChild(q1bLabel);
	
	//10-15
	var q1cLabel = document.createElement("label");
	q1cLabel.setAttribute("for", "10to15" + i);
	var inputElement1c = document.createElement("input");
	inputElement1c.setAttribute("type", "radio");
	inputElement1c.setAttribute("name", "time" +i);
	inputElement1c.setAttribute("id", "10to15" + i);
	inputElement1c.setAttribute("value", "10to15");
	createFollow.appendChild(inputElement1c);

	q1cLabel.innerHTML = "10-15 hours";
	createFollow.appendChild(q1cLabel);
	
	//15-20
	var q1dLabel = document.createElement("label");
	q1dLabel.setAttribute("for", "15to20" + i);
	var inputElement1d = document.createElement("input");
	inputElement1d.setAttribute("type", "radio");
	inputElement1d.setAttribute("name", "time" + i);
	inputElement1d.setAttribute("id", "15to20" + i);
	inputElement1d.setAttribute("value", "15to20");
	createFollow.appendChild(inputElement1d);

	q1dLabel.innerHTML = "15-20 hours";
	createFollow.appendChild(q1dLabel);
	
	//20-25
	var q1eLabel = document.createElement("label");
	q1eLabel.setAttribute("for", "20to25" + i);
	var inputElement1e = document.createElement("input");
	inputElement1e.setAttribute("type", "radio");
	inputElement1e.setAttribute("name", "time" + i);
	inputElement1e.setAttribute("id", "20to25" + i);
	inputElement1e.setAttribute("value", "20to25");
	createFollow.appendChild(inputElement1e);

	q1eLabel.innerHTML = "20-25 hours";
	createFollow.appendChild(q1eLabel);
	
	//25-30
	var q1fLabel = document.createElement("label");
	q1fLabel.setAttribute("for", "25to30" + i);
	var inputElement1f = document.createElement("input");
	inputElement1f.setAttribute("type", "radio");
	inputElement1f.setAttribute("name", "time" + i);
	inputElement1f.setAttribute("id", "25to30" + i);
	inputElement1f.setAttribute("value", "25to30");
	createFollow.appendChild(inputElement1f);

	q1fLabel.innerHTML = "25-30 hours";
	createFollow.appendChild(q1fLabel);
	
	//30-35
	var q1gLabel = document.createElement("label");
	q1gLabel.setAttribute("for", "30to35" + i);
	var inputElement1g = document.createElement("input");
	inputElement1g.setAttribute("type", "radio");
	inputElement1g.setAttribute("name", "time" + i);
	inputElement1g.setAttribute("id", "30to35" + i);
	inputElement1g.setAttribute("value", "30to35");
	createFollow.appendChild(inputElement1g);

	q1gLabel.innerHTML = "30-35 hours";
	createFollow.appendChild(q1gLabel);
	
	//35-40
	var q1hLabel = document.createElement("label");
	q1hLabel.setAttribute("for", "35to40" + i);
	var inputElement1h = document.createElement("input");
	inputElement1h.setAttribute("type", "radio");
	inputElement1h.setAttribute("name", "time" + i);
	inputElement1h.setAttribute("id", "35to40" + i);
	inputElement1h.setAttribute("value", "35to40");
	createFollow.appendChild(inputElement1h);

	q1hLabel.innerHTML = "35-40 hours";
	createFollow.appendChild(q1hLabel);
	
	//40+
	var q1iLabel = document.createElement("label");
	q1iLabel.setAttribute("for", "40up" + i);
	var inputElement1i = document.createElement("input");
	inputElement1i.setAttribute("type", "radio");
	inputElement1i.setAttribute("name", "time" + i);
	inputElement1i.setAttribute("id", "40up" + i);
	inputElement1i.setAttribute("value", "40up");
	createFollow.appendChild(inputElement1i);

	q1iLabel.innerHTML = "40+ hours";
	createFollow.appendChild(q1iLabel);
	
	//Add a horizontal line
	linebreak = document.createElement("hr");
	createFollow.appendChild(linebreak);
	
/******************************************************************************
TEXT ENTRY
*******************************************************************************/	
	var createText = document.createElement("div");
	createText.setAttribute("id", "createText" + i);
	createText[i] = "createText" + i;
	createText.style.display = "none";
	createTopic.append(createText);
	
	var spanText = document.createElement("span");
	spanText.innerHTML = "If you know, what tools/applications/etc., if any, would you use to accomplish this task personally?";
	createFollow.appendChild(spanText);
	
	var toolsUsed = document.createElement("label");
	toolsUsed.setAttribute("for", "toolsAnswer" + i);
	var textBox = document.createElement("textarea");
	textBox.setAttribute("name", "whatTools" + i);
	textBox.setAttribute("id", "toolsAnswer" + i);
	createFollow.appendChild(toolsUsed);
	var lineGap = document.createElement("br");
	createFollow.appendChild(lineGap);
	createFollow.appendChild(textBox);
	
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
	
	
	var q1LabelB = document.createElement("label");
	q1LabelB.setAttribute("for", "CantB" + i);
    var inputElement1B = document.createElement("input");
	inputElement1B.setAttribute("type", "radio");
	inputElement1B.setAttribute("name", "optionTypeB" + i);
	inputElement1B.setAttribute("id", "CantB" + i);
	inputElement1B.setAttribute("value", "BonusCant");
	createTopicBonus.appendChild(inputElement1B);

	q1LabelB.innerHTML = "I can't do this.";
	createTopicBonus.appendChild(q1LabelB);
	
	var q2LabelB = document.createElement("label");
	q2LabelB.setAttribute("for", "NoviceB" + i);
	var inputElement2B = document.createElement("input");
	inputElement2B.setAttribute("type", "radio");
	inputElement2B.setAttribute("name", "optionTypeB" + i);
	inputElement2B.setAttribute("id", "NoviceB" + i);
	inputElement2B.setAttribute("value", "BonusNovice");
	createTopicBonus.appendChild(inputElement2B);

	q2LabelB.innerHTML = "Novice - Willing to learn and try it.";
	createTopicBonus.appendChild(q2LabelB);
	
	var q3LabelB = document.createElement("label");
	q3LabelB.setAttribute("for", "InterB" + i);
	var inputElement3B = document.createElement("input");
	inputElement3B.setAttribute("type", "radio");
	inputElement3B.setAttribute("name", "optionTypeB" + i);
	inputElement3B.setAttribute("id", "InterB" + i);
	inputElement3B.setAttribute("value", "BonusIntermediate");
	createTopicBonus.appendChild(inputElement3B);

	q3LabelB.innerHTML = "Intermediate - Talented or experienced doing this, but not an expert.";
	createTopicBonus.appendChild(q3LabelB);
	
	var q4LabelB = document.createElement("label");
	q4LabelB.setAttribute("for", "ExpertB" + i);
	var inputElement4B = document.createElement("input");
	inputElement4B.setAttribute("type", "radio");
	inputElement4B.setAttribute("name", "optionTypeB" + i);
	inputElement4B.setAttribute("id", "ExpertB" + i);
	inputElement4B.setAttribute("value", "BonusExpert");
	createTopicBonus.appendChild(inputElement4B);

	q4LabelB.innerHTML = "Expert - Talented and experienced at doing this.";
	createTopicBonus.appendChild(q4LabelB);
	
	//Add a horizontal line
	var linebreakB = document.createElement("hr");
	createTopicBonus.appendChild(linebreakB);
}

/******************************************************************************
SUBMIT
*******************************************************************************/
var mySubmit = document.createElement("input");
mySubmit.setAttribute("type", "submit");
mySubmit.setAttribute("id", "submitButton");
createForm.appendChild(mySubmit);

function showfollow(elem, index)
{
  if(elem.checked)
    {
      document.getElementById(createFollowArray[index]).style.display = "block";
    }
}

function hidefollow(elem, index)
{
  if(elem.checked)
    {
      document.getElementById(createFollowArray[index]).style.display = "none";
	  var timeArray =  document.getElementsByName("time" + index);
	  for (var i = 0; i < timeArray.length; i++) {
	    timeArray[i].checked = false;
	  }
	  document.getElementById("toolsAnswer" + index).value = "";
    }
}