const fs = require('fs');

const ex_01 = () => { // по группе или по номеру группы
    const code = fs.readFileSync('./index_01.html', 'utf8');

    let highlighted = code
        .replace(
            /\b(let|const|var|function|return)\b/g, 
            // '<span class="keyword">$&</span>'
            '<span class="keyword">$1</span>'
            // '<b>$&</b>'
        );
    
    require('fs')
        .writeFileSync('./index_01_.html', highlighted, 'utf8');
}

const ex_02 = () => { // со стилями CSS
    const styles = `
        .keyword { color: #d73a49; font-weight: bold; }
        .string { color: #032f62; }
        .number { color: #005cc5; }
        .comment { color: #6a737d; font-style: italic; }
        .function { color: #6f42c1; font-weight: bold; }
        pre { background: #e9f4e9; padding: 8px; border-radius: 6px; }
    `;

    const code = fs.readFileSync('./index_02.html', 'utf8');
    
    codeReplaced = code // цепочка функций замены
        .replace(
            /\b(let|const|var|function|return)\b/g, 
            '<span class="keyword">$&</span>')
        .replace( // числа
            /\b(\d+)\b/g,
            '<span class="number">$&</span>'
        )
        // .replace( // функции
        //     /(\w+)(?=\s*\()/g,
        //     '<span class="function">$&</span>'
        // );
        .replace( // функции - НЕ методы
            /(?<!\.)\b([A-Za-z_][A-Za-z0-9_]*)\s*\(/g,
            '<span class="function">$&</span>'
        );

    const codeWithStyles = codeReplaced // добавляем в <head> стили
        .replace(/(<head[^>]*>)/i, `$1<style>${styles}</style>`);
    
    require('fs')
        .writeFileSync('./index_02_.html', codeWithStyles, 'utf8');
}

ex_01();
// ex_02();


/*
    /(<head[^>]*>)/i
- ищет открывающий тег <head> 
- возможно с атрибутами, например <head lang="ru">
- [^>]* — означает любые символы, кроме ">"
- флаг i — нечувствителен к регистру (<HEAD>, <head>, <Head>)
- $1 — подставляет найденный тег <head ... >
- добавляем после него: <style>...</style>


$& - всё совпавшее выражение (целиком)
$1 - содержимое первой группы
$2 - содержимое второй группы и т.д.
*/