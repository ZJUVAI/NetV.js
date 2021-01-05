<template>
    <div id="background-container">
        <img id="background" :src="$withBase('/background.gif')" alt="background" />
    </div>
</template>

<script>
</script>

<style scoped lang='scss'>
#background-container {
    $height: 800px;
    $width: 2200px;
    $ratio: 0.75;
    position: absolute;
    overflow: hidden;
    top: 0;
    left: 0;
    width: 100%;
    height: $height * $ratio;

    #background {
        height: $height * $ratio;
        width: $width * $ratio;
        max-height: $height * $ratio;
        max-width: $width * $ratio;
        position: absolute;
        top: 0;
        left: 50%;
        transform: translate(-50%);
    }
}
</style>