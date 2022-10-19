<script>
	import Footer from './../lib/components/Footer.svelte';
	import Navbar from './../lib/components/Navbar.svelte';
	import '../app.css';
</script>

<header class="sticky top-0 z-40">
	<Navbar />
</header>
<slot />
<Footer />
