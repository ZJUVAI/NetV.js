<script>
const id = 'demo-background'
import demo from './demo-background-js.js'
export default {
	name: id,
	data() {
		return {
			id,
		}
	},
	mounted() {
		demo(this.id)
	},
}
</script>
<template>
	<div v-bind:id="id"></div>
</template>
