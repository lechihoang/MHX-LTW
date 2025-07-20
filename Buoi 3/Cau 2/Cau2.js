function sumOdd(n) {
    let ans = 0;
    for (let i = 1; i <= n; i += 2){
        ans = ans + i;
    }
    return ans;
}