<script>
	import PaperPlaneSvg from '../icons/PaperPlaneSVG.svelte';
</script>

<div class="bg-primary text-accent px-32">
	<div class="border-b-2 border-b-accent py-20">
		<div class="flex space-x-5 justify-between">
			<div class="space-y-5">
				<h2 class="uppercase font-bold text-3xl">meddical</h2>
				<div class="">
					<p>Leading the Way in Medical</p>
					<p>Execellence, Trusted Care.</p>
				</div>
			</div>
			<div class="space-y-5">
				<h3 class="font-semibold capitalize">Important Links</h3>
				<div class="space-y-2 flex flex-col capitalize">
					<a href="#!">Appointment</a>
					<a href="#!">Doctors</a>
					<a href="#!">services</a>
					<a href="#!">about us</a>
				</div>
			</div>
			<div class="space-y-5">
				<h3 class="font-semibold capitalize">contact us</h3>
				<div class="space-y-2 flex flex-col">
					<p>Call: (237) 681-812-255</p>
					<p>Email: fildineesoe@gmail.com</p>
					<p>Address: 0123 Some place</p>
					<p>Some country</p>
				</div>
			</div>
			<div class="space-y-5">
				<h3 class="font-semibold capitalize">Newsletter</h3>
				<div class="flex bg-accent text-primary items-center px-2 rounded-lg">
					<input
						type="text"
						class="w-full bg-transparent placeholder:text-primary placeholder:text-sm py-2 px-5 focus:outline-none"
						placeholder="Enter your email address"
					/>
					<span class="text-primary"><PaperPlaneSvg hw="h-8 w-8" /></span>
				</div>
			</div>
		</div>
	</div>
	<div class="py-10 flex items-center justify-between">
		<p class="font-light">© 2022 All Rights Reserved by Mayowa Sunusi | FCP/CSC/17/1071</p>
		<p class="flex items-center space-x-3 ">
			<span class="bg-accent rounded-full px-2 py-1"
				><i class="fab fa-linkedin text-primary fa-md" /></span
			>
			<span class="bg-accent rounded-full px-2 py-1"
				><i class="fab fa-facebook text-primary fa-md" /></span
			>
			<span class="bg-accent rounded-full px-2 py-1"
				><i class="fab fa-instagram text-primary fa-md" /></span
			>
		</p>
	</div>
</div>
