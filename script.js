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

    let cincoMil = shuffle([1770, 2130, 2490]);
    let sieteMil = shuffle([1890, 2250, 2610]);
    let  diezMil = shuffle([1630, 1990, 2350]);
    let duplicaVeinte = shuffle([1570, 1930, 2290]);
    let duplicaTreinte = shuffle([1810, 2170, 2530]);
    let duplicaCincuenta = shuffle([1750, 2110, 2470]);
    

   

    let results = shuffle([
        cincoMil[0],
        sieteMil[0],
        diezMil[0],
        duplicaVeinte[0],
        duplicaTreinte[0],
        duplicaCincuenta[0],
      
    ])

    if(cincoMil.includes(results[0])) SelectedItem = "Bono $5.000 BetFun";
    if(sieteMil.includes(results[0])) SelectedItem = "Bono $7.000 BetFun";
    if(diezMil.includes(results[0])) SelectedItem = "Bono $10.000 BetFun";
    if(duplicaVeinte.includes(results[0])) SelectedItem = "Duplica hasta $20.000";
    if(duplicaTreinte.includes(results[0])) SelectedItem = "Duplica hasta $30.000";
    if(duplicaCincuenta.includes(results[0])) SelectedItem = "Duplica hasta $50.000";
    
    console.log(results[0],SelectedItem);

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


