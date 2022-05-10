/*
    Versione dove l'utente dice la lunghezza degli array
*/

const lengthArray1 = document.getElementById('lenght-array1');
const lengthArray2 = document.getElementById('lenght-array2');
const button = document.getElementById('invio');
const myList = document.getElementById('lista');
const array1 = [];
const array2 = [];
button.addEventListener('click',
    function(){
        for(let i=0; i<parseInt(lengthArray1.value); i++){
            array1.push(`parola${i+1} array1`);
        }
        for(let i=0; i<parseInt(lengthArray2.value); i++){
            array2.push(`parola${i+1} array2`);
        }
        for(let i=0; i<array1.length; i++){
            const liarray1 = document.createElement('li');
            liarray1.append(array1[i]);
            const ularray2 = document.createElement('ul');
            for(let j=0; j<array2.length; j++){
                const liarray2 = document.createElement('li');
                liarray2.append(array2[j]);
                ularray2.append(liarray2);
            }
            liarray1.append(ularray2);
            myList.append(liarray1);
        }
    }
);

/*
    Versione con lunghezza degli array fissata
*/

/*const array1 = ['parola1 array1', 'parola2 array1', 'parola3 array1', 'parola4 array1', 'parola5 array1'];
const array2 = ['parola1 array2', 'parola2 array2'];
const myList = document.getElementById('lista');
for(let i=0; i<array1.length; i++){
    const liarray1 = document.createElement('li');
    liarray1.append(array1[i]);
    const ularray2 = document.createElement('ul');
    for(let j=0; j<array2.length; j++){
        const liarray2 = document.createElement('li');
        liarray2.append(array2[j]);
        ularray2.append(liarray2);
    }
    liarray1.append(ularray2);
    myList.append(liarray1);
}*/