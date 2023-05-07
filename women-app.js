let Form = document.getElementById('form');
Form.addEventListener('submit', function(event){
    event.preventDefault();
    
    let fullName = document.getElementById('fname')
    console.log(`My name is ${fullName.value}`)

    let Location = document.getElementById('location');
    console.log(`My location is ${Location.value}`)

    let  Bust= document.getElementById('bust');
    console.log(`My bust is ${Bust.value}`)

    let Hip = document.getElementById('hip');
    console.log(`My hip is ${Hip.value}`)

    let Shoulder = document.getElementById('shoulder');
    console.log(`My shoulder is ${Shoulder.value}`)

    let Apex = document.getElementById('apex');
    console.log(`My apex is ${Apex.value}`)

    let Neck = document.getElementById('neck');
    console.log(`My neck is ${Neck.value}`)

    let Waist = document.getElementById('waist');
    console.log(`My waist is ${Waist.value}`)

    let Floor = document.getElementById('floor');
    console.log(`My floor is ${Floor.value}`)
  
})