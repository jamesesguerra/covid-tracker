<template>
    <footer class="text-center footer">
        <p>{{ text }}</p>
    </footer>
</template>

<script>
export default {
    data() {
        return {
            text: 'made with <3 by james',
        }
    }
}
</script>

<style scoped>
.footer {
    padding-bottom: 1rem;
}

</style>