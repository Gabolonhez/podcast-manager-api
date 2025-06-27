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
    GET: Retornar list de episódios

    response:
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

    GET: Retornar lista de episódios baseados em um parâmetro enviado pelo cliente do nome do podcast