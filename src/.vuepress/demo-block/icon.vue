<template>
    <svg class="w-icon" aria-hidden="true" @click="$emit('click', $event)">
        <use :xlink:href="`#i-${name}`"></use>
    </svg>
</template>
<script>
import './svg.js'
export default {
    name: 'WheelIcon',
    props: ['name']
}
</script>
<style lang="scss" scoped>
.w-icon {
    height: 1em;
    width: 1em;
}
</style>
