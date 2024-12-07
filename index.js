import { Accordion } from 'flowbite';
/*
* accordionEl: HTML element (required)
* accordionItems: array of accordion item objects (required)
* options (optional)
* instanceOptions (optional)
*/

document.addEventListener("DOMContentLoaded", function() {
  // Toggle Navbar
  var menuButton = document.querySelector('[data-collapse-toggle="navbar-sticky"]');
  var menu = document.getElementById("navbar-sticky");
  menuButton.addEventListener("click", function() {
    menu.classList.toggle("hidden");
  });


  /* accordion */

  const accordionElement = document.getElementById('accordion-example');

  // create an array of objects with the id, trigger element (eg. button), and the content element
  const accordionItems = [
    {
      id: 'accordion-example-heading-1',
      triggerEl: document.querySelector('#accordion-example-heading-1'),
      targetEl: document.querySelector('#accordion-example-body-1'),
      active: true
    },
    {
      id: 'accordion-example-heading-2',
      triggerEl: document.querySelector('#accordion-example-heading-2'),
      targetEl: document.querySelector('#accordion-example-body-2'),
      active: false
    },
    {
      id: 'accordion-example-heading-3',
      triggerEl: document.querySelector('#accordion-example-heading-3'),
      targetEl: document.querySelector('#accordion-example-body-3'),
      active: false
    }
  ];

  // options with default values
  const options = {
    alwaysOpen: true,
    activeClasses: 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white',
    inactiveClasses: 'text-gray-500 dark:text-gray-400',
    onOpen: (item) => {
      console.log('accordion item has been shown');
      console.log(item);
    },
    onClose: (item) => {
      console.log('accordion item has been hidden');
      console.log(item);
    },
    onToggle: (item) => {
      console.log('accordion item has been toggled');
      console.log(item);
    },
  };

  // instance options object
  const instanceOptions = {
    id: 'accordion-example',
    override: true
  };
  // Initialize Accordion
  const accordion = new Accordion(accordionElement, accordionItems, options, instanceOptions);

  // open accordion item based on id
  accordion.open('accordion-example-heading-2');

  // close accordion item based on id
  accordion.close('accordion-example-heading-2');

  // toggle visibility of item based on id
  accordion.toggle('accordion-example-heading-3');
})

// bar graph 
const ctx = document.getElementById('proficiencyChart').getContext('2d');
    const proficiencyChart = new Chart(ctx, {
      type: 'bar', // Chart type
      data: {
        labels: ['Python', 'C++', 'Java', 'HTML', 'CSS', 'Kotlin'], // X-axis labels
        datasets: [{
          label: 'Proficiency Level',
          data: [6, 7, 4, 6, 5, 4, 10], // Y-axis values (adjust levels here)
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        plugins: {
          legend: {
            labels: {
              color: 'lightgrey', // Changes the legend text color
            }
          }
        },
        scales: {
          x: {
            ticks: {
              color: 'lightgrey', // Changes X-axis label text color
            }
          },
          y: {
            ticks: {
              color: 'lightgrey', // Changes Y-axis label text color
            },
            title: {
              display: true,
              text: 'Proficiency Level (out of 10)',
              color: 'lightgrey' // Changes Y-axis title text color
            }
          }
        }
      }
    });