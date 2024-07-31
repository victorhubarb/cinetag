import Banner from 'componentes/Banner';
import styles from './Player.module.css';
import Titulo from 'componentes/Titulo';
import { useParams } from 'react-router-dom';
import NaoEncontrada from 'pages/NaoEncontrada';
import { useEffect, useState } from 'react';

function Player() {
    const [video, setVideo] = useState();
    const parametros = useParams();

    // Para uso de api externa
    useEffect(() => {
        fetch(`https://my-json-server.typicode.com/victorhubarb/cinetag-api/videos?id=${parametros.id}`)
        .then(res => res.json())
        .then(dados => {
            setVideo(...dados)
        }, [])
    })

    // Uso de api interna
    // const video = videos.find((video) => {
    //     return video.id === Number(parametros.id);
    // });

    if (!video) {
        return <NaoEncontrada />
    }

    return (
        <>
            <Banner imagem="player" />
            <Titulo>
                <h1>Player</h1>
            </Titulo>
            <section className={styles.container}>
                <iframe
                    width="100%"
                    height="100%"
                    src={video.link}
                    title={video.titulo}
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                </iframe>
            </section>
        </>
    )
}

export default Player;