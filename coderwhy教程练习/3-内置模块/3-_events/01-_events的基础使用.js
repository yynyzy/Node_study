const Emitter = require('events');

//创建发射器
const emitter = new Emitter()

//addlistener 是 on 的alias 缩写
emitter.on('click', (args) => {
    console.log('监听到了点击事件1', args);
})

const listener2 = (args) => {
    console.log('监听到了点击事件2', args);
}
emitter.on('click', listener2)


//将本次监听放到最前面
emitter.prependListener('tap', () => {
    console.log(3);
})


setTimeout(() => {

    //移除所有监听器
    emitter.removeAllListeners()
    emitter.emit('click', 'yzy', 'yyn')
    emitter.off('click', listener2)
    emitter.emit('click', 'yzy', 'yyn')
}, 2000)