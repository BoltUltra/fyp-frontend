<script>
	import BlogPostCard from './BlogPostCard.svelte';

	import Doctors from './Doctors.svelte';
	import Appointment from './Appointment.svelte';
	import Specialties from './Specialties.svelte';
	import Services from './Services.svelte';
	import About from './About.svelte';
	import Hero from './Hero.svelte';
	import Features from './Features.svelte';
</script>

<div class="my-10">
	<div class="text-center space-y-3 my-10">
		<p class="text-secondary uppercase font-semibold tracking-widest">
			better information, better health
		</p>
		<p class="text-primary mb-5 font-bold text-2xl">News</p>
	</div>

	<div class="grid grid-cols-2 gap-3 mx-44">
		<BlogPostCard />
		<BlogPostCard />
		<BlogPostCard />
		<BlogPostCard />
	</div>
</div>
