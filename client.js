console.log('js', $);

$(document).ready(readyNow);

function readyNow(){
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
            <td>${annualSalary}</td>
            <td><button class="deleteButton">Delete</button></td>
        </tr>`
    )
}

function deleteButtonClick(){
    $(this).closest('tr').remove();
}
