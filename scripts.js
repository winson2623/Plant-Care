/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 *
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your
 *    browser and make sure you can see that change.
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 *
 */

const MONSTERA_URL =
    "https://www.thesill.com/cdn/shop/files/the-sill_Large-Monstera_Large_Isabella_Top-Half-Dusty_Variant_1.jpg?v=1743190833&width=990";
const ZOOMED_MONSTERA_URL =
    "https://www.thesill.com/cdn/shop/products/the-sill_monstera_large_gallery_all_all_03copy.jpg?v=1743190833&width=990";
const PARLOR_PALM_URL =
    "https://www.thesill.com/cdn/shop/files/the-sill_Parlor-Palm_Momma-Pot_Isabella_Top-Half-White_Variant.jpg?v=1741791931&width=990";
const ZOOMED_PARLOR_PALM_URL =
    "https://www.thesill.com/cdn/shop/products/the-sill_parlor-palm_gallery_medium_all_all_01-Copy.jpg?v=1741791931&width=1946";
const SNAKE_PLANT_URL =
    "https://www.thesill.com/cdn/shop/files/the-sill_Large-Snake-Laurentii_Large_Isabella_Top-Half-Black_Variant.jpg?v=1743795923&width=990";
const ZOOMED_SNAKE_PLANT_URL =
    "https://www.thesill.com/cdn/shop/products/the-sill_snake-plant-laurentii_gallery_small_all_all_01.jpg?v=1743795923&width=1946";
const PHILODENDRON_URL =
    "https://www.thesill.com/cdn/shop/products/the-sill_philodendron-green_small_hyde_cream.jpg?v=1741874191&width=990";
const ZOOMED_PHILODENDRON_URL =
    "https://www.thesill.com/cdn/shop/products/the-sill_philodendon-green_gallery_small_all_all_03.jpg?v=1741874261&width=1946";
const POTHOS_URL =
    "https://www.thesill.com/cdn/shop/files/the-sill_Medium-Pothos-Neon_Medium_Grant_Cream_Variant.jpg?v=1722006462&width=990";
const ZOOMED_POTHOS_URL =
    "https://www.thesill.com/cdn/shop/files/the-sill_pothosneon_6in_detail_Gallery.jpg?v=1724876715&width=1946";
const PEACE_LILY_URL =
    "https://www.thesill.com/cdn/shop/files/the-sill_Peace-Lily_Isabella_Top-Half-Black_Variant.jpg?v=1738609868&width=990";
const ZOOMED_PEACE_LILY_URL =
    "https://www.thesill.com/cdn/shop/files/the-sill_peace-lily_gallery_01.jpg?v=1740777277&width=1946";
const BOSTON_FERN_URL =
    "https://www.thesill.com/cdn/shop/files/the-sill_boston-hanging-fern_large_growpot_variant01.jpg?v=1744395865&width=990";
const ZOOMED_BOSTON_FERN_URL =
    "https://www.thesill.com/cdn/shop/files/the-sill_boston-hanging-fern_large_growpot_trio_gallery.jpg?v=1744395822&width=1946";
const ZZ_PLANT_URL =
    "https://www.thesill.com/cdn/shop/files/the-sill_zz-plant_variant_small_grant_cream.jpg?v=1743093985&width=1946";
const ZOOMED_ZZ_PLANT_URL =
    "https://www.thesill.com/cdn/shop/products/the-sill_zz-plant_large_gallery_all_all_02_175b6bd9-7ee7-4ab3-89e0-9da22325e683.jpg?v=1743093986&width=1946";



document.addEventListener("DOMContentLoaded", () => {
    let plantData = [
        {
            name: "Monstera",
            light: "Bright light to medium light",
            water: "Once a week, allow soil to dry out.",
            humidity: "Prefers 60% humidity",
            location: "Living Room, Office",
            size: 8,
            image: {
                normal: MONSTERA_URL,
                zoom: ZOOMED_MONSTERA_URL //hover mouse over picture to zoom
            }
        },
        {
            name: "Parlor Palm",
            light: "Medium light to Low light",
            water: "Once a week, allow soil to dry out.",
            humidity: "Prefers 50% humidity",
            location: "Living Room, Office",
            size: 6,
            image: {
                normal: PARLOR_PALM_URL,
                zoom: ZOOMED_PARLOR_PALM_URL
            }
        },
        {
            name: "Snake Plant",
            light: "Medium light to low light",
            water: "Once every two weeks, allow soil to dry out.",
            humidity: "Prefers 30% humidity",
            location: "Bedroom, Office, Kitchen",
            size: 4,
            image: {
                normal: SNAKE_PLANT_URL,
                zoom: ZOOMED_SNAKE_PLANT_URL
            }
        },
        {
            name: "Philodendron",
            light: "Medium light to low light",
            water: "Once a week, allow soil to dry out.",
            humidity: "Prefers 70% humidity",
            location: "Bathroom, Kitchen",
            size: 3,
            image: {
                normal: PHILODENDRON_URL,
                zoom: ZOOMED_PHILODENDRON_URL
            }
        },
        {
            name: "Pothos",
            light: "Bright light to medium light",
            water: "Once a week, allow soil to dry out.",
            humidity: "Prefers 60% humidity",
            location: "Living Room, Office",
            size: 8,
            image: {
                normal: POTHOS_URL,
                zoom: ZOOMED_POTHOS_URL
            }
        },
        {
            name: "Peace Lily",
            light: "Medium light to low light",
            water: "Once a week, allow soil to dry out.",
            humidity: "Prefers 70% humidity",
            location: "Office, Bathroom",
            size: 4,
            image: {
                normal: PEACE_LILY_URL,
                zoom: ZOOMED_PEACE_LILY_URL
            }
        },
        {
            name: "Boston Fern",
            light: "Medium light",
            water: "Once a week, allow soil to dry out.",
            humidity: "Prefers 80% humidity",
            location: "Office, Bathroom",
            size: 3,
            image: {
                normal: BOSTON_FERN_URL,
                zoom: ZOOMED_BOSTON_FERN_URL
            }
        },
        {
            name: "ZZ Plant",
            light: "Medium light to low light",
            water: "Once every two weeks, allow soil to dry out.",
            humidity: "Prefers 50% humidity",
            location: "Office, Bedroom",
            size: 3,
            image: {
                normal: ZZ_PLANT_URL,
                zoom: ZOOMED_ZZ_PLANT_URL
            }
        }
    ];

    function showCards(plants) {
        cardContainer.innerHTML = ""; //clears previous card

        plants.forEach(function (plant) { //loops each filtered plants
            const card = template.content.cloneNode(true); //html template and clone it

            //uses template and adds all the plants information provided at the start
            card.querySelector("h2").textContent = plant.name;
            const paragraphs = card.querySelectorAll("p");
            paragraphs[0].innerHTML = "<strong>Light:</strong> " + plant.light;
            paragraphs[1].innerHTML = "<strong>Water:</strong> " + plant.water;
            paragraphs[2].innerHTML = "<strong>Humidity:</strong> " + plant.humidity;
            paragraphs[3].innerHTML = "<strong>Ideal Location:</strong> " + plant.location;
            paragraphs[4].innerHTML = "<strong>Size:</strong> Grows up to " + plant.size + " feet";

            //grabs the images and source for each plants 
            const normalImg = card.querySelector(".normal");
            const zoomedImg = card.querySelector(".zoomed");
            normalImg.src = plant.image.normal;
            zoomedImg.src = plant.image.zoom; //hover mouse over picture to zoom

            cardContainer.appendChild(card);
        });
    }

    //DOM elements
    const lightFilter = document.getElementById("light");
    const humidityFilter = document.getElementById("humidity");
    const sortSelect = document.getElementById("sort");
    const searchInput = document.getElementById("search");
    const cardContainer = document.querySelector(".plant-list");
    const template = document.querySelector(".plant-template");


    //cleans up strings, lowercases and removes spaces
    function normalizeText(text) {
        return text.toLowerCase().replace(/\s+/g, "").trim();
    }

    //main function
    function filterAndSortPlants() {
        //grabs input
        const selectedLight = normalizeText(lightFilter.value);
        const selectedHumidity = normalizeText(humidityFilter.value);
        const searchQuery = normalizeText(searchInput.value);
        const sortBy = sortSelect.value;

        //filter each plants' data and extract them
        let filteredPlants = plantData.filter(function (plant) {
            const plantLight = normalizeText(plant.light);
            const plantHumidity = normalizeText(plant.humidity);
            const plantName = normalizeText(plant.name);

            //extract the humidity, remove spaces and convert into usable integer
            let humidityValue;
            const humidityMatch = plant.humidity.match(/(\d+)%/);
            if (humidityMatch) {
                humidityValue = parseInt(humidityMatch[1]);
            } else {
                humidityValue = 0;
            }

            //matches by light
            const matchesLight =
                selectedLight === "all" || plantLight.includes(selectedLight);

            //humidity conversion of numbers to filtered text option then matches by humidity
            let matchesHumidity = true;
            if (selectedHumidity === "low") {
                matchesHumidity = humidityValue <= 30;
            } else if (selectedHumidity === "medium") {
                matchesHumidity = humidityValue > 30 && humidityValue <= 60;
            } else if (selectedHumidity === "high") {
                matchesHumidity = humidityValue > 60;
            }

            //matches by searchbox
            const matchesSearch = plantName.includes(searchQuery);

            //if all filters pass the plant stays in the filtered list
            return matchesLight && matchesHumidity && matchesSearch;
        });

        //sorting by name (alphabetically) or by size (feet)
        if (sortBy === "Name") {
            filteredPlants.sort(function (a, b) {
                return a.name.localeCompare(b.name);
            });
        } else if (sortBy === "Size") {
            filteredPlants.sort(function (a, b) {
                return a.size - b.size;
            });
        }

        showCards(filteredPlants);
    }


    //updates plant lists after every changes the user does
    lightFilter.addEventListener("change", filterAndSortPlants);
    sortSelect.addEventListener("change", filterAndSortPlants);
    searchInput.addEventListener("input", filterAndSortPlants);
    humidityFilter.addEventListener("change", filterAndSortPlants);


    filterAndSortPlants();
});
