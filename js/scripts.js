//gets  all elements with class name 'button' and puts it to table 'buttons'
var buttons = document.getElementsByClassName('button');

//calls functions alertButtons with delay 2 seconds
setTimeout( function () { alertButtons(buttons); }, 2000);


//for each element of table 'buttonsTable' calls function alert and display text of button's
function alertButtons(buttonsTable) {

    for (var i = 0; i < buttonsTable.length; i++) {
        alert(buttonsTable[i].textContent);
    }

}