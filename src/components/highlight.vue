<template lang="pug">
    text-highlight(v-if="keyword" :queries="keyword") {{ name }}
</template>

<script>
import TextHighlight from 'vue-text-highlight'
export default {
    props: ['name', 'keyword'],
    components: {
        TextHighlight
    },
    computed: {
        text() {
            return this.name
        }
    },
    watch: {
        name() {
            this.$forceUpdate()
            return this.name = this.name
        }
    }
}
</script>
