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

function getData(section) {
    var monthlySalary = document.getElementById("monthlySalary" + section).value;
    var employeeCount = document.getElementById("employeeCount" + section).value;
    monthlySalary = monthlySalary === null ? 0 : monthlySalary;
    employeeCount = employeeCount === null ? 0 : employeeCount;
    return { employeeCount, monthlySalary };
}

function calculateTimeSavingNvs() {
    var { employeeCount, monthlySalary } = getData('Nvs');
    result = calculateTimeSaving(employeeCount, 10);
    return result;                                                    
}
function calculateMoneySavingNvs() {
    var { employeeCount, monthlySalary } = getData('Nvs');
    result = calculateMoneySaving(employeeCount,monthlySalary, 10);
    return result;                                                     
}

function calculateTimeSavingNvm() {
    var { employeeCount, monthlySalary } = getData('Nvm');
    result = calculateTimeSaving(employeeCount, 12.5);
    return result;                                                    
}
function calculateMoneySavingNvm() {
    var { employeeCount, monthlySalary } = getData('Nvm');
    result =calculateMoneySaving(employeeCount,monthlySalary, 12.5);
    return result;                                                     
}

function calculateTimeSavingNvkt() {
    var { employeeCount, monthlySalary } = getData('Nvkt');
    result = calculateTimeSaving(employeeCount, 9.5);
    return result ;                                                    
}
function calculateMoneySavingNvkt() {
    var { employeeCount, monthlySalary } = getData('Nvkt');
    result =calculateMoneySaving(employeeCount,monthlySalary, 9.5);
    return result;                                                     
}

function calculateTimeSavingNvtd() {
    var { employeeCount, monthlySalary } = getData('Nvtd');
    result = calculateTimeSavingNvtd(employeeCount, 11);
    return result;                                                    
}
function calculateMoneySavingNvtd() {
    var { employeeCount, monthlySalary } = getData('Nvtd');
    result = calculateMoneySavingNvtd(employeeCount,monthlySalary, 11);
    return calculateMoneySavingNvtd;                                                     
}

function calculateTimeSavingQlct() {
    var { employeeCount, monthlySalary } = getData('Qlct');
    result= calculateTimeSaving(employeeCount, 7);
    return result;                                                    
}
function calculateMoneySavingQlct() {
    var { employeeCount, monthlySalary } = getData('Qlct');
    result = calculateMoneySaving(employeeCount,monthlySalary, 7);
    return result;                                                     
}

function calculateTimeSavingLdC() {
    var { employeeCount, monthlySalary } = getData('LdC');
    result = calculateTimeSaving(employeeCount, 7);
    return result;                                                    
}
function calculateMoneySavingLdC() {
    var { employeeCount, monthlySalary } = getData('Nvs');
    result = calculateMoneySaving(employeeCount,monthlySalary, 7);
    return result;                                                     
}

function totalTimeSaving(){
    var result = calculateTimeSavingNvs() + calculateTimeSavingNvm() + calculateTimeSavingNvkt() + calculateTimeSavingNvtd() + calculateTimeSavingQlct() + calculateTimeSavingLdc();
    return result;
}
function totalMoneySaving(){
    var result = calculateMoneySavingNvs() + calculateMoneySavingNvm() + calculateMoneySavingNvkt() + calculateMoneySavingNvtd() + calculateMoneySavingQlct() + calculateMoneySavingLdc();
    return result;
}

function result1(){
    console.log(totalTimeSaving());
}

function result2(){
    console.log(totalHoursSaving());
}