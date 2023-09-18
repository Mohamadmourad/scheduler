let selected = [];

document.addEventListener('DOMContentLoaded', () => {
    // If there's no data in local storage, initialize it
    if (!localStorage.getItem('selectedData')) {
        localStorage.setItem('selectedData', '[]');
    }

    const selectedJSON = localStorage.getItem('selectedData');

    selected = JSON.parse(selectedJSON);
    if (selected.length > 0) {
        document.querySelector('main').style.display = "flex";
        document.querySelector('#delete').style.display = "block";
    }
    changes(selected, selected);
});

document.querySelector('form').onsubmit = () => {   //when you submit
    document.querySelector('main').style.display = "flex";
    document.querySelector('#delete').style.display = "block";
    const courseName = document.getElementById('name').value;
    const day = document.getElementById('day').value;
    const time = document.getElementById('time').value;
    const selectedPeriod = "." + day + time;
    selected.push(selectedPeriod); //for the delet button
    changes(selectedPeriod, courseName);

    // Convert the array to a JSON string
    const selectedJSON = JSON.stringify(selected);

    // Save it to local storage
    localStorage.setItem('selectedData', selectedJSON);
    return false;
}

function changes(selectedPeriod, courseName) {
    let color = colorSelector();
    let periods = document.querySelectorAll(selectedPeriod);
    periods.forEach(period => {
        period.style.backgroundColor = color;
        period.innerHTML = courseName;
    });
}

document.getElementById("delete").onclick = () => {
    document.getElementById('deleteMenu').style.display = "flex";
}

document.getElementById("no").onclick = () => {
    document.getElementById('deleteMenu').style.display = "none";
}

document.getElementById("yes").onclick = () => {//delete button
    document.getElementById('deleteMenu').style.display = "none";
    selected.forEach(select => {
        let blocks = document.querySelectorAll(select);
        blocks.forEach(block => {
            block.style.backgroundColor = "white";
            block.innerHTML = "";
        })
    });
    selected = [];
    document.querySelector('main').style.display = "none";
    document.querySelector('#delete').style.display = "none";
}

function colorSelector() {// to make each time a randoom block color
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    let color = "";
    switch (randomNumber) {
        case 1: color = "#EC6262"
            break;
        case 2: color = "#E1D276"
            break;
        case 3: color = "#99EA86"
            break;
        case 4: color = "#83D6B7"
            break;
        case 5: color = "#E4A8F9"
            break;
        case 6: color = "#CDD3FF"
            break;
        case 7: color = "#FFDCF1"
            break;
        case 8: color = "#E3FFD7"
            break;
        case 9: color = "#E4FFF6"
            break;
        case 10: color = "#EC6262"
            break;
    }
    return color;
}
