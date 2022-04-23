const form = document.querySelector('form');
const input = document.querySelector('.proxinput');




/*

Witness My mess and or bad coding!

*/



form.addEventListener('submit', async event => {
    event.preventDefault();
    window.navigator.serviceWorker.register('./sw.js', {
        scope: __uv$config.prefix
    }).then(() => {
        let url = input.value.trim();
        if (!isUrl(url)) url = 'https://www.google.com/search?q=' + url;
        else if (!(url.startsWith('https://') || url.startsWith('http://'))) url = 'http://' + url;
        var urle = "http://" + document.domain + ":8080" + __uv$config.prefix + __uv$config.encodeUrl(url);
        if (urle) {
            var win; {
                if (win) { win.focus(); } else {
                    win = window.open();
                    win.document.body.style.margin = '0';
                    win.document.body.style.height = '100vh';
                    var iframe = win.document.createElement('iframe');
                    iframe.style.border = 'none';
                    iframe.style.width = '100%';
                    iframe.style.height = '100%';
                    iframe.style.margin = '0';
                    iframe.src = urle;
                    win.document.body.appendChild(iframe)
                }
            }
        }

        //window.location.href = __uv$config.prefix + __uv$config.encodeUrl(url);
    });
});


document.querySelector('.ultra-violet-btn').addEventListener('click', async event => {
    event.preventDefault();
    window.navigator.serviceWorker.register('./sw.js', {
        scope: __uv$config.prefix
    }).then(() => {
        let url = input.value.trim();
        if (!isUrl(url)) url = 'https://www.google.com/search?q=' + url;
        else if (!(url.startsWith('https://') || url.startsWith('http://'))) url = 'http://' + url;
        var urle = "http://" + document.domain + ":8080" + __uv$config.prefix + __uv$config.encodeUrl(url);
        if (urle) {
            var win; {
                if (win) { win.focus(); } else {
                    win = window.open();
                    win.document.body.style.margin = '0';
                    win.document.body.style.height = '100vh';
                    var iframe = win.document.createElement('iframe');
                    iframe.style.border = 'none';
                    iframe.style.width = '100%';
                    iframe.style.height = '100%';
                    iframe.style.margin = '0';
                    iframe.src = urle;
                    win.document.body.appendChild(iframe)
                }
            }
        }

    });
});


const womurl = "your url here/main/"

document.querySelector(".womginx-btn").addEventListener('click', function () {

    let url = input.value.trim();
    if (!isUrl(url)) url = 'https://www.google.com/search?q=' + url;
    else if (!(url.startsWith('https://') || url.startsWith('http://'))) url = 'https://' + url;
    let womurle = womurl + url;
    if (womurle) {
        var win; {
            if (win) { win.focus(); } else {
                win = window.open();
                win.document.body.style.margin = '0';
                win.document.body.style.height = '100vh';
                var iframe = win.document.createElement('iframe');
                iframe.style.border = 'none';
                iframe.style.width = '100%';
                iframe.style.height = '100%';
                iframe.style.margin = '0';
                iframe.src = womurle;
                win.document.body.appendChild(iframe)
            }
        }
    }
});



function isUrl(val = '') {
    if (/^ http(s ?): \/\//.test(val) || val.includes('.') && val.substr(0, 1) !== ' ') return true;
    return false;
};
