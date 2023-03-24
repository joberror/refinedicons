/**
 * This file when run with node generates the data of the icons and automatically save it
 * in the 'content/data.json' file.
 * So after adding/removing any icons, this file should be run to update the data.
 */

const fs = require("fs");
const zip = require("adm-zip");
const zipFile = new zip()

// -------------- Runtime and processing -------------------

// Set defaults
let // main svg source
source = "./public/svg/";
// data file
let
// main svg source
data = "./content/data.json";
// store category name, icons and total
let
allData = [];
let
// svg zip file
refined = `${source}refinedicons-all.zip`;

// A function to delete a file
async function deleteFile(file) {
	fs.rmSync(file, {recursive: true, force: true})
}

// Delete file and create a new generated zip file
deleteFile(refined).then(() => {
	// read svg folder, store category and icons in an array
	fs.readdirSync(source).forEach((cat) => {
		let tmp = {};
		tmp.category = cat;
		tmp.icons = fs
			.readdirSync(source + cat)
			.map((file) => file.split(".").slice(0, -1).join("."));
		tmp.total = tmp.icons.length;
		allData.push(tmp);
	});
}).then(() => {
	// save the data captured above in a JSON file with a success and error callback
	fs.writeFile(data, JSON.stringify(allData), "utf8", (err) => {
		if (err) {
			console.log(err);
		} else {
			console.log(`Saved data to ${data}`);
		}
	});
}).then(() => {
	// zip the svg folder
	zipFile.addLocalFolder(source);
	zipFile.writeZip(refined);
	console.log(`Zipped folder saved to ${refined}`);
}).catch((error) => {
	console.error('Error:', error)
});

// --------------- Debugging and test ----------------------

//console.log(JSON.stringify(allData));
