<script>
	import Contact from '../lib/components/Contact.svelte';

	import PhoneSVG from './../lib/icons/PhoneSVG.svelte';
	import Blog from '../lib/components/Blog.svelte';

	import BlogPostCard from '../lib/components/BlogPostCard.svelte';

	import Doctors from '../lib/components/Doctors.svelte';
	import Appointment from '../lib/components/Appointment.svelte';
	import Specialties from '../lib/components/Specialties.svelte';
	import Services from '../lib/components/Services.svelte';
	import About from '../lib/components/About.svelte';
	import Hero from '../lib/components/Hero.svelte';
	import Features from '../lib/components/Features.svelte';
	import LocationSvg from '$lib/icons/LocationSVG.svelte';
	import EnvelopSvg from '$lib/icons/EnvelopSVG.svelte';
	import TimeSvg from '$lib/icons/TimeSVG.svelte';
</script>

<div>
	<Hero />
	<Features />
	<About />
	<Services />
	<Specialties />
	<Appointment />
	<Doctors />
	<Blog />
	<Contact />
</div>
