<script>
	import LocationSvg from '../icons/LocationSVG.svelte';
	import TimeSvg from '../icons/TimeSVG.svelte';
	import PhoneSVG from './../icons/PhoneSVG.svelte';
</script>

<div class="flex items-center md:px-44 px-10 justify-between py-5 bg-white">
	<h1 class="uppercase font-semibold md:text-3xl">
		<span class="text-primary">med</span><span class="text-secondary">dical</span>
	</h1>
	<div class="flex space-x-6">
		<div class="flex items-center space-x-2">
			<i class="text-primary"><PhoneSVG hw="h-8 w-8" /></i>
			<div>
				<p class="text-primary uppercase font-semibold">emergency</p>
				<p class="text-secondary">(237) 681-812-255</p>
			</div>
		</div>
		<div class="flex items-center space-x-2">
			<i class="text-primary"><TimeSvg hw="h-8 w-8" /></i>
			<div>
				<p class="text-primary uppercase font-semibold">work hour</p>
				<p class="text-secondary">09:00 - 20:00 Everyday</p>
			</div>
		</div>
		<div class="flex items-center space-x-2">
			<i class="text-primary"><LocationSvg hw="h-8 w-8" /></i>
			<div>
				<p class="text-primary uppercase font-semibold">location</p>
				<p class="text-secondary">0123 Some Place</p>
			</div>
		</div>
	</div>
</div>
