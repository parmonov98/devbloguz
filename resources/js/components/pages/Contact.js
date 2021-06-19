import React, { useState, useContext } from 'react';
import { CustomContext } from './../../contexts/CustomContext';

const Contact = ({ showAlert, sendMessage, clearSendMessageForm }) => {

    const context = useContext(CustomContext);
    const { activeLanguage, locale } = context;

    let ui = locale;
    ui = context.texts[locale];

    // console.log(ui);

    const page = ui.pages.find((item) => item.page_name == 'contact');

    // console.log(page);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [text, setText] = useState('');
    const [message, setMessage] = useState({});

    const onChangeName = (e) => setName(e.target.value);
    const onChangeEmail = (e) => setEmail(e.target.value);
    const onChangePhone = (e) => setPhone(e.target.value);
    const onChangeText = (e) => setText(e.target.value);

    const onSubmit = async (e) => {
        e.preventDefault();
        // console.log(e.target);
        const { name, email, phone, text } = e.target.elements;
        let obj = {};
        obj.name = name.value;
        obj.email = email.value;
        obj.phone = phone.value;
        obj.text = text.value;
        setMessage(obj);

        let stringValidation = /^[A-Za-z]+$/;
        if (name.value.match(stringValidation)) {
            setName(name.value);
        } else {
            showAlert({ message: "`Name` must be a valid string", type: 'warning' });
            return;
        }

        let mailValidation = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (email.value.match(mailValidation)) {
            setEmail(email.value);
        } else {
            showAlert({ message: "`Email` is invalid! username@example.com", type: 'warning' });
            return;
        }

        let phoneValidation = /^\+?[0-9]{9,15}/;
        if (phone.value.match(phoneValidation)) {
            setPhone(phone.value);
        } else {
            showAlert({ message: "`Phone` is invalid! +998941112233", type: 'warning' });
            return;
        }

        if (text.value === '') {
            showAlert({ message: "Please, Enter something for `Message`", type: 'warning' });
            return;
        }

        const res = await sendMessage(obj);
        // console.log(res);
        if (res.hasOwnProperty("success") && res.success == false) {
            showAlert({ message: res.title, type: 'warning' });
        } else {
            showAlert({ message: "Xabaringiz qabul qilindi, Rahmat!", type: 'success' });
            setName('');
            setEmail('');
            setPhone('');
            setText('');
        }
        // console.log(res);
        // alert('validation passed successfully!');
    }




    return (
        <div className="col-lg-8 col-md-10 mx-auto">
            <p>{page.page_text}</p>
            <form name="sentMessage" id="contactForm" onSubmit={onSubmit} noValidate="">
                <div className="control-group">
                    <div className="form-group floating-label-form-group controls">
                        <label>Name</label>
                        <input type="text" onChange={onChangeName} value={name} className="form-control" placeholder={page.name_placeholder} id="name" required="" data-validation-required-message="Please enter your name." />
                        <p className="help-block text-danger"></p>
                    </div>
                </div>

                <div className="control-group">
                    <div className="form-group floating-label-form-group controls">
                        <label>Email Address</label>
                        <input type="email" onChange={onChangeEmail} value={email} className="form-control" placeholder={page.email_placeholder} id="email" required="" data-validation-required-message="Please enter your email address." />
                        <p className="help-block text-danger"></p>
                    </div>
                </div>

                <div className="control-group">
                    <div className="form-group col-xs-12 floating-label-form-group controls">
                        <label>Phone Number</label>
                        <input type="tel" value={phone} onChange={onChangePhone} className="form-control" placeholder={page.phone_placeholder} id="phone" required="" data-validation-required-message="Please enter your phone number." />
                        <p className="help-block text-danger"></p>
                    </div>
                </div>

                <div className="control-group">
                    <div className="form-group floating-label-form-group controls">
                        <label>Message</label>
                        <textarea rows="5" value={text} onChange={onChangeText} className="form-control" placeholder={page.message_placeholder} id="text" required="" data-validation-required-message="Please enter a message."></textarea>
                        <p className="help-block text-danger"></p>
                    </div>
                </div>

                <br />
                <div id="success"></div>
                <button type="submit" className="btn btn-primary" id="sendMessageButton">{page.send_button}</button>

            </form>

        </div>
    )
}

export default Contact;

