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
document.getElementById('prova-stampa').innerHTML =  JSON.stringify(membroTeam);



for (let chiave in membroTeam){
    console.log(membroTeam[chiave].nome);
    console.log(membroTeam[chiave].ruolo);
    console.log(membroTeam[chiave].immagine);

    
}
//document.getElementById('prova-stampa').innerHTML = membroTeam[0].nome;
//document.getElementById('prova-stampa').innerHTML = membroTeam[0].ruolo;