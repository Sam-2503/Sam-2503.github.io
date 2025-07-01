<script>
	import { Github, Link } from '@lucide/svelte';
</script>

<section class="mx-6 my-20">
	<div>
		<p class="heading"><u>Projects</u></p>
		<p>
			This is a collection of the Projects that I am currently working on or have completed so far
		</p>
		<div class="my-2 flex gap-2">
			<!-- Card 1 -->
			<div class="card card-sm card-border w-sm shadow-sm">
				<figure><img src="/rsveepee.png" alt="rsveepee" /></figure>
				<div class="card-body items-center text-center">
					<p class="card-title">RSveepee</p>
					<p>
						RSveepee is a full stack application that allows users to manage, and join events with a
						modern interface.
					</p>
				</div>
				<div class="card-actions justify-center">
					<button class="btn btn-ghost btn-square"><Github /></button>
				</div>
			</div>
			<!-- Card 2 -->
			<div class="card card-sm card-border w-sm shadow-sm">
				<figure><img src="/portfolio.png" alt="portfolio site" /></figure>
				<div class="card-body items-center text-center">
					<p class="card-title">My Portfolio</p>
					<p>A portfolio site built for showcasing my front-end development skills and projects</p>
				</div>
				<div class="card-actions justify-center">
					<button class="btn btn-ghost btn-square"><Github /></button>
					<button class="btn btn-ghost btn-square"><Link /></button>
				</div>
			</div>
			<!-- Card 3 -->
			<div class="card card-sm card-border w-sm shadow-sm">
				<figure><img src="/clouter.png" alt="clouter" /></figure>
				<div class="card-body items-center text-center">
					<p class="card-title">Clouter</p>
					<p>A club management site built for college campuses by students of NIT Silchar</p>
				</div>
				<div class="card-actions justify-center">
					<button class="btn btn-ghost btn-square"><Github /></button>
				</div>
			</div>
		</div>
	</div>
</section>
