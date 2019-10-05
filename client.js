console.log('js', $);
let totalMonthly = 0;

$(document).ready(readyNow);

function readyNow(){
    $('#totalMonthlyOut').text(totalMonthly);
    $('#addEmployee').on('click', addEmployeeClick);
    $('tbody').on('click', 'button', deleteButtonClick);
}

function addEmployeeClick(){
    console.log('submit');
    let firstName = $('#firstNameInput').val();
    let lastName = $('#lastNameInput').val();
    let idNumber = $('#idNumberInput').val();
    let title = $('#titleInput').val();
    let annualSalary = $('#annualSalaryInput').val();
    console.log(firstName, lastName, idNumber, title, annualSalary);
    $('tbody').append(
        `<tr>
            <td>${firstName}</td>
            <td>${lastName}</td>
            <td>${idNumber}</td>
            <td>${title}</td>
            <td class="salary">${annualSalary}</td>
            <td><button class="deleteButton">Delete</button></td>
        </tr>`
    )
    totalMonthly += Number(annualSalary);
    $('#totalMonthlyOut').text(totalMonthly);
}

function deleteButtonClick(){
    /*let temp = $(this).siblings('.salary');
    console.log(temp);*/
    
    //totalMonthly = totalMonthly - Number($(this).siblings('.salary').val();
    $(this).closest('tr').remove();
    $('#totalMonthlyOut').text(totalMonthly);
}

