 const items = document.querySelectorAll(".accordion-title-box");
 const contents = document.querySelectorAll(".accordion-content");


 items.forEach((element)=>{
    element.addEventListener('click',()=>{
        element.querySelector('.plus').classList.toggle('hidden');
        element.querySelector('.minus').classList.toggle('hidden');
        console.log('times 1');
        contents.forEach((content)=>{
            console.log('here');
            if(content.id === element.id){
                console.log(content.id);
                content.classList.toggle('active');
        
            }else{
            console.log("jumped right out");}
        })
    })
 })
 
// const questionTitle = document.querySelectorAll('.question-title');
// const answers = document.querySelectorAll('.answer');

// questionTitle.forEach((element) => {
//     element.addEventListener('click', () => {
//         element.querySelector('.plus').classList.toggle('hidden');
//         element.querySelector('.minus').classList.toggle('hidden');
//         answers.forEach((answer) => {
//             if (element.querySelector('p').id === answer.id) {
//                 answer.classList.toggle('active');
//             }
//         });
//     });
// });