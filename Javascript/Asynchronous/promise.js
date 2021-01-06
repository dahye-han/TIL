// let promise = fetch('coffee.jpg'); //pending 상태
// let promise2 = promise.then(response => {
//     // The promise fetch() does NOT reject on HTTP errors,
//     // so we need to check the boolean Response.ok and throw manually a new Error()
//     // for the promise2 to be rejected (for example when a 404 occurs).
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     } else {
//       return response.blob();
//     }
//   });
// let promise3 = promise2.then(myBlob => {
//     let objectURL = URL.createObjectURL(myBlob);
//     let image = document.createElement('img');
//     image.src = objectURL;
//     document.body.appendChild(image);
// });
// let errorCase = promise.catch(e => {
//     console.log('There has been a problem with your fetch operation: ' + e.message);
// });

// fetch('coffee.jpg')
// .then(Response => Response.blob())
// .then(myBlob => {
//     let objectURL = URL.createObjectURL(myBlob);
//     let image = document.createElement('img');
//     image.src = objectURL;
//     document.body.appendChild(image);
// }).catch(e => {
//     console.log('There has been a problem with your fetch operation: ' + e.message);
// });

// function fetchAndDecode(url, type){
//     return fetch(url).then(response => {
//         if (type === 'blob'){
//             return response.blob();
//         } else if (type === 'text') {
//             return response.text();
//         }
//     })
//     .catch(e => {
//         console.log(`There has been a problem with your fetch operation for resource "${url}": `+ e.message);
//     })
//     .finally(()=>{
//         console.log(`fetch attempt for "${url}" finished.`);
//     });
// }

// let coffee = fetchAndDecode('coffee.jpg', 'blob');
// let tea = fetchAndDecode('tea.jpg', 'blob');
// let description = fetchAndDecode('description.txt', 'text');

// Promise.all([coffee, tea, description]).then(values => {
//     console.log(values);
//     // Store each value returned from the promises in separate variables; create object URLs from the blobs
//     let objectURL1 = URL.createObjectURL(values[0]);
//     let objectURL2 = URL.createObjectURL(values[1]);
//     let descText = values[2];

//     // Display the images in <img> elements
//     let image1 = document.createElement('img');
//     let image2 = document.createElement('img');
//     image1.src = objectURL1;
//     image2.src = objectURL2;
//     document.body.appendChild(image1);
//     document.body.appendChild(image2);

//     // Display the text in a paragraph
//     let para = document.createElement('p');
//     para.textContent = descText;
//     document.body.appendChild(para);
// });

///////////////////////////////////////////////////////
// fetch('coffee.jpg')
// .then(Response => Response.blob())
// .then(myBlob => {
//     let objectURL = URL.createObjectURL(myBlob);
//     let image = document.createElement('img');
//     image.src = objectURL;
//     document.body.appendChild(image);
// }).catch(e => {
//     console.log('There has been a problem with your fetch operation: ' + e.message);
// });

/////////////////////////////////////////////////////
// async function myFetch(){
//     let response = await fetch('coffee.jpg');
//     let myBlob = await response.blob();

//     let objectURL = URL.createObjectURL(myBlob);
//     let image = document.createElement('img');
//     image.src = objectURL;
//     document.body.appendChild(image);
// }

// myFetch().catch(e => {
//     console.log('There has been a problem with your fetch operation: ' + e.message);
// })

///////////////////////////////////////////////////
// async function myFetch(){
//     let response = await fetch('coffee.jpg');
//     return await response.blob();
// }

// myFetch().
// then((blob) => {
//     let objectURL = URL.createObjectURL(blob);
//     let image = document.createElement('img');
//     image.src = objectURL;
//     document.body.appendChild(image);
// }).    
// catch(e => {
//     console.log(e);
// })

////////////////////////////////////////////////////
async function fetchAndDecode(url, type){
    let response = await fetch(url);

    let content;

    if (type === 'blob'){
        content = await response.blob();
    } else if (type === 'text') {
        content = await response.text();
    }

    return content;
}

async function displayContent() {
    let coffee = fetchAndDecode('coffee.jpg', 'blob');
    let tea = fetchAndDecode('tea.jpg', 'blob');
    let description = fetchAndDecode('description.txt', 'text');

    let values = await Promise.all([coffee, tea, description]);
    
    let objectURL1 = URL.createObjectURL(values[0]);
    let objectURL2 = URL.createObjectURL(values[1]);
    let descText = values[2];

    let image1 = document.createElement('img');
    let image2 = document.createElement('img');
    image1.src = objectURL1;
    image2.src = objectURL2;
    document.body.appendChild(image1);
    document.body.appendChild(image2);

    let para = document.createElement('p');
    para.textContent = descText;
    document.body.appendChild(para);
}

displayContent()
.catch((e) => {
    console.log(e);
})