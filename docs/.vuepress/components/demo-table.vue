<script>
const id = 'demo-table'
export default {
	name: id,
}
</script>
<template>
	<a-card hoverable style="width: 300px">
		<img slot="cover" alt="example" src="/demo1.jpg" />
		<template slot="actions" class="ant-card-actions">
			<a-button
				type="primary"
				href="https://codesandbox.io/s/upbeat-gould-gtz10"
			>
				Try it!
			</a-button>
		</template>
		<a-card-meta
			title="Basic Rendering"
			description="This is the description"
		>
			<!-- <a-avatar
				slot="avatar"
				src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
			/> -->
		</a-card-meta>
	</a-card>
</template>
