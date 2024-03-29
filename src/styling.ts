export function addStyling(base : string)
{
    let styles = generateStylesheet()
    return styles + base;
}

function generateStylesheet()
{
    let style = "";

    style += '<style>'

    style += 'h1'
    style += '{'
    style += '  font-size: 20px;'
    style += '}'

    style += 'h2'
    style += '{'
    style += '  font-size: 18px;'
    style += '}'

    style += 'h3'
    style += '{'
    style += '  font-size: 16px;'
    style += '}'

    style += 'p,li,td'
    style += '{'
    style += '  font-size: 15px;'
    style += '}'

    style += '*'
    style += '{'
    style += '  font-family:Verdana;'
    style += '}'

    style += 'table,tr,th,td'
    style += '{'
    style += '  border-collapse:collapse;'
    style += '  border:1px rgb(127,127,127) solid;'
    style += '}'

    style += 'tr,th,td'
    style += '{'
    style += '  padding: 1rem;'
    style += '}'

    style += '</style>'

    return style;
}