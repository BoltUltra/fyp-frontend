<script>
	import InfoSVG from '../icons/InfoSVG.svelte';
	import UsersSVG from '../icons/UsersSVG.svelte';
	import CalendarSVG from '../icons/CalendarSVG.svelte';
</script>

<div class=" flex space-x-10 justify-between mx-32 -mt-10 relative">
	<div class="flex items-center justify-center bg-primary text-white py-5 px-8 space-x-3">
		<p>Book an Appointment</p>
		<CalendarSVG hw="w-10 h-10 text-white" />
	</div>
	<div class="flex items-center justify-center bg-accent text-primary py-5 px-8 space-x-3">
		<p>Professional Service</p>
		<UsersSVG hw="w-10 h-10 text-primary" />
	</div>
	<div class="flex items-center justify-center bg-secondary text-white py-5 px-8 space-x-3">
		<p>Self Symptom Checker</p>
		<InfoSVG hw="w-10 h-10 text-white" />
	</div>
</div>
