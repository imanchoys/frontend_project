import React, { useState } from 'react';

/**
 * Компонент формы обратной связи.
 * Props:
 *   - openModal: функция для открытия модального окна (message: string, isError: boolean)
 */
const ContactForm = ({ openModal }) => {
  // Состояние полей формы
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Сообщения об ошибках валидации (ключи: name, email, message)
  const [errors, setErrors] = useState({});

  // Обработчик изменения полей
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    // При изменении поля удаляем ошибку для этого поля
    setErrors({
      ...errors,
      [e.target.name]: '',
    });
  };

  // Простые регулярки для валидации
  const nameRegex = /^[A-Za-zА-Яа-яЁё\s]{2,}$/; // минимум 2 буквы
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const messageRegex = /[\s\S]{10,}/; // не менее 10 символов (включая пробелы)

  // Обработчик отправки формы
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    // Проверка имени
    if (!formData.name.trim()) {
      newErrors.name = 'Поле "Имя" обязательно для заполнения';
    } else if (!nameRegex.test(formData.name.trim())) {
      newErrors.name = 'Имя должно содержать минимум 2 буквы и только буквы';
    }

    // Проверка email
    if (!formData.email.trim()) {
      newErrors.email = 'Поле "Email" обязательно для заполнения';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Введите корректный email (например: example@mail.com)';
    }

    // Проверка сообщения
    if (!formData.message.trim()) {
      newErrors.message = 'Поле "Сообщение" обязательно для заполнения';
    } else if (!messageRegex.test(formData.message.trim())) {
      newErrors.message = 'Сообщение должно содержать минимум 10 символов';
    }

    setErrors(newErrors);

    // Если ошибок нет, считаем отправку успешной
    if (Object.keys(newErrors).length === 0) {
      // Здесь реальная отправка на сервер не требуется
      openModal('Сообщение успешно отправлено!', false);
      // Сброс формы
      setFormData({
        name: '',
        email: '',
        message: '',
      });
    } else {
      // Если есть ошибки, показываем первое попавшееся сообщение об ошибке
      const firstErrorField = Object.keys(newErrors)[0];
      openModal(newErrors[firstErrorField], true);
    }
  };

  return (
    <section className="section">
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
    </section>
  );
};

export default ContactForm;
