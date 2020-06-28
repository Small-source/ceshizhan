<template>
    <!-- 10项主题训练 -->
    <div class="tenThemeCard">       
        <div class="card">
        	<div class="title_box">
        		{{themeObj.title}}
        		<div class="close" @click="$emit('go-close')">×</div>
        	</div>
        	<div class="content_box">
	            <div class="content" v-for="(item,index) in themeObj.listData">
	            	<p class="title">{{item.sTitle}}</p>
	            	<div class="detail_box main_box">
	            		<p class="main_title">介绍：</p>
	            		<p class="detail">{{item.detail}}</p>
	            	</div>
	            	<div class="main_box" v-if="item.content.length">
	            		<p class="main_title">课程内容：</p>
	            		<ul>
	            			<li v-for="child in item.content">{{child}}</li>
	            		</ul>
	            	</div>

	            	<div class="main_box" v-if="item.training.length">
	            		<p class="main_title">课程练习：</p>
	            		<ul>
	            			<li v-for="child in item.training">{{child}}</li>
	            		</ul>
	            	</div>
	            	<div class="main_box" v-if="item.work.length">
	            		<p class="main_title">课程作业：</p>
	            		<ul>
	            			<li v-for="child in item.work">{{child}}</li>
	            		</ul>
	            	</div>
	            	<div class="main_box" v-if="themeIndex == 8">
	            		<p class="main_title">课程内容：</p>
		            	<table>
		            		<tr><th>次数</th><th>单元目标</th><th>活动名称</th></tr>
		            		<tr>
		            			<td>第一次</td>
		            			<td>
		            				<p>1.破冰，成员相互认识并初步了解</p>
		            				<p>2.热身，构建和谐的团体氛围</p>
		            			</td>
		            			<td>
		            				<p>1.微笑握手</p>
		            				<p>2.连环自我介绍</p>
		            				<p>3.爱在指尖</p>
		            				<p>4.我记住了ta</p>
		            			</td>
		            		</tr>
		            		<tr>
		            			<td>第二次</td>
		            			<td>
		            				<p>1.进一步加深团体成员互相了解</p>
		            				<p>2.帮助成员在人际关系中自我探索</p>
		            				<p>3.了解团体及人际交往重要性</p>
		            				<p>4.增进信任感，增进成员互相接纳</p>
		            			</td>
		            			<td>
		            				<p>1.比比谁更快</p>
		            				<p>2.马兰开花</p>
		            				<p>3.朋友有点大拍卖</p>
		            				<p>4.COPY不走样</p>
		            			</td>
		            		</tr>
		            		<tr>
		            			<td>第三次</td>
		            			<td>
		            				<p>1.帮助成员树立积极的人际交往态度</p>
		            				<p>2.增强团体凝聚力</p>
		            				<p>3.增强成员在团体中的参与程度</p>
		            			</td>
		            			<td>
		            				<p>1.真真假假</p>
		            				<p>2.抢椅子</p>
		            				<p>3.心有千千结</p>
		            				<p>4.心灵捕手</p>
		            			</td>
		            		</tr>
		            		<tr>
		            			<td>第四次</td>
		            			<td>
		            				<p>1.进一步了解自己和他人</p>
		            				<p>2.学习合作共事，相互信任</p>
		            			</td>
		            			<td>
		            				<p>1.小小动物园</p>
		            				<p>2.猜猜我是谁</p>
		            				<p>3.我说你画</p>
		            				<p>4.比大小</p>
		            			</td>
		            		</tr>
		            		<tr>
		            			<td>第五次</td>
		            			<td>
		            				<p>1.互相支持和鼓励，获得信心</p>
		            				<p>2.整理并分享自己在团体中的收获和感受</p>
		            				<p>3.让小组在融洽的气氛中结束</p>
		            			</td>
		            			<td>
		            				<p>1.可怜的小猫</p>
		            				<p>2.心灵援助</p>
		            				<p>3.优点轰炸</p>
		            				<p>4.把心留住</p>
		            			</td>
		            		</tr>
		            	</table>
		            </div>
	            </div>
	        </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: "tenThemeCard",
        props: ['themeIndex'],
        data(){
            return {
            	idx: this.themeIndex,
            	ThemeData: [
            		{ title: '时间管理',listData: [
            			{ sTitle: '时间管理第一课',detail: '根据国内外时间管理的相关理论和实践，结合学生学习的实际情况进行设计，首先通过撕纸活动认识时间的重要性，并在认识自身时间管理情况的基础上，主动运用一些时间管理策略，提高时间利用效率，发展时间管理能力，以便高效地达成学习目标，提高学习成绩。',content: [
            				'Part 1：撕纸活动','Part 2：时间管理量表测评','Part 3：番茄工作法'
            			], training: [], work: [] },
            			{ sTitle: '时间管理第二课',detail: '在第一课的基础上，让学生认识自身目前的时间分配情况，主动运用一些时间管理策略，进一步提高时间利用效率，发展时间管理能力。',content: ['Part 1：我的时间大饼','Part 2：时间管理四象限法'], training: [], work: [] }
            		] },
            		{ title: '目标管理',listData: [
            			{ sTitle: '目标管理课程',detail: '从教育心理学的角度，帮助学生解读成就目标定向测评，梳理学生目标管理具体情况，并对学生进行讲解评估；教会学生掌握制定目标的方法，结合故事、游戏、案例等方式帮助理解、吸收，最终达到能够让学生更加注意自己目标设置状况，并运用相关方法做目标管理，提高学习效率；同时结合时间管理来制定目标和行动计划。',content: ['Part 1：小故事或小游戏','Part 2：成就目标定向量表测评','Part 3：目标管理及分解原则'], training: [], work: [] }
            		] },
            		{ title: '归因训练',listData: [
            			{ sTitle: '归因训练',detail: '从教育心理学的角度出发，让学生了解自己目前的归因倾向，教会学生正确的归因方法，让学生学会对成绩、排名等进行合理归因，将考试结果等归因于内部可以改变的因素，提高学习动机，激发学习兴趣，促使学生能够更自主、更有效地学习。',content: ['Part 1：自我评估','Part 2：维纳归因训练'], training: [], work: [] }
            		] },
            		{ title: '自信心提升训练',listData: [
            			{ sTitle: '自信心提升训练',detail: '自信心即自我效能感指的是对自己能否胜任某项任务的信心。认知行为理论认为，自我效能感越高的人，愿意付出的努力越多。自我效能感通过影响学习动机、目标设立、学习情感等方面而最终影响学业成绩。本课程旨在通过带领学生完成认识自卑的形成过程、打破自卑循环、重建自信这三个环节，以打破学生固有的自卑循环，重建自信的认知结构。',content: ['Part 1：认识自卑的形成过程','Part 2：打破自卑循环','Part 3：重建自信'], training: ['练习 1：认识自卑的形成过程','练习 2：缓解焦虑的自我提问','练习 3：辩证看待优缺点','练习 4：自我肯定清单','练习 5：接纳对自己的赞美','练习 6：每天10个小成就'], work: [] }
            		] },
            		{ title: '自我激励训练',listData: [
            			{ sTitle: '自我激励训练',detail: '心理学家研究如何激发和维持个人内部动力超过30年，提出了六大因素，分别是：个人的需要/兴趣/情感，目标设置特征，任务特征，自我效能感，社会支持和外在反馈。通过本节课程，教学生学会科学地进行自我激励。',content: [], training: ['练习 1：自我激励'], work: [] }
            		] },
            		{ title: '思维导图训练',listData: [
            			{ sTitle: '思维导图训练',detail: '通过教学让学生了解思维导图的应用场景与优势，学会使用思维导图工具，在日常学习中能灵活使用思维导图进行学业训练。',content: [], training: [], work: ['上传思维导图图片'] }
            		] },
            		{ title: '自我提问训练',listData: [
            			{ sTitle: '自我提问训练',detail: '从心理学的角度出发，让学生理解自我提问方法的重要性，通过训练学会使用自我提问的方法，并能够有意识地在平常的学习中使用。结合错题本、思维导图训练和归因训练，共同提高学生的元认知水平。',content: [], training: [], work: [] }
            		] },
            		{ title: '情绪管理',listData: [
            			{ sTitle: '情绪管理第一课',detail: '从心理学的角度帮助学生认识、梳理自己的情绪，掌握情绪管理的方法，结合案例、活动帮助学生学习理解，最终达到能够让学生认识到情绪，并合理地管理和掌控情绪，做情绪的主人。',content: ['Part 1：自我评估','Part 2：了解情绪','Part 3：觉察情绪'], training: [], work: [] },
            			{ sTitle: '情绪管理第二课',detail: '从心理学的角度，以情绪ABC理论为基础，帮助学生意识到消极情绪的出现不是由于事件本身，而是由于自身对事件的不合理信念，通过与不合理信念进行辩论的方式培养积极乐观的情绪，做情绪的主人。',content: [], training: [], work: [] }

            		] },
            		{ title: '人际关系',listData: [
            			{ sTitle: '人际关系课程',detail: '从心理学的角度，结合团体辅导特点，帮助学生理清人际关系困扰，找到团队协作的方法和通路，掌握人际沟通的方法，提高学生人际交往能力。',content: [], training: [], work: [] }
            		] },
            		{ title: '注意力训练',listData: [
            			{ sTitle: '注意力训练',detail: '从心理学的角度帮助学生评估其学习能力，运用相关教具帮助学生训练其注意力、记忆力和思维力，同时结合案例、活动及作业的形式帮助学生加深训练，提高学生的注意力、记忆力、思维力，提高整体的学习能力以最终达到提高学习成绩。',content: [], training: [], work: [] }
            		] },
            	]
            }
        },
        computed:{
        	themeObj() {
        		let idx = this.themeIndex;
        		let data = this.ThemeData;
        		return data[idx];
        	}
        },
        methods:{

        },
        watch:{

        },
        created() {

        },
        mounted(){
                    
        }
    }
</script>
<style type="text/css" lang='less' scoped>
    .tenThemeCard {   
        position: fixed;
        left: 0;
        top: 0;
        bottom: 0;
        right: 0;
        z-index: 10;
        background: rgba(0,0,0,.5);
        display: flex;
        align-items: center;
        justify-content: center;
        .card {
            width: 600px;
            height: 540px;
            background-color: #fff;
            .title_box {
            	color: #fff;
            	line-height: 60px;
            	font-size: 22px;
            	height: 60px;
            	text-align: center;
            	background: url(/imgs/consultation/bg_huojiang.png) no-repeat;
            	position: relative;
            	.close {
					width: 30px;
					height: 30px;
					line-height: 30px;
					position: absolute;
					top: 5px;
					right: 10px;
					font-size: 30px;
					cursor: pointer;
            	}
            }
            .content_box {
            	box-sizing: border-box;
        		height: 480px;
        		padding: 10px;
            	overflow-y: auto;
            }
        	.content {
        		margin-bottom: 20px;
        		.title {
        			font-size: 18px;
        			margin-bottom: 5px;
        		}
        	}
            .main_box {
            	margin-bottom: 5px;
				.main_title {
					font-size: 16px;
					color: #3492f9;
					line-height: 30px;
				}
				.detail {
					line-height: 1.5em;
					font-size: 14px;
					color: #333;
				}
				ul li {
					line-height: 1.5em;
					font-size: 14px;
					color: #333;
				}
				table {
					border: 1px solid #000;
					tr {
						th {
							border: 1px solid #000;
							line-height: 40px;
							padding-left: 10px;
						}
						td {
							border: 1px solid #000;
							padding: 5px 10px;
							line-height: 30px;
						}
					}
				}
            }

        }
    } 
</style>
