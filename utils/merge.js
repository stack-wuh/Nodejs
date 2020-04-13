function trim(val){
    return val.replace(/^s*/, '').replace(/s*$/, '')
}

function isArray(val){
    return Object.prototype.toString.call(val) === '[object Array]'
}

function forEach(obj, fn) {
    if(obj === null || typeof obj === 'undefined') return

    if(typeof obj !== 'object') obj = [obj]

    if(isArray(obj)) {
        for(var i = 0, len = obj.length; i < len; i ++) {
            fn.call(null, obj[i], i, obj)
        }
    }else {
        for(var k in obj) {
            if(Object.prototype.hasOwnProperty.call(obj, k)) {
                fn.call(null, obj[k], k, obj)
            }
        }
    }
}

function merge() {
    var result = {}

    function assignValue(val, key) {
        if(typeof result[key] == 'object' && typeof val == 'object') {
            result[key] = merge(result[key], val)
        }else {
            result[key] = val
        }
    }

    for(var i = 0, len = arguments.length; i < len; i++) {
        forEach(arguments[i], assignValue)
    }
    return result
}

let all = merge({name: 'shadow'}, {age: 20}, {info: {title: 'title', desc: 'desc'}})
console.log(all)