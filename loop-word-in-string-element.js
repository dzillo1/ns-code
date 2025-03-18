const textArray = ["Lose", "up", "to", "5 lbs."];
let index = 0;

setInterval(() => {
    $("#changeText").fadeOut(() => {
        $("#changeText").text(textArray[index]).fadeIn();
        index = (index + 1) % textArray.length;
    });
}, 2000);


/*
<div class="container">
    <span id="changeText">This week</span>
</div>
*/
