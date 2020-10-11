function ListaDeFilmes() {
    const table = document.getElementById('Filmes');
    const url = 'http://localhost:5000/api/Filmes';

    //Essa parte faz com que quando clique no botão listar ele apareça a lista de filmes, clicando novamente, a lista desaparece.
    if (table.style.visibility === 'visible') {
        table.style.visibility = 'hidden';
    } else {
        table.style.visibility = 'visible';
    }

    fetch(url)
        .then((resp) => resp.json())
        .then(function (data) {
            console.log(data)

            let tab =
                `<tr>
            <th>Lista De Filmes</th>
            <th>Gêneros<th>
            
        </tr>`;

            let table = data;
            for (let r of table) {
                tab +=
                    `<tr> 
            <td>${r.titulo}</td>
            <td>${r.idGeneroNavigation.nome}
        </tr>`;
            }

            document.getElementById('Filmes').innerHTML = tab;

        })
        .catch((error) => {
            console.log('Deu pau veinho' + error)
        })
}