function createGame(player1, hour, player2){
  return `
    <li>
      <img src="./assets/icons/${player1}.svg" alt="Bandeira do ${player1}" />
      <strong>${hour}</strong>
      <img src="./assets/icons/${player2}.svg" alt="Bandeira da ${player2}" />
    </li>
    
  `
}

let delay = - 0.3;
function createCard(date, day, games){
  delay = delay + 0.3
  return `
  <div class="card" style="animation-delay: .${delay}s">
    <h2>${date} <span>${day}</span></h2>
      <ul>
      ${games}
      </ul>
  </div>
`
}

document.querySelector('#cards').innerHTML = 
    createCard("20/11", "domingo",
    createGame('catar', '13:00', 'equador') 
    ) +

    createCard("21/11", "segunda",
    createGame('inglaterra','10:00','ira')       +
    createGame('estado-unidos','16:00','gales')  +
    createGame('senegal', '13:00', 'holanda')

    ) +

    createCard("22/11", "terça", 
    createGame('argentina', '07:00', 'arabia-saudita')  +
    createGame('mexico', '13:00','polonia')             +
    createGame('dinamarca', '10:00', 'tunisia')         +
    createGame('franca', '16:00', 'australia')

    ) +

    createCard("23/11", "quarta",
    createGame('marrocos', '07:00', 'croacia')    +
    createGame('belgica', '16:00', 'canada')      +
    createGame('espanha', '13:00', 'costa-rica')  + 
    createGame('alemanha', '10:00', 'japao')

    ) +

    createCard("24/11", "quinta",
    createGame('brazil', '16:00', 'servia')            + 
    createGame('suica', '07:00', 'camaroes')   + 
    createGame('portugal', '13:00', 'gana')            + 
    createGame('uruguai', '10:00', 'coreia-sul')
    ) +

    createCard("25/11", "sexta",
    createGame('gales', '07:00', 'ira','')                          +
    createGame('inglaterra', '16:00', 'estado-unidos')   +
    createGame('catar', '10:00', 'senegal')                      + 
    createGame('holanda', '13:00', 'equador') 
    ) +

    createCard("26/11", "sabado", 
    createGame('tunisia', '07:00', 'australia')           +
    createGame('franca', '13:00', 'dinamarca')     +
    createGame('polonia', '10:00', 'arabia-saudita')      +
    createGame('argentina', '16:00', 'mexico') 

    ) +

    createCard("27/11", "domingo",
    createGame('japao', '07:00','costa-rica')          +
    createGame('alemanha', '16:00', 'espanha')  +
    createGame('belgica', '10:00', 'marrocos')          +
    createGame('croacia', '13:00', 'canada')
    
    ) +

    createCard("28/11", "segunda", 
    createGame('suica', '13:00', 'brazil')              +
    createGame('camaroes', '07:00', 'servia')    +
    createGame('coreia-sul', '10:00', 'gana')          +
    createGame('uruguai', '16:00', 'portugal')
    ) +

    createCard("29/11", "terça",
    createGame('gales', '16:00', 'inglaterra')          +
    createGame('ira', '16:00', 'estado-unidos')  + 
    createGame('equador', '12:00', 'senegal')           + 
    createGame('holanda', '12:00', 'catar') 

    ) +

    createCard("30/11", "quarta",
    createGame('polonia', '16:00', 'argentina')            +
    createGame('arabia-saudita','16:00', 'mexico')  +
    createGame('franca', '12:00', 'tunisia')               + 
    createGame('dinamarca', '12:00','australia')
    ) +

    createCard("01/12", "quinta",
    createGame('croacia', '12:00', 'belgica')            +
    createGame('canada', '12:00', 'marrocos')    +
    createGame('japao', '16:00', 'espanha')             +
    createGame('costa-rica', '16:00', 'alemanha')

    ) +

    createCard("02/12", "sexta", 
    createGame('brazil', '16:00', 'camaroes')             +
    createGame('servia', '16:00', 'suica')        +
    createGame('coreia-sul', '12:00', 'portugal')        +
    createGame('gana', '12:00', 'uruguai')
    )