let container = document.getElementById("container");

// save your sheet ID and name of the tab as variables for use
let sheetID = "17KoDhvhv6tEihBVeByufAP1q8nVel9hORfFLOFWLkKc";
let tabName = 'Sheet1'

let opensheet_uri = `https://opensheet.elk.sh/${sheetID}/${tabName}`

console.log(opensheet_uri);

fetch(opensheet_uri)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
		//do something with the data here

        let dataArr = [];

        for (let datapoint of data){

            let flavour = datapoint.Primary_Flavour;
            let secondaryFlavour = datapoint.hrs_Secondary_Flavour;
            let sweetTart = parseFloat(datapoint.Sweet_to_Tart);
            let sugarContent = parseFloat(datapoint.Sugar_Content);


            // add this object to our blank array
            dataArr.push([flavour, secondaryFlavour, sweetTart, sugarContent]);

            let jamContainer = document.createElement("DIV");
            container.appendChild(jamContainer);
            jamContainer.classList.add('jamContainer');

            for (let i = 1; i <= 2; i++){


                if (i === 1){

                let linesBox = document.createElement("DIV");
                jamContainer.appendChild(linesBox);
                linesBox.dataset.name = `linesBox${i}`;
                linesBox.classList.add('linesBox');

                let dotsBox = document.createElement("DIV");
                jamContainer.appendChild(dotsBox);
                dotsBox.dataset.name = `dotsBox${i}`;
                dotsBox.classList.add('dotsBox');

                for (let j = 1; j <= 4; j++) {
                    let dot = document.createElement("DIV");
                    dotsBox.appendChild(dot);
                    dot.dataset.name = `dot${j}`;
                    dot.classList.add('dot');

                    switch(flavour){
                        case 'Redcurrant':
                            dot.style.backgroundColor = 'hsl(0, 100%, 33%)'
                            break;
                        case 'Muscat Grape':
                            dot.style.backgroundColor = 'hsl(260, 100%, 33%)'
                            break;
                        case 'Blackcurrant':
                            dot.style.backgroundColor = 'hsl(319, 95%, 17%)'
                            break;
                        case 'Blackberry':
                            dot.style.backgroundColor = 'hsl(268, 79%, 16%)'
                            break;
                        case 'Lemon':
                            dot.style.backgroundColor = 'hsl(55, 100%, 64%)'
                            break;
                        case 'Strawberry':
                            dot.style.backgroundColor = 'hsl(355, 99%, 59%)'
                            break;
                        case 'Cherry':
                            dot.style.backgroundColor = 'hsl(355, 98%, 51%)'
                            break;
                        case 'Apricot':
                            dot.style.backgroundColor = 'hsl(39, 99%, 55%)'
                            break;
                        case 'Pineapple':
                            dot.style.backgroundColor = 'hsl(49, 100%, 56%)'
                            break;
                        case 'Peach':
                            dot.style.backgroundColor = 'hsl(7, 100%, 71%)'
                            break;
                        case 'Mango':
                            dot.style.backgroundColor = 'hsl(47, 100%, 59%)'
                            break;
                        case 'Fig':
                            dot.style.backgroundColor = 'hsl(16, 63%, 45%)'
                            break;
                        case 'Plum':
                            dot.style.backgroundColor = 'hsl(343, 96%, 40%)'
                            break;
                        case 'Orange':
                            dot.style.backgroundColor = 'hsl(22, 100%, 56%)'
    
                    }   
                }
                    
                } else {

                let dotsBox = document.createElement("DIV");
                jamContainer.appendChild(dotsBox);
                dotsBox.dataset.name = `dotsBox${i}`;
                dotsBox.classList.add('dotsBox');

                let linesBox = document.createElement("DIV");
                jamContainer.appendChild(linesBox);
                linesBox.dataset.name = `linesBox${i}`;
                linesBox.classList.add('linesBox');

                for (let j = 1; j <= 4; j++) {
                    let dot = document.createElement("DIV");
                    dotsBox.appendChild(dot);
                    dot.dataset.name = `dot${j}`;
                    dot.classList.add('dot');

                    switch(flavour){
                        case 'Redcurrant':
                            dot.style.backgroundColor = 'hsl(0, 100%, 33%)'
                            break;
                        case 'Muscat Grape':
                            dot.style.backgroundColor = 'hsl(260, 100%, 33%)'
                            break;
                        case 'Blackcurrant':
                            dot.style.backgroundColor = 'hsl(319, 95%, 17%)'
                            break;
                        case 'Blackberry':
                            dot.style.backgroundColor = 'hsl(268, 79%, 16%)'
                            break;
                        case 'Lemon':
                            dot.style.backgroundColor = 'hsl(55, 100%, 64%)'
                            break;
                        case 'Strawberry':
                            dot.style.backgroundColor = 'hsl(355, 99%, 59%)'
                            break;
                        case 'Cherry':
                            dot.style.backgroundColor = 'hsl(355, 98%, 51%)'
                            break;
                        case 'Apricot':
                            dot.style.backgroundColor = 'hsl(39, 99%, 55%)'
                            break;
                        case 'Pineapple':
                            dot.style.backgroundColor = 'hsl(49, 100%, 56%)'
                            break;
                        case 'Peach':
                            dot.style.backgroundColor = 'hsl(7, 100%, 71%)'
                            break;
                        case 'Mango':
                            dot.style.backgroundColor = 'hsl(47, 100%, 59%)'
                            break;
                        case 'Fig':
                            dot.style.backgroundColor = 'hsl(16, 63%, 45%)'
                            break;
                        case 'Plum':
                            dot.style.backgroundColor = 'hsl(343, 96%, 40%)'
                            break;
                        case 'Orange':
                            dot.style.backgroundColor = 'hsl(22, 100%, 56%)'
                    }     
                }
                }
            }

            console.log(flavour)

        

            

            

    

            // //other code
            
            // // battContainer.classList.add("batt");
            // // battInner.classList.add("batt-inner");

            // let size = map(hrsSleep, 0, 8, 0, 100);
            // let transparency = map(ease, 1, 10, 0, 1);
            // let sat = map(ease, 1, 10, 0, 100)
            // let animationSpeed = map(ease, 1, 10, 3, 0.2);
            // let blurVal = map(ease, 1, 10, 15, 0)

            
            // battInner.style.width = size + "%";

            // // battInner.style.opacity = transparency;
            // battInner.style.backgroundColor = `hsl(210, ${sat}%, 50%)`

            // // battInner.style.animation = `blink ${animationSpeed}s linear infinite both alternate`;
            // battInner.style.filter = `blur(${blurVal}px)`

            // if (size > 100){
            //     battInner.style.width = "100%";
            //     battContainer.style.width = `calc(300px * ${size/100})`
            // }


        }

        
        console.log(container);

        

    })
    .catch(function (err) {
        console.log("Something went wrong!", err);
    });

    function map(value, low1, high1, low2, high2) {
        return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
    }