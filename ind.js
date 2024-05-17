//1.1 Տրված են a, b և c ամբողջ թվերը։ Արտածել YES, եթե երեքն էլ դրական են

// function num(a, b, c) {
//     if (a > 0 && b > 0 && c > 0) {
//         console.log("YES");
//     } else {
//         console.log("NO"); 
//     }
// }

// num(5,4,8);


//1.2 Տրված են a, b և c ամբողջ թվերը։ Արտածել YES, եթե դրանցից գոնե մեկը դրական է

// function num(a, b, c) {
//     if (a > 0 || b > 0 || c > 0) {
//         console.log("YES"); 
//     } else {
//         console.log("NO"); 
//     }
// }

// num(1,-8,-9);


//1.3 Տրված են a, b և c ամբողջ թվերը։ Արտածել YES, եթե դրանցից ճիշտ մեկը դրական է

// function num(a, b, c) {
//     let q = 0;

//     if (a > 0) {
//         q++;
//     }
//     if (b > 0) {
//         q++;
//     }
//     if (c > 0) {
//         q++;
//     }
//     if (q == 1) {
//         console.log("YES");
//     } else {
//         console.log("NO");
//     }
// }

// num(-2,3,-4);


//1.4 Տրված են a, b և c ամբողջ թվերը։ Արտածել YES, եթե դրանցից ճիշտ երկուսը դրական են

// function num(a, b, c) {
//     let q = 0;

//     if (a > 0) {
//         q++;
//     }
//     if (b > 0) {
//         q++;
//     }
//     if (c > 0) {
//         q++;
//     }
//     if (q == 2) {
//         console.log("YES");
//     } else {
//         console.log("NO");
//     }
// }

// num(-2,3,4);


//1.5 Տրված են a, b և c ամբողջ թվերը։ Արտածել YES, եթե դրանցից գոնե երկուսն իրար հավասար են

// function num(a, b, c) {
//     if (a == b || a == c || b == c) {
//         console.log("YES");
//     } else {
//         console.log("NO"); 
//     }
// }

// num(-2,3,-2);


//1.6 Տրված են a, b և c ամբողջ թվերը։ Արտածել YES, եթե դրանցից գոնե երկուսն իրարից միայն նշանով են տարբերվում:Հակառակ դեպքում արտածել NO:

// function num(a, b, c) {
//     if (Math.abs(a) == Math.abs(b) || Math.abs(a) == Math.abs(c) || Math.abs(b) == Math.abs(c)) {
//         console.log("YES");
//     } else {
//         console.log("NO");
//     }
// }

// num(2,3,-2);
// num(4,3,-4);
// num(2,3,-3);
// num(2,3,0);


//2.1 Տրված է a դրական ամբողջ թիվը: Արտածել YES, եթե այն երկնիշ և զույգ թիվ է

// function num(a) {
//     if (a >= 10 && a < 100 && a % 2 == 0) {
//         console.log("YES");
//     } else {
//         console.log("NO");
//     }
// }

// num(26);
// num(25);


//2.2 Տրված է a դրական ամբողջ թիվը: Արտածել YES, եթե եռանիշ և կենտ թիվ է:

// function num(a) {
//     if (a >= 100 && a < 1000 && a % 2 !== 0) {
//         console.log("YES");
//     } else {
//         console.log("NO");
//     }
// }

// num(264);
// num(261);
// num(257);