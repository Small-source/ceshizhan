<template>
    <!-- 升学途径 其他主流途径 -->
    <!--  (高职单招)-->
    <div class="gaozhidanzhao studyway_common_father">
        <div class="banner">
            <img src="/imgs/wayToStudy/main/banner.png" alt="">
        </div>
        <div class="main">
            <h6 class="main_title">什么是高职单招？</h6>
            <div class="main_box">
                <p>单招即单招招生，是国家授权高职院校独立组织考试录取的一种方式，必须于高考前完成录取。按教育部规定，考生参加单独招生考试，若被正式录取，无需参加全国统一高考，未被录取的可继续参加全国统一高考。单独考试招生是进一步完善高等教育多样化选拔机制的试点，是国家高考的组成部分。学生入校后与统招的学生待遇相同。参加招生录取的学校主要是一些独立设置的全日制普通高职院校，除少量招收本科师资班外，其余的招生计划均为普通专科。</p>
            </div>    
        </div>
        <div class="benefit main">
            <h6 class="main_title">高职单招的优势</h6>
            <div class="main_box">
                <p>（1）可以用不高的分数，上一个好的一流专科学校。</p>
                <p>（2）可以避开高考的锋芒，增加自己能上大学的机率。凡被高职单招录取的考生，一律不再参加普通高考，将会提前拿到大学录取通知书，直到9月份才到大学报到入学，有更充足的时间来安排自己学习和生活。</p>
                <p>（3）单招学校毕业后所拿的文凭和通过高考拿的文凭是完全一样:高职单独招生属全日制普通高等职业教育专科层次，被录取的考生，在校读书期间虽不能转学、转专业，但资助、奖评及毕业后待遇等与全国普通高校招生统一录取的考生完全相同。</p>
                <p>（4）单招是一条捷径，对于成绩不好的学生上大学的机会要大于通过高考。</p>
            </div>
        </div>
        <div class="main">
            <h6 class="main_title">高职单招的劣势</h6>
            <div class="main_box">
               <p>（1）如果被录取，将不能参加高考，也许会造成遗憾。</p>
               <p>（2）高考可以同时填报几个学校来作为自己的第一志愿、第二志愿等，单招只能填报一所院校。</p>
               <p>（3）可选择的范围小，招生的院校比较少，而且招生院校针对于高考生是开放所有的专业供学生填报，针对单招生是开放部分专业。</p>
               <p>（4）对单招生开放的一般是大专院校，没有本科。军事、医护类等比较特殊的大专院校不对单招生开放，而且所针对的学生群体是平时成绩不太优秀的学生。</p>
               <p>（5）就业单位并不是全部承认，有单位在招聘的时候提出只要全日制全国统一招生的毕业生。</p>
            </div>   
        </div>
        <!-- 单招流程 -->
        <div class="danzhaoliucheng main">
            <h6 class="main_title">单招流程<span>单招流程全国各省都不一样，下方仅供参考</span></h6>
            <ul class="liucheng">
                <li v-for="(item, index) in danzhaoliucheng" :key="index">
                    <p class="title">{{item.title}}</p>
                    <p class="detail">{{item.detail}}</p>
                </li>
            </ul>
            <h6 class="remind"><span>*各省进行单招的院校可通过进入省教育考试院进行查看</span></h6>
        </div>
    </div>
</template>
<script>

export default {
    // components: { Yuanxiaoku },
    // props: [ 'message' ],
     data() {
        return {
            danzhaoliucheng: [
                { title: '网上报名', detail: '登录教育考试院门户网，进入“高职单招报名入口”，选择拟报考院校，并认真阅读招生章程。' },
                { title: '考试', detail: '高职单招考试由文化素质测试、职业技能测试两部分组成。' },
                { title: '成绩和分数线公布', detail: '各单招院校将经审核通过的预录取分数线及录取结果，在学校公众信息网上予以公布。' },
                { title: '录取', detail: '录取达到院校条件的考生' },
                { title: '二次征集志愿', detail: '文化和技能测试均合格，但未被预录取的考生，可登录教育考试院门户网参加二次征集志愿，填报尚有缺额计划的单招院校。' },
            ]
        }
    },
    methods: {
    },
    created() {
    }
}
</script>

<style type="text/css" lang='less' scoped>
    @import "../study_way_common.less";
    .gaozhidanzhao {
        .danzhaoliucheng {
            .liucheng {
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
                li {
                    width: 160px;
                    font-size: 14px;
                    border-radius: 5px;
                    box-shadow: 0px 0px 10px #eaeaea;
                    .title {
                        height: 30px;
                        line-height: 30px;
                        background-color: #2c8ffc;
                        color: #fff;
                        text-align: center;
                    }
                    .detail {
                        padding: 10px;
                        line-height: 20px;
                        color: #333;
                        font-size: 12px;
                    }
                }
            }
            .remind {
                padding-top: 20px;
                color: red;
                line-height: 40px;
                font-size: 14px;
            }
        }
    }
</style>