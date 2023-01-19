const images = document.querySelectorAll('.images')
const Apptab = document.querySelector('.App')

// FAQS 
const AllQuestion = document.querySelectorAll('.Question')

AllQuestion.forEach((question) =>{
    question.addEventListener('click' , () =>{
        question.classList.toggle('active')
    })
})


// FAQS

const FaqsQuestion = document.querySelectorAll('.FaqQuest')
const uparrowbtn = document.querySelector('.fa-chevron-up')


FaqsQuestion.forEach((question) =>{
    question.addEventListener('click' , () =>{
        
        question.classList.toggle('active')
    })
})


//ToggleFunction
function Togglefunc(x){
    x.classList.toggle('fa-chevron-down')
}

//Tabs
const AllTab = document.querySelectorAll('.alltab li')

AllTab.forEach(Tab =>{
    Tab.addEventListener('click' , () =>{
        resetTab();
        Tab.classList.add('Active')
    })
})

function resetTab(){
    AllTab.forEach(Tab =>{
        Tab.classList.remove('Active')
    })
}

// Filter Images
images.forEach(img =>{
    
    var imgDataType  = img.getAttribute('data-image-type')
    const ActiveTab = document.getElementsByClassName('.Active')
    console.log(ActiveTab)
})

AllTab.forEach(button =>{
    button.addEventListener('click' , (e) =>{
        e.preventDefault()
        const filter = e.target.dataset.filter


        images.forEach((item) =>{
            if(filter === 'all'){
                item.style.display = 'block'
            }
            else{
                if(item.classList.contains(filter)){
                    item.style.display = 'block'
                }
                else{
                    item.style.display = 'none'
                }
            }
        })
    })
})


//BacktoTop
const Backtohome = document.querySelector('.Backtohome')

window.addEventListener('scroll' , scrollFun)

function scrollFun(){
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        Backtohome.style.display = 'none'
    }
    Backtohome.style.display = 'block'
}

Backtohome.addEventListener('click' , function(){
    document.body.scrollTop = 0 ;
    document.documentElement.scrollTop = 0;
})

window.addEventListener('scroll' ,function(){
    var header = document.getElementById('Nav')
    header.classList.toggle('sticky' , window.scrollY > 0)
})
