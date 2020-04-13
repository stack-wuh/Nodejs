(function(){
    let body = document.getElementsByTagName('body')[0]
    let arrText = ['富强', '民主', '团结', '和谐']
    let index = -1
    body.addEventListener('click', e => {
        e.preventDefault()
        let {pageX, pageY} = e
        index = index < arrText.length - 1 ? ++index : 0
        
        var elem = document.createElement('span')
        var styles = {
            position: 'absolute',
            left: pageX + 'px',
            top: pageY + 'px'
        }
        for(var k in styles) {
            elem.style[k] = styles[k]
        }
        elem.innerText = arrText[index]
        elem.className = 'js-add-pupop'
        body.append(elem)

        setTimeout(() => {
            body.removeChild(elem)
        }, 1500)
    })
})()