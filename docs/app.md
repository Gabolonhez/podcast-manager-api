# Podcast Manager

## Description

App ao estilo Netflix, aonde possa centralizar diferentes episódios podcasts separados por categoria.

## Domain

Podcast made by videos

## Features

- Listar os episódios podcasts por sessões de categorias
    - [Saúde, Fitness, Mentalidade, Humor]
- Filtrar episódios por nome de podcast

## How

### Feature:
    Listar os episódios podcasts por sessões de categorias

#### How to implement:
    Retornar em uma API Rest (json) o nome do podcast, nome do episódio, imagem de capa, link, categoria
        ```
        [
            {
                podcastName: "Flow",
                episode: "CBUM - Flow #319",
                videoId: "pQSuQmUfS30",
                cover: "https://i.ytimg.com/vi/pQSuQmUfS30/maxresdefault.jpg",
                link: "https://www.youtube.com/watch?v=pQSuQmUfS30",
                category: ["saúde", "esporte", "fitness"]
            },
            {
                podcastName: "Flow",
                episode: "CBUM - Flow #319",
                videoId: "pQSuQmUfS30",
                cover: "https://i.ytimg.com/vi/pQSuQmUfS30/maxresdefault.jpg",
                link: "https://www.youtube.com/watch?v=pQSuQmUfS30",
                category: ["esporte", "corrida"]
            },
        ],
        ```