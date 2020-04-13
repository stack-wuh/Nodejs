class Model {
    constructor(params) {
       this.model =  Object.assign(this, params)
    }

    before (){
        console.log('this is before')
    }

    /**
     * 价差表单各项
     * @param {*} validForms 
     */
    checkItem(validForms = {}){
        let valids = Object.assign(validForms)
        let keys = Object.keys(valids)
        let errMsg = []
        keys.forEach(kk => {
            let itemLen = kk.split('.')
            if(itemLen.length == 1) {
                if(!this.model[kk]) {
                  errMsg.push(valids[kk] || `${kk} is required`)
                }
            }else {
                let val = this.pattentFindItem(itemLen)
                if(!val) {
                    errMsg.push(valids[kk] || `${kk} is required`)
                }
            }
        })
        return errMsg.shift() || null
    }

    /**
     * 获取多级引用的表单值
     * @param {*} childs 
     * @param {*} obj 
     */
    pattentFindItem(childs = [], obj = this.model){
        let length = childs.length
        let temp_result = null
        if(!childs.length) return new Error('params is expect an unempty Array')
        if(length == 1) {
            return obj[childs[0]]
        }else if(length == 2) {
            return obj[childs[0]][childs[1]]
        } else {
            let _obj = Object.assign({}, obj)
            try {
                for (var i = 0; i < length; i++) {
                    _obj = (_obj[childs[i]] || null)

                }
            }catch(e) {
                throw new Error('model field error, is: ' + e)
            }
        }
    }
}

var model = new Model({age: 11, sex: 1, name: 'shadow', fam: {mom: 'lili'}})
let result = model.checkItem({name: '请编辑名称', age: '请编辑年龄', sex: '请选择性别', 'fam.mom': ''})

let preVal = model.pattentFindItem(['fam.mom'], {name: 'shadow', fam: {mom: 'moliy', dad: 'dave'}})

console.log(result)
console.log('========')
console.log(preVal)