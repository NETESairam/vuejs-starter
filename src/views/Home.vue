<template>
	<div class="home">
		<img alt="Vue logo" src="../assets/logo.png" />
		<HelloWorld msg="Welcome to Your Vue.js App" />
        <v-button :customClass="'btn-secondary'" :customLabel="'Button Click'" @click="buttonClick()" />
	</div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
    name: 'home',
    components: {
        HelloWorld,
    },
    mounted () {
        // console.log('test');
        // console.log($('.home'));
    },
    methods: {
        buttonClick () {
            console.log('test');

        }
    }
};
</script>
