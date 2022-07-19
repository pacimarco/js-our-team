const membroTeam = [
    {
        nome: 'Wayne Barnett',
        ruolo: 'Founder & CEO',
        immagine: 'wayne-barnett-founder-ceo.jpg',
    },
    {
        nome: 'Angela Caroll',
        ruolo: 'Chief Editor',
        immagine: 'angela-caroll-chief-editor.jpg',
    },
    {
        nome: 'Walter Gordon',
        ruolo: 'Office Manager',
        immagine: 'walter-gordon-office-manager.jpg',
    },
    {
        nome: 'Angela Lopez',
        ruolo: 'Social Media Manager',
        immagine: 'angela-lopez-social-media-manager.jpg',
    },
    {
        nome: 'Scott Estrada',
        ruolo: 'Developer',
        immagine: 'scott-estrada-developer.jpg',
    },
    {
        nome: 'Barbara Ramos',
        ruolo: 'Graphic Designer',
        immagine: 'barbara-ramos-graphic-designer.jpg',
    },
    
]
console.log(membroTeam);

const teamWrapDom = document.querySelector('.team-wrap');


for (let i = 0; i < membroTeam.length; i++) {
    console.log(membroTeam[i].nome);
    console.log(membroTeam[i].ruolo);
    console.log(membroTeam[i].immagine);

    drawTeamMember(membroTeam[i]);
    
}
//document.getElementById('prova-stampa').innerHTML = membroTeam[0].nome;
//document.getElementById('prova-stampa').innerHTML = membroTeam[0].ruolo;

function drawTeamMember (teamMember){

    teamWrapDom.innerHTML += `<div class="cards">
    <img src="./img/${teamMember.immagine}" alt="${teamMember.immagine}"/>
    <h2>${teamMember.nome}</h2>
    <p>${teamMember.ruolo}</p>;
    </div>`;
}