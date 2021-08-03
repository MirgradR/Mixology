// Open/close popup window (Form)

let popup = document.querySelector('.popup')
let popupLinks = document.querySelectorAll('.popup-link')
let popupClose = document.querySelector('.popup__close')
for (let popupLink of popupLinks){
    popupLink.addEventListener("click", function(e) {
        popup.classList.toggle('open') 
    })  
}
popupClose.addEventListener("click", function (e) {
    popup.classList.remove('open')

})
popup.addEventListener("click", function (e) {
    if (!e.target.closest('.popup__content')) {
       popup.classList.remove('open')
    }
})

