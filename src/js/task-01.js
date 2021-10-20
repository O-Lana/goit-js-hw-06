const numberCategories = document.querySelectorAll('.item');
// console.log(numberCategories);

const itemCounter = (itemsArray) => {
    itemsArray.forEach((item) =>
        console.log(`Category: ${item.firstElementChild.textContent} 
        Elements: ${item.lastElementChild.children.length} `)
    );
};

console.log('Number of categories:', numberCategories.length);
itemCounter(numberCategories);
