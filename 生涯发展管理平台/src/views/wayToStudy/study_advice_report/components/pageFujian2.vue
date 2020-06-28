<template>
	<div>
		<div class="page_shadow page_index">
			<div class="page pdf-page">
				<div class="header">
					<span>附件2</span>目标大学梯度表
				</div>
				<!-- <h6 class="small_title">学生情况</h6> -->
				<div class="main_box">
					<div class="main_title">
						<span></span>
						目标大学
					</div>
					<ul class="lis_aims" v-if="usData">
						<li v-for="(item,index) in usData[1]" :key="index" class="aims_box">
							<p class="school_name"><img :src="item.logo" alt="">{{item.universityName}}</p>
							<p class="city">{{item.city}}</p>
							<p class="category">{{item.category}}</p>
							<p class="line">近三年录取分数线</p>
							<ul class="scoreLine">
								<li>
									<p v-if="item.scoreLine.some((it)=>{
										return it.artsAndScience == '文史'
									})">文史： </p>
									<p  v-for="(child, idx) in item.scoreLine" v-if="child.artsAndScience=='文史'" :Key="idx">
										<span>{{item.artsAndScience}}</span>
										{{child.averageScore}}
										<span>{{'(' + child.year + ')'}}</span>
									</p>
								</li>
								<li>
									<p v-if="item.scoreLine.some((it)=>{
										return it.artsAndScience == '理工'
									})">理工： </p>
									<p v-for="(child, idx) in item.scoreLine" v-if="child.artsAndScience=='理工'" :Key="idx">
										<span>{{item.artsAndScience}}</span>
										{{child.averageScore}} 
										<span>{{'(' + child.year + ')'}}</span>
									</p>
								</li>
							</ul>
						</li>
					</ul>
				</div>
				<div class="main_box">
					<div class="main_title">
						<span></span>
						提高5分
					</div>
					<ul class="lis_aims" v-if="usData">
						<li v-for="(item,index) in usData[2]" :key="index" class="aims_box">
							<p class="school_name"><img :src="item.logo" alt="">{{item.universityName}}</p>
							<p class="city">{{item.city}}</p>
							<p class="category">{{item.category}}</p>
							<p class="line">近三年录取分数线</p>
							<ul class="scoreLine">
								<li>
									<p v-if="item.scoreLine.some((it)=>{
										return it.artsAndScience == '文史'
									})">文史： </p>
									<p  v-for="(child, idx) in item.scoreLine" v-if="child.artsAndScience=='文史'" :Key="idx">
										<span>{{item.artsAndScience}}</span>
										{{child.averageScore}}
										<span>{{'(' + child.year + ')'}}</span>
									</p>
								</li>
								<li>
									<p v-if="item.scoreLine.some((it)=>{
										return it.artsAndScience == '理工'
									})">理工： </p>
									<p v-for="(child, idx) in item.scoreLine" v-if="child.artsAndScience=='理工'" :Key="idx">
										<span>{{item.artsAndScience}}</span>
										{{child.averageScore}} 
										<span>{{'(' + child.year + ')'}}</span>
									</p>
								</li>
							</ul>
						</li>
					</ul>
				</div>
				<div class="main_box">
					<div class="main_title">
						<span></span>
						提高10分
					</div>
					<ul class="lis_aims" v-if="usData">
						<li v-for="(item,index) in usData[3]" :key="index" class="aims_box">
							<p class="school_name"><img :src="item.logo" alt="">{{item.universityName}}</p>
							<p class="city">{{item.city}}</p>
							<p class="category">{{item.category}}</p>
							<p class="line">近三年录取分数线</p>
							<ul class="scoreLine">
								<li>
									<p v-if="item.scoreLine.some((it)=>{
										return it.artsAndScience == '文史'
									})">文史： </p>
									<p  v-for="(child, idx) in item.scoreLine" v-if="child.artsAndScience=='文史'" :Key="idx">
										<span>{{item.artsAndScience}}</span>
										{{child.averageScore}}
										<span>{{'(' + child.year + ')'}}</span>
									</p>
								</li>
								<li>
									<p v-if="item.scoreLine.some((it)=>{
										return it.artsAndScience == '理工'
									})">理工： </p>
									<p v-for="(child, idx) in item.scoreLine" v-if="child.artsAndScience=='理工'" :Key="idx">
										<span>{{item.artsAndScience}}</span>
										{{child.averageScore}} 
										<span>{{'(' + child.year + ')'}}</span>
									</p>
								</li>
							</ul>
						</li>
					</ul>
				</div>
				<div class="main_box">
					<div class="main_title">
						<span></span>
						提高20分
					</div>
					<ul class="lis_aims" v-if="usData">
						<li v-for="(item,index) in usData[4]" :key="index" class="aims_box">
							<p class="school_name"><img :src="item.logo" alt="">{{item.universityName}}</p>
							<p class="city">{{item.city}}</p>
							<p class="category">{{item.category}}</p>
							<p class="line">近三年录取分数线</p>
							<ul class="scoreLine">
								<li>
									<p v-if="item.scoreLine.some((it)=>{
										return it.artsAndScience == '文史'
									})">文史： </p>
									<p  v-for="(child, idx) in item.scoreLine" v-if="child.artsAndScience=='文史'" :Key="idx">
										<span>{{item.artsAndScience}}</span>
										{{child.averageScore}}
										<span>{{'(' + child.year + ')'}}</span>
									</p>
								</li>
								<li>
									<p v-if="item.scoreLine.some((it)=>{
										return it.artsAndScience == '理工'
									})">理工： </p>
									<p v-for="(child, idx) in item.scoreLine" v-if="child.artsAndScience=='理工'" :Key="idx">
										<span>{{item.artsAndScience}}</span>
										{{child.averageScore}} 
										<span>{{'(' + child.year + ')'}}</span>
									</p>
								</li>
							</ul>
						</li>
					</ul>
				</div>
				<div class="main_box">
					<div class="main_title">
						<span></span>
						提高30分
					</div>
					<ul class="lis_aims" v-if="usData">
						<li v-for="(item,index) in usData[5]" :key="index" class="aims_box">
							<p class="school_name"><img :src="item.logo" alt="">{{item.universityName}}</p>
							<p class="city">{{item.city}}</p>
							<p class="category">{{item.category}}</p>
							<p class="line">近三年录取分数线</p>
							<ul class="scoreLine">
								<li>
									<p v-if="item.scoreLine.some((it)=>{
										return it.artsAndScience == '文史'
									})">文史： </p>
									<p  v-for="(child, idx) in item.scoreLine" v-if="child.artsAndScience=='文史'" :Key="idx">
										<span>{{item.artsAndScience}}</span>
										{{child.averageScore}}
										<span>{{'(' + child.year + ')'}}</span>
									</p>
								</li>
								<li>
									<p v-if="item.scoreLine.some((it)=>{
										return it.artsAndScience == '理工'
									})">理工： </p>
									<p v-for="(child, idx) in item.scoreLine" v-if="child.artsAndScience=='理工'" :Key="idx">
										<span>{{item.artsAndScience}}</span>
										{{child.averageScore}} 
										<span>{{'(' + child.year + ')'}}</span>
									</p>
								</li>
							</ul>
						</li>
					</ul>
				</div>
				<div class="main_box">
					<div class="main_title">
						<span></span>
						提高40分
					</div>
					<ul class="lis_aims" v-if="usData">
						<li v-for="(item,index) in usData[6]" :key="index" class="aims_box">
							<p class="school_name"><img :src="item.logo" alt="">{{item.universityName}}</p>
							<p class="city">{{item.city}}</p>
							<p class="category">{{item.category}}</p>
							<p class="line">近三年录取分数线</p>
							<ul class="scoreLine">
								<li>
									<p v-if="item.scoreLine.some((it)=>{
										return it.artsAndScience == '文史'
									})">文史： </p>
									<p  v-for="(child, idx) in item.scoreLine" v-if="child.artsAndScience=='文史'" :Key="idx">
										<span>{{item.artsAndScience}}</span>
										{{child.averageScore}}
										<span>{{'(' + child.year + ')'}}</span>
									</p>
								</li>
								<li>
									<p v-if="item.scoreLine.some((it)=>{
										return it.artsAndScience == '理工'
									})">理工： </p>
									<p v-for="(child, idx) in item.scoreLine" v-if="child.artsAndScience=='理工'" :Key="idx">
										<span>{{item.artsAndScience}}</span>
										{{child.averageScore}} 
										<span>{{'(' + child.year + ')'}}</span>
									</p>
								</li>
							</ul>
						</li>
					</ul>
				</div>
				<div class="big_page_number"></div>																			
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: 'fujian2',
	components: { },
    props: [ 'usData' ],
    data() {
        return {

        }
    },
    methods: {
    },
    watch: {
    },
    created() {
    },
    mounted() {

    }
}
</script>
<style type="text/css" lang='less' scoped>
	@import './report.less';
</style>