//this shows that we can give parameters for the events

import EventEmitter from 'events';

class MyClass extends EventEmitter{}
let student = new MyClass();

student.on('result', (grade)=>{
    if (grade === 'distinction'){
    console.log('parents are happy');
}else{
    console.log('parents are sad');
}
})

student.on('result', (grade)=>{
    if (grade === 'distinction'){
        console.log('relatives are jealous');
    }else{
        console.log('relatives are happy');
    }
})

student.on('result', (grade)=>{
    if (grade === 'distinction'){
        console.log('lets party!!');
    }else{
        console.log('lets party');
    }
})

student.emit('result', 'distinction');

