
function yoruinfo(){
  
    let agentselect = capitalizeString(searchagents.value)
    console.log(agentselect)
    let agentname = agentselect;
    
    let valoapiagents = `https://valorant-api.com/v1/agents?isPlayableCharacter=true`;
    fetch(valoapiagents)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        let valoinfo = data.data;
    
       let agent16 =valoinfo[16]
    
        
    let agentname = agent16.displayName
    let agentdisc = agent16.description
    let agentablilites = agent16.abilities
    
    //
    let skill1desc = agentablilites[0].description;
    let skill1name = agentablilites[0].displayName;
    let skill1icon = agentablilites[0].displayIcon;
    //
    let skill2desc = agentablilites[1].description;
    let skill2name = agentablilites[1].displayName;
    let skill2icon = agentablilites[1].displayIcon;
    //
    let skill3desc = agentablilites[2].description;
    let skill3name = agentablilites[2].displayName;
    let skill3icon = agentablilites[2].displayIcon;
    //
    let skill4desc = agentablilites[3].description;
    let skill4name = agentablilites[3].displayName;
    let skill4icon = agentablilites[3].displayIcon;
    let bgcolor = agent16.backgroundGradientColors;
    let color1 = bgcolor[0]
    let color2 = bgcolor[1]
    let color3 = bgcolor[2]
    let color4 = bgcolor[3]
    let agentpicture = agent16.fullPortrait
     html = document.getElementById('valor').innerHTML =
     `
     <div class="agentdiff" >
     <img class="agentpic" id="agentdef" src=" ${agentpicture}"   onclick="enlargeImage(this)">
     </div>
    
     <p class="agentname">${agentname}</p>
     <div id="agentnameinfo" class="agentnameinfo">
     <span class="agentdisc">${agentdisc}</span>
    </div>
     <p class="agentname"> Abilities</p>
     
     <img class="tinapay" src="${skill1icon}">
    
     
     <div class=" skilldiv">
     <p class="skilltextname">${skill1name}</p>
     <span class="skilltext">${skill1desc}</span>
     </div>
    
     <img class="tinapay" src="${skill2icon}">
     <div class=" skilldiv">
     <p class="skilltextname">${skill2name}</p>
     <span class="skilltext">${skill2desc}</span>
     </div>
    
     <img class="tinapay" src="${skill3icon}">
     <div class=" skilldiv">
     <p class="skilltextname">${skill3name}</p>
     <span class="skilltext">${skill3desc}</span>
     </div>
    
     <img class="tinapay" src="${skill4icon}">
     <div class=" skilldiv">
     <p class="skilltextname">${skill4name}</p>
     <span class="skilltext">${skill4desc}</span>
     </div>
    
    
    
     `
     let bg1 = agent16.background
     searchagents.value =''
     body.style.background = `linear-gradient(to right, #${color1}, #${color2}, #${color3}, #${color4}) `;
     let bgddiv = document.getElementById('agentdef')
  
     bgddiv.style.backgroundImage = `url(${bg1})`;
  
      })
    
  }