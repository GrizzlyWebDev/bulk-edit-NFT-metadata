const fs = require("fs");

let fileNames = fs.readdirSync("input");

// loop through the files in the input folder
for (let i = 0; i < fileNames.length; i++) {
  // read the json file
  fs.readFile(`input/${fileNames[i]}`, (err, data) => {
    // if there is an error, log it
    if (err) {
      console.log(err);
    } else {
      // parse the json file into an object
      let obj = JSON.parse(data);

      ////////////////////////////////////////////////
      // edit any non-unique key on the object here //
      ///////////////////////////////////////////////

      // EXAMPLE: change the name
      obj.name = "My NFT";

      // EXAMPLE: change the description
      obj.description = "My NFT description";

      // EXAMPLE: change the image url to the new ipfs url with the edition number
      obj.image = `ipfs://Qmbw9NFAH8YKtUKRstaXGDfteDiqbBgrP3pzi4AEbEAEfQ/${obj.edition}.png`;

      // stringify the object
      editedJSON = JSON.stringify(obj, null, 2);

      // write the new json file to the output folder
      fs.writeFile(`output/${fileNames[i]}`, editedJSON, (err) => {
        err
          ? console.log(err)
          : console.log(`json ${i + 1 + "/" + fileNames.length}`);
      });
    }
  });
}
