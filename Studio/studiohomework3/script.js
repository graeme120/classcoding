fetch("https://api.airtable.com/v0/appzBaAAAT8ooTcVW/Video%20Game%20Logos", {
  headers: {
    Authorization: "Bearer keyb2D3la07kqf661",
  },
})
  .then((res) => res.json()) //take data in and process this in a js way
  .then((data) => {
    // console.log(data);

    const logos = document.querySelector(".logos");

    //generate random line

    console.log(data.records);

    let follow = document.getElementById("follow");

    let randomNum = parseInt(Math.random() * (data.records.length - 1));
    let currentLogo = data.records[randomNum].fields;
    follow.innerHTML = `<img src="${currentLogo.image[0].thumbnails.large.url}"/>`;
    console.log(currentLogo);

    // let container = document.querySelector('.container');
    document.addEventListener("click", stamp);

    function stamp(e) {
      // console.log("onClick", e.pageX);
      let x = e.pageX;
      let y = e.pageY;
      document.body.innerHTML += `<div class="stamp" style="top: ${
        y + 100
      }px; left: ${x + 250}px">
        <img src="${currentLogo.image[0].thumbnails.large.url}"/> 
        </div>`;

      randomNum = Math.round(Math.random() * (data.records.length - 1));
      currentLogo = data.records[randomNum].fields;

      follow = document.getElementById("follow");
      follow.style.opacity = 0;
      follow.innerHTML = `<img src="${currentLogo.image[0].thumbnails.large.url}"/>`;
    }
    // load st
    data.records.sort((a, b) => {
      // sorting by earlier "release_year"
      return a.fields.index - b.fields.index;
    });

    data.records.forEach((logo, index) => {
      // console.log(logo);
      // <div class="b">${indexed number}</div>
      logos.innerHTML += `
          <div class=row>
            <div class="a">${logo.fields.index}</div>
            <div class="b">${logo.fields.name}
            <img class="image" style="vertical-align: middle; position: relative"  src="${logo.fields.image[0].thumbnails.large.url}"></img>
          </div>
            <div class=subrow>
               ${logo.fields.platform},    
               ${logo.fields.release_year}</div>
            </div>
          </div>`;

      // logos.innerHTML += `
      //   <div class="album">
      //     <h5>${logo.fields.release_year}</h5>
      //     <h3>${logo.fields.platform}</h3>
      //     <h4>${album.fields.name}</h4>
      //     <img src="${album.fields.album_cover[0].thumbnails.large.url}" width='200'/>
      //   </div>
      //   `;
    });
    //    all code should go here

    function onMouseMove(e) {
      // console.log("mousemove", e.pageX);
      follow.style.opacity = 1;
      follow.style.left = e.pageX + 250 + "px";
      follow.style.top = e.pageY + 100 + "px";
    }
    document.addEventListener("mousemove", onMouseMove);

    // $(document).ready(function () {
    //   $(".go-top").hide(0);

    //   $(window).scroll(function () {
    //     if ($(this).scrollTop() > 100) {
    //       $(".go-top").fadeIn(100);
    //     }
    //   });
    //   $(".go-top").click(function () {
    //     event.preventDefault();

    //     $("html , body").animate({ scrollTop: 0 }, 0);
    //   });
    // });
  });
// function clear() {
//   console.log("clear");
//   document.querySelectorAll(".stamp").forEach((stamp) => {
//     stamp.remove();
//   });
// }
