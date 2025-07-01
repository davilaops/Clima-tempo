
async function buscarClima() {
  const cidade = document.getElementById("cidadeInput").value || "Sao Paulo";
  const apiKey = "7a6b628c3cb47abfb93e4b1ab733df83";

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apiKey}&units=metric&lang=pt_br`;

  try {
    const resposta = await fetch(url);
    const dados = await resposta.json();

    console.log("Resposta da API:", dados);

    if (resposta.ok) {
      const temp = dados.main.temp;
      const descricao = dados.weather[0].description;
      const cidadeNome = dados.name;
      const pais = dados.sys.country;

      document.getElementById("resultado").innerHTML = `
        <strong>${cidadeNome}, ${pais}</strong><br>
        Temperatura: ${temp}°C<br>
        Clima: ${descricao}
      `;
    } else {
      document.getElementById("resultado").innerHTML = `❌ Erro: ${dados.message}`;
    }
  } catch (erro) {
    document.getElementById("resultado").innerHTML = "⚠️ Erro ao buscar o clima.";
    console.error("Erro:", erro);
  }
}
