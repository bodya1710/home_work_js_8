//- Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
//     -- отримує текст з параграфа з id "content"
// let content = document.getElementById('content').innerText;
// console.log(content);

//-- отримує текст з блоку з id "rules"
// let rules = document.getElementById('rules').innerText;
// console.log(rules);

//-- замініть текст параграфа з id 'content' на будь-який інший
//  document.getElementById('content').innerHTML = 'wooo wop wop wop!';

//    -- замініть текст параграфа з id 'rules' на будь-який інший
// document.getElementById('rules').innerHTML = 'Wip wip wip!';

//    -- змініть кожному елементу колір фону на червоний
// let allElement = document.querySelectorAll('*');
// for (const element of allElement) {
//     element.style.backgroundColor = 'red';
// }
//   -- змініть кожному елементу колір тексту на синій
// let allElement = document.querySelectorAll('*');
// for (const element of allElement) {
//     element.style.color = 'blue';
// }
//    -- отримати весь список класів елемента з id=rules і вивести їх в console.log
// let rulesList = document.getElementById('rules');
// let r = rulesList.classList
// for (let i = 0; i < r.length; i++) {
//     console.log(r[i]);
// }

//  -- поміняти колір тексту у всіх елементів fc_rules на червоний
// let liList = document.getElementsByClassName('fc_rules');
// for (const li of liList) {
//     li.style.color = 'red';
// }
