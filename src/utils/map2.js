const JOIN = String.fromCharCode(7)
class Map2 {
    constructor(entries) {
        this.map = new Map()
        if (entries instanceof Array) {
            entries.forEach((entry) => {
                this.set(...entry)
            })
        }
    }
    get size() {
        return this.map.size
    }
    entries() {
        return [...this.map.entries()].map((entry) => {
            const key = entry[0].split(JOIN)
            const value = entry[1]
            return [key, value]
        })
    }

    keys() {
        let keys = [...this.map.keys()]
        return keys.map((key) => key.split(JOIN))
    }

    values() {
        return [...this.map.values()]
    }

    delete(keys) {
        if (keys instanceof Array) {
            const key = keys.join(JOIN)
            const key_ = keys[1] + JOIN + keys[0]
            let map = this.map
            if (map.has(key) && !map.has(key_)) {
                map.delete(key)
            } else if (!map.has(key) && map.has(key_)) {
                map.delete(key_)
            }
        }
    }

    set(keys, value) {
        if (keys instanceof Array) {
            const key = keys.join(JOIN)
            const key_ = keys[1] + JOIN + keys[0]
            let map = this.map
            if (!map.has(key) && !map.has(key_)) {
                map.set(key, value)
            } else if (map.has(key) && !map.has(key_)) {
                map.set(key, value)
            } else if (!map.has(key) && map.has(key_)) {
                map.set(key_, value)
            } else {
                console.error('Map2 Duplicated!')
            }
        }
        return this
    }

    get(keys) {
        if (keys instanceof Array) {
            const key = keys.join(JOIN)
            const key_ = keys[1] + JOIN + keys[0]
            return this.map.get(key) || this.map.get(key_)
        } else {
            return undefined
        }
    }

    has(keys) {
        if (keys instanceof Array) {
            const key = keys.join(JOIN)
            const key_ = keys[1] + JOIN + keys[0]
            return this.map.has(key) || this.map.has(key_)
        } else {
            return false
        }
    }

    forEach(func) {
        if (func instanceof Function) {
            this.map.forEach((value, key, map) => {
                let keys = key.split(JOIN)
                func(value, keys, map)
            })
        }
    }
}

export default Map2
