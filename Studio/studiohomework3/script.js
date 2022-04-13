fetch('https://api.airtable.com/v0/appzBaAAAT8ooTcVW/Video%20Game%20Logos', {
    headers: {
        Authorization: 'Bearer keyb2D3la07kqf661',
    },
})
    .then(response => response.json())  //take data in and process this in a js way 
    .then(data => {
        console.log(data);

        const logos= document.querySelector('.logos');

        //generate random line

        console.log(data.records[0]);

        let follow = document.getElementById('follow');

        const randomNum = Math.round(Math.random() * (data.records.length - 1))
        var currentLogo = data.records[randomNum].fields
        follow.innerHTML = `<img src=${currentLogo.image[0].thumbnails.large.url}/>`; 

        // let container = document.querySelector('.container');
        document.addEventListener('click', stamp);

        function stamp(e) {
        console.log('onClick', e.pageX)
        let x = e.pageX;
        let y = e.pageY;

       document.body.innerHTML += `<div class="stamp" style="top: ${x}px; left: ${y}px">
                                <img src=${currentLogo.image[0].thumbnails.large.url}/> 
                                </div>` 
        }
        // load st

        // data.records.forEach(logo => {
        //     console.log(logo);

        //     logos.innerHTML += `
        //     <div class= "album">
        //     <h3>${logo.fields.release_year }</h3>
        //     <h2>${logo.fields.platform }</h2>
        //     <img src=${logo.fields.image[0].thumbnails.large.url}/>
        //     <div>`;
        // });

    //    all code should go here


        function onMouseMove(e) {
            console.log('mousemove', e.pageX);
            follow.style.left = e.pageX + 'px';
            follow.style.top = e.pageY + 'px';
        }
document.addEventListener('mousemove', onMouseMove);

    
}); 
    