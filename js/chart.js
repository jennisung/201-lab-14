'use strict';

let canvasElem = document.getElementById('chart')

/* TODO:
 * - Instantiate a new AppState
 * - Use a method on that AppState to load vote data from localStorage.
 * - Create a data object for chart.js using your AppState's allProducts array.
 * - Combine the data object with configuration information for chart.js type, colors, etc
 * - Call chart.js with the configuration and the canvasElem
 *
 */
function renderChart() {
  // Instantiate a new AppState
  let state = new AppState();
  state.loadItems();

  let productNames = [];
  let productVotes = [];
  let productViews = [];

  for (let i = 0; i < state.allProducts.length; i++) {
    productNames.push(state.allProducts[i].name);
    productVotes.push(state.allProducts[i].timesClicked);
    productViews.push(state.allProducts[i].timesShown);
  }

  let chartObj = {
    type: 'bar',
    data: {
      labels: productNames,
      datasets: [{
        label: '# of Votes',
        data: productVotes,
        borderWidth: 1,
        backgroundColor: 'purple',
        color: 'black',
      },
      {
        label: '# of Views',
        data: productViews,
        borderWidth: 1,
        backgroundColor: 'green',
        color: 'black',
      }
      ]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  };

  new Chart(canvasElem, chartObj);

  



}

renderChart();




// notes:
//contructor Product in app.js
// app.js second todo (2:13): right there. But what we want you to do is you need to update this very 
//similar kind of like what you did with your lab. 13 is, say, hey, if there's things in local storage, 
//let's do that instead of just instantiating new products all the time.  You can't take the happy path out of the woods today for this one.


//nothing to do with voting.js

// let state = new AppStates(): instuating

// state = {
//  allProducts: [];
//}

//state.loadItems();






