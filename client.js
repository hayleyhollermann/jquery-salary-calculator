//console.log('js', $);
let totalAnnual = 0;
let totalMonthly = totalAnnual / 12;

$(document).ready(readyNow);

function readyNow(){
    $('#totalAnnualOut').text(roundToCent(totalAnnual));
    $('#totalAnnualOut').text(roundToCent(totalAnnual));
    $('#addEmployee').on('click', addEmployeeClick);
    $('tbody').on('click', 'button', deleteButtonClick);
}

function addEmployeeClick(){
    console.log('submit');
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
    $('#totalAnnualOut').text(roundToCent(totalAnnual));
    $('#totalMonthlyOut').text(roundToCent(totalMonthly));
}

function deleteButtonClick(){
    // extracts salary value from salary table cell
    let salary = $(this).parent().siblings('td.salary').text(); 
    // removes $, casts salary value to a number
    salary = Number(salary.substring(1, salary.length));
    console.log(salary);

    totalAnnual -= salary;
    totalMonthly = totalAnnual / 12;
    // removes entire row from table
    $(this).closest('tr').remove();
    // updates totalAnnual & totalMonthly 
    $('#totalAnnualOut').text(roundToCent(totalAnnual));
    $('#totalMonthlyOut').text(roundToCent(totalMonthly));
}

function roundToCent(number){
    // rounds number to 2 decimal places
    number = number.toFixed(2);
    return number;
}

