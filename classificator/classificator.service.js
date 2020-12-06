module.exports = {
    processText
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function processText(text) {
    console.log("Processing text: ", text)
    await sleep(1000);
    return {
        "sport": "0.7",
        "politics": "0.3"
    }
}