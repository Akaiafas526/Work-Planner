let textArea = document.querySelectorAll('textarea');
let saveButtons = document.querySelectorAll('.saveBtn');
let currentDay = document.getElementById('currentDay');
let allRows = document.querySelectorAll('.input-group');

let allIds = ['10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM']

for (let i = 0; i < allIds.length; i++) {
    let localStorageData = JSON.parse(localStorage.getItem(allIds[i]));
    console.log(localStorageData)
    textArea[i].value = localStorageData;
}

for (let i = 0; i < saveButtons.length; i++) {
    saveButtons[i].addEventListener('click', function (event) {
        let target;
        if (event.target.nodeName === "BUTTON") {
            target = event.target.parentNode.parentNode;
        } else if (event.target.nodeName === "I") {
            target = event.target.parentNode.parentNode.parentNode;
        }
        
        let dateToSave = target.children[1].value;
        let divId = target.id;

        localStorage.setItem(divId, JSON.stringify(dataToSave));

    })
}
