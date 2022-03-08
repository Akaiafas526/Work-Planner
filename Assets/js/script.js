// Global Variables
let textArea = document.querySelectorAll('textarea');
let saveButtons = document.querySelectorAll('.save-btn');
let currentDay = document.getElementById('currentDay');
let allRows = document.querySelectorAll('.input-group');

let allIds = ['10:00 AM', '11:00 AM', '12:00 PM', '13:00 PM', '14:00 PM', '15:00 PM', '16:00 PM', '17:00 PM']

for (let i = 0; i < allIds.length; i++) {
    let localStorageData = JSON.parse(localStorage.getItem(allIds[i]));
    console.log(localStorageData)
    textArea[i].value = localStorageData;
}

for (let i = 0; i < saveButtons.length; i++) {
    console.log(saveButtons[i])
    saveButtons[i].addEventListener('click', function (event) {
        let target;
        if (event.target.nodeName === "BUTTON") {
            target = event.target.parentNode.parentNode;
        } else if (event.target.nodeName === "I") {
            target = event.target.parentNode.parentNode.parentNode;
        }
        
        // console.log(target.children[1].value);
        let dataToSave = target.children[1].value;
        let divId = target.id;

        localStorage.setItem(divId, JSON.stringify(dataToSave));


    })
}



let updatedDate = moment().format('YYYY-MM-DD HH:mm:ss');
// console.log(updatedDate);

let currentTime = moment().format('H');
console.log(currentTime)

for (let i = 0; i < allRows.length; i++ ){
    let chosenDiv = allRows[i];
    console.log(chosenDiv.children)
    let divID = chosenDiv.id.split(':')[0];
    // console.log(divID)
    if (parseInt(currentTime) === parseInt(divID)) {
     chosenDiv.children[1].setAttribute('class','form-control present')
    }
    else if (parseInt(currentTime) > parseInt(divID)) {
        chosenDiv.children[1].setAttribute('class','form-control past')
    }
    else {chosenDiv.children[1].setAttribute('class','form-control future')}
}

setInterval(() => {
    updatedDate = moment().format('YYYY-MM-DD HH:mm:ss');
    currentDay.textContent = updatedDate;
},1000);

let currentHour = moment().format('h a').split('');
console.log(currentHour[1]);

