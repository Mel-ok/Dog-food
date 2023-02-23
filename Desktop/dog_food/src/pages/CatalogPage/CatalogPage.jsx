import React from "react";
import './style.css';
import CardList from "../../components/CardList/CardList";
import NotFound from "../../components/NotFound/NotFound";
import PageHeader from "../../components/PageHeader/PageHeader";

const CatalogPage = ({cards, searchQuery}) => {
    return (
        <div className="cards">
            <PageHeader title={'Каталог'} buttonText='На главную' link={'/'}></PageHeader>
            <>
                {searchQuery?.length > 0 && (
                    <h2>
                        По запросу {searchQuery} найдено {cards?.length} шт.
                    </h2>
                )}
                {cards?.length === 0 ? <NotFound title={'По данному запросу ничего не найдено'} buttonText={'Перейти в каталог'} link={'/catalog'}></NotFound> : <CardList cards={cards}></CardList>}
            </>
        </div>
    );
};

export default CatalogPage;