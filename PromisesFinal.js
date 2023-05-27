const url=

async function getPizza()
{
    menuUrl = ``;
 const response = await fetch(menuUrl);
 const menu = await response.json();
 return menu;
}

const pizzas = await getPizza(url);
console.log(pizzas);