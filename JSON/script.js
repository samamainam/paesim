const fs = require('fs');

// Read the JSON file
fs.readFile('./Packages.json', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }

    const jsonData = JSON.parse(data);
    let extractedData = [];

    // Extract the desired entries from each object
    for (let entry of jsonData.data) {
        if (entry.country_code && entry.title && entry.slug && entry.image && entry.image.width && entry.image.height && entry.image.url) {
            const extractedEntry = {
                slug: entry.slug,
                country_code: entry.country_code,
                title: entry.title,
                image: {
                    width: entry.image.width,
                    height: entry.image.height,
                    url: entry.image.url
                }
            };
            extractedData.push(extractedEntry);
        }
    }

    // Write the extracted data to a separate JSON file
    fs.writeFile('extractedData.json', JSON.stringify(extractedData, null, 2), (err) => {
        if (err) {
            console.error('Error writing to the file:', err);
            return;
        }
        console.log('Extracted data have been written to extractedData.json');
    });
});
