<script>
	import DoctorCard from './DoctorCard.svelte';

	import { Swiper, SwiperSlide } from 'swiper/svelte';

	import 'swiper/css';

	import 'swiper/css/effect-coverflow';
	import 'swiper/css/pagination';

	import '../../style.css';

	import { EffectCoverflow, Pagination } from 'swiper';
</script>

<div class="">
	<div class="text-center space-y-3 my-10">
		<p class="text-secondary uppercase font-semibold tracking-widest">trusted care</p>
		<p class="text-primary mb-5 font-bold text-2xl">Our Doctors</p>
	</div>
	<div class="">
		<Swiper
			effect={'coverflow'}
			grabCursor={true}
			centeredSlides={true}
			slidesPerView={'auto'}
			coverflowEffect={{
				rotate: 50,
				stretch: 0,
				depth: 100,
				modifier: 1,
				slideShadows: true
			}}
			pagination={true}
			modules={[EffectCoverflow, Pagination]}
			class="mySwiper"
		>
			<SwiperSlide>
				<DoctorCard name="Mayowa Sunusi" specialty="neurology" image="/doc1.png" />
			</SwiperSlide>
			<SwiperSlide>
				<DoctorCard name="James Andrew" specialty="cardiology" image="/doc2.png" />
			</SwiperSlide>
			<SwiperSlide>
				<DoctorCard name="Asimya Lemuel" specialty="oncology" image="/doc3.png" />
			</SwiperSlide>
			<SwiperSlide>
				<DoctorCard name="John Doe" specialty="gynaecology" image="/doc1.png" />
			</SwiperSlide>
			<SwiperSlide>
				<DoctorCard name="Jane Doe" specialty="urology" image="/doc3.png" />
			</SwiperSlide>
		</Swiper>
	</div>
</div>
