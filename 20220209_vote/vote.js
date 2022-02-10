'use strict';

let buttons = document.querySelectorAll(".choice button"),
  tally = {
    1: 0,
    2: 0,
    3: 0,
    total: 0
  };

function vote(choice) {
  tally[choice]++;
  tally["total"]++;
  console.log(tally);
}

function barPercentage(node, tally) {
  var choice = node.dataset.choice;
  
  if (tally[choice])
    return tally[choice]/tally["total"] * 100;
  return 0;
}

function renderBars() {
  let bars = document.getElementsByClassName("bar");
  
  for (let i = 0; i < bars.length; i++) {
    let percentage = barPercentage(bars[i], tally);
    console.log(percentage)
    bars[i].style.height = percentage.toString() + "%";
  }
}

function setup() {
  // Set up event listeners
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function(e) {
      vote(e.target.dataset["choice"]);
      renderBars();
    });
  }
  
  renderBars();
}

setup();