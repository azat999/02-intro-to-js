// futballteam
const futballteam = {
    team :'AZ',
    isFutballteam: true,
    ageteam:28,
    team_composition:{
        first_striker:'Messi',
        second_striker:'Neymar',
        left_midfielder_player:'Salah',
        right_midfielder_player:'Mane',
        central_midfielder_player:'Lampard',
        defensive_midfielder_player:'Kante',
        right_back_player:'Deco',
        first_central_defender_player:'Terry',
        second_central_defender_player:'Cahill',
        left_back_player:'Cole',
        first_player:'Cech'
    }
}
console.log(futballteam.team,futballteam.ageteam,futballteam.team_composition)


const vehicle = {
    brandName:'BMW',
    model:'X5',
    model:'M1',
}

console.log(vehicle.model);
delete vehicle.model;
console.log(vehicle)


 let salaries = {
     Aroo: 100,
     Dalida: 160,
     Samat: 130
 }

 let sum = 0;
 for (let key in salaries) {
   sum += salaries[key];
 }
 
console.log(sum);