function cambiarTodo(row,color,numPersona){
    let url= `https://swapi.dev/api/people/${numPersona}`
    fetch(url,{
        headers: {
            'Content-Type':'application/json'
        },
        method: 'GET'
    })
    .then(response => response.json())
    .then(data => {
        $(row).append(
            `<div class="col-12 col-md-6 col-lg-4 a">
            <div class="single-timeline-content d-flex wow fadeInLeft 2021" data-wow-delay="0.3s"
            style="visibility: visible; animation-delay: 0.3s; animation-name: fadeInLeft;">
            <div class="timeline-icon" style="background-color:${color}"></div>
            <div class="timeline-text">
                <h6>${data.name}</h6>
                <p>Estatura: ${data.height} cm. Peso: ${data.mass} kg.</p>
            </div>
            </div>
            </div>
            `)
    }).catch(error =>{return console.error(error)});
}


$(function (){

    function* generador(row,color,numPersona){
        cambiarTodo(row,color,numPersona)
        yield;
        cambiarTodo(row,color,numPersona)
        yield;
        cambiarTodo(row,color,numPersona)
        yield;
        cambiarTodo(row,color,numPersona)
        yield;
        cambiarTodo(row,color,numPersona)
        yield;
        return "Terminado :D"
    }
    let contador=0;
    $('p:contains(1 - 5)').click(()=>{
        contador++;
        if(contador<=5){
            let generador1= generador('.firstRow','salmon',contador);
            generador1.next();
        }else {
            console.log("Ya no mas...")
        }
    })

    let contador1=6;
    $('p:contains(6 - 11)').mouseenter(()=>{
        contador1++;
        if(contador1<=10){
            let generador2= generador('.secondRow','lightgreen',contador1);
            generador2.next();
        }else {
            console.log("Ya no mas...")
        }
    })

    let contador2=11;
    $('p:contains(12 - 17)').mouseenter(()=>{
        contador2++;
        if(contador2<=15){
            let generador3= generador('.thirdRow','lightskyblue',contador2);
            generador3.next();
        }else {
            console.log("Ya no mas...")
        }
    })
}
)