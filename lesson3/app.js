
 const rootElement = document.getElementById('root');
// const ulElement = document.createElement('ul');
// function renderLi(number) {
//     for (var i = 0; i < number.length; i++){
//     const liElements = document.createElement('li');
//     liElements.innerHTML = `number ${i+1}`;
//     ulElement.appendChild(liElements);
//     }
// }
// renderLi(10)



// rootElement.appendChild(ulElement)

// console.log(React)
//react
// const ReactElement = React.createElement('h1',
//     {
//         className: "hello",
//         id: 'hi',
//         style: {
//             color:'red',
//         }
//     },
//     [
//          React.createElement('span',
//         {}, React.createElement('b',{},"hello world 1")
//         ),
//           React.createElement('span',
//         {}, React.createElement('b',{},"hello world 1")
//         ),
//             React.createElement('span',
//         {}, React.createElement('b',{},"hello world 1")
//     )
//    ]
// )
// const rootReactElement = ReactDOM.createRoot(rootElement);
// // console.log('rootReactElement', rootReactElement)
// rootReactElement.render(ReactElement);

// console.log(ReactElement)

const Number = [1, 2, 3, 4, 5];
const result = Number.map(a => a * a);
console.log(result);