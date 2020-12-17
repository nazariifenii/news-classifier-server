const axios = require("axios");

module.exports = {
  processText,
};

const pythonServerApi =
  process.env.CLASSIFIER_API_URL || "http://localhost:5000";

async function processText(title, text) {
  console.log("Processing text: ", title, text);
  let classificationResult;
  await axios({
    method: "post",
    url: pythonServerApi + "/classify-news",
    headers: {},
    data: {
      title: title,
      text: text,
    },
  })
    .then((response) => {
      console.log(
        "makeClassification resp: ",
        response.data.classification_result
      );
      classificationResult = response.data.classification_result;
    })
    .catch((error) => {
      console.log(error);
    });
  return { processingResult: classificationResult };
}
