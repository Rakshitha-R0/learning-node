import EventEmitter from 'events';

class MyClass extends EventEmitter{}
let student = new MyClass();

student.on('result', ()=>{
    console.log('parents are happy');
})

student.on('result', ()=>{
    console.log('relatives are sad');
})

student.on('result', ()=>{
    console.log('friends are happy');
})

student.emit('result');