document.querySelector('form').onsubmit = () =>{   //when you submit
    const courseName = document.getElementById('name').value;
    const day = document.getElementById('day').value;
    const time = document.getElementById('time').value;
    const selectedPeriod = "."+day+time;
    changes(selectedPeriod,courseName);
    return false;
}

function changes(selectedPeriod,courseName){
    let color = colorSelector();
    let periods = document.querySelectorAll(selectedPeriod);
    periods.forEach(period => {
        period.style.backgroundColor = color;//color from the colorSelector function
        period.innerHTML= courseName;//the name that thw user entered
      });    
}

document.getElementById("delete").onclick = () =>{//delete button
    alert("hello world");
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
