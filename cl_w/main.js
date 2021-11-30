//Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
//    a) змінює колір тексту елемнту з ід main_header на назву групи в якій ви вчитесь (mon-year)
// document.getElementById('main_header').classList.add("mon-year");
// let h1 =  document.getElementById('main_header');
// h1.classList.add('mon-year');
// h1.style.color = 'cornflowerblue';
//Є два варіанта)

//    b) робить шириниу елементу ul 400px
// document.getElementsByTagName("ul")[0].style.width = '400px';

//    c) робить шириниу всіх елементів з класом linkList шириною 50%
// let linkList =  document.getElementsByClassName('linkList');
// for (let l of linkList) {
//     l.style.width = '50%';
// }

//    d) отримує текст який зберігається в елементі з класом listElement2

// let Element2T = document.getElementsByClassName('listElement2')[0].innerText;
// console.log(Element2T);

//   e) отримує всі елементи li та змінює ім колір фону на сірий
// let listLi = document.getElementsByTagName('li');
// for (const l of listLi) {
//     l.style.backgroundColor = 'silver';
// }

//    f) отримує всі елементи 'a' та додає їм клас anchor
// let allA = document.getElementsByTagName('a');
// for (const a of allA) {
//     a.classList.add('anchor');
// }

//    g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
// let allA = document.getElementsByTagName('a');
// for (const a of allA) {
//     if (a.innerText === 'link3'){
//         a.style.fontSize = '40px';
//     }
// }

//    h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
// let allA = document.getElementsByTagName('a');
// for (const a of allA) {
//     let aCont = a.innerText;
//     a.classList.add(`element_${aCont}`);
// }

//    i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
//     let colorFon = prompt('Take color Fon');
//     let subHeader = document.getElementsByClassName('sub-header');
// for (let h of subHeader) {
//     h.style.backgroundColor = colorFon;
// }

//    j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
//     let subHeader = document.getElementsByClassName('sub-header');
// for (let h of subHeader) {
//     if (h.innerText === 'content 2 segment'){
//         h.style.backgroundColor = prompt('Take color Fon');
//     }
// }

//    k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
//     document.getElementsByClassName('content_1')[0].innerHTML = prompt('anything');

//    l) отримати елементи p та змінити їм padding на 20px
// let pList = document.getElementsByTagName('p');
// for (const p of pList) {
//     p.style.padding = '20px';
// }

//    m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year)
//     let text2 =   document.getElementsByClassName('text2');
// for (const t2 of text2) {
//     t2.classList.remove('text2');
//     t2.classList.add('mon-year');
// }

