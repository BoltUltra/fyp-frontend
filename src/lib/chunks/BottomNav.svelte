<script>
	export let link = '';
</script>

<div class="bg-primary flex justify-between items-center md:px-32 py-3 px-10">
	<ul class="flex text-accent space-x-5">
		<li><a href="/">Home</a></li>
		<li><a href="/about">About Us</a></li>
		<li><a href="/services">Services</a></li>
		<li><a href="/doctors">Doctors</a></li>
		<li><a href="/news">News</a></li>
		<li><a href="/contact">Contact</a></li>
	</ul>
	<div class="flex space-x-3">
		<a href={link} class="bg-accent text-primary py-2 px-5 rounded-3xl">Appointment</a>
		<a href={link} class="bg-accent text-primary py-2 px-5 rounded-3xl md:block hidden"
			>Symptom Checker</a
		>
	</div>
</div>
