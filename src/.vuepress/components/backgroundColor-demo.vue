<script>
const id = 'backgroundColor-demo'
export default {
    name: id,
    data() {
        return {
            id
        }
    },
    mounted() {
        const div = document.getElementById(id)
        const width = div.clientWidth
        const height = 300
        const testData = {
            nodes: [
                { id: '0', x: (width / 5) * 2, y: height / 3 },
                { id: '1', x: (width / 5) * 3, y: height / 3 },
                { id: '2', x: width / 2, y: (height * 2) / 3 }
            ],
            links: [
                { source: '0', target: '2' },
                { source: '1', target: '2' }
            ]
        }
        const netv = new NetV({
            container: div,
            width,
            height
        })
        netv.data(testData)

        netv.backgroundColor({ r: 68 / 255, g: 68 / 255, b: 68 / 255, a: 0.5 })
        netv.draw()
    }
}
</script>
<template>
    <div v-bind:id="id"></div>
</template>

<style scoped lang="scss">
div {
    border: 1px solid #ccc;
    border-radius: 3px;
}
</style>
