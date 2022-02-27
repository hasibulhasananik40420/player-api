 const main = document.getElementById("main")
 const subMain = document.getElementById("sub-main")
const playerDetails = () =>{
     
    const inputField = document.getElementById("input-field")
    const inputValue = inputField.value
    // console.log(inputValue)
     const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${inputValue}`
     fetch(url)
     .then(Response => Response.json())
     .then(data => singelPlayer(data.player))
     inputField.value =''
}

  const singelPlayer =(players)=>{
       for(const player of players){
           console.log(player)
           const div = document.createElement("div")
           div.innerHTML = `
           <div class="col-lg-6">
           <div class="card-body border text-center w-100 m-auto mt-3">
           <div class="images">
               <img class= "w-50" src="${player.strCutout}" alt="">
           </div>
             <h3>Name: ${player.strPlayer} </h3>
              <h4>Nationlity:${player.strNationality} </h4>
                <button class="bg-danger">Delate</button>
                <button onclick="singelPlayerDetails('${player.idPlayer}')" class="bg-success">Details</button>
          </div>
          </div>
           `
           main.appendChild(div)
       }
  }
    const singelPlayerDetails =(details)=>{
       console.log(details)
        const url = `https://www.thesportsdb.com/api/v1/json/2/lookupplayer.php?id=${details}`
        fetch(url)
        .then(res=>res.json())
        .then(data=> singelPlayerDisplay(data.players[0]))
    }
     
     const singelPlayerDisplay= (info) =>{
      console.log(info)
      main.innerHTML =''
       if(info.strGender == 'Male'){
           document.getElementById('male').style.display= 'block'
           document.getElementById('female').style.display= 'none'
       }
       else{
           document.getElementById('male').style.display = 'none'
           document.getElementById('female').style.display = 'block'
       }

      const div = document.createElement("div")
     const detailsId = document.getElementById("detail-id")
      detailsId.innerHTML =''
      div.innerHTML = `
      <div class="col-lg-6">
      <div class="card-body border text-center w-100 m-auto mt-3">
      <div class="images">
          <img class= "w-50" src="${info.strCutout}" alt="">
      </div>
        <h3>Name: ${info.strPlayer} </h3>
         <h4>Nationlity:${info.strNationality} </h4>
          <p>Born: ${info.dateBorn}
     </div>
     </div>
  
      `
      detailsId.appendChild(div)
     }

      