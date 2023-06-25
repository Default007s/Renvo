const trash = document.querySelector("#trashImg");
const classContainer = document.querySelector('#smallBody')
const largeContainer = document.querySelector('#largeContainer');
const instructions = document.querySelectorAll('.instructions');
const lessonList = document.querySelectorAll(".lesson");
const copyright = document.getElementById('copyright');

lessonList[lessonList.length - 1].style.borderBottom = 0;

function togglePopup() {
    document.getElementById('popup').classList.toggle('active');
}

function removeInstructions() {
    for (let i = 0; i < lessonList.length; i++) {
        lessonList[i].classList.remove('lessonActive');    
    }
}



// Book Class : Represents a Book
class Class{
    constructor(name){
        this.name = name;
    }
}

// UI class handles UI tasks
class UI{
    static displayClasses(){
        const storedClasses =[
            {
                name : 'RENVO(class seattle 2021 sprint) - Learning modules',
            },
            {
                name : 'Class seattle 2021 sprint',
            },
            {
                name : 'Any class Name',
            }
        ]
        
        const classes = storedClasses;
        classes.forEach(function (classElement) {
            UI.addClassToList(classElement);
        })
    }
    
    static addClassToList(classElement){
        const classItem = document.createElement('div');
        classItem.classList.add('smallItem');
        classItem.innerHTML = `
        <h3>${classElement.name}</h3>
        <div class="right-point"></div>
        `;
        classContainer.appendChild(classItem);
    }
}

// Displaying Classes
document.addEventListener('DOMContentLoaded', UI.displayClasses());

// Adding Classes
function addClass() {
    const className = document.querySelector('#className').value;   
    
    const classObject = new Class(className);
    UI.addClassToList(classObject);
    
    // Reseting the values of input boxes when class is added
    document.querySelector('#className').value = '';
    
    // Closing Popup when Class is added
    document.getElementById('popup').classList.toggle("active");
}

// Functionality for active Item
function activeClass(targetElement){
    if(targetElement.parentElement.classList.contains('smallItem')){
        const smallItem = document.querySelectorAll('.smallItem');
        const largeContainerHeader = document.querySelector('#mainTextlargeContainer');
        for (let i = 0; i < smallItem.length; i++) {
            smallItem[i].classList.remove('activeItem');
        }        

        targetElement.parentElement.classList.add('activeItem');
        largeContainerHeader.innerHTML = targetElement.innerHTML;
        largeContainer.style.display = 'flex';
        copyright.style.position = 'relative';
    }
}

// Removing Class when user wants 
trash.addEventListener('click', function deleteClass() {
    const smallItem = document.querySelectorAll('.smallItem');
    for (let i = 0; i < smallItem.length; i++) {
        if (smallItem[i].classList.contains('activeItem')) {
            if (confirm('Do you really want to delete this Class?')) {
                for (let i = 0; i < smallItem.length; i++) {
                    if (smallItem[i].classList.contains('activeItem')) {
                        smallItem[i].parentElement.removeChild(smallItem[i]);
                        document.querySelectorAll(".smallItem")[0].style.borderTop = 'none';
                    }
                }        
                largeContainer.style.display = 'none';
            }
        }
    }        
});

classContainer.addEventListener('click', function (event) {
    activeClass(event.target);
})

// Functionality for when user clicks a lesson
function activeLesson(targetElement){
    if(targetElement.classList.contains('banner') || targetElement.classList.contains('lesson') || targetElement.classList.contains('lessonHeader') || targetElement.classList.contains('dropdownIcon')){
        const lessonItem = document.querySelectorAll('.lesson');
        for (let i = 0; i < lessonItem.length; i++) {
            lessonItem[i].classList.remove('lessonActive');
            copyright.style.position = 'relative';
            console.log(copyright.style.position);
        }                
        if (targetElement.classList.contains('lesson')) {
            targetElement.classList.add('lessonActive');
            copyright.style.position = 'relative';
            console.log(copyright.style.position);
        }
        if (targetElement.classList.contains('lessonHeader')) {
            targetElement.parentElement.parentElement.classList.add('lessonActive');
            copyright.style.position = 'relative';
            console.log(copyright.style.position);
        }
        if (targetElement.classList.contains('dropdownIcon')) {
            targetElement.parentElement.parentElement.classList.add('lessonActive');
            copyright.style.position = 'relative';
            console.log(copyright.style.position);
        }
        if (targetElement.classList.contains('banner')) {
            targetElement.parentElement.classList.add('lessonActive');
            copyright.style.position = 'relative';
            console.log(copyright.style.position);
        }
    }
}

largeContainer.addEventListener('click', function (event) {
    activeLesson(event.target);
})

// Removing border-top from first Element
const smallItemList = document.querySelectorAll(".smallItem");
smallItemList[0].style.borderTop = 0;

function closeLargeContainer() {
    const lessonItem = document.querySelectorAll('.smallItem');
    for (let i = 0; i < lessonItem.length; i++) {
        lessonItem[i].classList.remove('activeItem');
    }                
    largeContainer.style.display = 'none';
}

