<template>
    <div class="main">
       <recordList></recordList>
       <themeTraining></themeTraining>
       <diagnosis></diagnosis>
    </div>
</template>

<script>
    import recordList from './consultationRecord/recordList.vue'
	import themeTraining from './themeTraining/themeTraining.vue'
	import diagnosis from './diagnosis/diagnosis.vue'
    export default {
    	name:'main_index',
    	components:{ recordList, diagnosis, themeTraining },
        data() {
            return {
            }
        },
        methods: {
        },
        watch: {
        },
        created() {
        }
    }
</script>

<style scoped>
    .main{
    }
</style>
