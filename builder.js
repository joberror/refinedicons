/**
 * This file when run with node generates the data of the icons and automatically save it
 * in the 'content/data.json' file.
 * So after adding/removing any icons, this file should be run to update the data.
 */

const fs = require("fs");
const path = require("path");
const util = require("util");

// -------------- Runtime and processing -------------------

// Set defaults
let // main svg source
	source = "./public/svg/",
	// data file
	data = "./content/data.json",
	// store category name, icons and total
	allData = [];

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

// save the data captured above in a JSON file with a success and error callback
fs.writeFile(data, JSON.stringify(allData), 'utf8', (err) => {
	if (err) {
		console.log(err);
	} else {
		console.log("Saved data to " + data);
	}
});

// create zip file of the svg folder using adm-zip module in async function with try and catch method
async function zipFolder(source, dest) {
	try {
		const zip = require("adm-zip");
		const zipFile = new zip();
		zipFile.addLocalFolder(source);
		zipFile.writeZip(dest);
		console.log("Zipped folder to " + dest);
	} catch (err) {
		console.log(err);
	}
}
zipFolder(source, './public/svg/refinedicons-all.zip')

// --------------- Debugging and test ----------------------

//console.log(JSON.stringify(allData));
