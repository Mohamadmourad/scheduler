let selected = [];



document.querySelector('form').onsubmit = () => {   //when you submit
    document.querySelector('main').style.display = "flex";
    document.querySelector('#delete').style.display = "block";
    const courseName = document.getElementById('name').value;
    const day = document.getElementById('day').value;
    const time = document.getElementById('time').value;
    const selectedPeriod = "." + day + time;
    selected.push(selectedPeriod); //for the delet button
    changes(selectedPeriod, courseName);
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
    const randomNumber = Math.floor(Math.random() * 359);
    let color = randomNumber;
    console.log("hsl("+color+", 120%, 81%)");
    return "hsl("+color+", 120%, 81%)";
}
