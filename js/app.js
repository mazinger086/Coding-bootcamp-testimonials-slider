
const imgUser = document.querySelector('#img-testimonial');
const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');
const quote = document.querySelector('.quote');
const userName = document.querySelector('#name');
const job = document.querySelector('#job');

prevBtn.addEventListener('click', ()=> {
    if(imgUser.alt == 'John'){
        imgUser.src = 'images/image-tanya.jpg'
        imgUser.alt = 'Tanya'
        quote.innerText = `“ I’ve been interested in coding for a while but never taken the jump, until now.I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”`
        userName.innerText = 'Tanya Sinclair'
        job.innerHTML = 'UX Engineer'
        
    } 
})

nextBtn.addEventListener('click', ()=> {
    if(imgUser.alt == 'Tanya'){
        imgUser.src = 'images/image-john.jpg'
        imgUser.alt = 'John'
        quote.innerText = `“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”`
        userName.innerText = 'John Tarkpor'
        job.innerHTML = 'Junior Front-end Developer'

    } 
})

// function changeUser(){
//     if(imgUser.alt == 'Tanya'){
//         imgUser.src = 'images/image-john.jpg'
//         imgUser.alt = 'John'
//         quote.innerText = `“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”`
//         userName.innerText = 'John Tarkpor'
//         job.innerHTML = 'Junior Front-end Developer'

//     } else {
//         imgUser.src = 'images/image-tanya.jpg'
//         imgUser.alt = 'Tanya'
//         quote.innerText = `“ I’ve been interested in coding for a while but never taken the jump, until now.I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”`
//         userName.innerText = 'Tanya Sinclair'
//         job.innerHTML = 'UX Engineer'
//     }
// }