class Events {
    constructor(logger = console) {
        this.logger = logger;
    }

    // приватный метод общий - обработать результат
    #handleResult(err, successMessage, errorPrefix = "Ошибка") {
        if (err) {
            this.logger.error(`${errorPrefix}: ${err.message}`);
            return false;
        }
        this.logger.log(successMessage);
        return true;
    }

    eventCreateDB = (err) => {
        return this.#handleResult(
            err, 
            'Успешно подключено к базе данных.', 
            'Ошибка при открытии/создании базы данных'
        );
    }

    eventCreateTable = (err) => {
        return this.#handleResult(
            err, 
            'Таблица создана или уже существовала.', 
            'Ошибка при создании таблицы'
        );
    }

    eventCloseDB = (err) =>{
        return this.#handleResult(
            err, 
            'Соединение с базой данных закрыто.', 
            'Ошибка при закрытии базы данных'
        );
    }

    event = (err) => {
        return this.#handleResult(err, 'НЕТ ошибок', 'Ошибка');
    }
} // стрелочные функции привязывают this автоматически

module.exports = {
    Events
}