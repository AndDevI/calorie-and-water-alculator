const camposNumericos = document.querySelectorAll('.numbers');

camposNumericos.forEach(campo => {
    campo.addEventListener('input', function() {
        this.value = this.value.replace(/[^0-9]/g, '');

        if (this.value.startsWith('0') && !this.value.startsWith('0.')) {
            this.value = this.value.substring(1);
        }

        if (this.value.length > 3) {
            this.value = this.value.slice(0, 3);
        }
    });
});

const weightInput = document.getElementById('weight');

weightInput.addEventListener('input', function() {
    this.value = this.value.replace(/[^0-9.]/g, '');

    const decimalIndex = this.value.indexOf('.');
    if (decimalIndex !== -1) {
        this.value = this.value.slice(0, decimalIndex + 2);
    }

    const integerPart = this.value.split('.')[0];
    if (integerPart.length > 3) {
        this.value = this.value.slice(0, 3) + (decimalIndex !== -1 ? this.value.slice(decimalIndex) : '');
    }
});

const sex = document.querySelectorAll('input[name="sex"]');
let activeSex = null;

sex.forEach((checkbox) => {
    checkbox.addEventListener('change', function() {
        if (this.checked) {
            activeSex = this.value; 

            sex.forEach((otherCheckbox) => {
                if (otherCheckbox !== this) {
                    otherCheckbox.checked = false;
                }
            });
        } else {
            activeSex = null; 
        }
    });
});

function calculateCalories() {
    const heightUser = parseFloat(document.getElementById('height').value);
    const weightUser = parseFloat(document.getElementById('weight').value);
    const ageUser = parseFloat(document.getElementById('age').value);
    const activityFactor = parseFloat(document.getElementById('quantExercise').value); 

    const activeSex = 'male';

    if (isNaN(heightUser) || isNaN(weightUser) || isNaN(ageUser) || isNaN(activityFactor)) {
        alert("Por favor, insira valores numéricos válidos.");
        return;
    }

    let calories;
    if (activeSex === 'male') {
        calories = (((13.75 * weightUser) + (5 * heightUser) - (6.76 * ageUser)) + 66.5) * activityFactor;
    } else {
        calories = (((9.56 * weightUser) + (1.85 * heightUser) - (4.68 * ageUser)) + 665) * activityFactor;
    }

    const caloriesNormal = document.querySelector('#caloriesNormal');
    caloriesNormal.textContent = calories;
}

const btnCalculateCalories = document.querySelector('button')
btnCalculateCalories.addEventListener('click', calculateCalories);