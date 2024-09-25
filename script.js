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

const sex = document.querySelectorAll('.sex');

sex.forEach((checkbox) => {
    checkbox.addEventListener('change', function() {
        if (this.checked) {
            sex.forEach((otherCheckbox) => {
                if (otherCheckbox !== this) {
                    otherCheckbox.checked = false;
                }
            });
        }
    });
});


