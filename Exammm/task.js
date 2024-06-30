function publishToTable() {
    const name = document.getElementById('name').value;
    const age = parseInt(document.getElementById('age').value);
    const surname = document.getElementById('surname').value;

    if (name && age && surname) {
        if (age < 18) {
            alert("Age must be 18 or older.");
            return;
        }

        const tableElement = document.getElementById('table').getElementsByTagName('tbody')[0];
        const trElement = document.createElement('tr');
        const nameEle = document.createElement('td');
        const surnameEle = document.createElement('td');
        const ageEle = document.createElement('td');

        nameEle.innerHTML = name;
        surnameEle.innerHTML = surname;
        ageEle.innerHTML = age;

        trElement.appendChild(nameEle);
        trElement.appendChild(surnameEle);
        trElement.appendChild(ageEle);
        tableElement.appendChild(trElement);
    }
}
