//通过alloc创建 buffer
const buffer = Buffer.alloc(8)
console.log(buffer);

buffer[0] = 88
buffer[1] = 0x88
console.log(buffer);