<template>
	<div
		class="brd-shadow flex h-fit w-fit max-w-full flex-col rounded-lg border border-solid border-indigo-200/60 bg-gray-50/20 duration-300 ease-linear hover:bg-white dark:border-[#211e38] dark:bg-[#191724] max-md:order-none"
		:class="{ 'order-first': toggleGrid }"
	>
		<ul class="flex w-full justify-between py-2 pl-2">
			<li>
				<button
					class="inline-flex items-center duration-200 ease-in"
					title="View all icons in this category"
					@click="toggleGrid = !toggleGrid"
				>
					<span class="h-6 w-6">
						<svg
							data-url="/ui/chevron-down.svg"
							class="h-full w-full stroke-slate-400 duration-200 ease-out dark:stroke-zinc-700"
							:class="{
								'rotate-180 duration-200 ease-in': toggleGrid,
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
				<span class="inline-flex h-3 w-3">
					<span
						class="inline-flex h-full w-full animate-ping rounded-full bg-gray-400 opacity-75"
					></span>
					<span class="inline-flex h-3 w-3 rounded-full bg-gray-500"></span>
				</span>
			</li>
		</ul>
		<ul
			class="svgBox grid h-72 snap-y grid-cols-3 overflow-y-auto scroll-smooth px-2 transition-all duration-500 scrollbar-w-1 scrollbar-thumb-white scrollbar-track-gray-200 dark:scrollbar-thumb-zinc-900 dark:scrollbar-track-zinc-800"
			:class="{
				'h-max grid-cols-9 max-xl:grid-cols-6 max-lg:grid-cols-4 max-sm:grid-cols-3':
					toggleGrid,
			}"
		>
			<li v-for="list in cat.icons" :key="list.id">
				<a
					target="_blank"
					rel="noopener noreferrer"
					:href="'svg/' + cat.category + '/' + list + '.svg'"
					title="Right-Click to download, Click to copy code"
					class="group flex h-full w-full flex-col items-center justify-center rounded-lg transition-all hover:bg-theme-bg hover:shadow-box hover:dark:bg-[hsla(255,11%,15%,0.729)]"
					:data-keyword="list.toLowerCase()"
					@click.prevent="mySvgCode"
				>
					<span
						class="mb-4 inline-flex h-8 w-8 transition-all group-hover:mb-0 group-hover:h-12 group-hover:w-12"
					>
						<svg
							class="w-full stroke-theme-primary-200 group-hover:stroke-theme-primary-400 dark:group-hover:stroke-white"
							:data-url="'/svg/' + cat.category + '/' + list + '.svg'"
						></svg>
					</span>
					<em
						class="truncate text-[12px] not-italic text-gray-400 transition-all group-hover:invisible group-hover:hidden dark:text-[#3b3b46]"
						>{{ list }}</em
					>
				</a>
			</li>
		</ul>
		<ul
			class="mt-2 inline-flex w-full justify-between rounded-b-lg bg-theme-primary-900/10 px-4 py-2 text-gray-600 dark:bg-[#1c1929] dark:text-stone-300"
		>
			<li class="capitalize">{{ cat.category }}</li>
			<li class="font-bold">{{ cat.total }}</li>
		</ul>
	</div>
</template>
<script>
import { useClipboard } from "@vueuse/core";

export default {
	props: ["cat"],
	data() {
		return {
			toggleGrid: false,
		};
	},
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
};
</script>
