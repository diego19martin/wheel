function shuffle(array){
    var currentIndex = array.length,
    randomIndex;

    while(0 !== currentIndex){
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [
            array[currentIndex],
            array[currentIndex],
        ];
    }
    return array;
}

function spin(){
    // const wheel = document.getElementById('wheel');
    wheel.play();
    const box = document.getElementById('box');
    const element = document.getElementById('mainbox');
    const spin = document.getElementById('spin');
    let SelectedItem = "";
    spin.style.display='none';

    let cincoMil = shuffle([1890, 2250, 2610]);
    let diezMil = shuffle([1850, 2210, 2570]);
    let  tucson = shuffle([1770, 2130, 2490]);
    let  quinientos = shuffle([1810, 2170, 2530]);
    let  sport = shuffle([1750, 2110, 2470]);
    let  diezMilXC = shuffle([1630, 1990, 2350]);
    let  mil = shuffle([1570, 1930, 2290]);
   

    let results = shuffle([
        cincoMil[1],
        diezMil[0],
        tucson[0],
        quinientos[0],
        sport[0],
        diezMilXC[0],
        mil[0],
       
    ])

    if(cincoMil.includes(results[0])) SelectedItem = "Bono $5.000 BetFun";
    if(diezMil.includes(results[0])) SelectedItem = "Bono $10.000 BetFun";
    if(tucson.includes(results[0])) SelectedItem = "Cena en Tucson para dos personas";
    if(quinientos.includes(results[0])) SelectedItem = "Bono $500 BetFun";
    if(sport.includes(results[0])) SelectedItem = "SportBar para dos personas";
    if(diezMilXC.includes(results[0])) SelectedItem = "10.000 XC";
    if(mil.includes(results[0])) SelectedItem = "Bono $1.000 BetFun";
    
    box.style.setProperty("transition", "all ease 5s");
    box.style.transform = "rotate(" + results[0] + "deg)";
    element.classList.remove("animate");
    setTimeout(function(){
        element.classList.add("animate");
        
    }, 5000);

    setTimeout(function(){
        Swal.fire({
            title: 'Felicitaciones!',
            text: 'Ganaste ' + SelectedItem,
            // target: '#custom-target',
            customClass: {                      // <------ customClass is an object!
                container: 'position-absolute'
            },
            height: '80px',
            width: "300px"
        })
    }, 5500)

    setTimeout(function(){
        location.reload();
        // box.style.setProperty("transition", "initial");
        // box.style.transform = "rotate(90deg)";
    }, 8000)

}


