<script>
	let name = 'world';
	let fruits = ['Apple', 'Banana', 'Cherry', 'Orange' , 'Mango'];
	let age = 85;
	function assign() {
		name = 'HANAE'
		age = 36
	}
	let toggle = false;
</script>

<main>
	{#if toggle}
		<h1>Hello {name}!</h1>
	{:else}
		<h1>No name!</h1>
	{/if}
	<ul>
		{#each fruits as fruit}
			<li>{fruit}</li>
		{/each}
	</ul>
	<h2 class={age > 85 ? "active" : ""}>
		{age}
	</h2>
	<img src="" alt={name} />
	<input type="text" bind:value={name} />
	<button on:click={assign}>
		Assign
	</button>
	<button on:click={() => {toggle = !toggle}}>
		Toggle
	</button>
</main>

<style>
	h1 {
		color : red;
	}
	.active {
		color: blue;
	}
</style>