<script>
	import '../app.css';
	let { children } = $props();
</script>

<nav class="navbar border-b border-black">
	<p class="navbar-start">My Portfolio</p>
	<div class="navbar-end gap-2">
		<a href = "/about">Home</a>
		<a href = "/contact">Contact</a>
		<a href = "/projects">Projects</a>
	</div>
</nav>

{@render children()}

<footer class = "footer footer-center border-t border-black p-2">
	Made by Sam using Svelte
</footer>