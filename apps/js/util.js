const create = tag => { return document.createElement(tag) }

const appendToHead = child => { return document.head.appendChild(child) }
const appendToBody = child => { return document.body.appendChild(child) }

const removeFromHead = child => { return document.head.removeChild(child) }
const removeFromBody = child => { return document.body.removeChild(child) }

const createLink = href => {
    const link = create('link')
    link.rel = 'stylesheet'
    link.href = href
    return link
}

const createScript = src => {
    const script = create('script')
    script.src = src
    return script
}

const createLi = html => {
    let li = create('li')
    li.innerHTML = html
    return li
}

const loadLink = href => { return appendToHead(createLink(href)) }

const loadScript = src => { return appendToHead(createScript(src)) }


const hide = elem => elem.classList.add('hide')

const _404 = () => window.location = 'error.html'


const readJsonFrom = (jsonFile, callback) => {
    try {
        let xmlhttp = new XMLHttpRequest()

        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200)
                callback(JSON.parse(this.responseText))
        }
        xmlhttp.open("GET", jsonFile, true)
        xmlhttp.send()

    } catch (e) {
        // TODO: Display in custom alert
        console.exception('Exception thrown in readJsonFrom()', e)
    }
}

/**
 * Get the URL parameters
 * source: https://css-tricks.com/snippets/javascript/get-url-variables/
 * @param  {String} url The URL
 * @return {Object}     The URL parameters
 */
const getParamsOf = url => {
    const a = document.createElement('a')
    a.href = url
    const query = a.search.substring(1)
    const pairs = query.split('&')
    let params = {}

    for (let i = 0; i < pairs.length; i++) {
        let pair = pairs[i].split('=');
        params[pair[0]] = decodeURIComponent(pair[1])
    }
    return params
}

const includeHTML = () => {
    const INCLUDE_CLASS_NAME = 'include'
    const INCLUDE_ATTRIBUTE = 'file'
    const INCLUDE_ELEMS = document.getElementsByClassName(INCLUDE_CLASS_NAME)

    for (const elem of INCLUDE_ELEMS) {
        // search for elements with a certain atrribute
        let file = elem.getAttribute(INCLUDE_ATTRIBUTE)

        if (file) {
            // make an HTTP request using the attribute value as the file name
            let xhttp = new XMLHttpRequest()

            xhttp.onreadystatechange = function () {
                if (this.readyState == 4) {
                    let content
                    if (this.status == 200) content = this.responseText
                    else if (this.status == 404) content = "Page not found."
                    elem.innerHTML = content

                    // remove the attribute, and call this function once more
                    elem.removeAttribute(INCLUDE_ATTRIBUTE)
                    includeHTML()
                }
            }
            xhttp.open("GET", file, true)
            xhttp.send()

            // exit the function
            return
        }
    }
}

window.onload = () => includeHTML()