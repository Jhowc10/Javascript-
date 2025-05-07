function promis(){
    return new promis((resolve, reject) =>{
        setTimeout(() =>{
            console.log('Hey, I am promisse');
            resolve();
        });
    }, 2000);
}

export default async function (){
    await promis();
    console.log('Terminou');
}