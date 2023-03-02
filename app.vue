<template>
	<main>
		<section
			class="fixed inset-0 w-[45vw] max-md:w-full max-md:relative bg-[linear-gradient(68.8deg,#EBE4FF_2.16%,#FFFFFF_85.7%)] dark:bg-[linear-gradient(120.52deg,#15131D_36.96%,#070709_94.98%)]"
		>
			<div class="flex flex-col w-full p-8 max-sm:p-2">
				<header class="flex flex-row items-center justify-between w-full">
					<ul class="flex flex-row items-center gap-2">
						<li class="w-8 max-sm:w-6">
							<svg
								class="w-full stroke-theme-primary-200"
								data-url="/ui/logo.svg"
							></svg>
						</li>
						<li
							class="text-2xl font-semibold max-sm:text-xl text-theme-primary-200"
						>
							refinedicons
						</li>
					</ul>
					<ul class="flex flex-row items-center gap-2">
						<li>
							<label
								for="autoSaver"
								class="relative inline-flex items-center cursor-pointer select-none"
							>
								<input
									type="checkbox"
									name="autoSaver"
									id="autoSaver"
									class="sr-only"
									@click="toggleDark()"
								/>
								<span
									class="flex h-[22px] w-[50px] max-sm:w-8 max-sm:h-4 items-center rounded-full bg-[#e8e8e9] p-1 duration-200 dark:bg-theme-primary-400"
								>
									<span
										class="w-4 h-4 duration-200 bg-white rounded-full max-sm:w-3 max-sm:h-3 dark:ml-auto"
									></span>
								</span>
							</label>
						</li>
						<li>
							<!-- TODO Add figma link. -->
							<a
								href="#"
								title="Get it on Figma as a component"
								class="flex flex-row px-4 py-3 font-bold text-center duration-500 border-solid rounded ring-1 ring-inset group max-sm:px-2 max-sm:py-2 ring-theme-primary-100 text-theme-primary-900 hover:bg-theme-primary-900 hover:text-white hover:ring-0 dark:ring-theme-primary-300"
							>
								<span class="hidden w-6 h-6 max-md:inline-flex">
									<svg
										data-url="/ui/figma.svg"
										class="w-full stroke-theme-primary-900 group-hover:stroke-white"
									></svg>
								</span>
								<span class="max-md:hidden">Figma</span>
							</a>
						</li>
						<li>
							<a
								href="/svg/refinedicons-all.zip"
								title="Download entire icon package"
								class="flex flex-row justify-between px-4 py-3 duration-500 rounded group max-sm:px-2 max-sm:py-2 bg-theme-primary-300 hover:bg-theme-primary-900"
							>
								<span class="pr-6 font-bold text-white max-md:hidden"
									>v{{ details.version }}</span
								>
								<span class="w-6 h-6">
									<svg
										data-url="/ui/package.svg"
										class="w-full stroke-theme-primary-100 group-hover:stroke-white transition-all duration-[.3s] ease-in-out group-hover:transition-all group-hover:duration-[.3s] group-hover:ease-in-out"
									></svg>
								</span>
							</a>
						</li>
					</ul>
				</header>
				<div
					class="w-full px-6 flex flex-row divide-y divide-x divide-[#E0E5FE] dark:divide-[#181C2D] flex-wrap justify-center py-[8vh] mt-8 max-sm:py-[2vh] max-sm:mt-2 max-sm:px-2 bg-[linear-gradient(170.42deg,#FEFDFF_33.23%,#FFFFFF_33.23%,#EEEEFF_81.16%)] dark:bg-[linear-gradient(65.15deg,#18161C_-17.14%,#171224_45.94%,#100F13_79.24%)]"
				>
					<ul
						v-for="rom in svgPpt"
						class="box-border flex flex-col w-1/3 px-12 py-10 max-sm:w-1/2 max-sm:px-8 max-sm:py-8"
					>
						<li class="mb-4 text-[#A1A2BA] dark:text-theme-primary-300 text-lg">
							{{ rom.name }}
						</li>
						<li class="inline-flex flex-row items-center">
							<span class="w-8 h-8">
								<svg
									:data-url="'/ui/' + rom.svg"
									class="w-full stroke-[#ABACF1]"
								></svg>
							</span>
							<em
								class="ml-4 not-italic font-semibold text-theme-primary-400 dark:text-[#A1A2BA]"
								>{{ rom.ppt }}</em
							>
						</li>
					</ul>
				</div>
			</div>
			<div class="mx-8 max-w-[380px] max-sm:max-w-[340px] pb-8">
				<p class="text-3xl text-theme-primary-400 dark:text-theme-primary-100">
					Crafted with care: unique icons for web developers and designers.
				</p>
				<small class="inline-block mt-3 text-gray-500">
					Please note that these icons follows
					<a
						class="underline duration-400 text-theme-primary-900 hover:text-theme-primary-300"
						href="https://m2.material.io/design/iconography/system-icons.html"
						title="Google Material System icon guide"
					>
						Google Material System icons</a
					>
					guide with little tweaks.
				</small>
				<ul
					class="flex flex-row gap-4 px-6 py-4 mt-8 divide-x-2 rounded w-fit text-xl bg-[#5d5def1c] border-theme-primary-100 dark:bg-zinc-900 shadow-[3px_4px] transition-all duration-[.1s] ease-in-out shadow-theme-primary-900 hover:shadow-[5px_6px] hover:shadow-theme-primary-300"
				>
					<li class="text-theme-primary-400 dark:text-theme-primary-200">
						<span class="text-2xl font-semibold">{{ details.numOfIcons }}</span>
						<em class="italic">I</em>cons
					</li>
					<li
						class="pl-4 border-black text-theme-primary-400 dark:border-theme-primary-100 dark:text-theme-primary-200"
					>
						<span class="text-2xl font-semibold">{{
							details.numOfCategory
						}}</span>
						<em class="italic">C</em>ategories
					</li>
				</ul>
			</div>
		</section>
		<section class="w-[55vw] ml-auto p-8 max-md:w-full">
			<div class="flex items-center justify-end px-6 pb-8">
				<input
					type="text"
					placeholder="Search for icons"
					id="search"
					class="px-4 py-4 bg-theme-primary-300 w-[350px] outline-none border-0"
					v-model="search"
				/>
			</div>
			<div class="flex flex-wrap justify-center gap-16">
				<svgGrid
					v-for="(cat, key) in filteredData(search)"
					:cat="cat"
					:key="key"
				/>
			</div>
		</section>
	</main>
	<footer></footer>
</template>

<script>
import data from "@/content/data.json";
const allData = data;

export default {
	data() {
		let svgLoad;
		return {
			search: "",
			filteredData(search) {
				return allData.filter((item) =>
					item.icons.find((icon) => icon.match(search))
				);
			},
			svgLoad,
		};
	},
	mounted() {
		this.svgLoad = () => {
			// Find our SVGs.
				const svgs = document.querySelectorAll("svg[data-url]");
				const svgsLen = svgs.length;
				// Loop and process.
				for (let i = 0; i < svgsLen; ++i) {
					// Grab the URL and delete the attribute; we no longer
					// need it.
					if (svgs[i].innerHTML) svgs[i].textContent = ""
					let url = svgs[i].getAttribute("data-url");
					svgs[i].removeAttribute("data-url");
					// We'll let another function handle the actual fetching
					// so we can use the async modifier.
					fetchSvg(url, svgs[i]);
				};
		};
		let /**
			 * Fetch the SVG
			 * @param {String} url URL
			 * @param {Element} el Element
			 * @returns {Promise<void>}
			 */
			fetchSvg = async (url, el) => {
				// Dog bless fetch() and await, though be advised you'll need
				// to transpile this down to ES5 for older browsers.
				let response = await fetch(url);
				let data = await response.text();

				// This response should be an XML document we can parse.
				const parser = new DOMParser();
				const parsed = parser.parseFromString(data, "image/svg+xml");

				// The file might not actually begin with "<svg>", and
				// for that matter there could be none, or many.
				let /** @type {SVGElement} */ svg = parsed.getElementsByTagName("svg");

				if (svg.length) {
					// But we only want the first.
					svg = svg[0];

					// Copy over the attributes first.
					const attr = svg.attributes;
					const attrLen = attr.length;
					for (let i = 0; i < attrLen; ++i) {
						if (attr[i].specified) {
							// Merge classes.
							if ("class" === attr[i].name) {
								const classes = attr[i].value
									.replace(/\s+/g, " ")
									.trim()
									.split(" ");
								const classesLen = classes.length;
								for (let j = 0; j < classesLen; ++j) {
									el.classList.add(classes[j]);
								}
							}
							// Add/replace anything else.
							else {
								el.setAttribute(attr[i].name, attr[i].value);
							}
						}
					}
					// Now transfer over the children. Note: IE does not
					// assign an innerHTML property to SVGs, so we need to
					// go node by node.
					while (svg.childNodes.length) {
						el.appendChild(svg.childNodes[0]);
					}
				}
			};
		this.svgLoad();
	},
	updated() {
		this.svgLoad();
	}
};
</script>

<script setup>
import { useDark, useToggle } from "@vueuse/core";
import { ref } from "vue";
import svgGrid from "@/components/svgGrid.vue";

useHead({
	htmlAttrs: {
		lang: "en",
	},
});

// toggle Dark and Light theme
const isDark = useDark();
const toggleDark = useToggle(isDark);

// assign data
const details = {
	version: 1.6,
	numOfCategory: Object.keys(allData).length,
	numOfIcons: allData.reduce((a, b) => a + b.total, 0),
};

// SVG illustrative properties
const properties = [
	{
		name: "Corner",
		svg: "stroke-corner.svg",
		ppt: "1pt round",
	},
	{
		name: "Padding",
		svg: "icon-padding.svg",
		ppt: "2pt",
	},
	{
		name: "Weight",
		svg: "stroke.svg",
		ppt: "2pt",
	},
	{
		name: "Align",
		svg: "stroke-align.svg",
		ppt: "center",
	},
	{
		name: "Edge",
		svg: "stroke-edges.svg",
		ppt: "round",
	},
	{
		name: "Size",
		svg: "icon-size.svg",
		ppt: "24pt",
	},
];

const svgPpt = ref(properties);
</script>
