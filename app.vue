<template>
	<div class="flex flex-col bg-cmb h-screen">
		<header class="flex flex-row justify-between p-4 items-center">
			<div class="text-lg font-medium text-cpn">
				Simpicons
				<span class="text-sm inline-flex font-normal">
					<!-- TODO: Insert github link -->
					<a
						class="inline-flex bg-cb p-1 rounded-md ring-1 ring-cba/20 hover:bg-white duration-500"
						href="#"
						title="Github project repository"
						>github</a
					>
				</span>
			</div>
			<div class="shrink">
				<form
					name="svg-search"
					id="svg-search"
					class="flex p-3 bg-white ring-2 ring-brd rounded-lg items-center"
				>
					<label for="svg-input" class="inline-flex w-6 h-6">
						<svg data-url="/ui/search.svg" class="stroke-cbd"></svg>
					</label>
					<input
						name="svg-input"
						id="svg-input"
						placeholder="search for icons"
						class="w-[40vw] text-center focus:outline-none"
					/>
					<span class="text-cba font-semibold">
						= <em class="not-italic">300</em></span
					>
				</form>
			</div>
			<div class="">
				<!-- TODO: Insert full download link -->
				<a
					href="#"
					title="Download entire icon package"
					class="w-24 px-3 py-2 bg-cbd rounded flex flex-row justify-between hover:bg-cpn duration-500"
				>
					<span class="text-white text-sm font-medium">v1.1</span>
					<span class="w-6 h-6">
						<svg
							data-url="/ui/download.svg"
							class="w-full h-full stroke-white"
						></svg>
					</span>
				</a>
			</div>
		</header>
		<div class="flex flex-row max-sm:flex-col h-screen bg-cbg shadow-mc">
			<div class="sidebars shadow-sbl">.</div>
			<div class="w-3/5 max-sm:w-full">.</div>
			<div class="sidebars shadow-sbr">.</div>
		</div>
	</div>
</template>

<script setup>
useHead({
	htmlAttrs: {
		lang: "en",
	},
});
</script>
