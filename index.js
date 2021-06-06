const titleInput = document.getElementById('title')
const contentInput = document.getElementById('content')
const widthInput = document.getElementById('width')
const btn = document.getElementById('btn')

let titleValue = ''
let contentValue = ''
let widthValue = ''

titleInput.addEventListener('input', (event) => {
    titleValue = event.target.value
})
contentInput.addEventListener('input', (event) => {
    contentValue = event.target.value
})
widthInput.addEventListener('input', (event) => {
    widthValue = event.target.value

    // Проверка на число
    if (isNaN (widthValue) ) {
        widthValue = 330
        console.log("Размер окна: 330")
    } else {
        console.log("Размер окна: " + widthValue)
    }

    // Проверка на минимальную размерность
    if(widthValue < 200) {
        widthValue = 200
    }

})




btn.addEventListener('click', () => {

    const modal = $.modal({ // чтобы быстрее писать в консоли.
        title: titleValue,
        closable: true,
        content: contentValue,
        width: widthValue,
        footerButtons: [
            {text: 'Просто закрыть', type: 'primary', handler() {
                console.log('Primary btn clicked')
                modal.close()
            }},
            {text: 'Выход', type: 'danger', handler() {
                console.log('Danger btn clicked')
                modal.close()
            }}
        ]
    }) 

    modal.open()
})






