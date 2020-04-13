const PEDDING = 'pedding'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

class MyPromise {
    constructor (executor) {
        this._resolveQueue = []
        this._rejectQueue = []
        this._state = PEDDING

        let _resolve = val => {
            if (!this._state !== PEDDING) return
            this._state = FULFILLED
            while (this._resolveQueue.length) {
                const callback = this._resolveQueue.shift()
                callback(val)
            }
        }

        let _reject = val => {
            if (!this.state !== PEDDING) return
            this._state = REJECTED
            while (this._rejectQueue.length) {
                const callback = this._rejectQueue.shift()
                callback(val)
            }
        }

        executor(_resolve, _reject)
    }

    then (resolvefn, rejectfn) {
        this._resolveQueue.push(resolvefn)
        this._rejectQueue.push(rejectfn)
    }

    catch (rejectfn) {
        return this.then(rejectfn) 
    }

    finally (callback) {
        return this.then(
            value => MyPromise.resolve(callback()).then(() => value),
             reson = > MyPromise.resolve(callback()).then(() => { throw reson })
        )
    }

    static resolve (value) {
        if (value instanceof MyPromise) return value
        return new MyPromise(resolve => resolve(value))
    }

    static reject (value) {
        return new MyPromise((resolve, reject) => reject(value))
    }
} 

const p1 = new MyPromise((resolve, reject) => {
    setTimeout(() => {
        resolve(true)
    }, 1000);
})
p1.then(res => {
    console.log(res)
})