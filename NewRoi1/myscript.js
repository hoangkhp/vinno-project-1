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
    monthlySalary = isNaN(monthlySalary) ? 0 : parseInt(monthlySalary);
    employeeCount = isNaN(employeeCount) ? 0 : parseInt(employeeCount);
    return { employeeCount, monthlySalary };
}

function calculateTimeSavingNvs() {
    var { employeeCount, monthlySalary } = getData('Nvs');
    var result = calculateTimeSaving(employeeCount, 10);
    return result;                                                    
}
function calculateMoneySavingNvs() {
    var { employeeCount, monthlySalary } = getData('Nvs');
    var result = calculateMoneySaving(employeeCount,monthlySalary, 10);
    return result;                                                     
}

function calculateTimeSavingNvm() {
    var { employeeCount, monthlySalary } = getData('Nvm');
    var result = calculateTimeSaving(employeeCount, 12.5);
    return result;                                                    
}
function calculateMoneySavingNvm() {
    var { employeeCount, monthlySalary } = getData('Nvm');
    var result =calculateMoneySaving(employeeCount,monthlySalary, 12.5);
    return result;                                                     
}

function calculateTimeSavingNvkt() {
    var { employeeCount, monthlySalary } = getData('Nvkt');
    var result = calculateTimeSaving(employeeCount, 9.5);
    return result ;                                                    
}
function calculateMoneySavingNvkt() {
    var { employeeCount, monthlySalary } = getData('Nvkt');
    var result =calculateMoneySaving(employeeCount,monthlySalary, 9.5);
    return result;                                                     
}

function calculateTimeSavingNvtd() {
    var { employeeCount, monthlySalary } = getData('Nvtd');
    var result = calculateTimeSavingNvtd(employeeCount, 11);
    return result;                                                    
}
function calculateMoneySavingNvtd() {
    var { employeeCount, monthlySalary } = getData('Nvtd');
    var result = calculateMoneySavingNvtd(employeeCount,monthlySalary, 11);
    return result;                                                     
}

function calculateTimeSavingQlct() {
    var { employeeCount, monthlySalary } = getData('Qlct');
    var result= calculateTimeSaving(employeeCount, 7);
    return result;                                                    
}
function calculateMoneySavingQlct() {
    var { employeeCount, monthlySalary } = getData('Qlct');
    var result = calculateMoneySaving(employeeCount,monthlySalary, 7);
    return result;                                                     
}

function calculateTimeSavingLdC() {
    var { employeeCount, monthlySalary } = getData('LdC');
    var result = calculateTimeSaving(employeeCount, 7);
    return result;                                                    
}
function calculateMoneySavingLdC() {
    var { employeeCount, monthlySalary } = getData('LdC');
    var result = calculateMoneySaving(employeeCount,monthlySalary, 7);
    return result;                                                     
}

function totalTimeSaving(){
    var result = calculateTimeSavingNvs() + calculateTimeSavingNvm() + calculateTimeSavingNvkt() + calculateTimeSavingNvtd() + calculateTimeSavingQlct() + calculateTimeSavingLdC();
    return result;
}
function totalMoneySaving(){
    var result = calculateMoneySavingNvs() + calculateMoneySavingNvm() + calculateMoneySavingNvkt() + calculateMoneySavingNvtd() + calculateMoneySavingQlct() + calculateMoneySavingLdC();
    return result;
}

function updateResult(){
    var timeSavingResult = totalTimeSaving();
    var moneySavingResult = totalMoneySaving();
    document.getElementById('resultDisplayTime').textContent = timeSavingResult;
    document.getElementById('resultDisplayMoney').textContent = moneySavingResult; 
}
