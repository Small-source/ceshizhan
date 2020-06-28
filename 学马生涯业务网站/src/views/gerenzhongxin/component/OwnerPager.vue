<template>
	<div class="owner_pager">
		<div class="pages">
            <span class="count">共{{count}}条 {{pageValue}}/{{totalPage}}页</span>
            <span @click="goBack()" :class="pageValue > 1 ? 'btn_left': 'un_btn_left'" v-show="totalPage > 1"></span>
            <span @click="goOn(1)" :class="pageValue === 1 ? 'active' : 'button'" v-show="totalPage > 0">1</span>
            <span v-show="pageValue > 4 && totalPage > 7">...</span>
            <span @click="goOn(page[0])" :class="pageValue === page[0] ? 'active' : 'button'" v-show="totalPage >= 2">{{page[0]}}</span>
            <span @click="goOn(page[1])" :class="pageValue === page[1] ? 'active' : 'button'" v-show="totalPage >= 3">{{page[1]}}</span>
            <span @click="goOn(page[2])" :class="pageValue === page[2] ? 'active' : 'button'" v-show="totalPage >= 4">{{page[2]}}</span>
            <span @click="goOn(page[3])" :class="pageValue === page[3] ? 'active' : 'button'" v-show="totalPage > 4 && totalPage >= page[3]">{{page[3]}}</span>
            <span @click="goOn(page[4])" :class="pageValue === page[4] ? 'active' : 'button'" v-show="totalPage > 5 && totalPage >= page[4]">{{page[4]}}</span>
            <span v-show="page[4] < totalPage - 1">...</span>
            <span @click="goOn(totalPage)" v-show=" page[4] < totalPage" :class="pageValue === totalPage ? 'active' : 'button'">{{totalPage}}</span>
            <span @click="goNext()" :class="pageValue < totalPage ? 'btn_right' : 'un_btn_right'" v-show="totalPage > 1"></span>
            
        </div>
	</div>
</template>
<script>
    export default{
    	// props: {
     //        rightList: {

     //        },
    	// 	// // 页面值
    	// 	// pageValue: {
    	// 	// 	default: 1
    	// 	// },
    	// 	// // 每页显示多少条数据
    	// 	// pageSize: {
    	// 	// 	default: 15
    	// 	// },
    	// 	// 共有多少条
    	// 	// count: {
    	// 	// 	default: ''
    	// 	// },
    	// 	// 一共有多少页
    	// 	// totalPage: {
    	// 	// 	default: 1
    	// 	// }
    	// },
    	props: [ 'rightList' ],
	    data(){
	        return {
                data: [],
	            // 页码值
	            pageValue: 1,
	            // 每页显示多少条数据
	            pageSize: 5,
	            // // 共有多少条
	            count: 0,
	            // // 一共有多少页
            	totalPage: 1,
            	// 页码
            	page: [ 2 ,3 , 4, 5, 6 ],
	        }
	    },
	    computed: {
            counts() {
                return this.data.length
            }
	    },
	    methods: {
		    goOn(value) {
	            this.pageValue = value;
	            // 根据中间的值计算步长
	            var num = this.page[2];
	            // 步长
	            var index = value - num;
	            if(this.totalPage <= 7) {
	                window.scroll(0, 0);
	                return;
	            }
	            if(value < 5) {
	                for(var i = 0; i < this.page.length; i ++) {
	                    this.page[i] = i + 2;
	                }
	                window.scroll(0, 0);
	                return;
	            }

	            // 下（页加）
	            if(index > 0 &&  4 < value <= this.totalPage) {
	                for(var i = 0; i < this.page.length; i ++) {
	                    this.page[i] += index;
	                }
	                window.scroll(0, 0);
	                return;
	            }
	            // 上（页减）
	            if(index < 0 && value >= 4) {
	                for(var i = 0; i < this.page.length; i ++) {
	                    this.page[i] += index;
	                }
	                window.scroll(0, 0);
	                return;
	            }
	            if(index < 0 && value === 3) {
	                this.page[0] = 2;
	                this.page[1] = 3;
	                this.page[2] = 4;
	                this.page[3] = 5;
	                this.page[4] = 6;
	                window.scroll(0, 0);
	                return;
	            }
	        },
	        // 上一页
	        goBack() {
	        	if(this.pageValue == 1) {
	        	    return;	
	        	}
	            this.pageValue --;
	            if(this.totalPage <= 7) {
	                window.scroll(0, 0);
	                return;
	            }
	            if(this.pageValue < 5) {
	                for(var i = 0; i < this.page.length; i ++) {
	                    this.page[i] = i + 2;
	                }
	            }else {
	                for(var i = 0; i < this.page.length; i ++) {
	                    this.page[i] --;
	                }
	            }
	            window.scroll(0, 0);
	        },
	        // 下一页
	        goNext() {
	        	if(this.pageValue == this.totalPage) {
	        		return;
	        	}
	            this.pageValue ++;
	            if(this.totalPage <= 7) {
	                window.scroll(0, 0);
	                return;
	            }
	            if(this.pageValue >= 5) {
	                for(var i = 0; i < this.page.length; i ++) {
	                    this.page[i] ++;
	                }
	            }else {
	                for(var i = 0; i < this.page.length; i ++) {
	                    this.page[i] = i + 2;
	                }
	            }
	        },
	    },
	    created (){

	    },
	    mounted(){
	    },
	    watch: {
	    	pageValue() {
	    		this.$parent.changeRightList(this.pageValue);
	    	},
            rightList: {
                // 配置immediate为true,初始化时执行watch，false初始化时不会执行，默认为false
                immediate: true,
                handler(val) {
                    let data = this.rightList; 
                    this.pageValue = 1;
                    this.count = data.length;
                    this.totalPage = Math.ceil(data.length/8);
                }
            }
	    }
    }
</script>
<style lang="less" scoped>
    .owner_pager {
        margin: 0 auto;
        height: 28px;
        background-color: #fff;
        padding-top: 20px;
        padding-bottom: 20px;
        .pages {
            margin: 0 auto;
            text-align: center;
            height: 28px;
            line-height: 28px;
            display: flex;
            // justify-content: flex-end;
            justify-content: center;
            span {
                margin-left: 10px;
                text-align: center;
                width: 28px;
                height: 28px;
                border-radius: 2px;
                // border: 1px solid #dcdcdc;
                background-color: #f1eff0;
                cursor: pointer;
                color: #666666;
                // &:hover {
                //     background-color: #2d8ffc;
                //     color: #fff;
                // }
            }
            .btn_left {
                background: url(/imgs/xingaokao/mubiaotansuo/yuanxiaoku/icon/icon_left.png) no-repeat center center;
                background-color: #f1eff0;
                color: transparent;
                &:hover {
                    background: url(/imgs/xingaokao/mubiaotansuo/yuanxiaoku/icon/icon_left_white.png) no-repeat center center;
                    background-color: #2d8ffc;
                    color: transparent;
                } 
            }
            .un_btn_left {
            	background: url(/imgs/xingaokao/mubiaotansuo/yuanxiaoku/icon/un_btn_left.png) no-repeat center center;
                color: transparent;
                background-color: #f1eff0;
                &:hover {
                	// background-color: #fff;
                	cursor: not-allowed
                }
            }
            .btn_right {
                background: url(/imgs/xingaokao/mubiaotansuo/yuanxiaoku/icon/icon_right.png) no-repeat center center;
                color: transparent;
                background-color: #f1eff0;
                  &:hover {
                    background: url(/imgs/xingaokao/mubiaotansuo/yuanxiaoku/icon/icon_right_white.png) no-repeat center center;
                    background-color: #2d8ffc;
                } 
            }
            .un_btn_right {
            	background: url(/imgs/xingaokao/mubiaotansuo/yuanxiaoku/icon/un_btn_right.png) no-repeat center center;
                background-color: #f1eff0;
                &:hover {
                	// background-color: #fff;
                	cursor: not-allowed
                }
            }
            .count {
                width: 150px;
                font-size: 14px;
                border: none;
                cursor: auto;
                background-color: #fff;
                color: #2d8ffc;
                // &:hover {
                // 	background-color: #fff;
                // 	color: #2d8ffc;
                // }
            }
            .active {
                display: inline-block;
                margin-left: 10px;
                width: 28px;
                height: 28px;
                border-radius: 2px;
                // border: 1px solid #2d8ffc;
                background-color: #2d8ffc;
                color: #fff;
            }
        }
    }
</style>