<script>
const id = 'demo-2'
import demo from './demo-2-snippet'
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
	<div v-bind:id="id" class="demo"></div>
</template>
