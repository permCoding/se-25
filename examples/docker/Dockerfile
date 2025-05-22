# Используем официальный образ Node.js (LTS-версия)
FROM node:22-alpine

# Создаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем все файлы проекта
COPY . .

# Открываем порт, на котором работает Express (например, 3000)
EXPOSE 3000

# Запускаем приложение
CMD ["node", "app.js"]