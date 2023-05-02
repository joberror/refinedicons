<template>
	<main>
		<section
			class="fixed inset-0 w-[45vw] bg-[linear-gradient(68.8deg,#EBE4FF_2.16%,#FFFFFF_85.7%)] dark:bg-[linear-gradient(120.52deg,#15131D_36.96%,#1C1A29_94.98%)] max-md:relative max-md:w-full"
		>
			<div class="flex w-full flex-col p-8 max-sm:p-2">
				<header class="flex w-full flex-row items-center justify-between">
					<ul class="flex flex-row items-center gap-2">
						<li class="w-8 max-sm:w-6">
							<svg
								class="w-full stroke-theme-primary-200"
								data-url="/ui/logo.svg"
							></svg>
						</li>
						<li
							class="text-2xl font-semibold text-theme-primary-200 max-sm:text-xl"
						>
							refinedicons
						</li>
					</ul>
					<ul class="flex flex-row items-center gap-2">
						<li>
							<label
								for="autoSaver"
								class="relative inline-flex cursor-pointer select-none items-center"
							>
								<input
									id="autoSaver"
									type="checkbox"
									name="autoSaver"
									class="sr-only"
									@click="toggleDark()"
								/>
								<span
									class="flex h-[22px] w-[50px] items-center rounded-full bg-[#e8e8e9] p-1 duration-200 dark:bg-theme-primary-400 max-sm:h-4 max-sm:w-8"
								>
									<span
										class="h-4 w-4 rounded-full bg-white duration-200 dark:ml-auto max-sm:h-3 max-sm:w-3"
									></span>
								</span>
							</label>
						</li>
						<li>
							<!-- TODO Add figma link. -->
							<a
								href="#"
								title="Get it on Figma as a component"
								class="group flex flex-row rounded border-solid px-4 py-3 text-center font-bold text-theme-primary-900 ring-1 ring-inset ring-theme-primary-100 duration-500 hover:bg-theme-primary-900 hover:text-white hover:ring-0 dark:ring-theme-primary-300 max-sm:p-2"
							>
								<span class="hidden h-6 w-6 max-md:inline-flex">
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
								class="group flex flex-row justify-between rounded bg-theme-primary-300 px-4 py-3 duration-500 hover:bg-theme-primary-900 max-sm:p-2"
							>
								<span class="pr-6 font-bold text-white max-md:hidden"
									>v{{ details.version }}</span
								>
								<span class="h-6 w-6">
									<svg
										data-url="/ui/package.svg"
										class="w-full stroke-theme-primary-100 transition-all duration-[.3s] ease-in-out group-hover:stroke-white group-hover:transition-all group-hover:duration-[.3s] group-hover:ease-in-out"
									></svg>
								</span>
							</a>
						</li>
					</ul>
				</header>
				<div
					class="mt-8 flex w-full flex-row flex-wrap justify-center divide-x divide-y divide-[#E0E5FE] bg-[linear-gradient(170.42deg,#FEFDFF_33.23%,#FFFFFF_33.23%,#EEEEFF_81.16%)] px-6 py-[8vh] dark:divide-[#181C2D] dark:bg-[linear-gradient(65.15deg,#18161C_-17.14%,#171224_45.94%,#1C1A29_79.24%)] max-sm:mt-2 max-sm:px-2 max-sm:py-[2vh]"
				>
					<ul
						v-for="rom in svgPpt"
						:key="rom.id"
						class="box-border flex w-1/3 flex-col px-12 py-10 max-sm:w-1/2 max-sm:p-8"
					>
						<li class="mb-4 text-lg text-[#A1A2BA] dark:text-theme-primary-300">
							{{ rom.name }}
						</li>
						<li class="inline-flex flex-row items-center">
							<span class="h-8 w-8">
								<svg
									:data-url="'/ui/' + rom.svg"
									class="w-full stroke-theme-primary-900/50"
								></svg>
							</span>
							<em
								class="ml-4 font-semibold not-italic text-theme-primary-400 dark:text-stone-300"
								>{{ rom.ppt }}</em
							>
						</li>
					</ul>
				</div>
			</div>
			<div class="mx-8 max-w-[380px] pb-8 max-sm:max-w-[340px]">
				<p class="text-3xl text-theme-primary-400 dark:text-theme-primary-100">
					Crafted with care: unique icons for web developers and designers.
				</p>
				<small class="mt-3 inline-block text-gray-500">
					Please note that these icons follows
					<a
						class="text-theme-primary-900 underline duration-300 hover:text-theme-primary-300"
						href="https://m2.material.io/design/iconography/system-icons.html"
						title="Google Material System icon guide"
					>
						Google Material System icons</a
					>
					guide with little tweaks.
				</small>
				<ul
					class="mt-8 flex w-fit flex-row gap-4 divide-x-2 rounded border-theme-primary-100 bg-[#5d5def1c] px-6 py-4 text-xl shadow-[3px_4px] shadow-theme-primary-900 transition-all duration-[.1s] ease-in-out hover:shadow-[5px_6px] hover:shadow-theme-primary-300 dark:bg-zinc-900 max-sm:mx-auto"
				>
					<li class="text-theme-primary-400 dark:text-theme-primary-200">
						<span class="text-2xl font-semibold">{{ details.numOfIcons }}</span>
						<em class="italic">I</em>cons
					</li>
					<li
						class="border-black pl-4 text-theme-primary-400 dark:border-theme-primary-100 dark:text-theme-primary-200"
					>
						<span class="text-2xl font-semibold">{{
							details.numOfCategory
						}}</span>
						<em class="italic">C</em>ategories
					</li>
				</ul>
			</div>
		</section>
		<section class="relative ml-auto w-[55vw] max-md:w-full">
			<ul class="absolute z-10 inline-flex w-full justify-center pt-10 text-lg text-theme-primary-400 dark:text-theme-primary-300 max-sm:bottom-0 max-sm:pb-10">
				<li>made with</li>
				<li class="inline-flex">
					<span class="mx-2 inline-flex h-6 w-6">
						<svg class="h-full w-full fill-theme-primary-900" data-url="ui/love.svg"></svg>
					</span>
				</li>
				<li>
					by <a class="text-theme-primary-900 hover:underline" href="https://iamjoberror.com" title="Olakunle Bolarinwa's website">Olakunle Bolarinwa</a>
				</li>
			</ul>
			<div class="sticky top-0 z-20 ml-auto w-fit py-8 pr-8">
				<form
					class="group flex flex-row justify-between rounded-full border bg-white p-2 ring-1 ring-theme-primary-100 ring-offset-4 ring-offset-white transition-all duration-300 hover:w-[20vw] hover:pl-4 dark:border-transparent dark:bg-theme-primary-300 dark:ring-theme-primary-400 dark:ring-offset-theme-primary-300 max-sm:hover:w-[80vw]"
					@submit.prevent="submitSearch"
				>
					<input
						type="text"
						autocomplete="off"
						placeholder="Search for icons"
						class="hidden w-1/2 max-w-max border-0 bg-transparent text-black outline-none placeholder:text-black group-hover:inline-flex dark:text-white dark:placeholder:text-white"
						@input="handleSearch"
					/>
					<em class="hidden text-sm text-gray-400 group-hover:inline">{{
						search
					}}</em>
					<button class="h-6 w-6" @click="submitSearch">
						<svg
							data-url="ui/search.svg"
							class="w-full stroke-theme-primary-300 stroke-[4] dark:stroke-white"
						></svg>
					</button>
				</form>
			</div>
			<div class="z-0 flex flex-wrap justify-center gap-16 pb-8 max-sm:pb-24">
				<svgGrid v-for="(cat, key) in allData" :key="key" :cat="cat" />
			</div>
		</section>
	</main>
	<footer></footer>
</template>

<script>
	import allData from "@/content/data.json";
	// import LogRocket from "logrocket";
	// LogRocket.init("vczane/iamjoberror");

	export default {
		data() {
			return {
				search: "",
				searchTimeoutId: null,
				cachedEl: null,
			};
		},
		// Add a computed property to the Vue component to return an array of all icon objects
		computed: {
			/**
			 * Returns an array of all icon objects in `allData`.
			 *
			 * @returns {Array} An array of all icon objects in `allData`.
			 */
			allIcons() {
				// Return an array of all icon objects in `allData`
				return allData.flatMap((sub) => sub.icons.flat(1)).sort();
			},
		},
		mounted() {
			this.loadSvg();
			this.submitSearch();
		},
		updated() {
			this.loadSvg();
		},
		methods: {
			/**
			 * Handles the search functionality by retrieving a lowercase search query string from the target of the event
			 * and searching for an icon name in lowercase within the `allIcons` array, such that the icon name starts with the search query string.
			 * If a matching icon name is found, it is assigned to `this.search`.
			 * The || "" at the end sets `this.search` to an empty string if no matching icon is found.
			 * @param {*} e - The event object.
			 */
			handleSearch(e) {
				// Retrieve a lowercase search query string from the target of the event.
				const query = e.target.value.toLowerCase();

				// Search for an icon name in lowercase within the `allIcons` array.
				// If a matching icon name is found, it is assigned to `this.search`.
				// The || "" at the end sets `this.search` to an empty string if no matching icon is found.
				this.search =
					this.allIcons.find((name) => name.toLowerCase().startsWith(query)) ||
					"";
			},
			/**
			 * Fetches an SVG from a given URL and appends it to a given element.
			 *
			 * @param {string} url - The URL of the SVG to fetch.
			 * @param {HTMLElement} el - The element to append the SVG to.
			 * @returns {Promise<void>} - A Promise that resolves when the SVG has been fetched and appended.
			 */

			async fetchSvg(url, el) {
				const response = await fetch(url);
				const data = await response.text();
				const parser = new DOMParser();
				const parsed = parser.parseFromString(data, "image/svg+xml");
				const svg = parsed.getElementsByTagName("svg")[0];
				const attr = svg.attributes;
				const attrLen = attr.length;
				for (let i = 0; i < attrLen; ++i) {
					if (attr[i].specified) {
						if (attr[i].name === "class") {
							const classes = attr[i].value
								.replace(/\s+/g, " ")
								.trim()
								.split(" ");
							const classesLen = classes.length;
							for (let j = 0; j < classesLen; ++j) {
								el.classList.add(classes[j]);
							}
						} else {
							el.setAttribute(attr[i].name, attr[i].value);
						}
					}
				}
				while (svg.childNodes.length) {
					el.appendChild(svg.childNodes[0]);
				}
			},
			/**
			 * Asynchronously loads SVG images from URLs and replaces their data-url
			 * attribute with the SVG code. If the SVG element already contains content,
			 * it will be cleared before loading the new SVG.
			 *
			 * @returns {Promise<void>} Promise that resolves when all SVGs have been loaded.
			 */

			async loadSvg() {
				const svgs = document.querySelectorAll("svg[data-url]");
				const svgsLen = svgs.length;
				for (let i = 0; i < svgsLen; ++i) {
					if (svgs[i].innerHTML) svgs[i].textContent = "";
					const url = svgs[i].getAttribute("data-url");
					svgs[i].removeAttribute("data-url");
					await this.fetchSvg(url, svgs[i]);
				}
			},
			// Search functionality
			async submitSearch() {
				// Use cached element if available
				if (this.cachedEl && this.cachedEl.dataset.keyword === this.search) {
					this.scrollToIcon(this.cachedEl);
					return;
				}

				// Clear any existing timeout
				clearTimeout(this.searchTimeoutId);

				// Debounce the search
				this.searchTimeoutId = setTimeout(async () => {
					const el = document.querySelector(`a[data-keyword="${this.search}"]`);

					// Cache the element if found
					if (el) {
						this.cachedEl = el;
						this.scrollToIcon(el);
					}
				}, 500);
			},
			/**
			 * Scrolls to the provided element with a smooth behavior.
			 *
			 * @param {HTMLElement} el - The element to scroll to.
			 * @returns {void}
			 */

			scrollToIcon(el) {
				// Select and navigate to the icon found
				el.classList.add("showcase-icon");
				// Remove attached class
				setTimeout(() => {
					el.classList.remove("showcase-icon");
				}, 6000);
				// Scroll to the icon
				el.scrollIntoView({ behavior: "smooth" });
			},
		},
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
		version: 2.0,
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
