// School Class: Represents a card

class school {
    constructor(school_name, country_name) {
        this.school_name =  school_name;
        this.country_name = country_name;
    }
}

// UI Class: Handles UI tasks

class UI{
    static displaySchools() {
        const storedSchools = [
            {
                school_name: 'Cardiff University',
                country_name: 'UK'
            },
            {
                school_name: 'Columbia University',
                country_name: 'USA'
            },
            {
                school_name: 'Stanford University',
                country_name: 'UK'
            },
            {
                school_name: 'Stanford University',
                country_name: 'UK'
            },
            {
                school_name: 'Stanford University',
                country_name: 'UK'
            },
            {
                school_name: 'Stanford University',
                country_name: 'UK'
            }
        ]

        const schools = storedSchools;
        schools.forEach( function (school) {
            UI.addSchoolToList(school);
        });

    }
 
    static addSchoolToList(school){

        // Card for Desktop display
        const cards = document.querySelector('#cards');
        const card = document.createElement('div')
        card.classList.add("card");
        
        card.innerHTML = `
        <div class="cardImg">
            <img src="Images/Icons/classroom.svg" alt="">
        </div>
        <div class="cardText">
            <h1>${school.school_name},<br> ${school.country_name}</h1>
            <h3>Safety Officer on Board</h3>
        </div>`;
        cards.appendChild(card);

        // Card for Mobile display
        const mobileCards = document.querySelector('#mobileCards');
        const mobileCard = document.createElement('div')
        mobileCard.classList.add("card");
        
        mobileCard.innerHTML = `
        <div class="cardImg">
            <img src="Images/Icons/classroom.svg" alt="">
        </div>
        <div class="cardText">
            <h1>${school.school_name},<br> ${school.country_name}</h1>
            <h3>Safety Officer on Board</h3>
        </div>`;

        mobileCards.appendChild(mobileCard);
    }
}

// Event: Display Schools
document.addEventListener('DOMContentLoaded', UI.displaySchools);