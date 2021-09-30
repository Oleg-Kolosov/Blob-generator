document.addEventListener('DOMContentLoaded', createBlob)

const ranges = document.querySelectorAll('input[type="range"]')
const sizes = document.querySelectorAll('input[type="number"]')
const outputCode = document.getElementById('output-code')
const blob = document.getElementById('blob')
const copyBtn = document.getElementById('copy-btn')

ranges.forEach(range => range.addEventListener('input', createBlob))
sizes.forEach(size => size.addEventListener('input', createBlob))
copyBtn.addEventListener('click', copyCode)

function copyCode(){
    outputCode.select()
    document.execCommand('copy')
}

function createBlob (){
    const [r1, r2, r3, r4] = ranges
    const [height, width] = sizes

    const MAX_SIZE = 250
    
    if(height.value > MAX_SIZE || width.value > MAX_SIZE) {
        height.value = MAX_SIZE
        width.value = MAX_SIZE
    } 

    let borderRadius = `${r1.value}% ${100 - r1.value}% ${100 - r3.value}% ${r3.value}%\
 / ${r4.value}% ${r2.value}% ${100 - r2.value}% ${100 - r4.value}%`

    blob.style.borderRadius = borderRadius
    blob.style.height = `${height.value}px`
    blob.style.width = `${width.value}px`

    outputCode.value = `border-radius: ${borderRadius};`
}
