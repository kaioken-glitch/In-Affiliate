

document.addEventListener("DOMContentLoaded", function () {
    // Replace 'YOUR_API_KEY' with your actual News API key
    const apiKey = '987395e12eb940618f1eb5dc38d0f7b2';
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}&pageSize=8`;

    // Fetch data from the News API
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // Check if articles are available
            if (data.articles) {
                // Get the 'briefs' div
                const briefsDiv = document.getElementById('briefs');

                // Iterate over the articles and create HTML elements
                data.articles.forEach(article => {
                    // Create elements for headline, full story, and image
                    const headline = document.createElement('h2');
                    headline.textContent = article.title;

                    const fullStory = document.createElement('p');
                    fullStory.textContent = article.description;

                    const imageDiv = document.createElement('div');
                    imageDiv.style.backgroundImage = `url(${article.urlToImage})`;
                    imageDiv.classList.add('article-image');

                    // Create a container div for each article
                    const articleDiv = document.createElement('div');
                    articleDiv.classList.add('article');
                    articleDiv.appendChild(headline);
                    articleDiv.appendChild(fullStory);
                    articleDiv.appendChild(imageDiv);

                    // Append the article div to the 'briefs' div
                    briefsDiv.appendChild(articleDiv);
                });
            }
        })
        .catch(error => console.error('Error fetching news data:', error));
});


const darkModeToggle = document.getElementById('darkModeToggle');
        const darkModeCheckbox = document.getElementById('darkModeCheckbox');

        // Check the user's preference from localStorage
        if (localStorage.getItem('darkMode') === 'enabled') {
            document.body.classList.add('dark-mode');
            darkModeCheckbox.checked = true;
        }

        darkModeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');

            // Toggle the checkbox based on the body class
            darkModeCheckbox.checked = document.body.classList.contains('dark-mode');

            // Save the user's preference to localStorage
            if (document.body.classList.contains('dark-mode')) {
                localStorage.setItem('darkMode', 'enabled');
            } else {
                localStorage.setItem('darkMode', 'disabled');
            }
        });