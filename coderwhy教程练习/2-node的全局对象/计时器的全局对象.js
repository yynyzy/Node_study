setInterval(() => {
    console.log('setInterval');
}, 1000)

setTimeout(() => { console.log('setTimeout'); }, 2000)

setImmediate(() => { console.log('setImmediate'); })

process.nextTick(() => {
    console.log('process.nextTick');
})

/**
 *   输出顺序：       process.nextTick
                     setImmediate
                     setInterval
                     setTimeout
                     setInterval
 */