(function(element) {
    let imgList = document.querySelectorAll('img'), _imgList = []
    imgList = Array.prototype.slice.call(imgList)
    let len = _imgList.length
    let count = 0
    const scrollE = () => {
        let deleteList = []
        imgList.forEach((img, index) => {
            let rect = img.getBoundingClientRect()
            if (rect.top < window.innerHeight) {
                deleteList.push(index)
                count ++
                img.style = {
                    display: 'none'
                }
                index % 2 == 0 ? img.parentNode.className += ' js-move_2_rg' : img.parentNode.className += ' js-move_2_lf'
                if(count == len) {
                    window.removeEventListener('scroll', scrollE)
                }
            }else {
                img.style = {
                    display: 'block'
                }
            }
        })

        _imgList = imgList.filter((_, index) => !deleteList.includes(index))
    }
    scrollE()
    window.addEventListener('scroll', scrollE)

})(element = null)


