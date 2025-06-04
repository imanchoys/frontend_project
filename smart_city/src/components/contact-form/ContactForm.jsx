import { useState } from "react";

import "./ContactForm.css"

import Modal from "../modal/Modal";


const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
        setErrors({
            ...errors,
            [e.target.name]: "",
        });
    };

    const nameRegex = /^[A-Za-zА-Яа-яЁё\s]{2,}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const messageRegex = /[\s\S]{10,}/;

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};

        // Проверка имени
        if (!formData.name.trim()) {
            newErrors.name = "Поле 'Имя' обязательно для заполнения";
        } else if (!nameRegex.test(formData.name.trim())) {
            newErrors.name = "Имя должно содержать минимум 2 буквы и только буквы";
        }

        // Проверка email
        if (!formData.email.trim()) {
            newErrors.email = "Поле 'Email' обязательно для заполнения";
        } else if (!emailRegex.test(formData.email.trim())) {
            newErrors.email = "Введите корректный email (например: example@mail.com)";
        }

        // Проверка сообщения
        if (!formData.message.trim()) {
            newErrors.message = "Поле 'Сообщение' обязательно для заполнения";
        } else if (!messageRegex.test(formData.message.trim())) {
            newErrors.message = "Сообщение должно содержать минимум 10 символов";
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            openModal("Сообщение успешно отправлено!", false);
            setFormData({
                name: "",
                email: "",
                message: "",
            });
        } else {
            const firstErrorField = Object.keys(newErrors)[0];
            openModal(newErrors[firstErrorField], true);
        }
    };

    const [modalData, setModalData] = useState({
        isOpen: false,
        message: "",
        isError: false,
    });

    const openModal = (message, isError = false) => {
        setModalData({ isOpen: true, message, isError });
    };

    const closeModal = () => {
        setModalData({ ...modalData, isOpen: false });
    };

    return (
        <section className="section contact-form">
            <h2>Контактная форма</h2>
            <form onSubmit={handleSubmit} noValidate>
                <div>
                    <label htmlFor="name">Имя:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Ваше имя"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    {errors.name && <div className="error-message">{errors.name}</div>}
                </div>

                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="example@mail.com"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    {errors.email && <div className="error-message">{errors.email}</div>}
                </div>

                <div>
                    <label htmlFor="message">Сообщение:</label>
                    <textarea
                        id="message"
                        name="message"
                        rows="4"
                        placeholder="Ваше сообщение"
                        value={formData.message}
                        onChange={handleChange}
                    ></textarea>
                    {errors.message && <div className="error-message">{errors.message}</div>}
                </div>

                <button type="submit">Отправить</button>
            </form>

            {
                modalData.isOpen &&
                <Modal
                    message={modalData.message}
                    isError={modalData.isError}
                    onClose={closeModal}
                />
            }
        </section>
    );
};

export default ContactForm;
