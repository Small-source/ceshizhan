<template>
	<div class="page_content page_level" style="height: 1200px;">
		<h6 class="small_title">学业水平考试</h6>	
		<table>
			<tr>
				<th>考试</th>
				<th>成绩</th>
				<th>满分</th>
				<th>等级</th>
				<th>考试时间</th>
			</tr>
			<tr v-for="(item,index) in level">
				<td>{{item.sub}}</td>
				<td>{{item.s}}</td>
				<td>{{item.fs}}</td>
				<td>{{item.g}}</td>
				<td>{{item.d}}</td>
			</tr>
		</table>
	</div>
</template>
<script>
export default {
	name: 'growthMessage3',
	components: { },
    props: ['level'],
    data() {
        return {

        }
    },
    computed: {
    },
    methods: {
    }
}
</script>
<style type="text/css" lang='less' scoped>
	@import './report.less';
	.page_level {
		table {
			tr {
				line-height: 44px;
				th {
					border: 2px solid #fff;
					width: 20%;
					text-align: center;
					color: #fff;
					background-color: #7AC34F;
				}
				td {
					border: 1px solid #fff;
					text-align: center;
					color: #333;
					background-color: #F3F4F8;
				}
			}
		}
	}
</style>