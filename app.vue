<template>
	<div class="flex flex-col h-screen bg-cmb">
		<header class="flex flex-row items-center justify-between p-4 max-sm:flex-col">
			<div class="text-lg font-medium text-cpn">
				SIMPICONS
				<span class="inline-flex text-sm font-normal">
					<!-- TODO: Insert github link -->
					<a
						class="inline-flex p-1 duration-500 rounded-md bg-cb ring-1 ring-cba/20 hover:bg-white"
						href="#"
						title="Github project repository"
						>github</a
					>
				</span>
			</div>
			<div class="shrink max-sm:m-4 max-sm:w-full">
				<form
					name="svg-search"
					id="svg-search"
					class="flex items-center justify-between p-3 bg-white rounded-lg ring-2 ring-brd"
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
					<span class="font-semibold text-cba">
						= <em class="not-italic">300</em></span
					>
				</form>
			</div>
			<div class="">
				<!-- TODO: Insert full download link -->
				<a
					href="#"
					title="Download entire icon package"
					class="flex flex-row justify-between w-24 px-3 py-2 duration-500 rounded bg-cbd hover:bg-cpn"
				>
					<span class="text-sm font-medium text-white">v1.1</span>
					<span class="w-6 h-6">
						<svg
							data-url="/ui/download.svg"
							class="w-full h-full stroke-white"
						></svg>
					</span>
				</a>
			</div>
		</header>
		<div class="flex flex-row h-screen max-sm:flex-col bg-cbg shadow-mc">

			<!-- Left Sidebar -->
			<div class="sidebars shadow-sbl">
				<!-- Category select box -->
				<div class="flex justify-center w-full px-8">
					<HeadlessListbox v-model="selectedPerson">
						<div class="relative w-full mt-1">
							<HeadlessListboxButton class="relative w-full p-3 text-left rounded cursor-default bg-cib ring-1 ring-brd focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
								<span class="block truncate">{{ selectedPerson.name }}</span>
								<span class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
									<svg class="w-5 h-5 stroke-gray-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="2" fill="none" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="m5 9 7 6 7-6"/></svg>
								</span>
							</HeadlessListboxButton>

							<transition
								leave-active-class="transition duration-100 ease-in"
								leave-from-class="opacity-100"
								leave-to-class="opacity-0"
							>
								<HeadlessListboxOptions
									class="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
								>
									<HeadlessListboxOption
										v-slot="{ active, selected }"
										v-for="person in people"
										:key="person.name"
										:value="person"
										as="template"
									>
										<li
											:class="[
												active ? 'bg-amber-100 text-amber-900' : 'text-gray-900',
												'relative cursor-default select-none py-2 pl-10 pr-4',
											]"
										>
											<span
												:class="[
													selected ? 'font-medium' : 'font-normal',
													'block truncate',
												]"
											>{{ person.name }}</span>
											<span
												v-if="selected"
												class="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600"
											>
												<CheckIcon class="w-5 h-5" aria-hidden="true" />
											</span>
										</li>
									</HeadlessListboxOption>
								</HeadlessListboxOptions>
							</transition>
						</div>
					</HeadlessListbox>
				</div>
				<!-- End -->

      </div>
			<!-- End -->

			<!-- Icon Viewer -->
			<div class="w-3/5 max-sm:w-full bg-viewer"></div>
			<!-- End -->

			<!-- Right Sidebar -->
			<div class="sidebars shadow-sbr"></div>
			<!-- End -->
		</div>
    <footer class="flex h-2 bg-cbd"></footer>
	</div>
</template>

<script setup>
import { ref } from 'vue'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/vue/20/solid'
useHead({
	htmlAttrs: {
		lang: "en",
	},
});

const people = [
  { name: 'Finance' },
  { name: 'Browser' },
  { name: 'Application' },
  { name: 'Editor' },
  { name: 'Media' },
  { name: 'Social' }
]

const selectedPerson = ref(people[0])
</script>
