let APP_TYPE;
let APP_DATE;
let APP_NAME;
let APP_DESC;
let APP_IMAGES_DIR;
let APP_IMAGES = []
let APP_SKILLS = []
let APP_TAGS = []

const initData = appJSON => {
    APP_TYPE = appJSON.CAT
    APP_NAME = appJSON.NAME
    APP_DATE = appJSON.DATE
    APP_DESC = appJSON.DESC
    APP_IMAGES_DIR = appJSON.PREVIEW.DIR

    for (let img of appJSON.PREVIEW.ITEMS) APP_IMAGES.push({ src: img.src, caption: img.caption })
    for (let skill of appJSON.SKILLS) APP_SKILLS.push(skill)
    for (let tag of appJSON.TAGS) APP_TAGS.push(tag)
}

const params = getParamsOf(window.location)

for (let key in params)
    if (params.hasOwnProperty(key) && key == 'key') {
        key = params[key].toLowerCase()

        readJsonFrom('json/apps_data.json', json => {
            const appJSON = json[key]

            if (appJSON != undefined) {
                initData(appJSON)

                loadScript('js/ui.js').onload = () =>
                    loadScript('js/data.js').onload = () =>
                        loadScript('js/highlight.pack.js').onload = () =>
                            document.querySelectorAll('.code-snippet').forEach(hljs.highlightBlock)

            } else _404()
        })
    } else _404()
