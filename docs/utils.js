// if site is from zjvis, remove 镜像
class Dep {
    // 订阅池
    constructor(name) {
        this.id = new Date() //这里简单的运用时间戳做订阅池的ID
        this.subs = [] //该事件下被订阅对象的集合
    }
    defined() {
        // 添加订阅者
        Dep.watch.add(this)
    }
    notify() {
        //通知订阅者有变化
        this.subs.forEach((e, i) => {
            if (typeof e.update === 'function') {
                try {
                    e.update.apply(e) //触发订阅者更新函数
                } catch (err) {
                    console.warn(err)
                }
            }
        })
    }
}
Dep.watch = null

class Watch {
    constructor(name, fn) {
        this.name = name //订阅消息的名称
        this.id = new Date() //这里简单的运用时间戳做订阅者的ID
        this.callBack = fn //订阅消息发送改变时->订阅者执行的回调函数
    }
    add(dep) {
        //将订阅者放入dep订阅池
        dep.subs.push(this)
    }
    update() {
        //将订阅者更新方法
        var cb = this.callBack //赋值为了不改变函数内调用的this
        cb(this.name)
    }
}

var addHistoryMethod = (function() {
    var historyDep = new Dep()
    return function(name) {
        if (name === 'historychange') {
            return function(name, fn) {
                var event = new Watch(name, fn)
                Dep.watch = event
                historyDep.defined()
                Dep.watch = null //置空供下一个订阅者使用
            }
        } else if (name === 'pushState' || name === 'replaceState') {
            var method = history[name]
            return function() {
                method.apply(history, arguments)
                historyDep.notify()
            }
        }
    }
})()

const removeMirrorLink = function() {
    if (window.location.href.indexOf('localhost') >= 0) {
        document
            .querySelector('a[rel="chinese-mirror"]')
            .parentElement.setAttribute('style', 'display: none;')
    }
}

window.onload = function() {
    const mutationObserver = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            removeMirrorLink()
        })
    })
    /**Element**/
    mutationObserver.observe(document.querySelector('.theme-container .home-link'), {
        attributes: true,
        attributeFilter: ['href'],
        characterData: false,
        childList: false,
        subtree: false,
        attributeOldValue: false,
        characterDataOldValue: false
    })
    removeMirrorLink()
}
window.addHistoryListener = addHistoryMethod('historychange')
history.pushState = addHistoryMethod('pushState')
history.replaceState = addHistoryMethod('replaceState')

window.addHistoryListener('history', () => {
    removeMirrorLink()
})
