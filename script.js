const container = document.querySelector(".container")
const qrCodebtn = document.querySelector("#qr-form button")
const qrCodeInput = document.querySelector("#qr-form input")
const qrCodeImg = document.querySelector("#qr-code img")
//eventos
function generateQrCode(){
    const qrCodeInputValue = qrCodeInput.value

    if(!qrCodeInputValue)return
    qrCodebtn.innerText = "Gerando codigo..."
    
    qrCodeImg.src = ` https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInputValue}`

    qrCodeImg.addEventListener("load", ()=>{
        container.classList.add("active")
        qrCodebtn.innerText = "Cdigo criado."

    })

}
qrCodebtn.addEventListener("click", () =>{
    generateQrCode()
})
qrCodeInput.addEventListener("keydown", (e) =>{
   if(e.code === "Enter"){
    generateQrCode()
   }
})

qrCodeInput.addEventListener("keyup", () =>{
    if(!qrCodeInput.value){
        container.classList.remove("active")
        qrCodebtn.innerText = "Gerar QRcode"
    }
})