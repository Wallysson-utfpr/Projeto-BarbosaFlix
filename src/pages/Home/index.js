import { useEffect, useState } from "react"; // Importa o hook useEffect e useState do React.
import api from '../../services/api'; // Importa o objeto api que será usado para fazer chamadas para o servidor.
import { Link } from 'react-router-dom'; // Importa o componente Link do React Router.
import './home.css'; // Importa o arquivo CSS para estilizar o componente Home.

function Home() { // Define o componente Home como uma função.
    const [filmes, setFilmes] = useState([]); // Declara o estado "filmes" com o hook useState, inicializado com um array vazio.
    const [loading, setLoading] = useState(true);
    useEffect(() => { // Define um efeito colateral que será executado quando o componente Home for montado na página.
        async function loadFilmes() { // Define uma função assíncrona "loadFilmes" que fará a chamada para a API.
            const response = await api.get("movie/now_playing", { // Faz uma chamada GET para a rota "movie/now_playing".
                params: { // Define os parâmetros da requisição.
                    api_key: "27400331102cf2fc37473e2b7683541b", // Chave de acesso à API.
                    language: "pt-BR", // Idioma das informações retornadas.
                    page: 1, // Número da página de resultados.
                }
            })

            setFilmes(response.data.results.slice(0, 10)) // Define o estado "filmes" com os 10 primeiros resultados retornados pela API.
        }
        loadFilmes(); // Chama a função "loadFilmes".
        setLoading(false);
    }, []) // Define um array vazio de dependências para que o efeito seja executado apenas uma vez, na montagem do componente.

    if (loading) {
        return (
            <div className="loading">
                <h2>Carregando filmes...</h2>
            </div>
        )
    }

    return ( // Retorna o JSX que será renderizado pelo componente Home.
        <div className="container"> {/*Define um container para o componente.*/}
            <div className="lista-filmes"> {/*Define uma lista de filmes para ser preenchida com os resultados da API.*/}
                {filmes.map((item) => { // Mapeia o array "filmes" para renderizar um elemento HTML para cada filme.
                    return (
                        < article key={item.id} > {/*Define um artigo com a chave "id" do filme como identificador único.*/}
                            <strong>{item.title}</strong> {/*Renderiza o título do filme.*/}
                            <img src={`https://image.tmdb.org/t/p/original/${item.poster_path}`} alt={item.title} />{/* Renderiza a imagem do cartaz do filme.*/}
                            <Link to={`/filme/${item.id}`}>Acessar</Link> {/*Renderiza um link para acessar mais informações sobre o filme.*/}
                        </article>
                    )
                })}
            </div>
        </div>
    )
}

export default Home; // Exporta o componente Home para ser utilizado em outros lugares da aplicação.
