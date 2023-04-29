const form = document.getElementById('form');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;

    const bmi = (weight / (height * height)).toFixed(2);

    const value = document.getElementById('value');

    let description = '';

    value.classList.add('attention');

    document.getElementById('infos').classList.remove('hidden');

    if (bmi < 18.5) {
        description = 'Os valores do PESO ou ALTURA podem estar incorretos.';
        value.classList.remove('attention');
        value.classList.add('above');
    } else if (bmi >= 18.6 && bmi <= 24.9) {
        description = "Você está no peso ideal.";
        value.classList.remove('attention');
        value.classList.add('below');
    } else if (bmi > 25 && bmi <= 29.0) {
        description = "Cuidado! Você está com sobrepeso.";
        value.classList.remove('attention');
        value.classList.add('normal');
    } else if (bmi > 30 && bmi <= 34.9) {
        description = "Cuidado! Você está com obesidade moderada.";
    } else if (bmi > 35 && bmi <= 39.0) {
        description = "Cuidado! Você está com obesidade severa.";
    } else {
        description = "Cuidado! Você está com obesidade morbida.";
    }

    value.textContent = bmi.replace('.',',');
    document.getElementById('description').textContent = description;

});
