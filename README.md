# CAD Test Project (RU)

**Используемый стек:** React, Material UI, TypeScript, Vite, ExpressJS

## Описание проекта
Данный проект представляет собой тестовое задание на создание простого приложения с фронтендом и бекендом, развернутого с использованием Render. Проект разработан с использованием React и TypeScript для фронтенда и Express с TypeScript для бэкенда. Основной функционал включает отправку данных с формы на сервер, а также их корректную обработку отображение в интерфейсе пользователя.

## Основные аспекты

### 1. Инструкции по настройке проекта
Клонирование и установка:

1. Клонируйте репозиторий

```
git clone https://github.com/Saitnbone/CAD-test.git
cd CAD-test
```

2. Перейдите в директорию фронтенда и установите зависимости:

```
cd client
npm install
```

3. Перейдите в директорию бэкенда и установите зависимости: 

```
cd ../server
npm install
```

**Локальный запуск**

1. Создайте файл .env в папках ```client``` и ```server``` с настройками, соответствующими окружению разработки.

2. В файле ```.env``` для фронтенда укажите:

```
VITE_BACKEND_URL=http://localhost:5011
```

3. В файле ```.env``` для бэкенда укажите:

```
PORT=5011
CLIENT_URL=http://localhost:5173
```

4. Запустите сервер и фронтенд:

Запуск сервера

```
cd server
npm run dev
```

Запуск клиента

```
cd ../client
npm run dev
```

**Описание хостинга**
Данное приложение написано в монорепозитории. Бэкенд и фронтенд равзернуты на Render: 

* Фронтенд расположен по адресу: https://cad-test-frontend.onrender.com
* Бэкенд расположен по адресу: https://cad-test.onrender.com

При настройке Render использовались следующие переменные окружения: 
* CLIENT_URL: https://cad-test-frontend.onrender.com 
* PORT (назначается автоматически) 
* VITE_SERVER_URL: https://cad-test.onrender.com

### 2. Стилистические особенности проекта
* Использован Vite для сборки проекта и ускорения разработки.
* Стиль реализован с помощью Material UI, как указано в требованиях задания. Это позволяет легко настроить настроить стили, быструю настройку тегов и единообразный UI.
* SEO: Vite позволяет задавать заголовки, метатеги, которые могут быть определены для улучшения SEO.
* Использование семантических тегов, что также влияет на более качественное SEO. 


### 3. Особенности 
* Для взаимодействия между фронтендом и бэкендом использован CORS с настраиваемым CLIENT_URL для безопасности.
* Реализован функционал отправки данных через форму с отображением ответа сервера.

# CAD Test Project (EN)

**Tech Stack:** React, Material UI, TypeScript, Vite, ExpressJS

## Project Description

This project is a test assignment for creating a simple application with a frontend and backend deployed using Render. The project is developed using React and TypeScript for the frontend and Express with TypeScript for the backend. The main functionality includes sending data from a form to the server, as well as its proper handling and display in the user interface.

## Key Aspects

### 1. Project Setup Instructions

Cloning and Installation:

1. Clone the repository

```
git clone https://github.com/Saitnbone/CAD-test.git
cd CAD-test
```

2. Navigate to the frontend directory and install the dependencies:

```
cd client
npm install
```

3. Navigate to the backend directory and install the dependencies:

```
cd ../server
npm install
```

**Local Launch**

1. Create a .env file in the ```client``` and ```server``` folders with settings corresponding to the development environment.

2. In the ```.env``` file for the frontend, specify:

```
VITE_BACKEND_URL=http://localhost:5011
```

3. In the ```.env``` file for the backend, specify:

```
PORT=5011
CLIENT_URL=http://localhost:5173
```

4. Start the server and frontend:

Start the server

```
cd server
npm run dev
```

Start the client

```
cd ../client
npm run dev
```


**Hosting Description** 
This application is written in a monorepo. The backend and frontend are deployed on Render:
* Frontend is located at: https://cad-test-frontend.onrender.com
* Backend is located at: https://cad-test.onrender.com

When setting up Render, the following environment variables were used:
* CLIENT_URL: https://cad-test-frontend.onrender.com
* PORT (assigned automatically)
* VITE_SERVER_URL: https://cad-test.onrender.com

### 2. Project Stylistic Features
* Vite is used for building the project and speeding up development.
* Styling is implemented using Material UI, as specified in the project requirements. This allows for easy style customization, quick tag configuration, and a consistent UI.
* SEO: Vite allows setting titles and meta tags that can be defined to improve SEO.
* Usage of semantic tags, which also contributes to better SEO.

### 3. Features
* CORS is used for communication between the frontend and backend with a configurable CLIENT_URL for security.
* Functionality for submitting data through a form with the server's response displayed has been implemented.