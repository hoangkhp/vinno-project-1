function calculateTimeSaving(count_nv, timesaving) {
    var employeeCount = count_nv;
    hoursSaving = employeeCount * timesaving * 4 * 12;
    return hoursSaving;                                                     
}

function calculateMoneySaving(count_nv, monthlySalary, timesaving) {
    var hoursPerWeek = 44; // Số giờ làm việc trên 1 tuần mặc định
    var hoursSalary =  monthlySalary/(hoursPerWeek * 4);
    var moneySaving = calculateTimeSaving(count_nv, timesaving) * hoursSalary; 
    return moneySaving;                                                  
}

function calculateTimeSavingNvs() {
    var employeeCount = parseInt(document.getElementById('employeeCountNvs').value);
    var monthlySalary = parseInt(document.getElementById('monthlySalaryNvs').value);
    calculateTimeSavingNvs = calculateTimeSaving(employeeCount, 10);
    return calculateTimeSavingNvs;                                                    
}
function calculateMoneySavingNvs() {
    var employeeCount = parseInt(document.getElementById('employeeCountNvs').value);
    var monthlySalary = parseInt(document.getElementById('monthlySalaryNvs').value);
    calculateMoneySavingNvs = calculateMoneySaving(employeeCount,monthlySalary, 10);
    return calculateMoneySavingNvs;                                                     
}

function calculateTimeSavingNvm() {
    var employeeCount = parseInt(document.getElementById('employeeCountNvm').value);
    var monthlySalary = parseInt(document.getElementById('monthlySalaryNvm').value);
    calculateTimeSavingNvm = calculateTimeSaving(employeeCount, 12.5);
    return calculateTimeSavingNvm;                                                    
}
function calculateMoneySavingNvm() {
    var employeeCount = parseInt(document.getElementById('employeeCountNvm').value);
    var monthlySalary = parseInt(document.getElementById('monthlySalaryNvm').value);
    calculateMoneySavingNvm =calculateMoneySaving(employeeCount,monthlySalary, 12.5);
    return calculateMoneySavingNvm;                                                     
}

function calculateTimeSavingNvkt() {
    var employeeCount = parseInt(document.getElementById('employeeCountNvkt').value);
    var monthlySalary = parseInt(document.getElementById('monthlySalaryNvkt').value);
    calculateTimeSavingNvkt = calculateTimeSaving(employeeCount, 9.5);
    return calculateTimeSavingNvkt ;                                                    
}
function calculateMoneySavingNvkt() {
    var employeeCount = parseInt(document.getElementById('employeeCountNvkt').value);
    var monthlySalary = parseInt(document.getElementById('monthlySalaryNvkt').value);
    calculateMoneySavingNvkt =calculateMoneySaving(employeeCount,monthlySalary, 9.5);
    return calculateMoneySavingNvkt;                                                     
}

function calculateTimeSavingNvtd() {
    var employeeCount = parseInt(document.getElementById('employeeCountNvtd').value);
    var monthlySalary = parseInt(document.getElementById('monthlySalaryNvtd').value);
    calculateTimeSavingNvtd(employeeCount, 11);
    return calculateTimeSavingNvtd;                                                    
}
function calculateMoneySavingNvtd() {
    var employeeCount = parseInt(document.getElementById('employeeCountNvtd').value);
    var monthlySalary = parseInt(document.getElementById('monthlySalaryNvtd').value);
    calculateMoneySavingNvtd(employeeCount,monthlySalary, 11);
    return calculateMoneySavingNvtd;                                                     
}

function calculateTimeSavingQlct() {
    var employeeCount = parseInt(document.QlctgetElementById('employeeCountQlct').value);
    var monthlySalary = parseInt(document.getElementById('monthlySalaryQlct').value);
    calculateTimeSavingQlct = calculateTimeSaving(employeeCount, 7);
    return calculateTimeSavingQlct;                                                    
}
function calculateMoneySavingQlct() {
    var employeeCount = parseInt(document.getElementById('employeeCountQlct').value);
    var monthlySalary = parseInt(document.getElementById('monthlySalaryQlct').value);
    calculateMoneySavingQlct = calculateMoneySaving(employeeCount,monthlySalary, 7);
    return calculateMoneySavingQlct;                                                     
}

function calculateTimeSavingLdC() {
    var employeeCount = parseInt(document.LdCgetElementById('employeeCountLdC').value);
    var monthlySalary = parseInt(document.getElementById('monthlySalaryLdC').value);
    calculateTimeSavingLdC = calculateTimeSaving(employeeCount, 7);
    return calculateTimeSavingLdC;                                                    
}
function calculateMoneySavingLdC() {
    var employeeCount = parseInt(document.getElementById('employeeCountLdC').value);
    var monthlySalary = parseInt(document.getElementById('monthlySalaryLdC').value);
    calculateMoneySavingLdC = calculateMoneySaving(employeeCount,monthlySalary, 7);
    return calculateMoneySavingLdC;                                                     
}

function totalTimeSaving(){
    var totalTimeSaving = calculateTimeSavingNvs() + calculateTimeSavingNvm() + calculateTimeSavingNvkt() + calculateTimeSavingNvtd() + calculateTimeSavingQlct() + calculateTimeSavingLdc();
    return totalTimeSaving;
}
function totalTimeSaving(){
    var totalTimeSaving = calculateMoneySavingNvs() + calculateMoneySavingNvm() + calculateMoneySavingNvkt() + calculateMoneySavingNvtd() + calculateMoneySavingQlct() + calculateMoneySavingLdc();
    return totalTimeSaving;
}

function result1(){
    console.log(totalTimeSaving());
}

function result2(){
    console.log(totalHoursSaving());
}
