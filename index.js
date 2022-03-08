function Addition() {
    let A = document.getElementById('s1').value;
    let B = document.getElementById('s2').value;
    let T1 = parseInt(A);
    let T2 = parseInt(B);
    let Result = T1 + T2 ;
    document.getElementById('a').innerHTML = "Result: " + Result;
}
function Subtraction() {
    let A = document.getElementById('s1').value;
    let B = document.getElementById('s2').value;
    let T1 = parseInt(A);
    let T2 = parseInt(B);
    let Result = T1 - T2 ;
    document.getElementById('a').innerHTML = "Result: " + Result;
}
function Multiplication() {
    let A = document.getElementById('s1').value;
    let B = document.getElementById('s2').value;
    let T1 = parseInt(A);
    let T2 = parseInt(B);
    let Result = T1 * T2 ;
    document.getElementById('a').innerHTML = "Result: " + Result;
}
function Division() {
    let A = document.getElementById('s1').value;
    let B = document.getElementById('s2').value;
    let T1 = parseInt(A);
    let T2 = parseInt(B);
    let Result = T1 / T2 ;
    document.getElementById('a').innerHTML = "Result: " + Result;
}