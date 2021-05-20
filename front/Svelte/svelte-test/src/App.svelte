<script>
import { onMount } from 'svelte';

	// import { onMount } from 'svelte';
	import Fruits from './Fruits.svelte';
	let name = 'world';
	let fruits = ['Apple', 'Banana', 'Cherry', 'Orange' , 'Mango'];
	let age = 85;
	function assign() {
		name = 'HANAE'
		age = 36
	}
	let toggle = false;
	let isRed = false;
	// onMount(() => {
	// 	const box = document.querySelector('.box');
	// 	box.addEventListener('click', () => { isRed = !isRed});
	// })
	function enter() {
		name = 'enter';
	}
	function leave() {
		name = 'leave';
	}
	let text = '';

	import { storeName } from './store.js';
	import Parent from './Parent.svelte';

	$storeName = name;
</script>

<main>
	{#if toggle}
		<h1>Hello {name}!</h1>
	{:else}
		<h1>No name!</h1>
	{/if}
	<div class="box"
		style="background-color: {isRed ? 'red' : 'orange'};"
		on:click={() => { isRed = !isRed }}
		on:mouseenter={enter}
		on:mouseleave={leave}
	>
		Box!
	</div>
	<h2>Fruits</h2>
	<ul>
		{#each fruits as fruit}
			<li>{fruit}</li>
		{/each}
	</ul>
	<h2>Fruits Reverse</h2>
	<ul>
		{#each [...fruits].reverse() as fruit}
			<li>{fruit}</li>
		{/each}
	</ul>
	<h2>Fruits</h2>
	<ul>
		{#each fruits as fruit}
			<li>{fruit}</li>
		{/each}
	</ul>
	<Fruits {fruits} />
	<Fruits {fruits} reverse/>
	<Fruits {fruits} slice="-2"/>
	<Fruits {fruits} slice="0,3"/>
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
	<h3>
		{text}
	</h3>
	<input type="text" value={text} on:input={(e) => {text = e.target.value}}/>
	<input type="text" bind:value={text} />
	<button on:click={() => {text = 'Hanae'}}>
		Click
	</button>
	<br />
	<Parent />
</main>

<style>
	h1 {
		color : red;
	}
	.active {
		color: blue;
	}
	.box {
		width: 300px;
		height: 150px;
		background-color: orange;
	}
</style>