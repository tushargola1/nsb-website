const fs = require('fs');

const html = fs.readFileSync('D:/nsbMain/univet.rstheme.com/html/index.html', 'utf8');

function extractSection(html, startClass) {
    const startIndex = html.indexOf(startClass);
    if (startIndex === -1) return null;
    let sectionStart = html.lastIndexOf('<section', startIndex);
    if (sectionStart === -1) sectionStart = startIndex;
    let count = 0;
    let index = sectionStart;
    while (index < html.length) {
        const nextStart = html.indexOf('<section', index);
        const nextEnd = html.indexOf('</section>', index);
        if (nextStart !== -1 && nextStart < nextEnd) {
            count++;
            index = nextStart + 8;
        } else if (nextEnd !== -1) {
            count--;
            index = nextEnd + 10;
            if (count === 0) {
                return html.substring(sectionStart, index);
            }
        } else {
            break;
        }
    }
    return null;
}

function extractDiv(html, startClass) {
    const startIndex = html.indexOf(startClass);
    if (startIndex === -1) return null;
    let divStart = html.lastIndexOf('<div', startIndex);
    if (divStart === -1) divStart = startIndex;
    let count = 0;
    let index = divStart;
    while (index < html.length) {
        const nextStart = html.indexOf('<div', index);
        const nextEnd = html.indexOf('</div>', index);
        if (nextStart !== -1 && nextStart < nextEnd) {
            count++;
            index = nextStart + 4;
        } else if (nextEnd !== -1) {
            count--;
            index = nextEnd + 6;
            if (count === 0) {
                return html.substring(divStart, index);
            }
        } else {
            break;
        }
    }
    return null;
}

function convertToJSX(htmlString) {
    return htmlString
        .replace(/class=/g, 'className=')
        .replace(/for=/g, 'htmlFor=')
        .replace(/tabindex=/g, 'tabIndex=')
        .replace(/<img([^>]*?[^\/])>/g, '<img$1 />')
        .replace(/<input([^>]*?[^\/])>/g, '<input$1 />')
        .replace(/<br([^>]*?[^\/])>/g, '<br$1 />')
        .replace(/style="([^"]*)"/g, (match, p1) => {
             return "style={{ " + p1.split(';').filter(Boolean).map(s => {
                 let [k,v] = s.split(':');
                 if(!k || !v) return '';
                 k = k.trim().replace(/-([a-z])/g, (g) => g[1].toUpperCase());
                 return k + ": '" + v.trim() + "'";
             }).join(', ') + " }}";
        })
        .replace(/xmlns:xlink=/g, 'xmlnsXlink=')
        .replace(/xml:space=/g, 'xmlSpace=')
        .replace(/fill-rule=/g, 'fillRule=')
        .replace(/clip-rule=/g, 'clipRule=')
        .replace(/clip-path=/g, 'clipPath=')
        .replace(/stroke-width=/g, 'strokeWidth=')
        .replace(/stroke-linecap=/g, 'strokeLinecap=')
        .replace(/stroke-linejoin=/g, 'strokeLinejoin=');
}

const components = [
    { name: 'AboutTwo', class: 'rs-about-area section-space-bottom rs-about-one bg-primary' },
    { name: 'Counter', class: 'rs-counter-area bg-primary' },
    { name: 'Faculty', class: 'rs-faculty-area rs-faculty-one' },
    { name: 'TextSlider', class: 'rs-text-slide-area' },
    { name: 'Team', class: 'rs-team-area' },
    { name: 'ContactForm', class: 'rs-contact-area' },
    { name: 'Gallery', class: 'rs-gallery-area' }
];

for (const comp of components) {
    let sectionHtml = extractSection(html, comp.class);
    if (!sectionHtml) {
        sectionHtml = extractDiv(html, comp.class);
    }
    if (sectionHtml) {
        const jsx = convertToJSX(sectionHtml);
        const template = 'import Link from "next/link";\n\nexport default function ' + comp.name + '() {\n  return (\n    ' + jsx + '\n  );\n}';
        fs.writeFileSync('D:/nsb/my-next-app/component/home/' + comp.name + '.jsx', template);
        console.log('Generated ' + comp.name + '.jsx');
    } else {
        console.log('Could not find ' + comp.name);
    }
}
