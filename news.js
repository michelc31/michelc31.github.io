fetch('https://newsapi.org/v2/top-headlines?country=mx&apiKey=df9a2f92e9fa48deaf2df3c9b4576718')
    .then(response => response.json())
    .then(data => {
        const newsList = document.getElementById('newsList');
        data.articles.forEach(article => {
            const listItem = document.createElement('li');
            listItem.textContent = article.title;
            newsList.appendChild(listItem);
        });
    })
    .catch(error => console.error('Error al obtener noticias', error));