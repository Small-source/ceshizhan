<template>
	<div class="downloadProgressMark">
        <div class="progressBar">
            <div class="box1">
                <div class="jincheng" :style='{right:100-parseInt(currentPage/totalPages*10000)/100+"%"}'></div>
            </div>
            <div class="box2">{{parseInt(currentPage/totalPages*100)}}%</div>
        </div>    
    </div>
</template>
<style type="text/css" lang='less' scoped>
	.downloadProgressMark{
		position: fixed;
	    top: 0;
	    left: 0;
	    bottom: 0;
	    right: 0;
	    z-index: 10000;
	    background: rgba(0,0,0,.5);
	    .progressBar {
		 	width: 330px;
		    height: 100px;
		    position: fixed;
		    left: 50%;
		    top: 50%;
		    margin-top: -50px;
		    margin-left: -165px;
		    z-index: 99;
		    .box1{
			    width: 100%;
			    height: 30px;
			    border-radius: 30px;
			    background:#D9D9D9;
			    position: relative;
			    overflow: hidden;
			    .jincheng{
				    position: absolute;
				    top: 0;
				    right:100%;
				    width: 100%;
				    height: 100%;
				    background-image:url("/imgs/careerManagement/jindutiao.png");
				    background-size:100% 100%;
				} 
			}
			.box2{
			    text-align: center;
			    color:#fff;
			    line-height: 40px;
			    font-size: 25px;
			}
		}
	}
</style>
<script>
export default {
    props: [ 'currentPage', 'totalPages' ],
    data() {
        return { 
        }
    },
    methods: {
      
    },
    watch: { 
       
    },
    mounted() {

       
    },
    created() {
       
    }
}
</script>