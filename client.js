//console.log('js', $);
let totalAnnual = 0;
let totalMonthly = totalAnnual / 12;

$(document).ready(readyNow);

function readyNow(){
    $('#totalAnnualOut').text(roundToCent(totalAnnual));
    $('#totalMonthlyOut').text(roundToCent(totalMonthly));
    $('#addEmployee').on('click', addEmployeeClick);
    $('tbody').on('click', 'button', deleteButtonClick);
}

function addEmployeeClick(){
    // sets inputs equal to variables
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
            <td class="salary">$${annualSalary}</td>
            <td><button class="deleteButton">Delete</button></td>
        </tr>`
    )
    // updates totalAnnual & totalMonthly 
    totalAnnual += Number(annualSalary);
    totalMonthly = totalAnnual / 12;
    if (totalMonthly >= 20000){
        $('#headerMonthly').css('background-color', 'red');
    }   
    $('#totalAnnualOut').text(roundToCent(totalAnnual));
    $('#totalMonthlyOut').text(roundToCent(totalMonthly));
    // clears input fields
    $('#firstNameInput').val('');
    $('#lastNameInput').val('');
    $('#idNumberInput').val('');
    $('#titleInput').val('');
    $('#annualSalaryInput').val('');
}

function deleteButtonClick(){
    // extracts salary value from salary table cell
    let salary = $(this).parent().siblings('td.salary').text(); 
    // removes $, casts salary value to a number
    salary = Number(salary.substring(1, salary.length));

    totalAnnual -= salary;
    totalMonthly = totalAnnual / 12;
    // removes entire row from table
    $(this).closest('tr').remove();
    if (totalMonthly <= 20000){
        $('#headerMonthly').css('background-color', 'transparent');
    }
    // updates totalAnnual & totalMonthly 
    $('#totalAnnualOut').text(roundToCent(totalAnnual));
    $('#totalMonthlyOut').text(roundToCent(totalMonthly));
}

function roundToCent(number){
    // rounds number to 2 decimal places
    number = number.toFixed(2);
    return number;
}

