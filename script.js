// Navigation Menu Toggle
const menuIcon = document.querySelector('.icon');
const navList = document.querySelector('.nav-list');

menuIcon.addEventListener('click', () => {
    navList.classList.toggle('active');
});

// BMI Calculator
const calculateBtn = document.querySelector('.calculator .button li');
const heightInput = document.getElementById('h');
const weightInput = document.getElementById('w');
const ageInput = document.getElementById('b');
const sexInput = document.getElementById('s');
const activityInput = document.getElementById('activity');

function calculateBMI() {
    const height = parseFloat(heightInput.value) / 100; // Convert cm to m
    const weight = parseFloat(weightInput.value);
    
    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        alert('Please enter valid height and weight values');
        return;
    }

    const bmi = weight / (height * height);
    let category = '';
    
    if (bmi < 18.5) {
        category = 'Underweight';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        category = 'Healthy';
    } else if (bmi >= 25.0 && bmi <= 29.9) {
        category = 'Overweight';
    } else {
        category = 'Obese';
    }

    alert(`Your BMI is: ${bmi.toFixed(1)}\nCategory: ${category}`);
}

calculateBtn.addEventListener('click', calculateBMI);

// Form Validation
const formInputs = document.querySelectorAll('input[type="number"]');

formInputs.forEach(input => {
    input.addEventListener('input', (e) => {
        if (e.target.value < 0) {
            e.target.value = 0;
        }
    });
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
}); 