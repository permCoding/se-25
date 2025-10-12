## Объект process  

В объекте process в Node.js доступны поля и методы для получения информации о текущем процессе, управления им и взаимодействия с системой.  

### Основные поля объекта process  

- **argv** — массив аргументов командной строки.  
- **execPath** — путь к исполняемому файлу Node.js.  
- **execArgv** — параметры запуска Node.js.  
- **env** — объект с переменными окружения.  
- **pid** — идентификатор процесса.  
- **platform** — платформа ОС (`win32`, `linux`, и др.).  
- **arch** — архитектура процессора (`x64`, `arm` и др.).  
- **version, versions** — версия Node.js и его зависимостей.  
- **exitCode** — код выхода процесса.  
- **stdin, stdout, stderr** — объекты потоков ввода и вывода.  
- **mainModule** — ссылка на основной модуль приложения.  
- **title** — название процесса.  
- **moduleLoadList** — список загруженных модулей.  

### Основные методы объекта process  

- **cwd()** — возвращает текущую рабочую директорию.  
- **exit([code])** — завершает процесс с указанным кодом выхода.  
- **memoryUsage()** — возвращает информацию о потреблении памяти процессом.  
- **cpuUsage([previousValue])** — возвращает данные о загрузке CPU.  
- **hrtime()** — возвращает значения высокоточного времени.  
- **on(event, callback)** — обработка событий процесса.  
- **send(message, [sendHandle], [options], [callback])** — обмен сообщениями между процессами.  
- **disconnect()** — отключает IPC-канал (Child Process).  

### Пример использования  

```js
console.log(process.argv);         // аргументы командной строки
console.log(process.pid);          // идентификатор процесса
console.log(process.env.NODE_ENV); // переменная окружения
console.log(process.platform);     // платформа ОС
```

> https://nodejsdev.ru/api/process/  
> https://nodejsdev.ru/guides/webdraftt/processes/  
> https://hackerx.ru/node-js-process/  
> https://webformyself.com/node-js-process/  
> https://runebook.dev/ru/docs/node/process  
> https://habr.com/ru/companies/ruvds/articles/318322/  
> https://habr.com/ru/companies/otus/articles/779852/  

---  
