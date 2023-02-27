<template>
	<main class="flex flex-row max-md:flex-col">
		<section id="content" class="flex w-[45vw] max-sm:w-full flex-col">
			<div
				class="flex flex-col w-full p-8 max-sm:p-2 bg-gradient-to-r from-[#EEEDF1] to-white dark:bg-gradient-to-bl dark:to-[#111014] dark:from-[#17161bfb]"
			>
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
					<ul class="flex flex-row items-center gap-2 max-sm:gap-1">
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
								class="flex flex-row px-4 py-2 font-bold text-center duration-500 border border-solid rounded max-sm:text-sm max-sm:px-2 border-theme-primary-100 text-theme-primary-900 hover:bg-theme-primary-900 hover:text-white hover:border-transparent dark:border-theme-primary-300"
							>
								Figma
							</a>
						</li>
						<li>
							<!-- TODO Add download link -->
							<a
								href="#"
								title="Download entire icon package"
								class="flex flex-row justify-between w-24 px-3 py-2 duration-500 rounded max-sm:px-2 max-sm:w-20 bg-theme-primary-300 hover:bg-theme-primary-900"
							>
								<span class="text-sm font-bold text-white"
									>v{{ details.version }}</span
								>
								<span class="w-6 max-sm:w-4">
									<!-- TODO change svg to box, package or archive icon -->
									<svg
										data-url="/ui/download.svg"
										class="w-full stroke-white"
									></svg>
								</span>
							</a>
						</li>
					</ul>
				</header>
				<div class="pt-8 max-w-[60%] max-sm:max-w-full max-sm:px-6">
					<svg data-url="/ui/illustrate.svg" class="w-full"></svg>
				</div>
			</div>
			<div class="m-8 max-w-[380px] max-sm:max-w-[340px]">
				<p class="text-3xl text-theme-primary-400 dark:text-theme-primary-100">
					Crafted with care: unique icons for web developers and designers.
				</p>
				<small class="inline-block mt-3 text-gray-500">
					Please note that these icons follows
					<!-- TODO add Google Material System Icon guideline link -->
					<a
						class="underline duration-400 text-theme-primary-900 hover:text-theme-primary-300"
						href="#"
						title="Google Material 3 System icon guide"
					>
						Google Material 3 System icons</a
					>
					guide with little tweaks.
				</small>
				<ul
					class="flex flex-row gap-4 px-4 py-2 mt-6 border border-solid divide-x-2 rounded w-fit bg-slate-100 border-theme-primary-100 dark:bg-[#232324] dark:border-transparent"
				>
					<li class="text-theme-primary-400 dark:text-theme-primary-200">
						<span class="text-xl font-semibold">{{ details.numOfIcons }}</span>
						<em class="italic">I</em>cons
					</li>
					<li
						class="pl-4 border-black text-theme-primary-400 dark:border-theme-primary-100 dark:text-theme-primary-200"
					>
						<span class="text-xl font-semibold">{{
							details.numOfCategory
						}}</span>
						<em class="italic">C</em>ategories
					</li>
				</ul>
			</div>
		</section>
		<section
			id="assets"
			class="flex flex-wrap w-[55vw] p-8 justify-center max-md:w-full h-max gap-16"
		>
			<svgGrid
				v-for="(cat, key, index) in allData"
				:cat="cat"
				:index="index"
				:key="key"
			/>
		</section>
	</main>
	<footer></footer>
</template>

<script setup>
import { useDark, useToggle } from "@vueuse/core";
import data from "@/content/data.json";
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
const allData = data;

const details = {
	version: 1.6,
	numOfCategory: Object.keys(allData).length,
	numOfIcons: allData.reduce((a, b) => a + b.total, 0),
};
</script>
