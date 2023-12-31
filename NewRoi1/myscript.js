$(document).ready(function() {
    $("input[id^='monthlySalary']").on("input", function() {
        updateResult();
    });

    $("input[id^='employeeCount']").on("input", function() {
        updateResult();
    });

    function getData(section) {
        var monthlySalary = parseInt($("#monthlySalary" + section).val()) || 0;
        var employeeCount = parseInt($("#employeeCount" + section).val()) || 0;
        return { employeeCount, monthlySalary };
    }

    function calculateTimeSaving(count_nv, timesaving) {
        var employeeCount = count_nv;
        var hoursSaving = employeeCount * timesaving * 4 * 12;
        return hoursSaving;
    }

    function calculateMoneySaving(count_nv, monthlySalary, timesaving) {
        var hoursPerWeek = 44;
        var hoursSalary = monthlySalary / (hoursPerWeek * 4);
        var moneySaving = calculateTimeSaving(count_nv, timesaving) * hoursSalary;
        return moneySaving;
    }

    function formatCurrency(number) {
        // Định dạng số thành chuỗi theo định dạng tiền tệ của Việt Nam
        return number.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
    }

    function calculateTotalTimeSaving() {
        var result = 0;
        ["Nvs", "Nvtd", "Nvm", "Nvkt", "Qlct", "LdC"].forEach(function(section) {
            result += calculateTimeSaving(getData(section).employeeCount, getTimesaving(section));
        });
        return Math.round(result);
    }

    function calculateTotalMoneySaving() {
        var result = 0;
        ["Nvs", "Nvtd", "Nvm", "Nvkt", "Qlct", "LdC"].forEach(function(section) {
            var data = getData(section);
            result += calculateMoneySaving(data.employeeCount, data.monthlySalary, getTimesaving(section));
        });
        formatNumber = formatCurrency(result);
        
        return formatNumber;
    }

    function getTimesaving(section) {
        switch(section) {
            case "Nvs": return 10;
            case "Nvm": return 12.5;
            case "Nvkt": return 9.5;
            case "Nvtd": return 11;
            case "Qlct": return 7;
            case "LdC": return 7;
            default: return 0;
        }
    }

    function updateResult() {
        var timeSavingResult = calculateTotalTimeSaving();
        var moneySavingResult = calculateTotalMoneySaving();
        $("#resultDisplayTime").text(timeSavingResult);
        $("#resultDisplayMoney").text(moneySavingResult);
    }
});