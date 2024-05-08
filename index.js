const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 3000;

// CORS options
const corsOptions = {
    origin: 'http://localhost:4200', // Allow only Angular app to access
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

// Enable CORS with options
app.use(cors(corsOptions));

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

const axios = require('axios');

async function fetchHTML(url) {
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error('Error fetching HTML:', error);
        return null;
    }
}


const { JSDOM } = require('jsdom');

async function parseHTML(html) {
    console.log('html: ', html)
    const dom = new JSDOM(html);
    const document = dom.window.document;

    let jsonResult = {
        title: document.querySelector('title')?.textContent,
        parts: []
    };

    const parts = document.querySelectorAll('.part');
    parts.forEach(part => {
        let partObj = {
            partTitle: part.querySelector('h1')?.textContent,
            sections: []
        };

        const sections = part.querySelectorAll('.section');
        sections.forEach(section => {
            let sectionObj = {
                sectionTitle: section.querySelector('h2')?.textContent,
                content: section.textContent.trim()
            };

            partObj.sections.push(sectionObj);
        });

        jsonResult.parts.push(partObj);
    });

    return jsonResult;
}

app.get('/parse', async (req, res) => {
    const url = 'https://www.ecfr.gov/api/renderer/v1/content/enhanced/2024-03-01/title-2';
    const html = await fetchHTML(url);
    if (html) {
        const data = await parseHTML(html);
        res.json(data);
    } else {
        res.status(500).send('Failed to fetch HTML');
    }
});