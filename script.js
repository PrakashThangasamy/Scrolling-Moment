  let boxes = document.querySelectorAll('.flex-item');
    window.addEventListener('scroll',function(){
    for (let i = 0; i < boxes.length; i++) {
       boxes[i].classList.add("flex-item");
    }
})
