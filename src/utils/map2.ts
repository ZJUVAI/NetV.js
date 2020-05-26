/**
 * @author Jiacheng Pan <jackieanxis@gmail.com>
 * @description Map2 is a Map data structure which maps two keys to one value.
 * @Usage same to Map data structure in ES6.
 * @dependences None
 */

const JOIN = String.fromCharCode(7)
const isKeys = (keys: Array<string>) => {
    return (
        keys instanceof Array &&
        keys.length === 2 &&
        keys.every((key) => key !== undefined && key !== null)
    )
}
class Map2 {
    private map = new Map()
    public constructor(entries?: Array<Array<any>>) {
        if (entries instanceof Array) {
            entries.forEach((entry) => {
                let [key, value] = entry
                this.set(key, value)
            })
        }
    }
    public get size() {
        return this.map.size
    }

    public delete(keys: Array<string>) {
        if (isKeys(keys)) {
            const key = keys.join(JOIN)
            const key_ = keys[1] + JOIN + keys[0]
            let map = this.map
            map.delete(key)
            map.delete(key_)
        }
    }

    public set(keys: Array<string>, value: any) {
        if (isKeys(keys)) {
            const key = keys.join(JOIN)
            const key_ = keys[1] + JOIN + keys[0]
            let map = this.map
            if (!map.has(key_)) {
                map.set(key, value)
            } else {
                map.set(key_, value)
            }
        }
        return this
    }

    public get(keys: Array<string>) {
        if (isKeys(keys)) {
            const key = keys.join(JOIN)
            const key_ = keys[1] + JOIN + keys[0]
            return this.map.get(key) || this.map.get(key_)
        } else {
            return undefined
        }
    }

    public has(keys: Array<string>) {
        if (isKeys(keys)) {
            const key = keys.join(JOIN)
            const key_ = keys[1] + JOIN + keys[0]
            return this.map.has(key) || this.map.has(key_)
        } else {
            return false
        }
    }

    public forEach(func: Function) {
        this.map.forEach((value, key) => {
            let keys = key.split(JOIN)
            func(value, keys, this)
        })
    }

    public entries() {
        return [...this.map.entries()].map((entry) => {
            const key = entry[0].split(JOIN)
            const value = entry[1]
            return [key, value]
        })
    }

    public keys() {
        let keys = [...this.map.keys()]
        return keys.map((key) => key.split(JOIN))
    }

    public values() {
        return [...this.map.values()]
    }
}

export default Map2
