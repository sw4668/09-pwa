function showRandomImage() {
    const images = ['creme.gif', 'burger.gif', 'ice.gif', 'roll.gif', 'donut.gif', 'cake.gif', 'sushi.gif', 'ramen.gif', 'pizza.gif', 'dumplings.gif', 'dimsum.gif', 'spaghetti.gif', 'pasta.gif', 'lasaga.gif', 'soup.gif', 'curry.gif', 'samosa.gif', 'steak.gif', 'bread.gif', 'mac.gif', 'pancake.gif', 'taco.gif', 'wine.gif']; // foods
    const randomImage = images[Math.floor(Math.random() * images.length)];
    document.getElementById("imageContainer").src = `./images/${randomImage}`;
}


document.addEventListener("DOMContentLoaded", showRandomImage);
