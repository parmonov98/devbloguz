import React, { Component, createContext } from "react";

export const CustomContext = createContext();

class CustomContextProvider extends Component {
    state = {
        isLightTheme: true,
        light: {
            syntax: '#555',
            ui: '#ddd',
            bg: '#eee'
        },
        dark: {
            syntax: '#ddd',
            ui: '#333',
            bg: '#555'
        },
        activeLanguage: "uzbek",
        languages: [
            {
                name: "uzbek",
                title: "O'zbek",
                code: 'uz',
                flag: "🇺🇿"
            },
            {
                name: "russian",
                title: "Русский",
                code: 'ru',
                flag: "🇷🇺"
            },
            {
                name: "english",
                title: "English",
                code: 'en',
                flag: "🇺🇸"
            },

        ],
        texts: {
            uzbek: {
                app_title: "Dasturchilar uchun dasturchilardan blog",
                home: "bosh sahifa",
                about: 'sayt haqida',
                contact: "aloqa",
                author: "Avtor: ",
                date: " Sana: ",
                enter_something: "Iltimos, qidirish kalit so'z kiriting.",
                enter_keywords: "Kalit so'zni kiriting...",
                search_button: "Izla",
                prev_page_button: "Oldingi",
                next_page_button: "Keyingi"
            },
            russian: {
                app_title: "Блог для разработчиков от разработчиков",
                home: "главная",
                about: 'о сайт',
                contact: "Контакты",
                author: "Автор: ",
                date: " Дата: ",
                enter_something: "Введите что нибуд!",
                enter_keywords: "Давайте поищем...",
                search_button: "Поиск",
                prev_page_button: "Назад",
                next_page_button: "Вперед"
            },
            english: {
                app_title: "A Blog for Developers from Developers",
                home: "home",
                about: 'about',
                contact: "contacts",
                author: "posted by ",
                date: " on ",
                enter_something: "Please, enter something",
                enter_keywords: "Let's find...",
                search_button: "Search",
                prev_page_button: "Previous",
                next_page_button: "Next"
            }
        }

    };

    switchActiveLanguage = (lang = 'uzbek') => {
        if (this.state.activeLanguage !== lang) {
            this.setState({ activeLanguage: lang });
        }
    }

    render() {
        return (
            <CustomContext.Provider value={{ ...this.state, switchActiveLanguage: this.switchActiveLanguage }}>
                {this.props.children}
            </CustomContext.Provider>
        );
    }
}

export default CustomContextProvider;
