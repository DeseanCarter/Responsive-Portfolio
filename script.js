//Current Day Variable
var currentDay = $("#currentDay");



//Setting date and time on page open
setInterval(function() {
    currentDay.empty(); 
    currentDay.append(dayjs().format('dddd MMMM DD' + " - " +'h:mm:ss:a')); 
    currentColors();   
},1000);