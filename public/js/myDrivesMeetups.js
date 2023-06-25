const participantLanes = document.querySelectorAll('.subRow');

function togglePopup() {
    document.getElementById('popupAddMeetup').classList.toggle("active");
}

function secondTogglePopup() {
    document.getElementById('popupAddParticipant').classList.toggle("active");
}

const lanes = document.getElementById('lanes');

function addMeetup() {
    let descriptionValue = document.querySelector('#descriptionField').value;
    let meetupValue = document.querySelector('#meetupField').value;
    const miniLane = document.createElement('div');
    miniLane.classList.add('miniLane');
    miniLane.innerHTML = `
    <div class="miniLane">
        <h3>${meetupValue} : <span>${descriptionValue}</span></h3>
        <img class="delete" src="Images/Icons/delete.svg" alt="">
    </div>  
    `;    
    lanes.appendChild(miniLane);
    document.querySelector('#descriptionField').value = ' ';
    document.querySelector('#meetupField').value = ' ';
    document.getElementById('popupAddMeetup').classList.toggle("active");
}

function deleteMeetup(el){
    if(el.classList.contains('delete')){
        el.parentElement.remove();
    }
}

lanes.addEventListener('click', function (e) {
    deleteMeetup(e.target);
})

const list = document.getElementById('list');

function addParticipant() {
    let nameValue = document.querySelector('#rowName').value;
    let vesselValue = document.querySelector('#rowVessel').value;
    let shipNameValue = document.querySelector('#rowShipName').value;
    const subRow = document.createElement('div');
    subRow.classList.add('subRow');
    subRow.innerHTML = `
        <h3>${nameValue}</h3>
        <h3>${vesselValue}</h3>
        <h3 class="shipName"><img src="Images/Icons/Ship Name.svg" alt="">${shipNameValue}</h3>
        <h3 class="delete actionSubRow" class="actionSubRow">Remove</h3>
    `;    
    list.appendChild(subRow);
    document.querySelector('#rowName').value = ' ';
    document.querySelector('#rowVessel').value = ' ';
    document.querySelector('#rowShipName').value = ' ';
    document.getElementById('popupAddParticipant').classList.toggle("active");
}

function deleteParticipant(el){
    if(el.classList.contains('delete')){
        el.parentElement.remove();
    }
}

list.addEventListener('click', function (e) {
    deleteParticipant(e.target);
})