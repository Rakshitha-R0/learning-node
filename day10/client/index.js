
async function employee() {
    try{
        let response = await fetch('http://localhost:8080');
        let employees = await response.json();
        console.log(employees);
    }
    catch(error){
        console.log(error);
    }
}

employee();