let Form = document.getElementById('form');
Form.addEventListener('submit', function(event){
    event.preventDefault();

    let Location = document.getElementById('location');
    console.log(`My location is ${Location.value}`)

    let  Bust= document.getElementById('bust');
    console.log(`My name is ${Bust.value}`)
    let Hip = document.getElementById('hip');
    console.log(`My name is ${Hip.value}`)
    let Shoulder = document.getElementById('shoulder');
    console.log(`My name is ${Shoulder.value}`)
    let Apex = document.getElementById('apex');
    console.log(`My name is ${Apex.value}`)
    let Neck = document.getElementById('neck');
    console.log(`My name is ${Neck.value}`)
    let Waist = document.getElementById('waist');
    console.log(`My name is ${Waist.value}`)
    let Floor = document.getElementById('floor');
    console.log(`My name is ${Floor.value}`)
  
})