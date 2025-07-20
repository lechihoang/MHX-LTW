function printEvenNumbers(numbers) {
    let evenNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            evenNumbers.push(numbers[i]);
        }
    }
    return evenNumbers;
}

function findMaxNumber(numbers) {
    if (numbers.length === 0) {
        return null;
    }
    
    let max = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }
    return max;
}

function getPositiveNumbers(numbers) {
    let positiveNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > 0) {
            positiveNumbers.push(numbers[i]);
        }
    }
    return positiveNumbers;
}

function inputArray() {
    let input = prompt("Nhập các số nguyên, cách nhau bởi dấu phẩy hoặc khoảng trắng:\n(Ví dụ: 1, 2, 3, -4, 5)");
    let numbers = input.split(/[,\s]+/).map(str => parseInt(str.trim())).filter(num => !isNaN(num));
    return numbers;
}

function displayResults(numbers) {
    if (!numbers || numbers.length === 0) {
        alert("Mảng rỗng hoặc không hợp lệ!");
        return;
    }
    let evenNumbers = printEvenNumbers(numbers);
    let maxNumber = findMaxNumber(numbers);
    let positiveNumbers = getPositiveNumbers(numbers);
    let result = `=== KẾT QUẢ XỬ LÝ MẢNG ===\n\n`;
    result += `Mảng ban đầu: [${numbers.join(", ")}]\n\n`;
    result += `1. Các số chẵn trong mảng:\n`;
    if (evenNumbers.length > 0) {
        result += `   [${evenNumbers.join(", ")}]\n`;
        result += `   Có ${evenNumbers.length} số chẵn\n\n`;
    }
    else {
        result += `   Không có số chẵn nào\n\n`;
    }
    result += `2. Số lớn nhất trong mảng:\n`;
    result += `   ${maxNumber}\n\n`;
    result += `3. Mảng các số lớn hơn 0:\n`;
    if (positiveNumbers.length > 0) {
        result += `   [${positiveNumbers.join(", ")}]\n`;
        result += `   Có ${positiveNumbers.length} số dương`;
    }
    else {
        result += `   Không có số dương nào`;
    }
    
    alert(result);
}

function main() {
    alert("CHƯƠNG TRÌNH XỬ LÝ MẢNG SỐ NGUYÊN\n\nChương trình sẽ:\n1. In ra các số chẵn\n2. Tìm số lớn nhất\n3. Tạo mảng số dương");
    let numbers = inputArray();
    displayResults(numbers);
    if (confirm("Bạn có muốn thử với mảng khác không?")) {
        main();
    }
    else {
        alert("Chương trình kết thúc!");
    }
}

main();
