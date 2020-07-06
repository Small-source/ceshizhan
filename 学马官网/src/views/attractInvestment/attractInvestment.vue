<template>
    <!-- 招商合作 -->
    <div class="attract_investment">
        <div class="banner">
        </div>
        <!-- 免费获取测试账号 -->
        <div class="free_getting_accounts">
            <div class="inner">
                <ul class="title_box">
                    <li class="top"></li>
                    <li class="title">免费获取测试账号</li>
                    <li class="foot"></li>
                </ul>
                <p class="remind" :style="{color: isSuccess ? '#3492f9': 'red'}">{{remind}}</p>
                <div class="input_phone">
                    <input type="text" placeholder="请输入您的姓名"  onfocus="this.placeholder=''" onblur="this.placeholder='请输入您的姓名'" class="username" v-model="free_name" maxlength="10">
                    <input type="number" placeholder="请输入您的手机号" class="telephone_number" onfocus="this.placeholder=''" onblur="this.placeholder='请输入您的手机号'" v-model="free_telephone_number">
                    <div class="btn" @click="getFreeAccount">立即领取</div>
                </div>
            </div>
            <div class="free_foot">
                <div class="inner">
                    <div class="main_roll">
                            <!-- 父容器里面的v-if="topMovieList.length>0"是必须写的，否则将不起作用 -->
                            <swiper class="roll-ul" :options="swiperOption" ref="mySwiper" v-if="freeArrList.length > 0" >　　　　　　　　　　　　　　
                                <swiper-slide v-for="(item, index) in freeArrList" :key="index" >
                                    <p>{{item.name}}</p><p>{{item.phone}}</p><p>{{item.time}}</p>
                                </swiper-slide>
                            </swiper>
                     </div>    
                </div>
            </div>
        </div>   
        <!-- 市场前景 -->
        <div class="market_prospect">
           <div class="inner">
                <ul class="title_box">
                    <li class="top"></li>
                    <li class="title">市场前景</li>
                    <li class="foot"></li>
                </ul>
                <div class="introduce">升学刚需，新高考改革催生新的蓝海市场，蕴藏无限商机</div>
                <ul class="content">
                    <li class="main_box" v-for="(item,index) in market_prospect" :key="index">
                        <div class="img_box">
                            <img :src="item.imgUrl" alt="">
                        </div>
                        <p class="main_title">{{item.title}}</p>
                        <p class="main_detail">{{item.detail}}</p>
                    </li>
                </ul>
           </div>
        </div>
        <!-- 学马三大优势 -->
        <div class="three_advantages">
            <div class="inner">
                <ul class="title_box">
                    <li class="top"></li>
                    <li class="title">学马三大优势</li>
                    <li class="foot"></li>
                </ul>
                <div class="introduce">提供个性化的升学规划解决方案</div>
                <div class="content">
                    <ul class="list">
                        <li v-for="(item,index) in three_advantages" :key="index" :style="'background: url(' + item.imgUrl + ') no-repeat'">
                            <p class="title">
                                {{item.title}}
                            </p>
                            <p class="detail">
                                {{item.detail}}
                            </p>
                        </li>
                    </ul>
                    <ul class="foot_num">
                        <li>将近<span>10</span>年的发展</li>
                        <li>覆盖<span>20</span>个省份</li>
                        <li><span>300+</span>人服务团队</li>
                        <li>辅导<span>10000+</span>名中学生</li>
                    </ul>
                </div>
            </div>
        </div>
        <!-- 五、雄厚的师资力量 -->
        <div class="famouse_teachers">
            <div class="inner">
                <ul class="title_box">
                    <li class="top"></li>
                    <li class="title">雄厚的师资力量</li>
                    <li class="foot"></li>
                </ul>
                <div class="introduce">汇聚顶尖名校师资力量，线上线下开展全面辅导</div>
                <div class="card">
                    <ul class="card_list" :style="{marginLeft : famouseTeachersCardStyle + 'px'}">
                        <li v-for="(item, index) in famouse_teachers" :key="index">
                            <div class="img_box">
                                <img :src="item.imgUrlTeacher" alt="">
                            </div>
                            <div class="right">
                                <div class="type">{{item.type}}</div>
                                <p class="title">{{item.title}}</p>
                                <p class="university">{{item.university}}</p>
                                <p class="detail">{{item.detail}}</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="bottom">
                    <div class="content_main">
                        <ul class="lis_main" :style="{marginLeft : famouseTeachersStyle + 'px'}">
                            <li v-for="(item, index) in  famouse_teachers" :key="index">
                                <div :class="famouseTeachersIndex == index ? 'active_img' : 'img_box'"  @click="changeTeachersCard(index)">
                                    <img :src="item.imgUrl" alt="" >
                                </div>
                                <p class="title">{{item.title}}</p>
                            </li>
                        </ul>
                    </div>
                    <div class="btn">
                        <div class="btn_left" :class="famouseTeachersIndex > 0 ? 'active_left' : ''"  @click="changeFamouseTeachers(1)"></div>
                        <div class="btn_right" :class="famouseTeachersIndex < (famouse_teachers.length - 1) ? 'active_right' : ''" @click="changeFamouseTeachers(-1)"></div>
                    </div>
                </div>
                <div class="circle">
                    
                </div>
                <div class="btn_more">了解更多学马教育</div>
            </div>
        </div>
        <!-- 六、学马教育品牌优势 -->
        <div class="brand_advantage">
            <div class="inner">
                <ul class="title_box">
                    <li class="top"></li>
                    <li class="title">学马教育品牌优势</li>
                    <li class="foot"></li>
                </ul>
                <ul class="content">
                    <li v-for="(item, index) in brand_advantage" :key="index">
                        <div class="img_box">
                            <img :src="item.imgUrl" alt="">
                        </div>
                        <p class="title">{{item.title}}</p>
                    </li>
                </ul>
            </div>

        </div>
        <!-- 七、全方位运营支持保障 -->
        <div class="yunying">
            <div class="inner">
                <ul class="title_box">
                    <li class="top"></li>
                    <li class="title">全方位运营支持保障</li>
                    <li class="foot"></li>
                </ul>
                 <ul class="content">
                    <li v-for="(item, index) in yunying" :key="index">
                        <div class="main">
                            <p class="title">{{item.title}}</p>
                            <p class="detail">{{item.detail}}</p>
                        </div>    
                    </li>
                </ul>
            </div>
        </div>
        <!-- 八、合作伙伴生态圈 -->
        <div class="cooperation">
            <div class="inner">
                <ul class="title_box">
                    <li class="top"></li>
                    <li class="title">合作伙伴生态圈</li>
                    <li class="foot"></li>
                </ul>
                <ul class="content">
                    <li v-for="(item, index) in cooperation" :key="index" :style="'background: url(' + item.imgUrl + ') no-repeat'">
                        <p class="title">{{item.title}}</p>
                        <p class="detail">{{item.detail}}</p>
                    </li>
                </ul>
            </div>
        </div>
        <!-- 合作伙伴风采 -->
        <div class="partnership">
            <div class="inner">
                <ul class="title_box">
                    <li class="top"></li>
                    <li class="title">合作伙伴风采</li>
                    <li class="foot"></li>
                </ul>
                <div class="content">
                    <div class="content_main">
                        <ul class="lis_main" :style="{marginLeft : partnershipStyle + 'px'}">
                            <li v-for="(item, index) in  partnership" :key="index">
                                <img :src="item.imgUrl" alt="">
                                <p class="title">{{item.title}}</p>
                            </li>
                        </ul>
                    </div>
                    <div class="btn">
                        <div class="btn_left" :class="partnershipIndex > 0 ? 'active_left' : ''"  @click="changePartnership(1)"></div>
                        <div class="btn_right" :class="partnershipIndex < (partnership.length - 1) ? 'active_right' : ''" @click="changePartnership(-1)"></div>
                    </div>
                    <ul class="circle">
                        <li v-for="(item, index) in partnership.length - 3" :class="index == partnershipIndex ? 'active' : ''"></li>
                    </ul>
                </div>
                <div class="btn_more">了解更多学马教育</div>
            </div>
        </div>  
        <!-- 加盟咨询 -->
        <div class="join_consultation">
            <div class="inner">
                <ul class="title_box">
                    <li class="top"></li>
                    <li class="title">加盟咨询</li>
                    <li class="foot"></li>
                </ul>
                <div class="join_mian">
                    <div class="join_card">
                        <div class="title">加盟咨询</div>
                        <div class="check_box">
                            <p>我想了解：</p>
                            <p><span @click="checkd_type = 1" :class="checkd_type == 1 ? 'active' : ''">√</span>加盟费用</p>
                            <p><span @click="checkd_type = 2" :class="checkd_type == 2 ? 'active' : ''">√</span>加盟模式</p>
                            <p><span @click="checkd_type = 3" :class="checkd_type == 3 ? 'active' : ''">√</span>其他问题</p>
                        </div>
                        <div class="join_inputs">
                            <p><span>姓名：</span><input type="text" placeholder="您的姓名" v-model="join_name"></p>
                            <p><span>手机：</span><input type="number" placeholder="您的联系手机" v-model="join_phonenumber"></p>
                            <p class="input_textarea"><span>留言：</span><textarea cols="32" rows="10" v-model="join_message" maxlength="200" placeholder="在线留言描述(请不要超过200字)" onfocus="this.placeholder = ''"  onblur="this.placeholder = '在线留言描述(请不要超过200字)'"></textarea></p>
                            <p class="join_remind" :style="{color: isSuccessJoin ? '#3492f9': 'red'}">{{join_remind}}</p>
                            <div class="btn" @click="getJoinMessage">立即加盟</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer">
            <div class="inner">
                <div class="left">
                    <p>招商中心联系地址：湖南省长沙市开福区万达广场写字楼A座24楼</p>
                    <p>总部联系地址：北京市海淀区清华科技园科技大厦B座三创空间</p>
                </div>
                <div class="right">
                    联系电话：4008-925-909
                </div>
            </div>    
        </div>
        <div class="copyright">
            <p>copyright ©️ 2011-2019 北京育铭天下科技有限公司  京ICP备17068633号-3  </p>
        </div>
    </div>
</template>
<style type="text/css" lang="less" scoped>
.attract_investment {
    letter-spacing: 1px;
    .inner {
        width: 1200px;
        margin: 0 auto;
    }
    input {
        border: 0;  // 去除未选中状态边框
        outline: none; // 去除选中状态边框
        // background-color: rgba(0, 0, 0, 0);// 透明背景
    }
    input[type=number] {
        -moz-appearance: textfield;
    }
    input[type=number]::-webkit-inner-spin-button,
    input[type=number]::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    .banner {
        background: url(/imgs/attractInvestment/banner.png) no-repeat center center;
        height: 400px;
    }
    .title_box {
        height: 50px;
        line-height: 50px;
        font-size: 36px;
        display: flex;
        justify-content: space-between;
        color: #333;
        .top {
            flex: 1;
            background: url('/imgs/attractInvestment/icon_header.png') no-repeat right center;
        }
        .foot {
            flex: 1;
            background: url('/imgs/attractInvestment/icon_header_foot.png') no-repeat left center;
        }
        .title {
            padding: 0px 30px;
            letter-spacing: 6px;
        }
    }
    .introduce {
        height: 70px;
        line-height: 70px;
        text-align: center;
        font-size: 24px;
        color: #666;
        padding-bottom: 25px;
    }
    // 免费获取测试账号
    .free_getting_accounts {
        padding-top: 50px;
        background-color: #f5f7f6;
        height: 300px;
        .remind {
            height: 40px;
            line-height: 40px;
            text-align: center;
            font-size: 16px;
        }
        .input_phone {
            box-sizing: border-box;
            // margin-top: 40px;
            margin-bottom:  66px;
            height: 72px;
            background-color: #fff;
            border-radius: 36px;
            overflow: hidden;
            line-height: 72px;
            position: relative;
            padding: 16px;
            input::placeholder {
                /* placeholder颜色  */
                color: #333;
                font-size: 18px;
            }
            .username {
                float: left;
                height: 40px;
                line-height: 40px;
                font-size: 16px;
                color: #333;
                width: 275px;
                padding-left: 40px;
            }
            .telephone_number {
                .username;
                width: 690px;
                border: none;
                border-left: 1px solid #000;
            }
            .btn {
                width: 120px;
                height: 50px;
                border-radius: 25px;
                background-color: #2a8efe;
                color: #fff;
                font-size: 18px;
                line-height: 50px;
                box-shadow: 0px 5px 5px #277cd9;
                position: absolute;
                right: 15px;
                top: 11px;
                text-align: center;
                cursor: pointer;
                &:active {
                    box-shadow: none;
                }
            }
        }
        .free_foot {
            height: 70px;
            background-color: #4281c6;
            .inner {
                position: relative;
            }
            .main_roll {
                height: 70px;
                overflow: hidden;
                .roll-ul {
                    height: 70px;
                }
                p {
                    float: left;
                    line-height: 70px;
                    width: 33%;
                    height: 70px;
                    text-align: center;
                    font-size: 18px;
                    color: #fff;
                }
            }
        }
    }
    // 市场前景
    .market_prospect {
        padding-top: 50px;
        background-color: #fff;
        height: 600px;
        .content {
            height: 395px;
            display: flex;
            justify-content: space-between;
            li {
                width: 364px;
                height: 395px;
                background-color: #4281c5;
                .img_box {
                    height: 195px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                .main_title {
                    color: #fff;
                    text-align: center;
                    font-size: 26px;
                    line-height: 75px;
                }
                .main_detail {
                    font-size: 18px;
                    color: #fefefe;
                    line-height: 24px;
                    padding: 0px 54px;
                }
            }
        }
    }
    // 学马三大优势
    .three_advantages {
        background-color: #f5f7f6;
        height: 535px;
        padding-top: 50px;
        .content {
            .list {
                height: 190px;
                display: flex;
                justify-content: space-between;
                text-align: center;
                margin-bottom: 56px;
                li {
                    width: 363px;
                    .title {
                        line-height: 98px;
                        height: 98px;
                        font-size: 26px;
                        color: #fff;
                    } 
                    .detail {
                        line-height: 26px;
                        font-size: 16px;
                        color: #fefefe;
                    }
                }
            }
            .foot_num {
                height: 180px;
                li {
                    width: 130px;
                    height: 96px;
                    line-height: 48px;
                    font-size: 22px;
                    color: #333;
                    float: left;
                    margin-right: 200px;
                    &:last-child {
                        width: 196px;
                        margin-right: 0px;
                    }
                    span {
                        font-size: 35px;
                        color: #4396f7;
                    }
                }
            } 
        }
    }
    // 名师资源
    .famouse_teachers {
        padding-top: 50px;
        height: 780px;
        .card {
            // padding: 40px 0px;
            width: 470px;
            height: 270px;
            margin: 0 auto;
            margin-top: 20px;
            margin-bottom: 40px;
            box-shadow: 0px 0px 5px #dadada;
            overflow: hidden;
            .card_list {
                height: 270px;
                width: 20000px;
                li {
                    width: 470px;
                    height: 270px;
                    float: left;
                    .img_box {
                        width: 230px;
                        height: 270px;
                        float: left;
                         text-align: center;
                        img {
                            // text-align: center;
                            width: 100%;
                            height: 100%;
                            // justify-content: center;
                            // align-items: center;
                        }
                    }
                    .right {
                        background-color: #3592fa;
                        color: #fff;
                        width: 200px;
                        height: 240px;
                        padding: 0px 20px;
                        padding-top: 30px;
                        position: relative;
                        float: left;
                        .type {
                            position: absolute;
                            right: 0px;
                            top: 20px;
                            width: 66px;
                            height: 28px;
                            padding-left: 14px;
                            line-height: 28px;
                            border-radius: 14px 0px 0px 14px;
                            color: #3592fa;
                            font-size: 13px;
                            background-color: #fff;
                        }
                        .title {
                            line-height: 30px;
                            font-size: 18px;
                        }
                        .university {
                            line-height: 26px;
                            font-size: 15px;
                        }
                        .detail {
                            font-size: 13px;
                            line-height: 22px;
                            height: 200px;
                            display: -webkit-box;
                            -webkit-box-orient: vertical;
                            -webkit-line-clamp: 9;
                            overflow: hidden;
                        }
                    }

                }
            }
        }
        .content_main {
            width: 1064px;
            height: 124px;
            margin: 0 auto;
            overflow: hidden;
            position: relative;
            .lis_main {
                height: 124px;
                width: 5000px;
                margin-right: 0px;
                transition: all 1s;
                li {
                    width: 95px;
                    height: 124px;
                    float: left;
                    margin-right: 65px;
                    img {
                        width: 95px;
                        height: 95px;
                        border-radius: 50%;
                    }
                    .img_box {
                        width: 95px;
                        height: 95px;
                        border-radius: 50%;
                        overflow: hidden;
                    }
                    .active_img {
                        // box-sizing: border-box;
                        width: 91px;
                        height: 91px;
                        border: 2px solid #3592fa;
                        border-radius: 50%;
                        overflow: hidden;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        img {
                            width: 95px;
                            height: 95px;
                           
                        }
                    }
                    p {
                        height: 40px;
                        line-height: 40px;
                        text-align: center;
                        font-size: 15px;
                        color: #333;
                    }
                }
            }
        }
        .bottom {
            position: relative;
        }
        .btn {
            .btn_left {
                position: absolute;
                left: 0px;
                top: 50%;
                margin-top: -30px;
                width: 40px;
                height: 60px;
                line-height: 60px;
                text-align: center;
                color: #fff;
                // background-color: rgba(51,51,51,.5);
                font-size: 24px;
                cursor: pointer;
                background: url(/imgs/attractInvestment/icon/left.png) no-repeat center center;
                // background-size: 35px 50px;
                // &:hover {
                //     background: url(/imgs/attractInvestment/icon/left_lan.png) no-repeat center center;
                // }
            }
            .active_left {
                background: url(/imgs/attractInvestment/icon/left_lan.png) no-repeat center center;
            }
          
            .btn_right {
                position: absolute;
                right: 0px;
                top: 50%;
                margin-top: -30px;
                width: 40px;
                height: 60px;
                line-height: 60px;
                text-align: center;
                color: #fff;
                background: url(/imgs/attractInvestment/icon/right.png) no-repeat center center;
                // background-size: 35px 50px;
                font-size: 24px;
                cursor: pointer;
                // &:hover {
                //     background: url(/imgs/attractInvestment/icon/right_lan.png) no-repeat center center;
                // }
            }
            .active_right {
                background: url(/imgs/attractInvestment/icon/right_lan.png) no-repeat center center;
            }
        }
        .circle {
            height: 70px;
        }
        .btn_more {
            width: 280px;
            height: 50px;
            border-radius: 25px;
            background-color: #2a8efe;
            color: #fff;
            font-size: 18px;
            line-height: 50px;
            box-shadow: 0px 5px 5px #277cd9;
            cursor: pointer;
            margin: 0 auto;
            text-align: center;
            &:active {
                box-shadow: none;
            }
        }

    }
    // 品牌优势
    .brand_advantage {
        padding-top: 50px;
        background-color: #f5f7f6;
        height: 340px;
        .content {
            margin-top: 30px;
            display: flex;
            justify-content: space-between;
            li {
                width: 146px;
                height: 230px;
                .img_box {
                    height: 120px;
                    width: 146px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                .title {
                    color: #333;
                    // text-align: center;
                    font-size: 16px;
                    line-height: 24px;
                }
            }
        }
    }
    // 全方位运营支持保障
    .yunying {
        padding-top: 50px;
        height: 850px;
        background: url(/imgs/attractInvestment/yunying/bg_quanfangweiyunyingzhicibaozhang.png) no-repeat;
        .title_box .title {
            color: #fff;
        }
        .content {
            display: flex;
            justify-content: space-between; 
            flex-wrap: wrap;
            padding-top: 45px;
            li {
                width: 510px;
                height: 132px;
                margin-bottom: 32px;
                padding-bottom: 10px;
                padding-right: 12px;
                background: url(/imgs/attractInvestment/yunying/bg_yunyingzichi.png) no-repeat -5px 0px;
                &:nth-child(2n) {
                    background: url(/imgs/attractInvestment/yunying/bg_yunyingzichi02.png) no-repeat;
                    .main {
                        padding-left: 35px;
                    }
                }
                .main {
                    padding: 0 20px;
                }
                .title {
                    padding-top: 4px;
                    line-height: 50px;
                    font-size: 22px;
                    color: #333;
                    letter-spacing: 2px;
                }
                .detail {
                    font-size: 16px;
                    color: #666;
                    line-height: 24px;
                    letter-spacing: 2px;
                }
            }
        }
    }
    // 合作生态圈
    .cooperation {
        padding-top: 50px;
        height: 550px;
        background-color: #f5f7f6;
        .content {
            padding-top: 45px;
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            li {
                width: 308px;
                height: 182px;
                margin-bottom: 32px;
                text-align: center;
                color: #fff;

                .title {
                    padding-top: 18px;                
                    font-size: 24px;
                    line-height: 86px;
                    height: 86px;
                }
                .detail {
                    font-size: 18px;
                    line-height: 38px;
                    height: 38px;
                }
            }
        }
    }
    // 合作伙伴风采
    .partnership {
        height: 570px;
        padding-top: 50px;
        .content {
            padding: 0px 75px;
            padding-top: 40px;
            position: relative;
            .content_main {
                width: 1040px;
                padding: 5px 5px;
                height: 280px;
                overflow: hidden;
                position: relative;
                .lis_main {
                    height: 280px;
                    width: 5000px;
                    margin-right: 0px;
                    transition: all 1s;
                    li {
                        width: 232px;
                        height: 272px;
                        padding: 8px;
                        padding-bottom: 0px;
                        box-shadow: 0px 0px 5px #dadada;
                        float: left;
                        margin-right: 16px;
                        img {
                            width: 232px;
                            height: 232px;
                        }
                        p {
                            height: 40px;
                            line-height: 40px;
                            text-align: center;
                            font-size: 15px;
                            color: #333;
                        }
                    }
                }
            }
            .btn {
                .btn_left {
                    position: absolute;
                    left: 0px;
                    top: 50%;
                    margin-top: -30px;
                    width: 40px;
                    height: 60px;
                    line-height: 60px;
                    text-align: center;
                    color: #fff;
                    font-size: 24px;
                    cursor: pointer;
                    background: url(/imgs/attractInvestment/icon/left.png) no-repeat center center;
                    // background-size: 35px 50px;
                    // &:hover {
                    //     background: url(/imgs/attractInvestment/icon/left_lan.png) no-repeat center center;
                        
                    // }
                }
                .active_left {
                    background: url(/imgs/attractInvestment/icon/left_lan.png) no-repeat center center;
                }
                .btn_right {
                    position: absolute;
                    right: 0px;
                    top: 50%;
                    margin-top: -30px;
                    width: 40px;
                    height: 60px;
                    line-height: 60px;
                    text-align: center;
                    color: #fff;
                    font-size: 24px;
                    cursor: pointer;
                    background: url(/imgs/attractInvestment/icon/right.png) no-repeat center center;
                    // background-size: 35px 50px;
                    // &:hover {
                    //     background: url(/imgs/attractInvestment/icon/right_lan.png) no-repeat center center;
                    // }

                }
                .active_right {
                    background: url(/imgs/attractInvestment/icon/right_lan.png) no-repeat center center;
                }
            }
            .circle {
                height: 10px;
                margin: 0 auto;
                padding: 25px 0px;
                width: 206px;
                li {
                    width: 10px;
                    height: 10px;
                    background-color: #d2d4d3;
                    border-radius: 5px;
                    margin-right: 18px;
                    float: left;
                    &:last-child {
                        margin-right: 0px;
                    }
                }
                .active {
                    background-color: #2d8ffc;
                }
            }
        }
        .btn_more {
            width: 280px;
            height: 50px;
            border-radius: 25px;
            background-color: #2a8efe;
            color: #fff;
            font-size: 18px;
            line-height: 50px;
            box-shadow: 0px 5px 5px #277cd9;
            cursor: pointer;
            margin: 0 auto;
            margin-top: 20px;
            text-align: center;
            &:active {
                box-shadow: none;
            }
        }
    }
    // 加盟咨询
    .join_consultation {
        height: 704px;
        padding-top: 50px;
        background-color: #f5f7f6;
        .join_mian {
            padding-top: 80px;
            padding-left: 780px;
            height: 510px;
            background: url(/imgs/attractInvestment/china_map.png) no-repeat 0px 40px;
        }
        .join_card {
            width: 380px;
            height: 470px;
            background-color: #fff;
            padding: 0px 20px;
            box-shadow: 0px 0px 5px #dadada;
            .title {
                padding-top: 5px;
                color: #2e8efc;
                line-height: 66px;
                font-size: 22px;
                text-align: center;
            }
            .check_box {
                height: 16px;
                line-height: 14px;
                color: #333;
                padding-bottom: 25px;
                border-bottom: 1px solid #d3d3d3;
                letter-spacing: 0px;
                p {
                    float: left;
                    margin-right: 15px;
                    &:last-child {
                        margin-right: 0px;
                    }
                    span {
                        display: inline-block;
                        width: 14px;
                        height: 14px;
                        border: 1px solid #2e8efc;
                        color: #fff;
                        margin-right: 4px;
                        cursor: pointer;
                    }
                    .active {
                        color: #2e8efc;
                    }
                }
            }
            .join_inputs {
                letter-spacing: 1px;
                padding-top: 18px;
                span {
                    padding-right: 15px;
                }
                input {
                    height: 36px;
                    line-height: 36px;
                    margin-bottom: 13px;
                    width: 260px;
                    border: none;
                    border: 1px solid #d3d3d3;
                    display: inline-block;
                    padding-left: 15px;
                }
                .input_textarea {
                    height: 75px;
                    textarea {
                        height: 65px;
                        width: 245px;
                        padding: 5px 15px;
                        border: 1px solid #d3d3d3;
                    }
                    span {
                        line-height: 40px;
                        float: left;
                    }
                }
                .join_remind {
                    line-height: 27px;
                    text-align: center;
                    height: 27px;
                }
                .btn {
                    width: 277px;
                    height: 44px;
                    line-height: 44px;
                    text-align: center;
                    color: #fff;
                    font-size: 16px;
                    background-color: #2d8ffc;
                    margin-left: 64px;
                    cursor: pointer;
                    &:active {
                        background-color: #2b6eb5;
                    }
                }
            }
        }
    }
    .footer {
        height: 106px;
        padding-top: 30px;
        background-color: #222222;
        color: #fff;
        .left {
            float: left;
            width: 860px;
            p {
                font-size: 15px;
                line-height: 36px;
            }
        }
        .right {
            font-size: 24px;
            line-height: 46px;
        }
    }
    .copyright {
        background-color: #4e4e4e;
        color: #c4c4c4;
        text-align: center;
        height: 42px;
        line-height: 42px;
        font-size: 14px;
    }
}
</style>
<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
export default {
    components:{swiper,swiperSlide},
    data() {
        return {
            imgIndex: 1,
            swiperOption:{
                loop:true,
                notNextTick:true,
                initialSlide:0,
                direction : 'vertical',
                speed:300,
                autoplay:{
                    delay:2000,
                    stopOnLastSlide:true,
                    disableOnInteraction:false
                },
                parallax: true,
                pagination:{
                    el:".swiper-pagination",
                    type: "bullets",
                    clickable:true
                },
                effect : 'slide'
            },
            // swiperOption:{
            //     loop:true,
            //     notNextTick:true,
            //     initialSlide:0,
            //     direction : 'vertical',
            //     autoplay:{
            //         delay:2000,
            //         stopOnLastSlide:false,
            //         disableOnInteraction:false
            //     },
            //     pagination:{
            //         el:".swiper-pagination",
            //         type: "bullets",
            //         clickable:true
            //     },
            //     effect : 'slide'
            // },





            free_name: '',
            free_telephone_number: '',
            remind: '',
            isSuccess: true,
            checkd_type: '1',
            join_name: '',
            join_phonenumber: '',
            join_message: '',
            isSuccessJoin: true,
            join_remind: '',
            freeData: [],


            famouseTeachersStyle: 0,
            famouseTeachersIndex: 0,
            famouseTeachersCardStyle: 0,
            // changeFamouseTeachersIndex: 0,





            // teacherStyle:0,
            partnershipIndex: 0,
            partnershipStyle: 0,



            market_prospect: [
                { title: '政策导向', detail: '新高考改革深化，引起连锁反应，人才选拔制度发生大变化', imgUrl: '/imgs/attractInvestment/market_prospect/icon_zhengce.png' },
                { title: '市场推动', detail: '行业竞争白热化，企业纷纷转型，探索教育新蓝海势在必行', imgUrl: '/imgs/attractInvestment/market_prospect/icon_shichang.png' },
                { title: '升学刚需', detail: '面对新高考改革，学生不知所措，选科、志愿填报等成为难题', imgUrl: '/imgs/attractInvestment/market_prospect/icon_shengxuegangxu.png' }
            ],
            three_advantages: [
                { title: '权威的系统工具', detail: '自主研发专业系统，荣获国家发明专利', imgUrl: '/imgs/attractInvestment/three_advantages/bg_quanweidexitonggongju.png' },
                { title: '个性化辅导服务', detail: '一对一全方位服务，定制个性化培养方案', imgUrl: '/imgs/attractInvestment/three_advantages/bg_1.png' },
                { title: '成熟的课程体系', detail: '多年课程研发经验，具有完备的课程体系', imgUrl: '/imgs/attractInvestment/three_advantages/bg_chengshudekechengtixi.png' },
            ],

            famouse_teachers: [
                { title: '余松谦', detail: '学马创始人，中南大学硕士研究生，清华大学研究生校外导师', imgUrl: '/imgs/attractInvestment/famouse_teachers/icon_yulaoshi.png', type: '研发师资',university: '', imgUrlTeacher: '/imgs/attractInvestment/teacher/yusongqian.png' },
                { title: '邬歆', detail: '曾参与两项国家自然科学基金和多项国家科技部课题研究。并发表2篇国际顶级期刊(SCI)，2篇国家核心期刊，并与清华大学合作完成多项人因学实验测试平台的软件开发任务，先后获职业定位测评、阅读能力评估等多项国家发明专利', imgUrl: '/imgs/attractInvestment/famouse_teachers/icon_wulaoshi.png', type: '研发师资',university: '清华大学硕士研究生', imgUrlTeacher: '/imgs/attractInvestment/teacher/wuxin.png' },
                { title: '贺晓军', detail: '国家认证生涯规划师，高考改革研究专家，中国教育培训联盟理事。10年志愿工作经验，精通专业与职业的对应关系研究。在帮助考生准确定位、定量分析院校录取数据等方有很深的造诣', imgUrl: '/imgs/attractInvestment/famouse_teachers/icon_helaoshi.png', type: '研发师资', university: '中国科学院大学硕士研究生' , imgUrlTeacher: '/imgs/attractInvestment/teacher/hexiaojun.png'},
                { title: '刘娜', detail: '主要研究方向为认知心理学，擅长认知潜能测评与提升', imgUrl: '/imgs/attractInvestment/famouse_teachers/icon_liuna.jpg', type: '研发师资', university: '清华大学博士' , imgUrlTeacher: '/imgs/attractInvestment/teacher/liuna.png'},
                { title: '黄彬', detail: '生涯测评系统开发者，曾参与中国标准化研究院视觉参数测量方法标准化研究，组织虚拟仿真与驾驶安全实验室系统升级与场景建设，独立完成儿童书包受力分布测试过程', imgUrl: '/imgs/attractInvestment/famouse_teachers/icon_huangbin.png', type: '研发师资', university: '中国科学院大学心理研究所硏究生', imgUrlTeacher: '/imgs/attractInvestment/teacher/huangbin.png'},
                // { title: '高宇', detail: '', imgUrl: 'imgs/attractInvestment/famouse_teachers/icon_yulaoshi.png', type: '研发师资', university: '北京师范大学硕士研究生' },
                // { title: '王艺彤', detail: '主要研究方向为生涯教育。专攻学生生涯规划与高考志愿规划，擅长生涯咨询，高考志愿规划，学习状态激励，生涯测评解读', imgUrl: 'imgs/attractInvestment/famouse_teachers/icon_wangyitong.png', type: '研发师资', university: '北京师范大学心理学专业', imgUrlTeacher: '/imgs/attractInvestment/teacher/wangyitong.png' },
                { title: '金波', detail: '以712分湖南省第二名的成绩考入清华大学，自主招生笔面试讲师，擅长高分提升，真题解析', imgUrl: '/imgs/attractInvestment/famouse_teachers/icon_jinbo.png', type: '研发师资', university: '清华大学环境学院国际班', imgUrlTeacher: '/imgs/attractInvestment/teacher/jinbo.png' },
                // { title: '徐耀亚 ', detail: '主要研究方向为遥感图像识别，学科背景遥感学。擅长研学指导，学术研究指导，学科探索指导', imgUrl: 'imgs/attractInvestment/famouse_teachers/icon_xuyaoya.png', type: '研发师资', university: '北京大学博士', imgUrlTeacher: '/imgs/attractInvestment/teacher/xuyaoya.png' },
                { title: '孙明欢', detail: '研究方向为汉语国际教育，专供研学游学，多年研究性学习课程的研发与组织经验。因其研发课程的实际效果，获得学员良好口碑', imgUrl: '/imgs/attractInvestment/famouse_teachers/icon_sunminghuan.jpg', type: '研发师资', university: '吉林大学硕士研究生', imgUrlTeacher: '/imgs/attractInvestment/teacher/sunminghuan.jpg' },
                { title: '赵越', detail: '对外经济贸易大学研究生   拥有多年生涯规划与志愿填报教研与实战指导工作经验', imgUrl: '/imgs/attractInvestment/famouse_teachers/icon_zhaoyue.png', type: '研发师资', university: '对外经济贸易大学研究生', imgUrlTeacher: '/imgs/attractInvestment/teacher/zhaoyue.png' },
                { title: '李初曦', detail: '北京师范大学临床与咨询心理硕士，专业心理咨询师、督导师，临床专业工作小时数超1000小时，专注于青少年生涯规划、生涯测评和家庭教育等领域研究和实务工作', imgUrl: '/imgs/attractInvestment/famouse_teachers/icon_lichuxi.png', type: '研发师资', university: '北京师范大学临床与咨询心理硕士', imgUrlTeacher: '/imgs/attractInvestment/teacher/lichuxi.png' },
                // { title: '肖汉骏 ', detail: '擅长自主招生指导，高考提分，高考真题解析', imgUrl: 'imgs/attractInvestment/famouse_teachers/icon_xiaohanjun.jpg', type: '研发师资', university: '奥林匹克竟赛金牌，保送清华计算机系', imgUrlTeacher: '/imgs/attractInvestment/teacher/xiaohanjun.png' },
                // { title: '周雅琳 ', detail: '清华大学环境、化工与新材料大类   领军计划初试优秀 免笔试录取', imgUrl: 'imgs/attractInvestment/famouse_teachers/icon_yulaoshi.png', type: '研发师资', university: '清华大学' },
                // { title: '肖世裕', detail: '清华大学物理系，领军计划笔试优秀录取', imgUrl: 'imgs/attractInvestment/famouse_teachers/icon_yulaoshi.png', type: '研发师资', university: '清华大学' },
                { title: '乔丹', detail: '高考英语142分，曾成功辅导学员通过北大自主招生', imgUrl: '/imgs/attractInvestment/famouse_teachers/qiaodan.png', type: '研发师资', university: '北京师范大学汉语言文学硕士研究生', imgUrlTeacher: '/imgs/attractInvestment/teacher/qiaodan.png' },
                { title: '陈杰', detail: '高中生升学服务专家，从事自主招生3年，擅长高中生升学服务、心理测评、志愿填报以及专业选择，服务学生超过300人', imgUrl: '/imgs/attractInvestment/famouse_teachers/icon_chenjie.png', type: '实战师资', university: '', imgUrlTeacher: '/imgs/attractInvestment/teacher/chenjie.png' },
                { title: '李琴', detail: '高中生升学服务专家，从事自主招生4年，擅长高中生升学服务、自主招生服务、心理测评及辅导、专业选择，服务学生超过400人', imgUrl: '/imgs/attractInvestment/famouse_teachers/icon_liqin.png', type: '实战师资', university: '', imgUrlTeacher: '/imgs/attractInvestment/teacher/liqin.png' },
                { title: '柳苏玲', detail: '高中生升学服务专家，高中生心理学专家，从事自主招生5年，擅长高中生升学规划、自主招生服务、综合评价服务、心理测评及辅导、专业选择、志愿填报，服务学生超过500人', imgUrl: '/imgs/attractInvestment/famouse_teachers/icon_liushuling.png', type: '实战师资', university: '', imgUrlTeacher: '/imgs/attractInvestment/teacher/liushuling.png' },
                { title: '彭印珊', detail: '高中生升学服务专家，从事自主招生4年，擅长高中生升学服务、心理测评、志愿填报以及专业选择，服务学生超过400人', imgUrl: '/imgs/attractInvestment/famouse_teachers/icon_pengyinshan.png', type: '实战师资', university: '', imgUrlTeacher: '/imgs/attractInvestment/teacher/pengyinshan.png' },
                // { title: '沈杨平', detail: '自主招生助理，从事自主招生服务3年，熟悉各大自主招生高校政策以及高考动态', imgUrl: 'imgs/attractInvestment/famouse_teachers/icon_yulaoshi.png', type: '实战师资', university: '' },
                { title: '唐贺', detail: '高中生升学服务专家，从事自主招生4年，擅长高中生升学规划、自主招生服务、心理测评及辅导、志愿填报以及专业选择，服务学生超过400人', imgUrl: '/imgs/attractInvestment/famouse_teachers/icon_tanghe.png', type: '实战师资', university: '', imgUrlTeacher: '/imgs/attractInvestment/teacher/tanghe.png' },
                { title: '王国瑞', detail: '自主招生专家，从事自主招生6年，了解各大高校自主招生政策，擅长学业规划、高中生心理辅导、专业选择指导、志愿填报，服务学生超过600人', imgUrl: '/imgs/attractInvestment/famouse_teachers/icon_wangguorui.png', type: '实战师资', university: '', imgUrlTeacher: '/imgs/attractInvestment/teacher/wangguorui.png' },
                { title: '王月', detail: '高中生升学服务专家，从事自主招生4年，擅长高中生升学服务、自主招生服务、综合评价服务、心理测评及辅导、专业选择，服务学生超过450人', imgUrl: '/imgs/attractInvestment/famouse_teachers/icon_wangyue.png', type: '实战师资', university: '', imgUrlTeacher: '/imgs/attractInvestment/teacher/wangyue.png' },
                { title: '陈晶霞', detail: '从事高考升学规划服务七年，曾帮助超过400人进入985/211名校；熟练掌握自主招生、综合评价、平行志愿、港澳升学、出国留学等多元升学政策与技能；擅长学业诊断与规划，曾辅导超过100人进行心理梳理，取得良好效果；参与高考指导丛书《从生涯角度看志愿填报》编辑', imgUrl: '/imgs/attractInvestment/famouse_teachers/icon_chenjingxia.png', type: '实战师资', university: '', imgUrlTeacher: '/imgs/attractInvestment/teacher/chenjingxia.png' },
                { title: '胡璐', detail: '从事高考升学规划十年，八年填报志愿经验，对自主招生、综合评价、港澳升学、出国留学等多元升学途径有深入研究，特别擅长学业诊断与规划，曾指导超过500人进入到985/211名校。 曾在湖南多个中学开展生涯规划、志愿填报等公益讲座，受益人数超2万人。参与高考指导丛书《从生涯角度看志愿填报》编辑', imgUrl: '/imgs/attractInvestment/famouse_teachers/icon_hulu.png', type: '实战师资', university: '', imgUrlTeacher: '/imgs/attractInvestment/teacher/hulu.png' },
                { title: '陆国', detail: '从事高考升学规划10年，对综合评价，港澳升学、高校专项、出国留学等多元升学途径有深入研究，擅长寻找升学机会点，曾帮助超过300人进入985/211高校。参与高考指导丛书《从生涯角度看志愿填报》编辑', imgUrl: '/imgs/attractInvestment/famouse_teachers/icon_luguo.png', type: '实战师资', university: '', imgUrlTeacher: '/imgs/attractInvestment/teacher/luguo.png' },
                { title: '罗帷', detail: '从事升学规划服务8年，曾帮助多名学生进入清华大学、华中科技大学、中山大学、浙江大学等名校，帮助超过400人进入985/211名校；熟练掌握自主招生、综合评价、平行志愿、港澳升学、出国留学等多元升学政策；擅长学业诊断与规划，曾辅导超过100人进行心理梳理，取得良好效果；参与高考指导丛书《从生涯角度看志愿填报》编辑', imgUrl: '/imgs/attractInvestment/famouse_teachers/icon_luowei.png', type: '实战师资', university: '', imgUrlTeacher: '/imgs/attractInvestment/teacher/luowei.png' },
                { title: '韦韦老师', detail: '从事高考升学规划4年，3年志愿填报经验；主讲多场线上公益微课，帮助上千名学生、家长解答升学困惑；参与高考指导丛书《从生涯角度看志愿填报》编辑', imgUrl: '/imgs/attractInvestment/famouse_teachers/icon_weiwei.png', type: '实战师资', university: '', imgUrlTeacher: '/imgs/attractInvestment/teacher/weiwei.png' },
                { title: '于珊珊', detail: '从事高考升学规划服务10年，曾帮助多名学生进入清华大学、华中科技大学、中山大学、浙江大学等名校；从早期儿童教育理念到高中生学业规划均有涉及，曾任某高中生涯规划课程选修课老师，赢得学生们的一致好评；参与高考指导丛书《从生涯角度看志愿填报》编辑', imgUrl: '/imgs/attractInvestment/famouse_teachers/icon_yushanshan.png', type: '实战师资', university: '', imgUrlTeacher: '/imgs/attractInvestment/teacher/yushanshan.png' },
                { title: '余云方', detail: '从事高考升学规划服务5年，曾帮助超过400名学生进入985/211高校；熟悉掌握综合评价，自主招生，志愿填报，港澳升学，出国留学等多元升学政策与技能', imgUrl: '/imgs/attractInvestment/famouse_teachers/icon_yuyunfang.png', type: '实战师资', university: '', imgUrlTeacher: '/imgs/attractInvestment/teacher/yuyunfang.png' },
                { title: '张舒雅', detail: '从事高考升学规划服务五年，曾帮助超过400人进入985/211名校；熟练掌握自主招生、综合评价、平行志愿、港澳升学、出国留学等多元升学政策与技能；擅长学业诊断与规划，曾辅导超过100人进行心理梳理，取得良好效果；参与高考指导丛书《从生涯角度看志愿填报》编辑', imgUrl: '/imgs/attractInvestment/famouse_teachers/icon_zhangshuya.png', type: '实战师资', university: '', imgUrlTeacher: '/imgs/attractInvestment/teacher/zhangshuya.png' },

            ],

            brand_advantage: [
                { title: '品牌知名度高，影响广泛，收获良好口碑', imgUrl: '/imgs/attractInvestment/brand_advantage/icon_pinpaizhimingdugao.png' },
                { title: '项目前景广阔，投资少回报高，实现快速持续盈利', imgUrl: '/imgs/attractInvestment/brand_advantage/icon_qianjingguangkuo.png' },
                { title: '多年运营经验，管理模式成熟，为加盟商提供全面保障 ', imgUrl: '/imgs/attractInvestment/brand_advantage/icon_duonianyunyingjingyan.png' },
                { title: '研发体系成熟，课程内容完备，得到市场一致好评认可 ', imgUrl: '/imgs/attractInvestment/brand_advantage/icon_yanfatixichengshu.png' },
                { title: '顶尖师资团队，积淀多年经验，且有专业师资培训体系', imgUrl: '/imgs/attractInvestment/brand_advantage/icon_dingjianshizituandui.png' }
            ],

            yunying: [
                { title: '品牌支持', detail: '提供品牌形象输出、品牌推广支持、品牌宣传支持、品牌授权支持等' },
                { title: '建校支持', detail: '提供选址评估支持、硬件建设方案、情景布置方案、人才招聘支 持、开业支持等' },
                { title: '技术资料支持', detail: '提供网站系统技术支持、专业资料库支持、360°在线 答疑支持、标准化操作手册等' },
                { title: '运营支持', detail: '提供区域运营指导支持、讲座讲师支持、市场支持、个性化指导 支持等' },
                { title: '师训支持', detail: '提供规划师培训、志愿填报师培训、升学管理师培训、 生涯测评解读师培训等全方位立体式培训支持' },
                { title: '增值服务支持', detail: '提供家长课堂、营队服务等具体增值服务支持' },
                { title: '落地运营督导支持', detail: '专业的运营督导就是合作方的运营管家，为合作方带来 线上线下更贴心的指导服务，为合作方提供更高效的解决方案' },
            ],

            cooperation: [
                { title: '学历提升机构', detail: '延展业务，提升价值', imgUrl: '/imgs/attractInvestment/cooperation/bg_xuelitisheng.png' },
                { title: '高考报考机构', detail: '精准报考，助力升学', imgUrl: '/imgs/attractInvestment/cooperation/bg_gaokaofuwujigou.png' },   
                { title: '职业规划机构', detail: '科学测评，全面规划', imgUrl: '/imgs/attractInvestment/cooperation/bg_zhiyeguihua.png' },
                { title: '升学规划机构', detail: '生源引流，受益良多', imgUrl: '/imgs/attractInvestment/cooperation/bg_shengxueguihua.png' },
                { title: '研学辅导机构', detail: '丰富课程，深化服务', imgUrl: '/imgs/attractInvestment/cooperation/bg_yanxuefudao.png' },
                { title: '教辅机构', detail: '业绩倍增，实力增强', imgUrl: '/imgs/attractInvestment/cooperation/bg_jiaofujigou.png' },
            ],

            partnership: [
                { title: '成都前构想教育', imgUrl: '/imgs/attractInvestment/partnership/bg_qiangouxiang.png' },
                { title: '郑州晶领教育', imgUrl: '/imgs/attractInvestment/partnership/bg_jingling.png' },
                { title: '湘潭学而乐教育', imgUrl: '/imgs/attractInvestment/partnership/bg_xueerle.png' },
                { title: '娄底学海教育', imgUrl: '/imgs/attractInvestment/partnership/bg_loudixuehaijiaoyu.png' },
                { title: '怀化文智教育', imgUrl: '/imgs/attractInvestment/partnership/bg_wenzhijiaoyu.png' },
                { title: '甘肃奥博教育', imgUrl: '/imgs/attractInvestment/partnership/bg_aopengshudian.png' },
                { title: '山东博翼教育', imgUrl: '/imgs/attractInvestment/partnership/bg_boyijiaoyu.png' },
                { title: '河北博远教育', imgUrl: '/imgs/attractInvestment/partnership/bg_boyuan.png' },
                { title: '沧州鸿运志愿', imgUrl: '/imgs/attractInvestment/partnership/bg_hongyunzhiyuan.png' },
                { title: '福建微铭教育', imgUrl: '/imgs/attractInvestment/partnership/bg_weimingjiaoyu.png' },
                { title: '山东学马教育', imgUrl: '/imgs/attractInvestment/partnership/bg_shandongxuemajiaoyu.png' },
            ]
        }
    },
    computed: {
        freeArrList() {
            let arr = [];
            arr = this.freeData.slice(0,40);
            return arr;
        },
        swiper() {
            return this.$refs.mySwiper.swiper;
        }
    },
    methods: {

        // 获取免费测试账号
        getTestApplyList() {  
            var _this = this;
            var token = window.sessionStorage.getItem('ymtxToken');
           
            this.$ajax.post(this.G_uri + '/merchant/getTestApplyList', {  

            },{
                headers:{
                    token: token
                }
            })
            .then(function(res) {
                if(res.data.code == 2000) {
                    _this.freeData = res.data.data; 
                }else if(res.data.code == 1016) {
                    _this.$router.push('/login');
                }
            })
            .catch(function(error) {
                console.log(error)
            });
        },



        // 获取免费测试账号
        getFreeAccount() {  
            var _this = this;
            var name = this.free_name;
            var phone = this.free_telephone_number;
            var token = window.sessionStorage.getItem('ymtxToken');
            var reg = /(^1[34578]\d{9}$)|(^\d{8}$)/;
            if(!name && !phone) {
                this.remind = '姓名或手机号不能为空';
                this.isSuccess = false
                return;
            }else if(!reg.test(phone)) {
                this.remind = '手机号格式不正确'
                this.isSuccess = false
                return;   
            }
            this.$ajax.post(this.G_uri + '/merchant/storeTestApply', {  
                name: name,
                phone: phone
            },{
                headers:{
                    token: token
                }
            })
            .then(function(res) {
                if(res.data.code == 2000) {
                    _this.remind = '我们已经接收您的申请';
                }else if(res.data.code == 1016) {
                    _this.$router.push('/login');
                }else {
                    _this.isSuccess = false;
                   _this.remind = res.data.msg;
                }
            })
            .catch(function(error) {
                console.log(error)
            });
        },
        // 底部加盟咨询
        //type 1加盟费用 2加盟模式 3其他问题
        getJoinMessage() {
            var _this = this;
            var name = this.join_name;
            var phone = this.join_phonenumber;
            var type = this.checkd_type;
            var message = this.join_message;
            var token = window.sessionStorage.getItem('ymtxToken');
            var reg = /(^1[34578]\d{9}$)|(^\d{8}$)/;
            if(!name && !phone && !message) {
                this.join_remind = '姓名、手机号和留言不能为空';
                this.isSuccessJoin = false;
                return;
            }else if(!reg.test(phone)) {
                this.join_remind = '手机号格式不正确';
                this.isSuccessJoin = false;
                return;   
            }
            this.$ajax.post(this.G_uri + '/merchant/storeConsultation', {  
                name: name,
                phone: phone,
                type: type,
                message: message
            },{
                headers:{
                    token: token
                }
            })
            .then(function(res) {
                if(res.data.code == 2000) {
                    _this.join_remind = '我们已经接收您的加盟咨询';
                }else if(res.data.code == 1016) {
                    _this.$router.push('/login');
                }else {
                    _this.isSuccessJoin = false;
                    _this.join_remind = res.data.msg;
                }
            })
            .catch(function(error) {
                console.log(error);
            });
        },

        changePartnership(idx) {
            if(idx > 0) {
                if(this.partnershipIndex > 0) {
                    this.partnershipIndex --;
                    this.partnershipStyle += idx * 264; 
                }else {
                    return;
                }
            }else if(idx < 0) {
                if(this.partnershipIndex < this.partnership.length - 4) {
                    this.partnershipIndex ++;
                    this.partnershipStyle += idx * 264;
                }else {
                    return;
                }
            }
        },


        // changeFamouseTeachers(idx) {
        //     if(idx > 0) {
        //         if(this.famouseTeachersIndex > 0) {
        //             if(this.famouseTeachersIndex < this.famouse_teachers.length - 6) {
        //                 this.famouseTeachersIndex --;
        //                 this.famouseTeachersStyle += idx * 160; 
        //                 this.famouseTeachersCardStyle += idx * 470; 
        //             }else {
        //                 this.famouseTeachersIndex --;
        //                 this.famouseTeachersCardStyle += idx * 470; 
        //             }
                   

        //         }else {
        //             return;
        //         }
        //     }else if(idx < 0) {
        //         if(this.famouseTeachersIndex < this.famouse_teachers.length -1) {
        //             if(this.famouseTeachersIndex < this.famouse_teachers.length - 7) {
        //                 this.famouseTeachersIndex ++;
        //                 this.famouseTeachersStyle += idx * 160;
        //                 this.famouseTeachersCardStyle += idx * 470; 
        //             }else {
        //                 this.famouseTeachersIndex ++;
        //                 this.famouseTeachersCardStyle += idx * 470; 
        //             }
                   
        //         }else {
        //             return;
        //         }
        //     }
        // },

        changeFamouseTeachers(idx) {
            if(idx > 0) {
                if(this.famouseTeachersIndex > 0) {
                    if(this.famouseTeachersIndex < this.famouse_teachers.length - 6) {
                        this.famouseTeachersIndex --;
                        this.famouseTeachersStyle += idx * 160; 
                        this.famouseTeachersCardStyle += idx * 470; 
                    }else {
                        this.famouseTeachersIndex --;
                        this.famouseTeachersCardStyle += idx * 470; 
                    }
                   

                }else {
                    return;
                }
            }else if(idx < 0) {
                if(this.famouseTeachersIndex < this.famouse_teachers.length -1) {
                    if(this.famouseTeachersIndex < this.famouse_teachers.length - 7) {
                        this.famouseTeachersIndex ++;
                        this.famouseTeachersStyle += idx * 160;
                        this.famouseTeachersCardStyle += idx * 470; 
                    }else {
                        this.famouseTeachersIndex ++;
                        this.famouseTeachersCardStyle += idx * 470; 
                    }
                   
                }else {
                    return;
                }
            }
        },


        changeTeachersCard(idx) {
            let num = this.famouse_teachers.length - 7;
            if(idx < num) {
                this.famouseTeachersIndex = idx;
                this.famouseTeachersStyle = -idx * 160; 
                this.famouseTeachersCardStyle = -idx * 470; 
            }else {
                this.famouseTeachersIndex = idx;
                this.famouseTeachersStyle = -num * 160; 
                this.famouseTeachersCardStyle = -idx * 470;   
            }
        }

    },
    mounted() {
       
    },
    created() {
        this.getTestApplyList();
    }
}
</script>