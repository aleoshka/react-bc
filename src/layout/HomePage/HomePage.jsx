import React, { useEffect } from 'react';
import axios from 'axios';
import HeaderItem from './components/HeaderItem';
import FooterItem from './components/FooterItem';
import ContentItem from './components/ContentItem';

const baseUrl = "https://jsonplaceholder.typicode.com/posts"

const HomePage = () => {
    const value = "Карточки с картинками, Братишька-мен";
    const labels = [
        { id: 1, cardTitle: "Заголовок 1", cardText: "Описание 1" },
        { id: 2, cardTitle: "Заголовок 2", cardText: "Описание 2" },
        { id: 3, cardTitle: "Заголовок 3", cardText: "Описание 3" },
        { id: 4, cardTitle: "Заголовок 4", cardText: "Описание 4" },
        { id: 5, cardTitle: "Заголовок 5", cardText: "Описание 5" },
        { id: 6, cardTitle: "Заголовок 6", cardText: "Описание 6" }
    ];

    useEffect(() => {
        axios.get(baseUrl)
            .then(res => {
                console.log(res);
            });
    });

    return (
        <div className="container col-10">
            <HeaderItem headerText={value} />
            <ContentItem setOfLabels={labels} />
            <FooterItem />
        </div>
    );
}

export default HomePage;
