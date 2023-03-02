<template>
	<div
		class="flex flex-col w-fit h-fit max-w-full max-md:order-none bg-white border border-[rgba(11,19,36,0.07)] border-solid rounded-lg shadow-box dark:bg-[#17161bfb]"
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
			<li id="notify" class="invisible text-gray-500">
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
						class="truncate text-[12px] not-italic text-gray-400 group-hover:hidden group-hover:invisible transition-all dark:text-[#31313a]"
						>{{ list }}</em
					>
				</a>
			</li>
		</ul>
		<ul
			class="inline-flex justify-between w-full py-2 px-4 mt-2 bg-[rgba(217,219,233,0.46)] dark:bg-[#15141afb] text-gray-600 dark:text-theme-primary-300"
		>
			<li class="capitalize">{{ cat.category }}</li>
			<li class="font-bold">{{ cat.total }}</li>
		</ul>
	</div>
</template>
<script>
import { useClipboard } from "@vueuse/core";

// toggle svg grid
export default {
	data() {
		const { copy } = useClipboard();
		let mySvgCode;
		return {
			toggleGrid: false,
			copy,
			mySvgCode,
		};
	},
	mounted() {
		let html;
		const labels =
			'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">';
		this.mySvgCode = (event) => {
			const el = event.target,
				note = el.closest("ul").previousElementSibling.querySelector("#notify");
			//Optimization 1 - Using switch case instead of multiple if-else conditions.
			switch (el.tagName) {
				case "A":
					html = el.children[0].children[0].innerHTML;
					break;
				case "svg":
					html = el.innerHTML;
					break;
				default:
					html = el.parentNode.innerHTML;
			}
			this.copy(labels + html + "</svg>");
			//Optimization 2 - Setting visibility of element using class instead of inline object assigning
			note.classList.toggle("invisible");
			setTimeout(() => {
				note.classList.toggle("invisible");
			}, 3000);
		};
	},
	props: ["cat", "key"],
};
</script>
