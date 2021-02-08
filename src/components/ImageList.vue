<template>
    <div>ImageList Form

    {{ allImages.length }}
    </div>

</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
    name: 'ImageList',
    computed: mapGetters(['allImages']),
    methods: mapActions(['fecthImages']),
    created() {
        this.fecthImages();
    }
    
}
</script>

<style scoped>

</style>