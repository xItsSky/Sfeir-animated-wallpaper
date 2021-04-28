var days = ["lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi", "dimanche"];

window.setInterval(function(){
    showDate();
}, 1000);

function showDate() {
    // Get the current datetime
    var date = new Date()

    // get hours, minutes and secondes
    var day = date.getDay();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

    // format data
    if( hours < 10 ){ hours = '0' + hours; }
    if( minutes < 10 ){ minutes = '0' + minutes; }
    if( seconds < 10 ){ seconds = '0' + seconds; }

    //display date
    $('#day').text(days[day]);
    $('#hour').text(hours + ':' + minutes + ':' + seconds);
}
