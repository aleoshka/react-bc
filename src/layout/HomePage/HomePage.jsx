import React from 'react';
import HeaderItem from './components/HeaderItem';
import FooterItem from './components/FooterItem';
import ContentItem from './components/ContentItem';

const HomePage = () => {
    return (
        <div className="container col-10">
            <HeaderItem />
            <ContentItem />
            <FooterItem />
        </div>
    );
}

export default HomePage;
