<template>
	<div
		class="flex flex-col max-w-full duration-300 ease-linear border border-solid rounded-lg w-fit h-fit max-md:order-none bg-gray-50/20 border-indigo-200/60 hover:bg-white dark:bg-[#191724] dark:border-[#211e38] brd-shadow"
		:class="{ 'order-first': toggleGrid }"
	>
		<ul class="flex justify-between w-full py-2 pl-2">
			<li>
				<button
					@click="toggleGrid = !toggleGrid"
					class="inline-flex items-center duration-200 ease-in"
					title="View all icons in this category"
				>
					<span class="w-6 h-6">
						<svg
							data-url="/ui/chevron-down.svg"
							class="w-full h-full duration-200 ease-out stroke-slate-400 dark:stroke-zinc-700"
							:class="{
								'rotate-180 transform duration-200 ease-in': toggleGrid,
							}"
						></svg>
					</span>
					<span
						data-before="+"
						data-after="-"
						class="text-sm text-slate-400"
						:class="{
							'before:content-[attr(data-before)]': !toggleGrid,
							'before:content-[attr(data-after)]': toggleGrid,
						}"
					></span>
				</button>
			</li>
			<li id="notify" class="text-gray-500 opacity-0">
				svg copied!
				<span class="inline-flex w-3 h-3">
					<span
						class="inline-flex w-full h-full bg-gray-400 rounded-full opacity-75 animate-ping"
					></span>
					<span class="inline-flex w-3 h-3 bg-gray-500 rounded-full"></span>
				</span>
			</li>
		</ul>
		<ul
			class="grid grid-cols-3 px-2 overflow-y-auto transition-all duration-500 h-72 svgBox scrollbar-w-1 scrollbar-thumb-white scrollbar-track-gray-200 dark:scrollbar-thumb-zinc-900 dark:scrollbar-track-zinc-800 scroll-smooth snap-y"
			:class="{
				'h-max grid-cols-9 max-xl:grid-cols-6 max-lg:grid-cols-4 max-sm:grid-cols-3':
					toggleGrid,
			}"
		>
			<li v-for="list in cat.icons">
				<a
					target="_blank"
					rel="noopener noreferrer"
					:href="'svg/' + cat.category + '/' + list + '.svg'"
					title="Right-Click to download, Click to copy code"
					class="flex flex-col items-center justify-center w-full h-full transition-all rounded-lg group hover:bg-theme-bg hover:shadow-box hover:dark:bg-[hsla(255,11%,15%,0.729)]"
					@click.prevent="mySvgCode"
					:data-keyword="list.toLowerCase()"
				>
					<span
						class="inline-flex w-8 h-8 mb-4 transition-all group-hover:w-12 group-hover:h-12 group-hover:mb-0"
					>
						<svg
							class="w-full stroke-theme-primary-200 group-hover:stroke-theme-primary-400 dark:group-hover:stroke-white"
							:data-url="'/svg/' + cat.category + '/' + list + '.svg'"
						></svg>
					</span>
					<em
						class="truncate text-[12px] not-italic text-gray-400 group-hover:hidden group-hover:invisible transition-all dark:text-[#3b3b46]"
						>{{ list }}</em
					>
				</a>
			</li>
		</ul>
		<ul
			class="inline-flex justify-between w-full px-4 py-2 mt-2 text-gray-600 rounded-b-lg bg-theme-primary-900/10 dark:text-stone-300 dark:bg-[#1c1929]"
		>
			<li class="capitalize">{{ cat.category }}</li>
			<li class="font-bold">{{ cat.total }}</li>
		</ul>
	</div>
</template>
<script>
import { useClipboard } from "@vueuse/core";

export default {
	computed: {
		mySvgCode() {
			const { copy } = useClipboard();
			return (event) => {
				// Destructuring the event.target object
				const { tagName, children, innerHTML, parentNode } = event.target;
				const closestUl = parentNode.closest("ul");
				const note = closestUl.previousElementSibling.querySelector("#notify");

				let html = "";
				switch (tagName) {
					case "A":
						html = children[0].children[0].innerHTML;
						break;
					case "svg":
						html = innerHTML;
						break;
					default:
						html = parentNode.innerHTML;
				}

				copy(
					`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">${html}</svg>`
				);
				note.animate(
					{
						opacity: [1, 0]
					},
					{
						duration: 6000,
						easing: "linear",
						endDelay: 3000
					}
				);
			};
		},
	},
	props: ["cat", "key"],
	data() {
		return {
			toggleGrid: false,
		};
	},
};
</script>
