<script>
	import DNA from './DNA.svelte';
	import DNASVG from '../icons/DNASVG.svelte';
	import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@rgossiaux/svelte-headlessui';
	import CheckupSVG from '$lib/icons/CheckupSVG.svelte';
	import HeartSVG from '$lib/icons/HeartSVG.svelte';
	import BloodSVG from '$lib/icons/BloodSVG.svelte';
	import Checkup from './Checkup.svelte';
	import Cardiogram from './Cardiogram.svelte';
	import Bloodbank from './Bloodbank.svelte';
</script>

<div class="">
	<div class="text-center md:mx-80 lg:mx-96 mx-5 space-y-3 my-10">
		<p class="text-secondary uppercase font-semibold tracking-widest">care you can believe in</p>
		<p class="text-primary mb-5 font-bold text-2xl">Our Services</p>
	</div>
	<div class="mx-44 my-10">
		<TabGroup class="flex">
			<TabList class="flex flex-col mr-5">
				<Tab
					class={({ selected }) =>
						`${selected ? 'bg-primary' : 'text-primary'} cond hover:text-white text-secondary`}
					><span><CheckupSVG /></span><span>Free Checkup</span></Tab
				>
				<Tab
					class={({ selected }) =>
						`${selected ? 'bg-primary' : 'text-primary'} cond hover:text-white text-secondary`}
					><span><HeartSVG /></span><span>Cardiogram</span></Tab
				>
				<Tab
					class={({ selected }) =>
						`${selected ? 'bg-primary' : 'text-primary'} cond hover:text-white text-secondary`}
					><span><DNASVG /></span><span>DNA Testing</span></Tab
				>
				<Tab
					class={({ selected }) =>
						`${selected ? 'bg-primary' : 'text-primary'} cond hover:text-white text-secondary`}
					><span><BloodSVG /></span><span>Blood Bank</span></Tab
				>
			</TabList>
			<TabPanels>
				<TabPanel><Checkup /></TabPanel>
				<TabPanel><Cardiogram /></TabPanel>
				<TabPanel><DNA /></TabPanel>
				<TabPanel><Bloodbank /></TabPanel>
			</TabPanels>
		</TabGroup>
	</div>
</div>
