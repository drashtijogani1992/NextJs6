const jsonConfig = {

    API_URL: "https://backend.nextly.shop",
    WEBSITE_URL: "https://nextly.shop",
    IMG_URL: "https://backend.nextly.shop",

    maillerConfig: {
        // host: 'smtp.gmail.com',
        // port: 465,
        // secure: true,
        // tls: { rejectUnauthorized: true },
        service: 'Gmail',
        auth: {
            user: 'drashti.jogani20@gmail.com',
            pass: '@sanjoydasu6@'
        }
    },

    languageData: [
        {
            languageId: 'english',
            locale: 'en',
            name: 'English',
            icon: 'us'
        },
        {
            languageId: 'turkish',
            locale: 'tr',
            name: 'Türkçe',
            icon: 'tr'
        },

    ],

    defaultLanguage: {
        languageId: 'english',
        locale: 'en',
        name: 'English',
        icon: 'us'
    }
}

if (process.env.NODE_ENV == 'development') {
    jsonConfig.API_URL = "admin/"
    jsonConfig.WEBSITE_URL = "website/"
    jsonConfig.IMG_URL = "backend/"
}


module.exports = jsonConfig