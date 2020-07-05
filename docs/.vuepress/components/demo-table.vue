<script>
const id = 'demo-table'
export default {
	name: id,
	data() {
		return {
			exampleArr: [
				'basic',
				'build-in-dataset',
				'configs',
				'external-layout',
				'mouse-interaction',
				'large-graph',
			],
		}
	},
}
</script>
<template>
	<div>
		<a-row
			:gutter="[
				{ xs: 8, sm: 16, md: 24, lg: 32 },
				{ xs: 8, sm: 16, md: 24, lg: 32 },
			]"
		>
			<a-col :span="8" v-for="example in exampleArr" :key="example">
				<a-card hoverable style="width: 300px">
					<img
						slot="cover"
						alt="example"
						v-if="example != 'external-layout'"
						:src="`/${example}.jpg`"
					/>
					<img
						slot="cover"
						alt="example"
						v-else
						:src="`/${example}.gif`"
					/>
					<template slot="actions" class="ant-card-actions">
						<a-button
							type="primary"
							href="https://codesandbox.io/s/upbeat-gould-gtz10"
						>
							Try it!
						</a-button>
					</template>
					<a-card-meta
						:title="example"
						description="This is the description"
					>
						<!-- <a-avatar
				slot="avatar"
				src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
			/> -->
					</a-card-meta>
				</a-card>
			</a-col>
		</a-row>
	</div>
</template>
