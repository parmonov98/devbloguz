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
                about: 'proyekt haqida',
                contact: "aloqa",
                author: "Avtor: ",
                date: " Sana: ",
                enter_something: "Iltimos, qidirish kalit so'z kiriting.",
                enter_keywords: "Kalit so'zni kiriting...",
                search_button: "Izla",
                prev_page_button: "Oldingi",
                next_page_button: "Keyingi",
                pages: [
                    {
                        page_name: "contact",
                        page_title: "Aloqa",
                        page_subtitle: "Proyekt yaratuvchisi bilan aloqa",
                        page_text: "Avtor bilan aloqaga chiqmochimisiz? Quyidagi formani to'ldiring va u siz bilan yaqinda orada xabarlashadi!",
                        name_placeholder: "Ismingiz",
                        email_placeholder: "Emailingiz",
                        phone_placeholder: "Telefoningiz",
                        message_placeholder: "Xabaring",
                        send_button: "Jo'natish"
                    },
                    {
                        page_name: "about",
                        page_title: "Haqida",
                        page_subtitle: "Proyekt haqida ",
                        page_text: "Bu proyekt dasturchilar uchun dasturchilar tomonidan yaratilgan va bu platforma dasturchilarning bloggingni boshlashini tezlashtirish uchun xizmat qiladi!",
                    }
                ]
                // contact: {
                // }
            },
            russian: {
                app_title: "Блог для разработчиков от разработчиков",
                home: "главная",
                about: 'о проект',
                contact: "Контакты",
                author: "Автор: ",
                date: " Дата: ",
                enter_something: "Введите что нибуд!",
                enter_keywords: "Давайте поищем...",
                search_button: "Поиск",
                prev_page_button: "Назад",
                next_page_button: "Вперед",
                pages: [
                    {
                        page_name: "contact",
                        page_title: "Связь",
                        page_subtitle: "Связаться с создателем",
                        page_text: "Хотите связаться с создателем? Заполните форму ниже, чтобы отправить мне сообщение, и я свяжусь с вами как можно скорее!",
                        name_placeholder: "Ваше имя",
                        email_placeholder: "Э-почта",
                        phone_placeholder: "Телефон",
                        message_placeholder: "Сообщение",
                        send_button: "Отправить"
                    },
                    {
                        page_name: "about",
                        page_title: "О проекте",
                        page_subtitle: "Несколко слов о проекте!",
                        page_text: "Этот проект создан для разработчиков от разработчиков, чтобы ускорить начать блоггинг!",
                    }
                ]
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
                next_page_button: "Next",
                pages: [
                    {
                        page_name: "contact",
                        page_title: "Contact",
                        page_subtitle: "Contact the creator",
                        page_text: "Want to get in touch? Fill out the form below to send me a message and I will get back to you as soon as possible!",
                        name_placeholder: "Name",
                        email_placeholder: "Email",
                        phone_placeholder: "Telefon",
                        message_placeholder: "Message",
                        send_button: "Send"
                    },
                    {
                        page_name: "about",
                        page_title: "About",
                        page_subtitle: "About the project",
                        page_text: "The project was created for developers by developrs to make easy start blogging!",
                    }
                ]
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
