//* DASHBOAR.HTML SCRIPT START

function changeCategory(){
    forumfrontcontainer.style.display = "none";
}

function changeCategory2(){
    forumfrontcontainer.style.display = "block";
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
