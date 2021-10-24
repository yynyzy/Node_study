const Emitter = require('events');

//创建发射器
const emitter = new Emitter()

emitter.on('click', (args) => {
    console.log('监听到了点击事件1', args);
})

const listener2 = (args) => {
    console.log('监听到了点击事件2', args);
}
emitter.on('click', listener2)

emitter.on('tap', () => {
    console.log(3);
})



//获取注册的事件的信息
console.log(emitter.eventNames());
console.log(emitter.listenerCount('click'));
console.log(emitter.listeners('click'));