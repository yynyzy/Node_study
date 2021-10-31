const msg = 'hello';

//对字符串进行编码，默认第二个参数不填为 utf-8
const buffer = Buffer.from(msg);
console.log(buffer);
//进行解码，默认utf-8
console.log(buffer.toString());


//------第二个参数指定用 utf16le 格式进行编码
const buffer1 = Buffer.from(msg, 'utf16le');
console.log(buffer1);
//编码什么格式，解码就什么格式，否则会乱码
console.log(buffer1.toString('utf16le'));