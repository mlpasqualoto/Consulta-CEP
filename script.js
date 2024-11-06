async function getCep(cep) {
    try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await response.json();

        document.getElementById("value-log").textContent = `${data.logradouro}`;
        document.getElementById("value-com").textContent = `${data.complemento}`;
        document.getElementById("value-bai").textContent = `${data.bairro}`;
        document.getElementById("value-cid").textContent = `${data.localidade}`;
        document.getElementById("value-est").textContent = `${data.estado}`;
        document.getElementById("value-reg").textContent = `${data.regiao}`;
        document.getElementById("value-ibg").textContent = `${data.ibge}`;
        document.getElementById("value-dd").textContent = `${data.ddd}`;

    } catch (error) {
        document.getElementById("error").textContent = "*Server Error";
    }
}

function showElement(id) {
    const element = document.getElementById(`${id}`);
    element.style.display = "block";
}

function searchCep() {
    const cep = document.getElementById("cep").value;
    document.getElementById("error").textContent = "";
    if (document.getElementById("cep").value !== "" && cep.length === 8) {
        getCep(cep);
        showElement("table-result");
    } else {
        document.getElementById("error").textContent = "*O CEP deve conter 8 dígitos!";
    }
}