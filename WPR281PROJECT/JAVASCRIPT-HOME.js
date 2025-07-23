/* Array of objects representing the different I.T courses and their information: title, code, duration, description, details of course  */
const courses = [
    {
        title: "Higher Certificate",
        code: "HC101",
        duration: "1 year",
        description: "A foundational course for IT.",
        details: {
            module1: ["Introduction to IT",],
            module2: [ "Basic Programming"],
            lecturers: ["Dr. Smith", "Prof. Johnson"],
            venues: ["Room 101", "Room 102"],
            studyGuide: 'StudyGuide[2024].pdf', 
            video: 'https://www.youtube.com/watch?v=BgFxeAq126g'
            
        }
    },
    {
        title: "Diploma in Technology",
        code: "DIP201",
        duration: "2 years",
        description: "An intermediate course in IT.",
        details: {
            module1: ["Advanced Programming"],
            module2: ["Database Management"],
            lecturers: ["Dr. Adams", "Prof. Lee"],
            venues: ["Room 201", "Room 202"],
            studyGuide: 'StudyGuide[2024].pdf',  
            video: 'https://www.youtube.com/watch?v=BgFxeAq126g'
        }
    },
    {
        title: "Bachelor in Technology",
        code: "BIT301",
        duration: "3 years",
        description: "A Bachelor of Information Technology.",
        details: {
            module1: ["Web Programming"],
            module2: ["Computer Networks"],
            lecturers: ["Dr. White", "Prof. Black"],
            venues: ["Room 301", "Room 302"],
            studyGuide: 'StudyGuide[2024].pdf', 
            video: 'https://www.youtube.com/watch?v=BgFxeAq126g'
        }
    },
    {
        title: "Bachelor of Computing",
        code: "BCOM401",
        duration: "4 years",
        description: "A Bachelor of Commerce in IT.",
        details: {
            module1: ["Software Engineering"],
            module2:  ["Network Security"],
            lecturers: ["Dr. Green", "Prof. Brown"],
            venues: ["Room 401", "Room 402"],
            studyGuide: 'StudyGuide[2024].pdf', 
            video: 'https://www.youtube.com/watch?v=BgFxeAq126g'
        }
    }
];

/* These variables are used to display the course details, help with the search functionality, and display course info */
const courseDetails = document.getElementById("courseDetails");
const searchInput = document.getElementById("srch");
const searchBtn = document.getElementById("searchBtn");
const detailsBox = document.getElementById("detailsBox");

/* Handels search functionality  */
searchBtn.onclick = function() { 
    let result = [];
    let input = searchInput.value.trim().toLowerCase();
    if (input.length) {
        result = courses.filter((course) => {
            return course.title.toLowerCase().includes(input.toLowerCase());
        });
    }
    if (result.length === 0) {
        courseDetails.innerHTML = '<p>Course not found. Please try another search.</p>';
        detailsBox.innerHTML = ''; 
        courseDetails.style.display = 'block';  // Show courseDetails even when no results
        detailsBox.style.display = 'none';
    } else {
        display(result);
        courseDetails.style.display = 'block';  // Show courseDetails even when no results
       
    }
};

/* Short display of course details */
function display(result) {
    courseDetails.innerHTML = ''; 
    result.forEach(course => { 
        const courseElement = document.createElement('div'); 
        courseElement.className = 'course';
        courseElement.innerHTML = `
            <h3>${course.title}</h3>
            <br/>
            <p>Code: ${course.code}</p>
            <br/>
            <p>Duration: ${course.duration}</p>
            <br/>
            <p>${course.description}</p>
            <br/>
            <button onclick="viewDetails('${course.title}')">View Details</button>
        `;
        courseDetails.appendChild(courseElement);
    });
}

/* Display full course details when clicked */
function viewDetails(courseTitle) {
    const course = courses.find(c => c.title === courseTitle);
    if (course) {
        courseDetails.innerHTML = '';
        detailsBox.innerHTML = `
            <h2>${course.title}</h2>
            <br/>
            <p><strong>Code:</strong> ${course.code}</p>
            <br/>
            <p><strong>Duration:</strong> ${course.duration}</p>
            <br/>
            <p><strong>Description:</strong> ${course.description}</p>
            <br/>
            <p><strong>Module 1:</strong> ${course.details.module1.join(', ')}</p>
            <div id="courseCompleteLabel">
            <label for="complete">Done:</label>
            <input type="checkbox" id="complete">
            </div> 
           <br/>
             <p><strong>Module 2:</strong> ${course.details.module2.join(', ')}</p>
            <div id="courseCompleteLabel">
            <label for="complete">Done:</label>
            <input type="checkbox" id="complete">
            </div> 
            <br/>
            <p><strong>Lecturers:</strong> ${course.details.lecturers.join(', ')}</p>
            <br/>
            <p><strong>Venues:</strong> ${course.details.venues.join(', ')}</p>
            <br/>
            <p><strong>Study Guide:</strong> <a href="${course.details.studyGuide}" download>Download the Study Guide</a></p>
            <br/>
            <p><strong>Video on Course:</strong> <a href="${course.details.video}" target="_blank">Video on Course</a></p>
            <br/>
            <button onclick="enrollInCourse('${course.title}')" target="_blank">Enroll Now!</button>
            
            <button onclick="printCourseDoc('${course.title}')" target="_blank">Print Course</button>
        `;
        detailsBox.style.display = 'block'; /* Details */
        
    }
}

/*Clears and hides the details box*/
function clearDetails(){
    detailsBox.innerHTML = '';
    detailsBox.style.display = 'none';
}

/*Clears the details if the search input is empry*/
searchInput.addEventListener("input", function(){
    if (searchInput.value === '') {
        clearDetails();
        courseDetails.style.display = 'none';  /* Hides courseDetails when no results */
    }
});


/* Function to open enrollment form on new page */ 
function enrollInCourse() {
    window.open( 'https://soggyuterus420.github.io/Student-Enrollment-Form/' , '_blank');
}

/* Function to print the course details in a new window */
function printCourseDoc(courseTitle) {
    const course = courses.find(c => c.title === courseTitle);
    if (course) {
        const printStuff = `
            <h2>${course.title}</h2>
            <p><strong>Code:</strong> ${course.code}</p>
            <p><strong>Duration:</strong> ${course.duration}</p>
            <p><strong>Description:</strong> ${course.description}</p>
            <p><strong>Module 1:</strong> ${course.details.module1.join(', ')}</p>
            <p><strong>Module 2:</strong> ${course.details.module2.join(', ')}</p>
            <p><strong>Lecturers:</strong> ${course.details.lecturers.join(', ')}</p>
            <p><strong>Venues:</strong> ${course.details.venues.join(', ')}</p>
            <p><strong>Study Guide:</strong> <a href="${course.details.studyGuide}" download>Download the Study Guide</a></p>
            <p><strong>Video on Course:</strong> <a href="${course.details.video}" target="_blank">Video on Course</a></p>
        `;
        const printWindow = window.open('', '', 'height=600,width=800'); /* Opens new window to print */
        printWindow.document.write(printStuff); /*Writes the content to print*/
        printWindow.document.close(); /*Close doc*/
        printWindow.print(); /*Prints doc*/
    }
}






























































// let completedModules = [];

// function markCompleted(moduleElement) {
//     if (moduleElement.classList.contains('completed')) {
//         moduleElement.classList.remove('completed');
//         const index = completedModules.indexOf(moduleElement.innerText);
//         if (index > -1) {
//             completedModules.splice(index, 1);
//         }
//     } else {
//         moduleElement.classList.add('completed');
//         completedModules.push(moduleElement.innerText);
//     }
//     updateCompletedModulesList();
// }

// function updateCompletedModulesList() {
//     const completedModulesList = document.getElementById('completedModulesList');
//     completedModulesList.innerHTML = '';
//     completedModules.forEach(module => {
//         const li = document.createElement('li');
//         li.innerText = module;
//         completedModulesList.appendChild(li);
//     });
// }

// function printCourse() {
//     window.print();
// }

// window.viewDetails = viewDetails;  // Make the viewDetails function globally accessible
// window.markCompleted = markCompleted;  // Make the markCompleted function globally accessible
// window.printCourse = printCourse;  // Make the printCourse function globally accessible
