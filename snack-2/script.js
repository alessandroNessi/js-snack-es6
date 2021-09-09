function bicicletta(nome, peso){
    this.nome=nome;
    this.peso=peso;
}
const biciclette=[new bicicletta("graziella",8),new bicicletta("monster",18),new bicicletta("piuma",5),new bicicletta("tank",38)];
let biciLeggera=biciclette[0];
biciclette.forEach((element)=>{
    if(element.peso<biciLeggera.peso){
        biciLeggera=element;
    }
});
const {nome,peso} = biciLeggera;
console.log(`La bici più leggera è '${nome}' con il peso di ${peso}kg`);