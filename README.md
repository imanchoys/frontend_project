# Проект "Умный Город"

## 📁 Структура проекта

- `src/` — исходные файлы React
- `public/` — статические ресурсы
- `package.json` — список зависимостей и скриптов проекта

## 📦 Установка зависимостей

Перед запуском убедитесь, что у вас установлен [Node.js](https://nodejs.org/) и [npm](https://www.npmjs.com/).

```bash
node -v
npm -v
```

Установите зависимости:

```bash
npm install
```

## 🚀 Запуск приложения

Для запуска приложения используйте команду:

```bash
npm start
```

После запуска откроется окно браузера по адресу: [http://localhost:3000](http://localhost:3000)

## ❓ Возможные проблемы

Если что-то не работает:

1. Убедитесь, что у вас установлены **Node.js** и `npm`:
   ```bash
   node -v
   npm -v
   ```

2. Удалите папку `node_modules` и файл `package-lock.json`, затем переустановите зависимости:

    ```bash
    # Linux/MacOS
    rm -rf node_modules package-lock.json
    npm install
    ```

    ```cmd
    # Windows CMD
    rmdir /s /q node_modules
    del /f /q package-lock.json
    npm install
    ```
