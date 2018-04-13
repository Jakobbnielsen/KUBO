//* DASHBOARD.HTML SCRIPT START

function createLesson(){
  var lessonplantitle = document.getElementById("lessonplantitle").value;
  var authorname = document.getElementById("authorname").value;
  var lessonplancontent = document.getElementById("lessonplancontent").value;
  var lessonplandescription = document.getElementById("lessonplandescription").value;
  var chaptertitle = document.getElementById("chaptertitle").value;
  localStorage.setItem('lessonplantitle',lessonplantitle);
  localStorage.setItem('authorname',authorname);
  localStorage.setItem('lessonplancontent',lessonplancontent);
  localStorage.setItem('lessonplandescription',lessonplandescription);
  localStorage.setItem('chaptertitle',chaptertitle);
  window.location.href = 'lessonplans.html';
  var stylechange = document.getElementById("lessonplanone").style.display = "block";
  localStorage.setItem('lessonplantitle',lessonplantitle);
}

function changeCategory(){
    forumfrontcontainer.style.display = "none";
}

function changeCategory2(){
    forumfrontcontainer.style.display = "block";
}

function changeUser(){
    userfrontcontainer.style.display = "none";
}

function changeUser2(){
    userfrontcontainer.style.display = "block";
}

function vote()
{
var value = parseInt(document.getElementById('number').value, 10);
value = isNaN(value) ? 0 : value;
value++;
document.getElementById('number').value = value;
document.getElementById('votebutton').style.backgroundImage = 'url(media/upvote.png)';

}
function vote2()
{
var value = parseInt(document.getElementById('number2').value, 10);
value = isNaN(value) ? 0 : value;
value++;
document.getElementById('number2').value = value;
document.getElementById('votebutton2').style.backgroundImage = 'url(media/upvote.png)';

}
function vote3()
{
var value = parseInt(document.getElementById('number3').value, 10);
value = isNaN(value) ? 0 : value;
value++;
document.getElementById('number3').value = value;
document.getElementById('votebutton3').style.backgroundImage = 'url(media/upvote.png)';

}
function vote4()
{
var value = parseInt(document.getElementById('number4').value, 10);
value = isNaN(value) ? 0 : value;
value++;
document.getElementById('number4').value = value;
document.getElementById('votebutton4').style.backgroundImage = 'url(media/upvote.png)';

}
function vote5()
{
var value = parseInt(document.getElementById('number5').value, 10);
value = isNaN(value) ? 0 : value;
value++;
document.getElementById('number5').value = value;
document.getElementById('votebutton5').style.backgroundImage = 'url(media/upvote.png)';

}

function vote6()
{
var value = parseInt(document.getElementById('number6').value, 10);
value = isNaN(value) ? 0 : value;
value++;
document.getElementById('number6').value = value;
document.getElementById('votebutton6').style.backgroundImage = 'url(media/upvote.png)';

}

function vote7()
{
var value = parseInt(document.getElementById('number7').value, 10);
value = isNaN(value) ? 0 : value;
value++;
document.getElementById('number7').value = value;
document.getElementById('votebutton7').style.backgroundImage = 'url(media/upvote.png)';

}

function vote8()
{
var value = parseInt(document.getElementById('number8').value, 10);
value = isNaN(value) ? 0 : value;
value++;
document.getElementById('number8').value = value;
document.getElementById('votebutton8').style.backgroundImage = 'url(media/upvote.png)';

}

function vote9()
{
var value = parseInt(document.getElementById('number9').value, 10);
value = isNaN(value) ? 0 : value;
value++;
document.getElementById('number9').value = value;
document.getElementById('votebutton9').style.backgroundImage = 'url(media/upvote.png)';

}

function vote10()
{
var value = parseInt(document.getElementById('number10').value, 10);
value = isNaN(value) ? 0 : value;
value++;
document.getElementById('number10').value = value;
document.getElementById('votebutton10').style.backgroundImage = 'url(media/upvote.png)';

}

function lessonvotebutton1()
{
var value = parseInt(document.getElementById('lessonplannumber').value, 10);
value = isNaN(value) ? 0 : value;
value++;
document.getElementById('lessonplannumber').value = value;
document.getElementById('lessonvotebutton1').style.backgroundImage = 'url(media/lessonplanupvote.png)';

}

function lessonvotebutton12()
{
var value = parseInt(document.getElementById('lessonplannumber1').value, 10);
value = isNaN(value) ? 0 : value;
value++;
document.getElementById('lessonplannumber1').value = value;
document.getElementById('lessonvotebutton12').style.backgroundImage = 'url(media/lessonplanupvote.png)';

}

function lessonvotebutton3()
{
var value = parseInt(document.getElementById('lessonplannumber2').value, 10);
value = isNaN(value) ? 0 : value;
value++;
document.getElementById('lessonplannumber2').value = value;
document.getElementById('lessonvotebutton3').style.backgroundImage = 'url(media/lessonplanupvote.png)';

}

function lessonvotebutton4()
{
var value = parseInt(document.getElementById('lessonplannumber3').value, 10);
value = isNaN(value) ? 0 : value;
value++;
document.getElementById('lessonplannumber3').value = value;
document.getElementById('lessonvotebutton4').style.backgroundImage = 'url(media/lessonplanupvote.png)';

}

function lessonvotebutton5()
{
var value = parseInt(document.getElementById('lessonplannumber4').value, 10);
value = isNaN(value) ? 0 : value;
value++;
document.getElementById('lessonplannumber4').value = value;
document.getElementById('lessonvotebutton5').style.backgroundImage = 'url(media/lessonplanupvote.png)';

}

function lessonvotebutton6()
{
var value = parseInt(document.getElementById('lessonplannumber5').value, 10);
value = isNaN(value) ? 0 : value;
value++;
document.getElementById('lessonplannumber5').value = value;
document.getElementById('lessonvotebutton6').style.backgroundImage = 'url(media/lessonplanupvote.png)';

}

function lessonvotebutton7()
{
var value = parseInt(document.getElementById('lessonplannumber6').value, 10);
value = isNaN(value) ? 0 : value;
value++;
document.getElementById('lessonplannumber6').value = value;
document.getElementById('lessonvotebutton7').style.backgroundImage = 'url(media/lessonplanupvote.png)';

}

function lessonvotebutton8()
{
var value = parseInt(document.getElementById('lessonplannumber7').value, 10);
value = isNaN(value) ? 0 : value;
value++;
document.getElementById('lessonplannumber7').value = value;
document.getElementById('lessonvotebutton8').style.backgroundImage = 'url(media/lessonplanupvote.png)';

}

function lessonvotebutton9()
{
var value = parseInt(document.getElementById('lessonplannumber8').value, 10);
value = isNaN(value) ? 0 : value;
value++;
document.getElementById('lessonplannumber8').value = value;
document.getElementById('lessonvotebutton9').style.backgroundImage = 'url(media/lessonplanupvote.png)';

}

function lessonvotebutton10()
{
var value = parseInt(document.getElementById('lessonplannumber9').value, 10);
value = isNaN(value) ? 0 : value;
value++;
document.getElementById('lessonplannumber9').value = value;
document.getElementById('lessonvotebutton10').style.backgroundImage = 'url(media/lessonplanupvote.png)';

}
