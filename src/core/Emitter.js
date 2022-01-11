export class Emitter {
  constructor() {
    this.listeners = {}
  }

  emit(event, ...args) {
    if (!Array.isArray(this.listeners[event])) {
      return false
    }
    this.listeners[event].forEach((listener) => {
      listener(...args)
    })
    return true
  }

  subscribe(event, fn) {
    this.listeners[event] = this.listeners[event] || []
    this.listeners[event].push(fn)
    return () => {
      this.listeners[event] = this.listeners[event].filter(
        (listener) => listener !== fn
      )
    }
  }
}

// Example
// const emitter = new Emitter()
// const unsub = emitter.subscribe('Roman', (data) => console.log(data))
// emitter.emit('Roman', 46)
// setTimeout(() => {
//   emitter.emit('Roman', 'After 2 secs')
// }, 2000)
// setTimeout(() => {
//   unsub()
// }, 3000)
// setTimeout(() => {
//   emitter.emit('Roman', 'After 4 secs')
// }, 4000)
