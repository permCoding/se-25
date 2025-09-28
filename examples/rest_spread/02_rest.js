const welcome = (prefix, ...names) => {
    names
        .forEach(name => console.log(`${prefix}, ${name}`));
}

welcome("Привет", "Андрей", "Оля", "Саша");