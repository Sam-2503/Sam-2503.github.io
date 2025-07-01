<script>
	import '../app.css';
</script>

<nav class="navbar fixed border-b border-black bg-[#335c67] px-5  text-[#171123]">
	<p class="navbar-start font-bold text-white">Sam25.is-a.dev</p>
	<div class="navbar-end gap-3 font-semibold">
		<a href="#home">About</a>
		<a href="#contact">Contact</a>
		<a href="#projects">Projects</a>
	</div>
</nav>

<slot />

<footer class="footer flex items-center justify-center gap-1 border-t border-black p-2">
	Made by
	<a href="https://www.instagram.com/__sam.25_/" class="text-[#84dcc6]">Sam</a>
	using <a href="https://svelte.dev/">Svelte</a>
</footer>
