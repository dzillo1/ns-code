<div class="timer">
<!--  <div id="days" class="number"></div>-->
  <div id="hours" class="number"></div>
  <span class="separator">:</span>
  <div id="minutes" class="number"></div>
  <span class="separator">:</span>
  <div id="seconds" class="number"></div>
</div>

<script>
function makeTimer() {
    var endTime = new Date("18 July 2024 9:00:00 GMT+01:00");
    endTime = Date.parse(endTime) / 1000;
    var now = new Date();
    now = Date.parse(now) / 1000;

    var timeLeft = endTime - now;
    var hours = Math.floor(timeLeft / 3600);
    var minutes = Math.floor((timeLeft - (hours * 3600)) / 60);
    var seconds = Math.floor(timeLeft - (hours * 3600) - (minutes * 60));

    if (hours < 10) { hours = "0" + hours; }
    if (minutes < 10) { minutes = "0" + minutes; }
    if (seconds < 10) { seconds = "0" + seconds; }

    $("#hours").html(hours + "<br><span class='increment'>Hrs</span>");
    $("#minutes").html(minutes + "<br><span class='increment'>Min</span>");
    $("#seconds").html(seconds + "<br><span class='increment'>Secs</span>");
}
setInterval(function() { makeTimer(); }, 1000);
</script>
