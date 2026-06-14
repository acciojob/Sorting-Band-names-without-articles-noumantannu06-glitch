//your code here
// Array of band names
let bandNames = ['The Beatles', 'Aerosmith', 'An Oasis', 'The Rolling Stones', 'The Who', 'A Pink'];

// Function to remove articles from the beginning of a string
function removeArticle(name) {
  // Create regex to match articles at the beginning (case-insensitive)
  const articlesRegex = /^(a|an|the)\s+/i;
  
  // Remove article if present and return, otherwise return original name
  return articlesRegex.test(name) ? name.replace(articlesRegex, '') : name;
}

// Sort band names lexicographically without considering articles
bandNames.sort((a, b) => {
  const nameA = removeArticle(a);
  const nameB = removeArticle(b);
  
  // Compare the names without articles
  return nameA.localeCompare(nameB);
});

// Create the HTML output with ul id='band' and li tags
const bandList = document.createElement('ul');
bandList.id = 'band';

// Add each band name as an li element
bandNames.forEach(band => {
  const listItem = document.createElement('li');
  listItem.textContent = band;
  bandList.appendChild(listItem);
});

// Append the band list to the body (or you can append to a specific container)
document.body.appendChild(bandList);