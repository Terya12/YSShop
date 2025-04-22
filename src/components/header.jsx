import React from "react"
import "../style/header.css"

export default function Header() {
    return (
        <header>
            <div>
                <span className="logo">YusterShop</span>
            </div>
            <div>
                <a href=""><span>Главная</span></a>
                <a href="">О нас</a>
                <a href="">Контакты</a>
                <a href="">Поиск</a>
                <a href="">Доставка</a>
                <input type="text" placeholder="Поиск"/>
                <span>Корзина</span>
            </div>
        </header>
    )
}