function obtenerRespuesta() {
    const termino = document.getElementById('inputTexto').value;
    const endpointOpenAI = "https://api.openai.com/v1/chat/completions";
    const opcionesOpenAI = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '
        },
        body: JSON.stringify({
            model: 'gpt-3.5-turbo',
            messages: [{
                "role": "user",
                "content": "Obtener respuesta"
            }, {
                "role": "system",
                "content": termino // Aquí proporcionamos el término ingresado como contenido
            }]
        })
    };

    fetch(endpointOpenAI, opcionesOpenAI)
        .then(function(respuesta) {
            return respuesta.json();
        })
        .then(function(response) {
            const respuestaAI = response.choices[0].message.content;
            mostrarResultado(respuestaAI);
        })
        .catch(function(error) {
            console.error('Hubo un problema con la solicitud a OpenAI:', error);
        });
}

function mostrarResultado(respuestaAI) {
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `
        <h4>Respuesta de ChatGPT:</h4>
        <p>${respuestaAI}</p>
    `;
}