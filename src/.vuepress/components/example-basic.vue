<script>
const id = 'example-basic'
export default {
    name: id,
    data() {
        return {
            id
        }
    },
    mounted() {
        const testData = {
            nodes: [
                {
                    id: '0',
                    x: 300,
                    y: 100
                },
                {
                    id: '1',
                    x: 500,
                    y: 100
                },
                {
                    id: '2',
                    x: 400,
                    y: 400
                }
            ],
            links: [
                {
                    source: '0',
                    target: '2'
                },
                {
                    source: '1',
                    target: '2'
                }
            ]
        }

        const netv = new NetV({
            container: document.getElementById(id)
        })
        netv.data(testData)
        netv.draw()
    }
}
</script>
<template>
    <div v-bind:id="id"></div>
</template>
