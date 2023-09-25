
        // Function to load a random category as Specials
function loadRandomSpecialsCategory() {
    // Array of possible category short_names
    const categories = ["LUNCH", "DINNER", "SUSHI", "DESSERTS", "DRINKS"];
    
    // Generate a random index within the array length
    const randomIndex = Math.floor(Math.random() * categories.length);
    
    // Get the random category short_name
    const randomCategoryShortName = categories[randomIndex];
    
    // Redirect to the selected category page
    window.location.href = `examen2.html?category=${randomCategoryShortName}`;
}

// Attach the click event to the "Specials" tile
document.getElementById("specialsTile").addEventListener("click", loadRandomSpecialsCategory);