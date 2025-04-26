Приложение управления задачами (Todo App)

Запуск проекта
Настройка и запуск backend
   
cd backend

npm start

# Установить зависимости
npm install

# Запустить приложение React
npm start
Приложение откроется в вашем браузере по адресу: http://localhost:3000

Проверка API
Вы можете проверить API endpoints без использования frontend следующими способами:
Используя cURL
Получение списка задач (GET /tasks)

bashcurl -X GET http://localhost:5000/tasks

Создание новой задачи (POST /tasks)

bashcurl -X POST http://localhost:5000/tasks \
  -H "Content-Type: application/json" \
  -d '{"title": "Тестовая задача"}'
  
Изменение статуса задачи (PATCH /tasks/)

bashcurl -X PATCH http://localhost:5000/tasks/1 \
  -H "Content-Type: application/json" \
  -d '{"completed": true}'
  
Удаление задачи (DELETE /tasks/)

bashcurl -X DELETE http://localhost:5000/tasks/1

// POST запрос
fetch('http://localhost:5000/tasks', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ title: 'Новая задача' })
})
  .then(response => response.json())
  .then(data => console.log('Создана задача:', data));
  
Функциональность

Backend API:

GET /tasks - получение списка всех задач
POST /tasks - создание новой задачи
PATCH /tasks/ - обновление статуса задачи
DELETE /tasks/ - удаление задачи


Структура задачи:

id - уникальный идентификатор
title - название задачи
completed - статус выполнения (по умолчанию false)


Frontend:

Форма для добавления новых задач
Список всех задач с возможностью отметить как выполненную
Визуальное отображение статуса задачи
Возможность удаления задачи
