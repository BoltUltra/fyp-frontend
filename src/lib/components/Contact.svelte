<script>
	import PhoneSVG from '../icons/PhoneSVG.svelte';
	import LocationSvg from '$lib/icons/LocationSVG.svelte';
	import EnvelopSvg from '$lib/icons/EnvelopSVG.svelte';
	import TimeSvg from '$lib/icons/TimeSVG.svelte';
</script>

<div class="my-10">
	<div class="text-center space-y-3 my-10">
		<p class="text-secondary uppercase font-semibold tracking-widest">get in touch</p>
		<p class="text-primary mb-5 font-bold text-2xl">Contact</p>
	</div>
	<div class="flex space-x-5 justify-center">
		<div class="">
			<div class="bg-accent text-primary space-y-2 px-5 py-8 rounded-md">
				<PhoneSVG hw="w-10 h-10" />
				<p class="uppercase font-bold">emergency</p>
				<p>(237) 681-812-255</p>
				<p>(237) 666-331-894</p>
			</div>
		</div>
		<div class="">
			<div class="bg-primary text-accent space-y-2 px-5 py-8 rounded-md">
				<LocationSvg hw="w-10 h-10" />
				<p class="uppercase font-bold">Location</p>
				<p>0123 Some place</p>
				<p>9876 Some country</p>
			</div>
		</div>
		<div class="">
			<div class="bg-accent text-primary space-y-2 px-5 py-8 rounded-md">
				<EnvelopSvg hw="w-10 h-10" />
				<p class="uppercase font-bold">email</p>
				<p>fildineeesoe@gmil.com</p>
				<p>myebstudios@gmail.com</p>
			</div>
		</div>
		<div class="">
			<div class="bg-accent text-primary space-y-2 px-5 py-8 rounded-md">
				<TimeSvg hw="w-10 h-10" />
				<p class="uppercase font-bold">working hours</p>
				<p>Mon-Sat 09:00-20:00</p>
				<p>Sunday Emergency only</p>
			</div>
		</div>
	</div>
</div>
