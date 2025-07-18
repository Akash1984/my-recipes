const recipes = [
  {
    title: "Spaghetti Carbonara",
    image: "https://source.unsplash.com/300x200/?spaghetti",
    description: "Creamy pasta with bacon and parmesan."
  },
  {
    title: "Chicken Tikka Masala",
    image: "https://source.unsplash.com/300x200/?chicken-curry",
    description: "Spiced grilled chicken in a rich curry sauce."
  }
];

const container = document.getElementById("recipe-list");

recipes.forEach(recipe => {
  const card = document.createElement("div");
  card.className = "recipe-card";
  card.innerHTML = `
    <img src="${recipe.image}" alt="${recipe.title}">
    <h2>${recipe.title}</h2>
    <p>${recipe.description}</p>
  `;
  container.appendChild(card);
});
