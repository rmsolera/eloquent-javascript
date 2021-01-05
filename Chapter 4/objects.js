var paella = { //array of objects [{}], object {}
    tipo: 'de conejo',
    ingredientes: ['arroz', 'conejo', 'tomillo', 'agua', 'sal', 'azafran'],
    temperatura: 75,
    tamanio: '40cms'
};

console.log(Object.keys(paella)); // To see the properties on a object

//removing a tentacle / property
delete paella.temperatura;

console.log(Object.keys(paella));
console.log('temperatura' in paella);

//To copy all properties from one object to another.
//We are adding the temperatura tentacle back to the paella object
Object.assign(paella, {temperatura: 80});
console.log(Object.keys(paella));
console.log('temperatura' in paella);

//You cannot change the assingment to a constant variable, but you can change its properties.
const numbers = { number1:2 ,number2:4 };
numbers.number1 = 3;
console.log('numbers:', numbers);
//numbers = { number1:5, number2:6 }; //numbers is a constant!! You cannot change the binding!

//another object
const values = { number1:3 ,number2:4 };
console.log(numbers == values); // when comparing, it only compares its identity not its values.

//*** a way to add object to an array ***
var paellas = [{ //array of objects [{}], object {}
tipo: 'de conejo',
ingredientes: ['arroz', 'conejo', 'tomillo', 'agua', 'sal', 'azafran'],
temperatura: 75,
tamanio: '40cms'
}];

function addEntry(type, ingre, temp, tam){
    paellas.push({ type, ingre, temp, tam });
}
//'de verduras', ['arroz', 'azafran', 'judias', 'pimiento']
addEntry('de verduras', ['arroz', 'azafran', 'judias', 'pimiento'], 100, '32cms');
console.log(paellas);