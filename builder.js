/**
 * This file when run with node generates the data of the icons and automatically save it
 * in the 'content/data.json' file.
 * So after adding/removing any icons, this file should be run to update the data.
 */

const fs = require("fs");
const zip = require("adm-zip");
const zipFile = new zip();

// -------------- Runtime and processing -------------------

// Set defaults
const // main svg source
	source = "./public/svg/";
// data file
const // main svg source
	data = "./content/data.json";
// store category name, icons and total
const allData = [];
const // svg zip file
	refined = `${source}refinedicons-all.zip`;
const // folder-structure
	structure = `${source}folder-structure.txt`;

// A function to delete a file
async function deleteFiles(files) {
	for (const file of files) {
		fs.rmSync(file, { recursive: true, force: true });
	}
}

// Delete files and create a new generated zip file
deleteFiles([refined, structure])
	.then(() => {
		// read svg folder, store category and icons in an array
		fs.readdirSync(source).forEach((cat) => {
			const tmp = {};
			tmp.category = cat;
			tmp.icons = fs
				.readdirSync(source + cat)
				.map((file) => file.split(".").slice(0, -1).join("."));
			tmp.total = tmp.icons.length;
			allData.push(tmp);
		});
	})
	.then(() => {
		// save the data captured above in a JSON file with a success and error callback
		fs.writeFile(data, JSON.stringify(allData), "utf8", (err) => {
			if (err) {
				console.log(err);
			} else {
				console.log(`Saved data to ${data}`);
			}
		});
	})
	.then(() => {
		// Print and output svg folder structure to a text-file
		function printFolderStructure(
			path,
			prefix = "",
			isLast = true,
			output = ""
		) {
			const files = fs.readdirSync(path);
			const arrows = isLast ? "└── " : "├── ";
			files.forEach((file, index) => {
				const filePath = `${path}/${file}`;
				const stats = fs.statSync(filePath);
				const isDirectory = stats.isDirectory();
				const symbolPrefix = isLast ? "    " : "│   ";
				const fileName = isDirectory ? `${file}/` : file;
				output += prefix + arrows + fileName + "\n";
				if (isDirectory) {
					const newPrefix = prefix + symbolPrefix;
					const newLast = index === files.length - 1;
					output = printFolderStructure(filePath, newPrefix, newLast, output);
				}
			});

			return output;
		}

		const folderStructure = printFolderStructure(source);
		fs.writeFileSync(structure, folderStructure);
		console.log("Folder structure saved!");
	})
	.then(() => {
		// zip the svg folder
		zipFile.addLocalFolder(source);
		zipFile.writeZip(refined);
		console.log(`Zipped folder saved to ${refined}`);
	})
	.catch((error) => {
		console.error("Error:", error);
	});

// --------------- Debugging and test ----------------------

//console.log(JSON.stringify(allData));
