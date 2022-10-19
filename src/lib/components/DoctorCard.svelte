<script>
	export let name;
	export let specialty;
	export let image;
</script>

<div class="">
	<img alt="" src={image} />
	<div class="bg-accent text-center text-primary space-y-2 py-4">
		<p>{name}</p>
		<p class="uppercase tracking-widest font-bold text-lg">{specialty}</p>
		<p class="flex items-center space-x-3 justify-center ">
			<span class="bg-primary rounded-full px-2 py-1"
				><i class="fab fa-linkedin text-accent fa-md" /></span
			>
			<span class="bg-primary rounded-full px-2 py-1"
				><i class="fab fa-facebook text-accent fa-md" /></span
			>
			<span class="bg-primary rounded-full px-2 py-1"
				><i class="fab fa-instagram text-accent fa-md" /></span
			>
		</p>
	</div>
</div>
