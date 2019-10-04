console.log('js', $);

$(document).ready(readyNow);

function readyNow(){
    $('#addEmployee').on('click', addEmployeeClick)
}

function addEmployeeClick(){
    console.log('submit');
    let firstName = $('#firstNameInput').val();
    let lastName = $('#lastNameInput').val();
    let idNumber = $('#idNumberInput').val();
    let title = $('#titleInput').val();
    let annualSalary = $('#annualSalaryInput').val();
    console.log(firstName, lastName, idNumber, title, annualSalary);
}
