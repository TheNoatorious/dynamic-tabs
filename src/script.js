/*
 * DATA 1ST TAB COMPONENT
 * Add more tabs with content here!
 * Can use HTML within text/titles..
 */
const tabs1 = [
    {
        tabName: "🍭",
        title: "Lollipop <i>tab</i>",
        description:
            "Lollipop cookie cupcake <b>carrot</b> cake halvah shortbread. Muffin pastry sweet roll icing sesame snaps carrot cake. Liquorice cupcake caramels lollipop jujubes powder sweet roll fruitcake macaroon. Dessert gummies gingerbread jelly-o powder macaroon tootsie roll. Chocolate cake cotton candy topping chupa chups marshmallow",
    },
    {
        tabName: "🧁",
        title: "Cupcake tab",
        description:
            "Cupcake sweet gummi bears. Chocolate cake donut bonbon marshmallow wafer. Gummi bears brownie ice cream chocolate cake liquorice muffin. Powder sweet oat cake tootsie roll candy canes tootsie roll. Dessert cookie apple pie pastry oat cake powder lemon drops. Lollipop shortbread tart croissant marzipan chocolate bar jelly. ",
    },
    {
        tabName: "🥐",
        title: "Croissant tab",
        description:
            "Croissant sugar plum jelly beans pie chocolate cake jujubes apple pie. Gummies brownie jujubes jujubes candy. Bear claw jujubes dessert danish lemon drops wafer danish.",
    },
    {
        tabName: "🍿",
        title: "Popcorn tab",
        description:
            "Popcorn roll cake candy canes croissant brownie bonbon. Sesame snaps danish dessert fruitcake pastry fruitcake sweet roll. Caramels gummi bears cake powder cheesecake fruitcake cotton candy. Biscuit chocolate bar marzipan croissant bear claw. Cheesecake cake oat cake caramels jujubes caramels marzipan gummies.",
    },
];

/*
 * DATA 2ND TAB COMPONENT
 * Add more tabs with content here!
 * Can use HTML within text/titles..
 */

const tabs2 = [
    {
        tabName: "Lollipop",
        title: "<i>Chupa Chups</i>",
        description:
            "Lollipop cookie cupcake <b>carrot</b> cake halvah shortbread. Muffin pastry sweet roll icing sesame snaps carrot cake. Liquorice cupcake caramels lollipop jujubes powder sweet roll fruitcake macaroon. Dessert gummies gingerbread jelly-o powder macaroon tootsie roll. Chocolate cake cotton candy topping chupa chups marshmallow",
    },
    {
        tabName: "Cupcake",
        title: "Strawberry Shortcake",
        description:
            "Cupcake sweet gummi bears. Chocolate cake donut bonbon marshmallow wafer. Gummi bears brownie ice cream chocolate cake liquorice muffin. Powder sweet oat cake tootsie roll candy canes tootsie roll. Dessert cookie apple pie pastry oat cake powder lemon drops. Lollipop shortbread tart croissant marzipan chocolate bar jelly. ",
    },
    {
        tabName: "Croissant",
        title: "Au beurre",
        description:
            "Croissant sugar plum jelly beans pie chocolate cake jujubes apple pie. Gummies brownie jujubes jujubes candy. Bear claw jujubes dessert danish lemon drops wafer danish.",
    },
    {
        tabName: "Popcorn",
        title: "Sweet And Salty",
        description:
            "Popcorn roll cake candy canes croissant brownie bonbon. Sesame snaps danish dessert fruitcake pastry fruitcake sweet roll. Caramels gummi bears cake powder cheesecake fruitcake cotton candy. Biscuit chocolate bar marzipan croissant bear claw. Cheesecake cake oat cake caramels jujubes caramels marzipan gummies.",
    },
];

function createTabs(selector, tabs) {
    const tabContainer = document.querySelector(selector);

    tabs.forEach((tab, index) => {
        const isActiveTab = index === 0;

        const tabsItem = `
        <li class="tabs__item ${
            isActiveTab ? "tabs__item--active" : ""
        }" title="${tab.title}" role="presentation" tabindex="${index}">
          ${tab.tabName}
        </li>`;

        const tabContent = `
        <div
          id="tab${index}"
          class="tabs__content ${isActiveTab ? "tabs__content--active" : ""}"
          role="tabpanel"
          aria-labelledby="tab${index}-tab"
        >
          <h2 class="tabs__title">${tab.title}</h2>
          <div class="tabs__description">
            ${tab.description}
          </div>
        </div>
      `;

        tabContainer
            .querySelector(".tabs__items")
            .insertAdjacentHTML("beforeend", tabsItem);
        tabContainer
            .querySelector(".tabs__content-container")
            .insertAdjacentHTML("beforeend", tabContent);

        // Add an event listener to each tab item
        const tabItem = tabContainer.querySelectorAll(".tabs__item")[index];
        tabItem.addEventListener("click", () => {
            // Remove "tabs__item--active" class from all tabs
            const tabsItems = tabContainer.querySelectorAll(".tabs__item");
            tabsItems.forEach((item) => {
                item.classList.remove("tabs__item--active");
            });

            // Add "tabs__item--active" class to the clicked tab
            tabItem.classList.add("tabs__item--active");

            // Hide all tab contents
            const tabContents = tabContainer.querySelectorAll(".tabs__content");
            tabContents.forEach((content) => {
                content.classList.remove("tabs__content--active");
            });

            // Show the tab content for the clicked tab
            const tabContent = tabContainer.querySelector(`#tab${index}`);
            tabContent.classList.add("tabs__content--active");
        });
    });
}

createTabs(".tabs--1", tabs1); // FIRST TAB COMPONENT
createTabs(".tabs--2", tabs2); // SECOND TAB COMPONENT
