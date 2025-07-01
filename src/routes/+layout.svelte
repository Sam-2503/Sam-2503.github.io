<script>
	import '../app.css';
</script>

<nav class="navbar fixed border-b px-5 border-black bg-[#335c67] text-[#171123] font-semibold">
	<p class="navbar-start">sam25.is-a.dev</p>
	<div class="navbar-end gap-3">
		<a href="#home">Home</a>
		<a href="#contact">Contact</a>
		<a href="#projects">Projects</a>
	</div>
</nav>

<slot />

<footer class="footer footer-center border-t border-black p-2">Made by Sam using Svelte</footer>
