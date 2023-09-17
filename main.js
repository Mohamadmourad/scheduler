let selected = [];

document.querySelector('form').onsubmit = () =>{   //when you submit
    document.querySelector('main').style.display = "flex";
    document.querySelector('#delete').style.display = "block";
    const courseName = document.getElementById('name').value;
    const day = document.getElementById('day').value;
    const time = document.getElementById('time').value;
    const selectedPeriod = "."+day+time;
    selected.push(selectedPeriod); //for the delet button
    changes(selectedPeriod,courseName);
    return false;
}

function changes(selectedPeriod,courseName){
    let color = colorSelector();
    let periods = document.querySelectorAll(selectedPeriod);
    periods.forEach(period => {
        period.style.backgroundColor = color;//color from the colorSelector function
        period.innerHTML= courseName;//the name that the user entered
      });    
}

document.getElementById("delete").onclick = () =>{
    document.getElementById('deleteMenu').style.display = "flex";
}

document.getElementById("no").onclick = () =>{
    document.getElementById('deleteMenu').style.display = "none";
}

document.getElementById("yes").onclick = () =>{//delete button
    document.getElementById('deleteMenu').style.display = "none";
    selected.forEach(select => {
    let blocks = document.querySelectorAll(select);
    blocks.forEach(block => {
        block.style.backgroundColor = "white";
        block.innerHTML= "";
    })
   });
   selected = [];
   document.querySelector('main').style.display = "none";
   document.querySelector('#delete').style.display = "none";
}

function colorSelector(){// to make each time a randoom block color
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    let color = "";
    switch(randomNumber){
        case 1 : color = "#EC6262" 
        break;
        case 2 : color = "#E1D276"
        break;
        case 3 : color = "#99EA86" 
        break;
        case 4 : color = "#83D6B7"
        break;
        case 5 : color = "#E4A8F9" 
        break;
        case 6 : color = "#CDD3FF"
        break;
        case 7 : color = "#FFDCF1" 
        break;
        case 8 : color = "#E3FFD7"
        break;
        case 9 : color = "#E4FFF6" 
        break;
        case 10 : color = "#EC6262"
        break;
    }
    return color;
}
