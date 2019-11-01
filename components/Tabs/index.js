// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const topicsContainer = document.querySelector('.topics');

//const topics = ['javascript', 'bootstrap', 'technology' , 'jquery', 'node.js']


axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then(response => {
        console.log(response)
        response.data.topic.forEach(item =>{
            topicsContainer.appendChild(createTab(item));
        })
    })
    .catch(error => {
        console.log('Data not returned!', error)
    })


// axios.get('https://lambda-times-backend.herokuapp.com/topics')
// .then(response => {
//     console.log(response.data);
// })

function createTab(topic){
    const tab = document.createElement('div');

    tab.classList.add('tab');

    tab.textContent = topic;

    topicsContainer.appendChild(tab);

    return tab;
}
