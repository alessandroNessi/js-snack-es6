function squadra(nome, punti, falliSubiti){
    this.nome=nome;
    this.punti=punti;
    this.falliSubiti=falliSubiti;
}
const randomMinMax = (min, max)=> Math.floor(Math.random()*(max-min)+min);
const squadre=[new squadra("atalanta",0,0),new squadra("milan",0,0),new squadra("juve",0,0),new squadra("roma",0,0)];
const soloFalli=[];
squadre.forEach((element)=>{
    element.falliSubiti=randomMinMax(0,10);
    element.punti=randomMinMax(0,5);
    const {nome,falliSubiti}=element;
    soloFalli.push({nome,falliSubiti});
});
console.log(soloFalli);