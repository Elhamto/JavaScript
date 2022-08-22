function squarePalindrome(base) {
    for (let index = 0; index < 300; index++) {
        let sqr=((index**2).toString(base)).split('').reverse().join('');
        (sqr==index**2) ? console.log(`${index} ${sqr}`) : null ;
    }
}
squarePalindrome()