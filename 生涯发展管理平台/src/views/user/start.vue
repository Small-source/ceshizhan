<template>
    <div>

    </div>
</template>

<script>
    export default {
        name: "start",
        created(){
            let token= window.sessionStorage.getItem('ymtxToken')
            if(token){
                this.$ajax.post(this.G_uri+this.ports.user.getUserInfo,{},{
                    headers:{
                        token: token
                    }
                }).then((res)=>{
                    if(res.data.code==2000){
                        if(res.data.data.is_career_archives!=1){
                            this.$router.push('/login')
                        }else{
                            this.$router.push('/careerArchives')
                        }
                    }else{
                        window.localStorage.clear();
                        this.$router.push('/login')
                    }
                })
            }else{
                this.$router.push('/login')
            }
        }
    }
</script>

<style scoped>

</style>
