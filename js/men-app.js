 let Form = document.getElementById('form');

Form.addEventListener('submit', function(event){
    event.preventDefault();
 
    let fName = document.getElementById('fullname');
    console.log('My name is ' + fName.value)
     
    let Location = document.getElementById('location');
    console.log('I am from ' + Location.value );
    

    let Collar = document.getElementById('collar');
    console.log('My collar size is ' + Collar.value); 
    

    let Chest = document.getElementById('chest');
    console.log('My chest size is ' + Chest.value);
    

    let Sleeve = document.getElementById('sleeve');
    console.log('My sleeve length is ' + Sleeve.value);
    

    let Inside = document.getElementById('inside');
    console.log('My inside length is ' + Inside.value);
    

    let Waist = document.getElementById('waist');
    console.log('My waist length is ' + Waist.value);
    

    let Central = document.getElementById('central');
    console.log('My central length is ' + Central.value)
      
    
})
