const listaLivros = require('./array');

function mergeSort(array){
    if(array.length > 1){
        const meio = Math.floor(array.length/2);
        const paste1 = mergeSort( array.slice(0,meio));
        const parte2 = mergeSort(array.slice(meio, array.length));
    }

    return array;
}


console.log(mergeSort(listaLivros));