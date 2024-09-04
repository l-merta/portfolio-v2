const sloupky = document.querySelectorAll(".uvod .bg .sloup");
const taCss = document.querySelectorAll(".css .cont .codeCont .code-css");
const taHtml = document.querySelectorAll(".css .cont .codeCont .code-html");


for(let i = 0; i < taHtml.length; i++) {
  fetchCSSContent("styles/example"+(i+1)+".css", ".code"+(i+1)+"-css");
  fetchHTMLContent(".example"+(i+1)+"", ".code"+(i+1)+"-html");
  taCss[i].addEventListener('input', () => {updateCSS(taCss[i], (i+1))});
  taCss[i].addEventListener('keydown', handleTabKey);
  taHtml[i].addEventListener('input', () => {updateHTML(taHtml[i], i+1)});
  taHtml[i].addEventListener('keydown', handleTabKey);
}

//
function switchCodeEditor(index, place) {
  const codeCont = document.querySelector(".css .cont .codeCont"+ place);
  //
  const codes = codeCont.querySelectorAll(".code");
  codes[0].classList.remove("disabled");
  codes[1].classList.remove("disabled");
  codes[index].classList.add("disabled");
  //
  const buttons = codeCont.querySelectorAll("button");
  buttons[0].classList.remove("active");
  buttons[1].classList.remove("active");
  //
  codeCont.classList.remove("codeCont-css");
  codeCont.classList.remove("codeCont-html");
  if(index == 0) {
    buttons[1].classList.add("active");
    codeCont.classList.add("codeCont-css");
  }
  if(index == 1) {
    buttons[0].classList.add("active");
    codeCont.classList.add("codeCont-html");
  }
}
function updateCSS(textarea, index) {
    const cssCode = textarea.value;
    let styleElement = document.querySelector('#dynamic-style-'+index);
    
    if (!styleElement) {
        styleElement = document.createElement('style');
        styleElement.id = 'dynamic-style-'+index;
        document.head.appendChild(styleElement);
    }
    styleElement.innerHTML = cssCode;
}
function updateHTML(textarea, index) {
    const htmlCode = textarea.value;
    let styleElement = document.querySelector(".example"+index);
    styleElement.innerHTML = htmlCode;
}
function handleTabKey(event) {
    if (event.key === 'Tab') {
        event.preventDefault();
        
        const textarea = event.target;
        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;

        // Set textarea value to text before caret + tab + text after caret
        textarea.value = textarea.value.substring(0, start) + '\t' + textarea.value.substring(end);

        // Move caret to after the inserted tab
        textarea.selectionStart = textarea.selectionEnd = start + 1;
    }
}
function fetchHTMLContent(cls, teHtmlCls) {
    const example = document.querySelector(cls).innerHTML.trim();
    const te = document.querySelector(teHtmlCls);
    //console.log(example);
    const formattedContent = formatHTML(example);//example.replace(/></g, '>\n    <');
    //console.log(formattedContent)
    te.value = formattedContent;
}
function fetchCSSContent(url, cls) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            console.log(data);
            document.querySelector(cls).value = data;
            updateCSS();
        })
        .catch(error => console.error('Error fetching the CSS file:', error));
}
function formatHTML(html) {
  let formatted = '';
  const regex = /(>)(<)(\/*)/g;
  const content = html.replace(regex, '$1\n$2$3').split('\n').map(line => line.trim());
  let pad = 0;
  content.forEach(line => {
      if (line.match(/^<\/\w/)) {
          pad = Math.max(pad - 1, 0);
      }

      const indentation = '    '.repeat(pad);
      formatted += indentation + line + '\n';

      if (line.match(/^<\w([^>]*[^\/])?>$/) && !line.match(/<input[^>]*>/)) {
          pad++;
      }
  });

  return formatted.trim();
}
//
function sloupHover(id) {
  fonts = ["var(--f4)", "var(--f2)", "var(--f11)", "var(--f8)", "var(--f9)"];
  document.querySelector(".uvod h1").style = "font-family: "+fonts[id]+";";
  document.querySelector(".uvod p").style = "font-family: "+fonts[id]+";";
  document.querySelector(".uvod button").style = "font-family: "+fonts[id]+";";
}