<template>
    <div class="academicPlanningReportDetail">
        <DownloadProgress :totalPages="totalPages" :currentPage="currentPage" v-if="isDownloading"></DownloadProgress>
        <ul class="pages">
                    <li class="page page_shadow" id="page1">
                        <div class="title">
                            学业规划报告
                        </div>
                        <p>
                            <span style="margin-right: 39px">姓</span>名: {{cdata.studentInfo&&cdata.studentInfo.s.n
                            }}
                        </p>
                        <p>报告编号: {{cdata.createdAt&&cdata.createdAt.replace(/[-|:|\s]/g,"")}}</p>
                        <p>报告时间: {{cdata.createdAt&&cdata.createdAt}}</p>
                    </li>
                    <li class="page page_shadow" id="page2">
                        <div class="title">
                            目录
                        </div>
                        <div class="content">
                            <ul class="muluList">
                                <li v-for="(item,index) in Catalog" :key="index">
                                    <div class="part1">
                                        <span class="color">Part{{index+1}}</span>
                                        <span>{{item.title}}</span>
                                        <div class="line"></div>
                                        <span class="yePage"></span>
                                    </div>
                                    <div class="part2" v-for="items in item.list||[]">
                                        <span class="color"></span>
                                        <span>{{items}}</span>
                                        <div class="line"></div>
                                        <span class="yePages"></span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li class="page page1 page_shadow" id="page3">
                        <div class="content">
                            <div class="xulie">
                                Part1 简介
                            </div>
                            <span>学生个人学业规划报告需要包含五大部分，分别是个人信息、学业信息、目标定位、目标分解、行动计划。</span>
                            <p>第一部分</p>
                            <span>
                            个人信息，即学生个人信息概括，主要包含个人特征、兴趣爱好、受教育程度、家庭经济状况等。
                         </span>
                            <p>第二部分</p>
                                        <span>
                                学业信息，即学生的学业成绩信息和学生的综合素质信息，综合素质信息包括获奖信息、研究性学习、社会实践等。
                            </span>
                                        <p>第三部分</p>
                                        <span>
                                目标定位。学生个人需要结合个人信息、学业信息、生涯测评、外部探索等进行综合分析。为自己设定生涯发展目标，目标分短期目
                                标、中期目标、长期目标，长期目标是对职业发展的定位，高中阶段则是定位自己的目标院校与专业。
                            </span>
                                        <p>第四部分</p>
                                        <span>
                                目标分解。目标分解是将长期目标分解为短期目标，短期目标要具体可实现，有明确的时间节点，符合目标管理的smart原则。
                            </span>
                                        <p>第五部分</p>
                                        <span>
                                制定计划。以高一学生为例，学生在明确自己的生涯发展目标之后，需要制定一个如何实现生涯目标的高中行动计划（三年计划），这
                                个行动计划是为了如何为实现职业目标，做好学科选择、专业选择，将生涯发展的所有思考最终需要转化为实际的学业行动，学生可以
                                按此行动计划来指导自己各阶段的日常学习和生活
                            </span>
                                        <div class="shuoming">
                                            <p>说明：</p>
                                            <span>
                                    随着自身认知水平的提高和对自己现状的评估，学生也可以对自己的职业目标、院校专业目标进行调整，并定期为自己的目标实现制
                                    定行动计划。所以学生的学业规划报告是动态的，而不是静止不变的，学生可以在自己制定行动计划的各阶段查看当前的学业规划报
                                    告。其目的是让学生能更深入地了解自己，明确自己未来的发展方向，并将各阶段的计划付诸行动，做更好的自己。
                                </span>
                            </div>
                        </div>
                        <div class="yema"></div>
                    </li>
                    <li class="page page2 page_shadow" id="page4">
                        <div class="content">
                            <div class="xulie">
                                Part2 个人信息
                            </div>
                            <ul class="person">
                                <li  style="height: 436px">
                                    <div class="left" style="background: #0E9783">
                                    <span>
                                        基 <br>本 <br>信 <br>息
                                    </span>
                                    </div>
                                    <div class="right">
                                        <div class="text">
                                            <span><i class="red">*</i>姓名:{{studentInfo.s.n||''}}</span>
                                            <span><i class="red">*</i>性别:{{(studentInfo.s.s==1&&'男')||(studentInfo.s.s==2&&'女')||''}}</span>
                                            <span><i class="red">*</i>民族:{{studentInfo.i.n||''}}</span>
                                            <span><i class="red">*</i>生日:{{studentInfo.i.b||''}}</span>
                                        </div>
                                        <div class="line"></div>
                                        <div class="text">
                                            <span><i class="red">*</i>省/市:{{studentInfo.s.p||''}}</span>
                                            <span><i class="red">*</i>城市:{{studentInfo.s.c||''}}</span>
                                            <span><i class="red">*</i>区/县/市:{{studentInfo.s.a||''}}</span>
                                        </div>
                                        <div class="line"></div>
                                        <div class="text">
                                            <span><i class="red">*</i>高考年份:{{studentInfo.s.b||''}}</span>
                                            <span></span>
                                            <span></span>
                                            <span style="width: 100%"><i class="red"></i>选科情况:
                                    <div class="button" style="background: #8CCDC4" v-if="studentInfo.i.c.split(',')[0]">{{studentInfo.i.c.split(',')[0]}}</div>
                                    <div class="button" style="background: #75A4CE" v-if="studentInfo.i.c.split(',')[1]">{{studentInfo.i.c.split(',')[1]}}</div>
                                    <div class="button" style="background: #C3D59B" v-if="studentInfo.i.c.split(',')[2]">{{studentInfo.i.c.split(',')[2]}}</div>
                                </span>
                                        </div>
                                        <div class="line"></div>
                                        <div class="text">
                                            <span style=""><i class="red" >*</i>手机号码:{{studentInfo.s.u}}</span>
                                            <span><i class="red"></i>QQ:{{studentInfo.i.q}}</span>
                                            <span><i class="red"></i>电子邮箱:{{studentInfo.i.e}}</span>
                                            <span><i class="red"></i>政治面貌:{{studentInfo.i.ps}}</span>
                                            <span><i class="red"></i>学生类型:{{studentInfo.i.t}}</span>
                                            <span><i class="red"></i>外语语种:{{studentInfo.i.f}}</span>
                                            <span><i class="red"></i>所在中学:{{studentInfo.s.sn}}</span>
                                            <span><i class="red"></i>所在班级:{{studentInfo.s.sc}}</span>
                                            <span><i class="red"></i>担任职务:{{studentInfo.i.p}}</span>
                                        </div>
                                    </div>
                                </li>
                                <li  style="height: 210px">
                                    <div class="left" style="background: #4C92C0">
                            <span>
                                健 <br>康 <br>状 <br>况
                            </span>
                                    </div>
                                    <div class="right" style="padding-top: 30px">
                                        <div class="text">
                                            <span><i class="red"></i>左眼视力:{{studentInfo.i.le||''}}</span>
                                            <span><i class="red"></i>右眼视力:{{studentInfo.i.re||''}}</span>
                                            <span></span>
                                            <span><i class="red"></i>是否色盲:{{studentInfo.i.ic==1&&'是'||studentInfo.i.ic==2&&'否'||''}}</span>
                                            <span><i class="red"></i>是否色弱:{{studentInfo.i.iw==1&&'是'||studentInfo.i.iw==2&&'否'||''}}</span>
                                            <span></span>
                                            <span><i class="red"></i>身高/cm:{{studentInfo.i.h||''}}</span>
                                            <span><i class="red"></i>体重/kg:{{studentInfo.i.w||''}}</span>
                                            <span><i class="red"></i>肺活量/ml:{{studentInfo.i.vc||''}}</span>
                                        </div>
                                    </div>
                                </li>
                                <li  style="height: 246px">
                                    <div class="left" style="background: #A3C066">
                            <span>
                                家 <br>庭 <br>状 <br>况
                            </span>
                                    </div>
                                    <div class="right">
                                        <div class="text" style="padding-top: 10px">
                                            <span style="width:100%;color: #333;text-indent:15px;">父亲:</span>
                                            <span><i class="red"></i>姓名:{{studentInfo.i.fn||''}}</span>
                                            <span><i class="red"></i>手机号:{{studentInfo.i.fp||''}}</span>
                                            <span><i class="red"></i>文化程度:{{studentInfo.i.fe||''}}</span>
                                            <span><i class="red"></i>行业及岗位:{{studentInfo.i.fi||''}}</span>
                                        </div>
                                        <div class="line"></div>
                                        <div class="text">
                                            <span style="width:100%;color: #333;text-indent:15px;">母亲:</span>
                                            <span><i class="red"></i>姓名:{{studentInfo.i.mn||''}}</span>
                                            <span><i class="red"></i>手机号:{{studentInfo.i.mp||''}}</span>
                                            <span><i class="red"></i>文化程度:{{studentInfo.i.me||''}}</span>
                                            <span><i class="red"></i>行业及岗位:{{studentInfo.i.mi||''}}</span>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="yema"></div>
                    </li>
                    <li class="page page3 page_shadow" id="page5">
                        <div class="content">
                            <div class="xulie">
                                Part3 学业信息
                            </div>
                            <div class="titles">
                                <img src="/imgs/careerManagement/academicPlanningReport/icon_jianou.png" alt="">
                                学习成绩
                            </div>
                            <ul class="list">
                                <li v-for="item in  grade1">
                                    <div class="top">
                                        <div class="circle">{{item.gnNumber}}</div>{{item.gn}}
                                    </div>
                                    <div >
                                        <p>
                                            <span>考试名称:{{item.n}}</span>
                                            <span>考试时间:{{item.d}}</span>
                                            <span>选科情况:{{studentInfo.i.c.replace(/,/g,"、")}}</span>
                                        </p>
                                        <table>
                                            <thead>
                                            <tr>
                                                <td>考试</td>
                                                <td>总成绩</td>
                                                <td>语文</td>
                                                <td>数学</td>
                                                <td>外语</td>
                                                <td>物理</td>
                                                <td>化学</td>
                                                <td>生物</td>
                                                <td>政治</td>
                                                <td>历史</td>
                                                <td>地理</td>
                                                <td>技术</td>
                                            </tr>
                                            </thead>
                                            <tr>
                                                <td>分数</td>
                                                <td v-for="i in item.s">{{i}}</td>
                                            </tr>
                                            <tr>
                                                <td>总分</td>
                                                <td v-for="i in item.ts">{{i}}</td>
                                            </tr>
                                            <tr>
                                                <td>排名</td>
                                                <td v-for="i in item.r">{{i}}</td>
                                            </tr>
                                            <tr>
                                                <td>总人数</td>
                                                <td v-for="i in item.tp">{{i}}</td>
                                            </tr>
                                        </table>
                                    </div>
                                </li>
                                <div class="noneContent2" style="margin-top: 50px;" v-if="grade.length==0"></div>
                            </ul>
                        </div>
                        <div class="yema"></div>
                    </li>
                    <li class="page page_shadow" id="page5" v-for="items in grade2">
                        <div class="content">
                            <ul class="list">
                                <li v-for="item in  items">
                                    <div class="top">
                                        <div class="circle">{{item.gnNumber}}</div>{{item.gn}}
                                    </div>
                                    <div >
                                        <p>
                                            <span>考试名称:{{item.n}}</span>
                                            <span>考试时间:{{item.d}}</span>
                                            <span>选科情况:{{studentInfo.i.c.replace(/,/g,"、")}}</span>
                                        </p>
                                        <table>
                                            <thead>
                                            <tr>
                                                <td>考试</td>
                                                <td>总成绩</td>
                                                <td>语文</td>
                                                <td>数学</td>
                                                <td>外语</td>
                                                <td>物理</td>
                                                <td>化学</td>
                                                <td>生物</td>
                                                <td>政治</td>
                                                <td>历史</td>
                                                <td>地理</td>
                                                <td>技术</td>
                                            </tr>
                                            </thead>
                                            <tr>
                                                <td>分数</td>
                                                <td v-for="i in item.s">{{i}}</td>
                                            </tr>
                                            <tr>
                                                <td>总分</td>
                                                <td v-for="i in item.ts">{{i}}</td>
                                            </tr>
                                            <tr>
                                                <td>排名</td>
                                                <td v-for="i in item.r">{{i}}</td>
                                            </tr>
                                            <tr>
                                                <td>总人数</td>
                                                <td v-for="i in item.tp">{{i}}</td>
                                            </tr>
                                        </table>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="yema"></div>
                    </li>
                    <li class="page page_shadow page4" id="page5">
                        <div class="content">
                        <div class="titles" style="margin: 60px 0 40px">
                            <img src="/imgs/careerManagement/academicPlanningReport/icon_jianou.png" alt="">
                            学业水平考试
                        </div>
                        <table>
                            <thead>
                            <tr>
                                <td>科目</td>
                                <td>成绩</td>
                                <td>满分</td>
                                <td>等级</td>
                                <td>考试时间</td>
                            </tr>
                            </thead>
                            <tr v-for="item in level">
                                <td>{{item.su||'--'}}</td>
                                <td>{{item.s||'--'}}</td>
                                <td>{{item.fs ||'--'}}</td>
                                <td>{{item.g||'--'}}</td>
                                <td>{{item.et||'--'}}</td>
                            </tr>
                        </table>
                            <div class="noneContent2" style="margin-top: 50px;" v-if="level.length==0"></div>
                            <div class="yema"></div>
                    </div>
                    </li>
                    <li class="page page_shadow page5" id="page5">
                        <div class="content">
                            <div class="titles" style="margin: 60px 0 40px">
                                <img src="/imgs/careerManagement/academicPlanningReport/icon_jianou.png" alt="">
                                获奖信息
                            </div>
                            <ul class="rewards">
                                <li v-for="item in award1">
                                    <div class="fangkuo"></div>
                                    <p>
                                        <span>名称:{{item.n}}</span>
                                        <span>活动:{{item.a}}</span>
                                        <span>等级:{{item.dg}}</span>
                                        <span>时间:{{item.de}}</span>
                                    </p>
                                    <span>描述:</span>
                                    <div class="con">
                                        {{item.d||'暂无内容'}}
                                    </div>
                                </li>
                            </ul>
                            <div class="noneContent2" style="margin-top: 50px;" v-if="award1.length==0"></div>
                        </div>
                        <div class="yema"></div>
                     </li>
                    <li class="page page_shadow" id="page5" style="padding-top: 80px" v-for="items in award2">
                        <div class="content">
                            <ul class="rewards">
                                <li v-for="item in items">
                                    <div class="fangkuo"></div>
                                    <p>
                                        <span>名称:{{item.n}}</span>
                                        <span>活动:{{item.a}}</span>
                                        <span>等级:{{item.dg}}</span>
                                        <span>时间:{{item.de}}</span>
                                    </p>
                                    <span>描述:</span>
                                    <div class="con">
                                        {{item.d||'暂无内容'}}
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="yema"></div>
                    </li>
                    <li class="page page6 page_shadow" id="page6">
                        <div class="content">
                            <div class="xulie">
                                Part4 目标定位
                            </div>
                            <div class="titles">
                                <img src="/imgs/careerManagement/academicPlanningReport/icon_jianou.png" alt="">
                                我的目标
                            </div>
                            <ul class="rewards">
                                <li v-for="item in myGoal1">
                                    <img src="/imgs/careerManagement/academicPlanningReport/icon_rili.png" alt="">
                                    <p>
                                        <span>日期:{{item.u}}</span>
                                    </p>
                                    <p style="line-height: 20px">
                                        <span>目标院校:</span>
                                    </p>
                                    <div class="yuanxiao">
                                        {{item.un}}
                                    </div>
                                    <p style="line-height: 20px">
                                        <span>目标专业:</span>
                                    </p>
                                    <div class="zhuanye">
                                        {{item.sn}}
                                    </div>
                                    <p style="line-height: 20px">
                                        <span>近三年分数线/位次:</span>
                                    </p>
                                    <div class="zhuanye">
                                        {{item.sl}}
                                    </div>
                                    <p style="line-height: 20px">
                                        <span>升学路径:</span>
                                    </p>
                                    <div class="lijing">
                                        {{item.fw}}
                                    </div>
                                    <p style="line-height: 20px">
                                        <span>选择依据与原因分析:</span>
                                    </p>
                                    <div class="lijing">
                                        {{item.a}}
                                    </div>
                                </li>
                            </ul>
                            <div class="noneContent" style="margin-top: 50px;"  v-if="myGoal1.length==0"></div>
                        </div>
                        <div class="yema"></div>
                    </li>
                    <li class="page  page_shadow " id="page6" style="padding-top: 80px" v-for="items in myGoal2">
                        <div class="content">
                            <ul class="rewards">
                                <li v-for="item in items">
                            <img src="/imgs/careerManagement/academicPlanningReport/icon_rili.png" alt="">
                            <p>
                                <span>日期:{{item.u}}</span>
                            </p>
                            <p style="line-height: 20px">
                                <span>目标院校:</span>
                            </p>
                            <div class="yuanxiao">
                                {{item.un}}
                            </div>
                            <p style="line-height: 20px">
                                <span>目标专业:</span>
                            </p>
                            <div class="zhuanye">
                                {{item.sn}}
                            </div>
                            <p style="line-height: 20px">
                                <span>近三年分数线/位次:</span>
                            </p>
                            <div class="zhuanye">
                                {{item.sl}}
                            </div>
                            <p style="line-height: 20px">
                                <span>升学路径:</span>
                            </p>
                            <div class="lijing">
                                {{item.sl}}
                            </div>
                            <p style="line-height: 20px">
                                <span>选择依据与原因分析:</span>
                            </p>
                            <div class="lijing">
                                {{item.a}}
                            </div>
                        </li>
                            </ul>
                        </div>
                        <div class="yema"></div>
                    </li>
                    <li class="page page_shadow" id="page6" style="padding-top: 40px" >
                         <div class="content">
                             <ul class="list">
                                <li>
                                    <div class="top">
                                        <div class="circle">01</div>目标职业
                                    </div>
                                    <div class="Occupation">
                                        <table>
                                            <tr v-for="item in Goals3.slice(0,5)" >
                                                <td v-for="i in item">
                                                    {{i.n||'--'}}
                                                    <span>{{i.c||'--'}}</span>
                                                </td>
                                            </tr>
                                        </table>
                                    </div>
                                    <div class="noneContent" style="margin: 60px auto" v-if="Goals3.length==0"></div>
                                 </li>
                                 <li>
                                    <div class="top">
                                        <div class="circle">02</div>目标院校
                                    </div>
                                    <div class="Occupation">
                                        <table>
                                            <tr v-for="item in Goals1.slice(0,5)" >
                                                <td v-for="i in item">
                                                    {{i.n||'--'}}
                                                    <span>{{i.c||'--'}}</span>
                                                </td>
                                            </tr>
                                        </table>
                                    </div>
                                     <div class="noneContent" style="margin: 60px auto" v-if="Goals1.length==0"></div>
                                 </li>
                                 <li>
                                    <div class="top">
                                        <div class="circle">03</div>目标专业
                                    </div>
                                    <div class="Occupation">
                                        <table>
                                            <tr v-for="item in Goals2.slice(0,5)" >
                                                <td v-for="i in item">
                                                    {{i.n||'--'}}
                                                    <span>{{i.c||'--'}}</span>
                                                </td>
                                            </tr>
                                        </table>
                                    </div>
                                     <div class="noneContent" style="margin: 60px auto" v-if="Goals2.length==0"></div>
                                </li>
                            </ul>
                         </div>
                        <div class="yema"></div>
                    </li>
                    <li class="page page7 page_shadow" id="page7">
                        <div class="content">
                            <div class="xulie">
                                Part5 目标分解
                            </div>
                            <div class="titles">
                                <img src="/imgs/careerManagement/academicPlanningReport/icon_jianou.png" alt="">
                                学期目标
                            </div>
                            <ul class="list">
                                <li style="height:382px">
                                    <div class="top">
                                        <div class="circle">01</div>高考目标
                                    </div>
                                    <div class="tables" v-for="(item,index) in gk.slice(0,2)">
                                        <span>时间:{{item.u}}</span>
                                        <table>
                                            <tr>
                                                <td style="background:#0E9783;color:white">高考目标{{index+1}}</td>
                                                <td>
                                                    <span>总分</span>
                                                    {{item.ts||'--'}}
                                                </td>
                                                <td>
                                                    <span>名次</span>
                                                    {{item.r||'--'}}
                                                </td>
                                                <td>
                                                    <span>语文</span>
                                                    {{item.sl||'--'}}
                                                </td>
                                                <td>
                                                    <span>数学</span>
                                                    {{item.sm||'--'}}
                                                </td>
                                                <td>
                                                    <span>外语</span>
                                                    {{item.sfl||'--'}}
                                                </td>
                                                <td>
                                                    <span>物理</span>
                                                    {{item.sp||'--'}}
                                                </td>
                                                <td>
                                                    <span>化学</span>
                                                    {{item.sc||'--'}}
                                                </td>
                                                <td>
                                                    <span>生物</span>
                                                    {{item.sb||'--'}}
                                                </td>
                                                <td>
                                                    <span>思想政治</span>
                                                    {{item.sip||'--'}}
                                                </td>
                                                <td>
                                                    <span>历史</span>
                                                    {{item.sh||'--'}}
                                                </td>
                                                <td>
                                                    <span>地理</span>
                                                    {{item.sg||'--'}}
                                                </td>
                                                <td>
                                                    <span>技术</span>
                                                    {{item.st||'--'}}
                                                </td>
                                            </tr>
                                        </table>
                                    </div>
                                    <div class="noneContent" style="margin: 110px auto" v-if="gk.length==0"></div>
                                </li>
                                <li>
                                    <div class="top">
                                        <div class="circle">02</div>学期目标
                                    </div>
                                    <div class="tables" v-for="(item,index) in xq.slice(0,2)">
                                        <span>时间:{{item.u}}</span>
                                        <table>
                                            <tr>
                                                <td style="background:#0E9783;color:white">{{item.title}}</td>
                                                <td>
                                                    <span>总分</span>
                                                    {{item.ts||'--'}}
                                                </td>
                                                <td>
                                                    <span>名次</span>
                                                    {{item.r||'--'}}
                                                </td>
                                                <td>
                                                    <span>语文</span>
                                                    {{item.sl||'--'}}
                                                </td>
                                                <td>
                                                    <span>数学</span>
                                                    {{item.sm||'--'}}
                                                </td>
                                                <td>
                                                    <span>外语</span>
                                                    {{item.sfl||'--'}}
                                                </td>
                                                <td>
                                                    <span>物理</span>
                                                    {{item.sp||'--'}}
                                                </td>
                                                <td>
                                                    <span>化学</span>
                                                    {{item.sc||'--'}}
                                                </td>
                                                <td>
                                                    <span>生物</span>
                                                    {{item.sb||'--'}}
                                                </td>
                                                <td>
                                                    <span>思想政治</span>
                                                    {{item.sip||'--'}}
                                                </td>
                                                <td>
                                                    <span>历史</span>
                                                    {{item.sh||'--'}}
                                                </td>
                                                <td>
                                                    <span>地理</span>
                                                    {{item.sg||'--'}}
                                                </td>
                                                <td>
                                                    <span>技术</span>
                                                    {{item.st||'--'}}
                                                </td>
                                            </tr>
                                        </table>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="yema"></div>
                    </li>
                    <li class="page page_shadow" id="page7">
                        <div class="content">
                            <ul class="list">
                                <li>
                                    <div class="tables" v-for="(item,index) in xq.slice(2,8)">
                                        <span>时间:{{item.u}}</span>
                                        <table>
                                            <tr>
                                                <td style="background:#0E9783;color:white">{{item.title}}</td>
                                                <td>
                                                    <span>总分</span>
                                                    {{item.ts||'--'}}
                                                </td>
                                                <td>
                                                    <span>名次</span>
                                                    {{item.r||'--'}}
                                                </td>
                                                <td>
                                                    <span>语文</span>
                                                    {{item.sl||'--'}}
                                                </td>
                                                <td>
                                                    <span>数学</span>
                                                    {{item.sm||'--'}}
                                                </td>
                                                <td>
                                                    <span>外语</span>
                                                    {{item.sfl||'--'}}
                                                </td>
                                                <td>
                                                    <span>物理</span>
                                                    {{item.sp||'--'}}
                                                </td>
                                                <td>
                                                    <span>化学</span>
                                                    {{item.sc||'--'}}
                                                </td>
                                                <td>
                                                    <span>生物</span>
                                                    {{item.sb||'--'}}
                                                </td>
                                                <td>
                                                    <span>思想政治</span>
                                                    {{item.sip||'--'}}
                                                </td>
                                                <td>
                                                    <span>历史</span>
                                                    {{item.sh||'--'}}
                                                </td>
                                                <td>
                                                    <span>地理</span>
                                                    {{item.sg||'--'}}
                                                </td>
                                                <td>
                                                    <span>技术</span>
                                                    {{item.st||'--'}}
                                                </td>
                                            </tr>
                                        </table>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="yema"></div>
                    </li>
                     <li class="page page8 page_shadow" id="page7">
                        <div class="content">
                            <ul class="list">
                            <li>
                                <div class="tables" v-for="(item,index) in xq.slice(8)">
                                    <span>时间:{{item.u}}</span>
                                    <table>
                                        <tr>
                                            <td style="background:#0E9783;color:white">{{item.title}}</td>
                                            <td>
                                                <span>总分</span>
                                                {{item.ts||'--'}}
                                            </td>
                                            <td>
                                                <span>名次</span>
                                                {{item.r||'--'}}
                                            </td>
                                            <td>
                                                <span>语文</span>
                                                {{item.sl||'--'}}
                                            </td>
                                            <td>
                                                <span>数学</span>
                                                {{item.sm||'--'}}
                                            </td>
                                            <td>
                                                <span>外语</span>
                                                {{item.sfl||'--'}}
                                            </td>
                                            <td>
                                                <span>物理</span>
                                                {{item.sp||'--'}}
                                            </td>
                                            <td>
                                                <span>化学</span>
                                                {{item.sc||'--'}}
                                            </td>
                                            <td>
                                                <span>生物</span>
                                                {{item.sb||'--'}}
                                            </td>
                                            <td>
                                                <span>思想政治</span>
                                                {{item.sip||'--'}}
                                            </td>
                                            <td>
                                                <span>历史</span>
                                                {{item.sh||'--'}}
                                            </td>
                                            <td>
                                                <span>地理</span>
                                                {{item.sg||'--'}}
                                            </td>
                                            <td>
                                                <span>技术</span>
                                                {{item.st||'--'}}
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                            </li>
                        </ul>
                            <div class="titles" style="margin: 60px 0 40px">
                            <img src="/imgs/careerManagement/academicPlanningReport/icon_jianou.png" alt="">
                            学考目标
                            </div>
                            <table>
                                <thead>
                                    <tr>
                                        <td>语文</td>
                                        <td>数学</td>
                                        <td>外语</td>
                                        <td>物理</td>
                                        <td>化学</td>
                                        <td>生物</td>
                                        <td>政治</td>
                                        <td>历史</td>
                                        <td>地理</td>
                                        <td>技术</td>
                                    </tr>
                                </thead>
                                    <tr>
                                    <td v-for=" item in xk||10">{{item.t||'--'}}</td>
                                    </tr>
                            </table>
                            <div class="titles" style="margin: 60px 0 40px">
                                <img src="/imgs/careerManagement/academicPlanningReport/icon_jianou.png" alt="">
                                近期目标
                            </div>
                            <ul class="rewards">
                                <li v-for="(item,index) in jq1">
                                    <div class="fangkuo"></div>
                                    <p>
                                        <span>优先等级:{{index+1}}</span>
                                        <span>完成期限:{{item.sd+'至'+item.ed}}</span>
                                        <span>达成情况:
                                        <span class="finshed" v-if="item.iv==2">未完成</span>
                                        <img src="imgs/careerManagement/decompose/wancheng.png" alt="" v-if="item.iv==1" class="finshedImg">
                                    </span>
                                    </p>
                                    <span>目标内容:</span>
                                    <div class="con">
                                        {{item.t}}
                                    </div>
                                </li>
                                <div class="noneContent" style="margin-top: 70px;" v-if="jq1.length==0"></div>
                            </ul>
                        </div>
                         <div class="yema"></div>
                    </li>
                    <li class="page page_shadow" id="page7" style="padding-top:80px;" v-for="(items,key) in jq2">
                        <div class="content">
                            <ul class="rewards">
                                <li v-for="(item,index) in items" >
                                    <div class="fangkuo"></div>
                                    <p>
                                        <span>优先等级:{{key*6+index+2}}</span>
                                        <span>完成期限:{{item.sd+'至'+item.ed}}</span>
                                        <span>达成情况:
                                        <span class="finshed" v-if="item.iv==2">未完成</span>
                                        <img src="imgs/careerManagement/decompose/wancheng.png" alt="" v-if="item.iv==1" class="finshedImg">
                                    </span>
                                    </p>
                                    <span>目标内容:</span>
                                    <div class="con">
                                        {{item.t}}
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="yema"></div>
                    </li>
                    <li class="page page9 page_shadow" id="page8">
                        <div class="content">
                            <div class="xulie">
                                Part6 行动计划
                            </div>
                            <div class="titles" style="margin: 0 0 20px">
                                <img src="/imgs/careerManagement/academicPlanningReport/icon_jianou.png" alt="">
                                当前月计划
                            </div>
                            <ul class="rewards">
                                <li>
                                    <div class="fangkuo"></div>
                                    <p>
                                        <span>标题:{{dy.ti}}</span>
                                    </p>
                                    <p style="line-height: 20px">
                                        <span>目标内容:</span>
                                    </p>
                                    <div class="lijing">
                                        {{dy.ta ||'暂无内容!'}}
                                    </div>
                                    <p style="line-height: 20px">
                                        <span>内容困难:</span>
                                    </p>
                                    <div class="lijing">
                                        {{dy.c ||'暂无内容!'}}
                                    </div>
                                    <p style="line-height: 20px">
                                        <span>达成策略与行为管理措施:</span>
                                    </p>
                                    <div class="lijing">
                                        {{dy.m ||'暂无内容!'}}
                                    </div>
                                </li>
                            </ul>
                            <div class="titles" style="margin: 60px 0 40px">
                                <img src="/imgs/careerManagement/academicPlanningReport/icon_jianou.png" alt="">
                                周计划
                            </div>
                            <ul class="rewards">
                                <li v-for="(item,index) in dz.length!=0&&dz.slice(0,1)||1">
                                    <div class="fangkuo"></div>
                                    <p>
                                        <span>标题:{{dy.mon&&dy.mon.replace(/^\d+-/,"")||'xx'}}月第{{index==0&&'一'||index==1&&'二'||index==2&&'三'||index==3&&'四'}}周</span>
                                    </p>
                                    <p style="line-height: 20px">
                                        <span>学习学科方面:</span>
                                    </p>
                                    <div class="lijing">
                                        {{item.sl ||'暂无内容!'}}
                                    </div>
                                    <p style="line-height: 20px">
                                        <span>其他方面:</span>
                                    </p>
                                    <div class="lijing">
                                        {{item.os ||'暂无内容!'}}
                                    </div>
                                    <p style="line-height: 20px">
                                        <span>备注:</span>
                                    </p>
                                    <div class="lijing">
                                        {{item.r ||'暂无内容!'}}
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="yema"></div>
                    </li>
                    <li class="page page_shadow" id="page8" style="padding-top: 60px;">
                        <div class="content">
                            <ul class="rewards">
                                <li v-for="(item,index) in dz.length!=0&dz||4" v-show="index!=0">
                                    <div class="fangkuo"></div>
                                    <p>
                                        <span>标题:{{dy.mon&&dy.mon.replace(/^\d+-/,"")||'xx'}}月第{{index==0&&'一'||index==1&&'二'||index==2&&'三'||index==3&&'四'}}周</span>
                                    </p>
                                    <p style="line-height: 20px">
                                        <span>学习学科方面:</span>
                                    </p>
                                    <div class="lijing">
                                        {{item.sl ||'暂无内容!'}}
                                    </div>
                                    <p style="line-height: 20px">
                                        <span>其他方面:</span>
                                    </p>
                                    <div class="lijing">
                                        {{item.os ||'暂无内容!'}}
                                    </div>
                                    <p style="line-height: 20px">
                                        <span>备注:</span>
                                    </p>
                                    <div class="lijing">
                                        {{item.r ||'暂无内容!'}}
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="yema"></div>
                    </li>
                     <li class="page page10 page_shadow" id="page8">
                        <div class="content">
                            <div class="titles" style="margin: 60px 0 40px">
                                <img src="/imgs/careerManagement/academicPlanningReport/icon_jianou.png" alt="">
                                日计划
                            </div>
                            <ul class="rewards days" style="padding-left: 100px;border:1px solid #D9D9D9; ">
                                <div class="left" style="height:940px;">
                                    <span>第 <br>一 <br>周</span>
                                </div>
                                <li v-for="(item,index) in dr['1'].length!=0&&dr['1'].slice(0,4)||4">
                                    <img src="/imgs/careerManagement/academicPlanningReport/icon_rili.png" alt="">
                                    <p>
                                        <span>日期:{{item.d}}</span>
                                        <span style="position: relative">是否完成:
                                                        <span class="finshed" v-if="item.i==2">未完成</span>
                                                        <img src="imgs/careerManagement/decompose/wancheng.png" alt="" v-if="item.i==1" class="finshedImg">
                                                    </span>
                                    </p>
                                    <p style="line-height: 20px">
                                        <span>今天我要完成的目标:</span>
                                    </p>
                                    <div class="lijing">
                                        {{item.ct ||'暂无内容!'}}
                                    </div>
                                    <p style="line-height: 20px">
                                        <span>完成保障措施:</span>
                                    </p>
                                    <div class="lijing">
                                        {{item.cs ||'暂无内容!'}}
                                    </div>
                                </li>
                            </ul>
                        </div>
                         <div class="yema"></div>
                    </li>
                    <li class="page page_shadow" id="page8" style="padding-top: 60px">
                        <div class="content">
                            <ul class="rewards days" style="padding-left: 100px;border:1px solid #D9D9D9; ">
                                <div class="left" style="height:940px;">
                                    <span>第 <br>一 <br>周</span>
                                </div>
                                <li v-for="(item,index) in dr['1'].length!=0&&dr['1'].slice(4)||3">
                                    <img src="/imgs/careerManagement/academicPlanningReport/icon_rili.png" alt="">
                                    <p>
                                        <span>日期:{{item.d}}</span>
                                        <span style="position: relative">是否完成:
                                                                <span class="finshed" v-if="item.i==2">未完成</span>
                                                                <img src="imgs/careerManagement/decompose/wancheng.png" alt="" v-if="item.i==1" class="finshedImg">
                                                            </span>
                                    </p>
                                    <p style="line-height: 20px">
                                        <span>今天我要完成的目标:</span>
                                    </p>
                                    <div class="lijing">
                                        {{item.ct ||'暂无内容!'}}
                                    </div>
                                    <p style="line-height: 20px">
                                        <span>完成保障措施:</span>
                                    </p>
                                    <div class="lijing">
                                        {{item.cs ||'暂无内容!'}}
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="yema"></div>
                    </li>
                    <li class="page page_shadow" id="page8" style="padding-top: 60px">
                        <div class="content">
                            <ul class="rewards days" style="padding-left: 100px;border:1px solid #D9D9D9; ">
                                <div class="left" style="height:940px;background-color:#2E75B6">
                                    <span>第 <br>二 <br>周</span>
                                </div>
                                <li v-for="(item,index) in dr['2'].length!=0&&dr['2'].slice(0,4)||4">
                                    <img src="/imgs/careerManagement/academicPlanningReport/icon_rili.png" alt="">
                                    <p>
                                        <span>日期:{{item.d}}</span>
                                        <span style="position: relative">是否完成:
                                                                        <span class="finshed" v-if="item.i==2">未完成</span>
                                                                        <img src="imgs/careerManagement/decompose/wancheng.png" alt="" v-if="item.i==1" class="finshedImg">
                                                                    </span>
                                    </p>
                                    <p style="line-height: 20px">
                                        <span>今天我要完成的目标:</span>
                                    </p>
                                    <div class="lijing">
                                        {{item.ct ||'暂无内容!'}}
                                    </div>
                                    <p style="line-height: 20px">
                                        <span>完成保障措施:</span>
                                    </p>
                                    <div class="lijing">
                                        {{item.cs ||'暂无内容!'}}
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="yema"></div>
                    </li>
                    <li class="page page_shadow" id="page8" style="padding-top: 60px">
                        <div class="content">
                            <ul class="rewards days" style="padding-left: 100px;border:1px solid #D9D9D9; ">
                                <div class="left" style="height:940px;background-color:#2E75B6">
                                    <span>第 <br>二 <br>周</span>
                                </div>
                                <li v-for="(item,index) in dr['2'].length!=0&&dr['2'].slice(4)||3">
                                    <img src="/imgs/careerManagement/academicPlanningReport/icon_rili.png" alt="">
                                    <p>
                                        <span>日期:{{item.d}}</span>
                                        <span style="position: relative">是否完成:
                                        <span class="finshed" v-if="item.i==2">未完成</span>
                                        <img src="imgs/careerManagement/decompose/wancheng.png" alt="" v-if="item.i==1" class="finshedImg">
                                    </span>
                                    </p>
                                    <p style="line-height: 20px">
                                        <span>今天我要完成的目标:</span>
                                    </p>
                                    <div class="lijing">
                                        {{item.ct ||'暂无内容!'}}
                                    </div>
                                    <p style="line-height: 20px">
                                        <span>完成保障措施:</span>
                                    </p>
                                    <div class="lijing">
                                        {{item.cs ||'暂无内容!'}}
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="yema"></div>
                    </li>
                    <li class="page page_shadow" id="page8" style="padding-top: 60px">
                        <div class="content">
                            <ul class="rewards days" style="padding-left: 100px;border:1px solid #D9D9D9; ">
                                <div class="left" style="height:940px;background-color: #82C99F">
                                    <span>第 <br>三 <br>周</span>
                                </div>
                                <li v-for="(item,index) in dr['3'].length!=0&&dr['3'].slice(0,4)||4">
                                    <img src="/imgs/careerManagement/academicPlanningReport/icon_rili.png" alt="">
                                    <p>
                                        <span>日期:{{item.d}}</span>
                                        <span style="position: relative">是否完成:
                                        <span class="finshed" v-if="item.i==2">未完成</span>
                                        <img src="imgs/careerManagement/decompose/wancheng.png" alt="" v-if="item.i==1" class="finshedImg">
                                    </span>
                                    </p>
                                    <p style="line-height: 20px">
                                        <span>今天我要完成的目标:</span>
                                    </p>
                                    <div class="lijing">
                                        {{item.ct ||'暂无内容!'}}
                                    </div>
                                    <p style="line-height: 20px">
                                        <span>完成保障措施:</span>
                                    </p>
                                    <div class="lijing">
                                        {{item.cs ||'暂无内容!'}}
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="yema"></div>
                    </li>
                    <li class="page page_shadow" id="page8" style="padding-top: 60px">
                        <div class="content">
                            <ul class="rewards days" style="padding-left: 100px;border:1px solid #D9D9D9; ">
                                <div class="left" style="height:940px;background-color: #82C99F">
                                    <span>第 <br>三 <br>周</span>
                                </div>
                                <li v-for="(item,index) in dr['3'].length!=0&&dr['3'].slice(4)||3">
                                    <img src="/imgs/careerManagement/academicPlanningReport/icon_rili.png" alt="">
                                    <p>
                                        <span>日期:{{item.d}}</span>
                                        <span style="position: relative">是否完成:
                                                                                        <span class="finshed" v-if="item.i==2">未完成</span>
                                                                                        <img src="imgs/careerManagement/decompose/wancheng.png" alt="" v-if="item.i==1" class="finshedImg">
                                                                                    </span>
                                    </p>
                                    <p style="line-height: 20px">
                                        <span>今天我要完成的目标:</span>
                                    </p>
                                    <div class="lijing">
                                        {{item.ct ||'暂无内容!'}}
                                    </div>
                                    <p style="line-height: 20px">
                                        <span>完成保障措施:</span>
                                    </p>
                                    <div class="lijing">
                                        {{item.cs ||'暂无内容!'}}
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="yema"></div>
                    </li>
                    <li class="page page_shadow" id="page8" style="padding-top: 60px">
                        <div class="content">
                            <ul class="rewards days" style="padding-left: 100px;border:1px solid #D9D9D9; ">
                                <div class="left" style="height:940px;background-color:#A3C066">
                                    <span>第 <br>四 <br>周</span>
                                </div>
                                <li v-for="(item,index) in dr['4'].length!=0&&dr['4'].slice(0,4)||4">
                                    <img src="/imgs/careerManagement/academicPlanningReport/icon_rili.png" alt="">
                                    <p>
                                        <span>日期:{{item.d}}</span>
                                        <span style="position: relative">是否完成:
                                                                                        <span class="finshed" v-if="item.i==2">未完成</span>
                                                                                        <img src="imgs/careerManagement/decompose/wancheng.png" alt="" v-if="item.i==1" class="finshedImg">
                                                                                    </span>
                                    </p>
                                    <p style="line-height: 20px">
                                        <span>今天我要完成的目标:</span>
                                    </p>
                                    <div class="lijing">
                                        {{item.ct ||'暂无内容!'}}
                                    </div>
                                    <p style="line-height: 20px">
                                        <span>完成保障措施:</span>
                                    </p>
                                    <div class="lijing">
                                        {{item.cs ||'暂无内容!'}}
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="yema"></div>
                    </li>
                    <li class="page page_shadow" id="page8" style="padding-top: 60px">
                        <div class="content">
                            <ul class="rewards days" style="padding-left: 100px;border:1px solid #D9D9D9; ">
                                <div class="left" style="height:940px;background-color:#A3C066">
                                    <span>第 <br>四 <br>周</span>
                                </div>
                                <li v-for="(item,index) in dr['4'].length!=0&&dr['4'].slice(4)||3">
                                    <img src="/imgs/careerManagement/academicPlanningReport/icon_rili.png" alt="">
                                    <p>
                                        <span>日期:{{item.d}}</span>
                                        <span style="position: relative">是否完成:
                                                                                                <span class="finshed" v-if="item.i==2">未完成</span>
                                                                                                <img src="imgs/careerManagement/decompose/wancheng.png" alt="" v-if="item.i==1" class="finshedImg">
                                                                                            </span>
                                    </p>
                                    <p style="line-height: 20px">
                                        <span>今天我要完成的目标:</span>
                                    </p>
                                    <div class="lijing">
                                        {{item.ct ||'暂无内容!'}}
                                    </div>
                                    <p style="line-height: 20px">
                                        <span>完成保障措施:</span>
                                    </p>
                                    <div class="lijing">
                                        {{item.cs ||'暂无内容!'}}
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="yema"></div>
                    </li>
                    <li class="page page11 page_shadow" id="page8" style="padding-top: 40px">
                        <div class="content">
                            <div class="titles" style="margin: 60px 0 40px">
                                <img src="/imgs/careerManagement/academicPlanningReport/icon_jianou.png" alt="">
                                曾经月计划
                            </div>
                            <table>
                                <thead>
                                <tr>
                                    <td>标题</td>
                                    <td>最后编辑时间</td>
                                    <td>创建时间</td>
                                </tr>
                                </thead>
                                <tr v-for=" item in once||1">
                                    <td >{{item.t||'--'}}</td>
                                    <td >{{item.c||'--'}}</td>
                                    <td >{{item.u||'--'}}</td>
                                </tr>
                            </table>
                        </div>
                        <div class="noneContent2" v-if="once.length==0" style="margin-top: 100px"></div>
                        <div class="yema"></div>
                    </li>
                </ul>
        <div class="get_pdf">
            <div class="inner">
                 <div class="btn_pdf" @click="getPdf('学业规划报告')">下 <br>载 <br>报 <br>告</div>
            </div>
        </div>
    </div>
</template>
<script>
    import DownloadProgress from '../../components/DownloadProgress.vue';
    export default {
        components: { DownloadProgress },
        name: "academicPlanningReportDetail",
        data(){
          return {
              isDownloading: false, //是否正在下载
              totalPages: 1, //总页数
              currentPage: 0,//当前页
              cdata:{},
              pages:[],
              pages2:[],
              studentInfo:{
                  s:{},
                  i:{
                      c:""
                  }
              },
              Catalog:[
                  {
                      title:'简介'
                  },
                  {
                      title:'个人信息',
                      list:['基本信息','健康状况','家庭状况']
                  },
                  {
                      title:'学业信息',
                      list:['学习成绩','学业水平考试','获奖信息']
                  },
                  {
                      title:'目标定位',
                      list:['我的目标']
                  },
                  {
                      title:'目标分解',
                      list:['学期目标','学考目标','近期目标']
                  },
                  {
                      title:'行动计划',
                      list:['当前月计划','周计划','日计划','曾经月计划']
                  }
              ],
              //学业成绩
              grade:{
                  '高一':[],
                  '高二':[],
                  '高三':[]
              },
              //学业水平考试
              level:[],
              //获奖信息
              award:{},
              award1:[],
              award2:[],
              grade1:[],
              grade2:[],
              grade3:[],
              grades:[],
              //我的目标
              myGoal:[],
              myGoal1:[],
              myGoal2:[],
              //院校、专业、职业
              Goals:[],
              Goals1:[],
              Goals2:[],
              Goals3:[],
              gk:[],//高考目标
              xqs:[],//学期目标
              xq:[
                  {title :'高一上(期中)'},
                  {title :'高一上(期末)'},
                  {title :'高一下(期中)'},
                  {title :'高一下(期末)'},
                  {title :'高二上(期中)'},
                  {title :'高二上(期末)'},
                  {title :'高二下(期中)'},
                  {title :'高二下(期末)'},
                  {title :'高三上(期中)'},
                  {title :'高三上(期末)'},
                  {title :'高三下(期中)'}
              ],
              xk:'',//学考目标
              jq:[],//近期目标
              jq1:[],
              jq2:[],
              dy:[],//当前月计划
              dz:[],//当前周计划
              dr:{
                  1:[],
                  2:[],
                  3:[],
                  4:[]
              },//当前日计划
              once:'',//曾经月计划
          }
        },
        methods:{
            //查看学业规划报告
            showReport(){
                this.$ajax
                    .post(this.G_uri + this.ports.careerManagement.guihuabaogao.show,{
                        id:this.$route.query.id
                    },{
                        headers:{
                            token: window.sessionStorage.getItem('ymtxToken')
                        }
                    })
                    // 监听数据返回
                    .then(res=> {
                        if(res.data.code == 2000) {
                            let data=res.data.data;
                            this.cdata=res.data.data;
                            this.studentInfo=data.studentInfo;
                            if(this.grade.length!=0){
                                this.grade=data.academicInfo.grade;
                            }

                            this.level=data.academicInfo.level.slice(0,19);
                            this.award=data.academicInfo.award;
                            this.myGoal=data.targetSetting.mt;
                            this.Goals=data.targetSetting.t;
                            this.gk=data.targetDecompose.gk;
                            this.xqs=data.targetDecompose.te;
                            this.xk=data.targetDecompose.st;
                            this.jq=data.targetDecompose.re;
                            this.dy=data.actionPlan.mon;
                            this.dz=data.actionPlan.we;
                            if(data.actionPlan.day.length!=0){
                                this.dr=data.actionPlan.day;
                                console.log(this.dr);
                            }
                            this.once=data.actionPlan.once;
                            this.changeGarde();
                            this.changeGoals();
                            this.changexq();

                            this.changerewards();
                            this.changejinqi();
                        }else {

                        }
                    })
            },
            //改变高考成绩数据结构
            changeGarde(){
               let grade1=this.grade['高一']||[];
               let grade2=this.grade['高二']||[];
               let grade3=this.grade['高三']||[];
               let arr1s=[],arr2s=[],arr3s=[];
                grade1.forEach(item=>{
                   let obj={
                       d:item.d,
                       n:item.n,
                       gn:item.gn,
                       gnNumber:1,
                       s:[],
                       ts:[],
                       r:[],
                       tp:[],

                   }
                   obj.s.push(item.s)
                   obj.ts.push(item.ts)
                   obj.r.push(item.r)
                   obj.tp.push(item.tp)
                   item.su.forEach(items=>{
                       obj.s.push(item.s)
                       obj.ts.push(item.ts)
                       obj.r.push(item.r)
                       obj.tp.push(item.tp)
                   })
                   arr1s.push(obj)
               })
                grade2.forEach(item=>{
                    let obj={
                        d:item.d,
                        n:item.n,
                        gn:item.gn,
                        gnNumber:2,
                        s:[],
                        ts:[],
                        r:[],
                        tp:[]
                    }
                    obj.s.push(item.s)
                    obj.ts.push(item.ts)
                    obj.r.push(item.r)
                    obj.tp.push(item.tp)
                    item.su.forEach(items=>{
                        obj.s.push(item.s)
                        obj.ts.push(item.ts)
                        obj.r.push(item.r)
                        obj.tp.push(item.tp)
                    })
                    arr2s.push(obj)
                })
                grade3.forEach(item=>{
                    let obj={
                        d:item.d,
                        n:item.n,
                        gn:item.gn,
                        gnNumber:3,
                        s:[],
                        ts:[],
                        r:[],
                        tp:[]
                    }
                    obj.s.push(item.s)
                    obj.ts.push(item.ts)
                    obj.r.push(item.r)
                    obj.tp.push(item.tp)
                    item.su.forEach(items=>{
                        obj.s.push(item.s)
                        obj.ts.push(item.ts)
                        obj.r.push(item.r)
                        obj.tp.push(item.tp)
                    })
                    arr3s.push(obj)
                })
                this.grades=[...arr1s,...arr2s,...arr3s]
                this.grade1=this.grades.slice(0,2)
                let grade=this.grades.slice(2);
                let grades=[]
                for(var i=0;i<grade.length;i+=3){
                    let arr=[]
                    grade[i]&&arr.push(grade[i])
                    grade[i+1]&&arr.push(grade[i+1])
                    grade[i+2]&&arr.push(grade[i+2])
                    grades.push(arr);
                }
                this.grade2=grades;
            },
            //改变获奖信息数据结构
            changerewards(){
                this.award1=this.award.slice(0,6)
                let grade=this.award.slice(6)
                let grades=[]
                for(var i=0;i<grade.length;i+=6){
                    let arr=[]
                    grade[i]&&arr.push(grade[i])
                    grade[i+1]&&arr.push(grade[i+1])
                    grade[i+2]&&arr.push(grade[i+2])
                    grade[i+3]&&arr.push(grade[i+3])
                    grade[i+4]&&arr.push(grade[i+4])
                    grade[i+5]&&arr.push(grade[i+5])
                    grades.push(arr);
                }
                this.award2=grades;
            },
            //改变我的目标数据结构
            changeGoals(){
                this.myGoal1=this.myGoal.slice(0,2)
                let grade=this.myGoal.slice(6)
                let grades=[]
                for(var i=0;i<grade.length;i+=6){
                    let arr=[]
                    grade[i]&&arr.push(grade[i])
                    grade[i+1]&&arr.push(grade[i+1])
                    grade[i+2]&&arr.push(grade[i+2])
                    grade[i+3]&&arr.push(grade[i+3])
                    grade[i+4]&&arr.push(grade[i+4])
                    grade[i+5]&&arr.push(grade[i+5])
                    grades.push(arr);
                }
                this.myGoal2=grades;


                let arr1=this.Goals['1']||[];
                for(let i=0;i<arr1.length;i+=2){
                    let arr=[];
                    arr1[i]&&arr.push(arr1[i])
                    arr1[i+1]&&arr.push(arr1[i+1])
                    this.Goals1.push(arr)
                }
                let arr2=this.Goals['2']||[];
                for(let i=0;i<arr1.length;i+=2){
                    let arr=[];
                    arr2[i]&&arr.push(arr2[i])
                    arr2[i+1]&&arr.push(arr2[i+1])
                    this.Goals2.push(arr)
                }
                let arr3=this.Goals['3']||[];
                for(let i=0;i<arr3.length;i+=2){
                    let arr=[];
                    arr3[i]&&arr.push(arr3[i])
                    arr3[i+1]&&arr.push(arr3[i+1])
                    this.Goals3.push(arr)
                }
            },
            //改变学期目标数据结构
            changexq(){
                let arr=[];
                this.xq.forEach((item,index)=>{
                    let obj=item;
                    this.xqs.forEach(items=>{
                        if(items.t==(index+1)){
                            obj=Object.assign(items,item)
                        }
                    })
                    arr.push(obj)
                })

               this.xq=arr;
            },
            //改变近期目标数据结构
            changejinqi(){
                this.jq1=this.jq.slice(0,1)
                let grade=this.jq.slice(1)
                let grades=[]
                for(var i=0;i<grade.length;i+=6){
                    let arr=[]
                    grade[i]&&arr.push(grade[i])
                    grade[i+1]&&arr.push(grade[i+1])
                    grade[i+2]&&arr.push(grade[i+2])
                    grade[i+3]&&arr.push(grade[i+3])
                    grade[i+4]&&arr.push(grade[i+4])
                    grade[i+5]&&arr.push(grade[i+5])
                    grades.push(arr);
                }
                this.jq2=grades;
            },

        },
        mounted(){
            this.showReport();
        },
        watch:{

        },
        // created(){
        //     this.showReport();
        // },
        updated:function(){
            let _this=this;
            this.$nextTick(function(){
                $('.yema').each(function (i,item){
                    item.innerHTML='第'+(i+1)+'页'
                })
                $('.page').each(function (i,item) {

                })
                for(var i=3;i<9;i++){
                    let number=$('#page'+i).eq(0).find('.yema').html();
                    number&&this.pages.push(parseInt(number.match(/\d+/)[0]))
                }
                $('.yePage').each(function (i,item) {
                    item.innerHTML=_this.pages[i]
                })
                for(var i=2;i<=11;i++){
                    let number=$('.page'+i).eq(0).find('.yema').html();
                    number&&this.pages2.push(parseInt(number.match(/\d+/)[0]))
                    if(i==2){
                        number&&this.pages2.push(parseInt(number.match(/\d+/)[0]))
                        number&&this.pages2.push(parseInt(number.match(/\d+/)[0]))
                    }
                    if(i==8||i==9){
                        number&&this.pages2.push(parseInt(number.match(/\d+/)[0]))
                    }
                }
                $('.yePages').each(function (i,item) {
                    item.innerHTML=_this.pages2[i]
                })
            })

        }
    }
</script>

<style scoped lang="less">
    .academicPlanningReportDetailBox{
        background:#E8E8E8;
    }
    .academicPlanningReportDetail{
        *{
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            letter-spacing: 1.5px;
        }
        .pages{
            width: 792px;
            margin:20px auto 0;
            .page{
                overflow: auto;
                -webkit-box-shadow: 0px 0px 10px #666;
                -ms-box-shadow: 0px 0px 10px #666;
                -moz-box-shadow: 0px 0px 10px #666;
                margin-bottom: 20px;
                position: relative;
                width: 100%;
                background: #fff;
                height: 1120px;
                background-size:100%;
                background-image: url("/imgs/careerManagement/academicPlanningReport/bg_mulu.png");
                .content{
                    width: 680px;
                    margin: 0 auto;
                    .xulie{
                        font-size: 30px;
                        color:#0C927E;
                        height: 140px;
                        line-height: 180px;
                    }
                }
            }
            #page1{
                background-image: url("/imgs/careerManagement/academicPlanningReport/bg_1.png");
                color: #fff;
                padding-left: 210px;
                .title{
                    margin: 352px 0 66px;
                    font-size: 80px;
                    font-weight: bolder;
                    letter-spacing: 8px;
                }
                p{
                    font-size: 18px;
                    line-height: 36px;
                    letter-spacing: 1.5px;
                }
            }
            #page2{
                .title{
                    height:160px;
                    line-height: 180px;
                    font-size: 22px;
                    text-align: center;
                    color:#09937E;
                }
                .muluList{
                    li{
                        .part1{
                            display: flex;
                            .color{
                                color:#1A8975;
                                width: 36px;
                                margin-right: 5px;
                                position: relative;
                                left:-5px
                            }
                            &>span{
                                display: block;
                                font-size: 15px;
                                background: none;
                            }
                            .line{
                                flex: 1;
                                border-bottom: 1px dashed #191C1E;
                                position: relative;
                                top:-8px;
                            }
                            line-height: 36px;
                            margin-top: 10px;
                        }
                        .part2{
                           .part1;
                            padding:0;
                            margin-top: 0;
                            line-height: 30px;
                            *{
                                font-size: 12px !important;
                                color:#A38A92;
                                border-color: #A38A92 !important;
                                line-height: 30px !important;
                            }
                        }
                    }
                }
            }
            #page3{
                .content{
                    &>span{
                        color:#9A9A9A;
                        font-size: 12px;
                        display: block;
                        line-height: 30px;
                        padding-bottom: 10px;
                    }
                    &>p{
                        color:#2D2E29;
                        font-size: 13px;
                    }
                    .shuoming{
                        margin-top: 30px;
                        padding: 20px 15px;
                        border-radius: 5px;
                        background:#DDF0ED;
                        p{
                            font-size: 15px;
                            color:#1B113B;
                        }
                        span{
                            color:#9EA4A3;
                            font-size: 12px;
                        }
                        line-height: 20px;
                    }
                };
             }
            #page4{
                .person{
                    height: 942px;
                    display: flex;
                    align-content: space-between;
                    flex-wrap: wrap;
                    li{
                        width: 100%;
                        .left{
                            width: 60px;
                            height: 100%;
                            text-align: center;
                            float: left;
                            font-size: 24px;
                            font-weight: bolder;
                            color:#fff;
                            display: table;
                            span{
                                display: table-cell;
                                vertical-align:middle
                            }
                        }
                        .right{
                            width: 620px;
                            height: 100%;
                            border:2px solid  #E2E2E2;
                            border-left:none;
                            padding: 0 35px;
                            float: left;
                        }
                        .line{
                            border-bottom: 2px dashed #FBFBFB;
                        }
                        .red{
                            font-size: 14px;
                            font-weight: bolder;
                            color:#FF3D32;
                            margin-right: 5px;
                            position: relative;
                            top:3px;
                            width: 10px;
                            display: inline-block;
                        }
                        .text{
                            letter-spacing: 1.5px;
                            line-height: 30px;
                            display: flex;
                            flex-wrap: wrap;
                            justify-content: space-between;
                            align-content: space-between;
                            padding:20px 0;
                            span{
                                color:#838084;
                                display: block;
                                width: 33.3%;
                                text-overflow:ellipsis;
                                white-space:nowrap;
                                overflow: hidden;
                            }
                            .button{
                                display: inline-block;
                                padding: 5px 20px;
                                text-align: center;
                                border-radius: 5px;
                                line-height: 12px;
                                color:white;
                                margin-right: 20px;
                                font-size: 12px;
                            }
                        }
                    }
                }
            }
            #page5,#page6,#page7,#page8{
                overflow: auto;
                .titles{
                    img{
                        height: 26px;
                    }
                    font-size: 22px;
                    font-weight: bolder;
                    color:#09937E;
                }
                .list{
                    li{
                        margin-bottom: 20px;
                    }
                    .top{
                        padding-top: 30px;
                        .circle{
                            width: 19px;
                            height: 19px;
                            border-radius: 50%;
                            background: #09937E;
                            float: left;
                            font-size: 11px;
                            text-align: center;
                            line-height: 18px;
                            text-indent: 0;
                            font-weight: normal;
                            color:white;
                            position: relative;
                            top:5px;
                            letter-spacing: 0;
                        }
                        text-indent: 10px;
                        font-size: 20px;
                        font-weight: bolder;
                        color:#09937E;
                    }
                    p{
                        line-height: 56px;
                        span{
                            font-size: 13px;
                            color:#333;
                            margin-right: 40px;
                            font-weight: bolder;
                        }
                    }
                }
                table{
                    width: 100%;
                    td{
                        border:2px solid #fff;
                        line-height: 44px;
                        font-weight: bolder;
                        text-align: center;
                        color:white;
                        font-size: 13px;
                    }
                    tr{
                        background:#F9F9FA;
                        td{
                            color: #666;
                        }
                    }
                    thead{
                        tr{
                            background: #82C0C0;
                        }
                        td{
                            color:#656565;
                        }
                    }
                }
                .rewards{
                    padding-left: 40px;
                    position: relative;
                    .left{
                        width: 60px;
                        top:-1px;
                        text-align: center;
                        float: left;
                        font-size: 24px;
                        font-weight: bolder;
                        color:#fff;
                        display: table;
                        span{
                            display: table-cell;
                            vertical-align:middle
                        }
                        background: #0E9783;
                        position: absolute;
                        left: 0;
                    }
                    li{
                        position: relative;
                        border-top: 1px dashed #f6f6f6;
                        padding:10px 0 ;
                        .fangkuo{
                            width: 20px;
                            height: 12px;
                            top:32px;
                            left:-30px;
                            background:#2E75B6;
                            position: absolute;
                        }
                        img{
                            top:26px;
                            left:-30px;
                            position: absolute;
                        }
                        span{
                            font-size: 13px;
                            color:#333;
                            margin-right: 40px;
                            font-weight: bolder;
                        }
                        p{
                            line-height: 56px;

                        }
                        .con{
                            line-height: 20px;
                            font-size: 12px;
                            color:#919191;
                            height: 60px;
                            overflow: hidden;
                        }
                        .yuanxiao{
                            color:#7F7F7F;
                            line-height: 30px;
                            font-weight: bolder;
                            height: 30px;
                            overflow: hidden;
                        }
                        .zhuanye{
                            width: 100%;
                            background:#F2F2F2;
                            line-height: 30px;
                            margin: 15px 0;
                            text-indent: 10px;
                            color:#929292;
                            height: 30px;
                            overflow: hidden;
                        }
                        .lijing{
                            color:#8A8A8A;
                            line-height: 20px;
                            font-size: 12px;
                            height: 60px;
                            overflow: hidden;
                        }

                    }
                }
                .days{
                    height: 940px;
                }
                .Occupation {
                    width: 100%;
                    padding: 20px 0 0;
                    table{
                        border: 1px solid #eaeaea;
                        font-size: 16px;
                        border-radius: 3px;
                        border-collapse:collapse;
                        tr {
                            td {
                                width: 50%;
                                border: 2px solid #fff;
                                line-height: 44px;
                                color:#333;
                                text-indent: 10px;
                                font-size: 13px;
                                span{
                                    float: right;
                                    color:#8A8A8A;
                                    margin-right: 10px;
                                    font-weight: normal;
                                }
                            }
                        }
                        tr:nth-of-type(odd){
                            background:#F2F2F2;
                        }
                        tr:nth-of-type(even){
                            background: #FFFFFF;
                        }
                    }
                }
            }
            #page7,#page8{
                .tables{
                    padding-top: 40px;
                    &>span{
                        font-weight: bolder;
                        line-height: 40px;
                    }
                    table{
                        border-collapse: collapse;
                        border:1px solid #EAEAEA;
                        tr{
                            td:nth-of-type(1){
                                background: #F3F4F8;
                            }
                        }
                        td{
                            line-height:40px;
                            border:1px solid #EAEAEA;
                            text-align: center;
                            span{
                                display: block;
                                border-bottom: 1px solid #EAEAEA;
                                background: #F3F4F8;
                            }
                            .icon{
                                display: inline-block;
                                width: 34px;
                                height: 20px;
                                border-radius: 3px;
                                cursor: pointer;
                                position: relative;
                                top:5px;
                                background-position: center;
                                background-repeat: no-repeat;
                                background-image:url("/imgs/schoolWork/icon_bianjihui.png") ;
                                &:hover{
                                    background-image:url("/imgs/schoolWork/icon_bianjibai.png");
                                    background-color: #FB4945;
                                }
                            }
                        }
                    }
                }
                .finshed{
                    width: 60px;
                    height: 20px;
                    display: inline-block;
                    background: #F3F4F8;
                    color:#666666;
                    position: relative;
                    top:0px;
                    line-height: 20px;
                    font-size: 12px;
                    text-align: center;
                }
                .finshedImg{
                    position: static !important;
                }
            }
            .yema{
                position: absolute;
                bottom: 10px;
                width: 60px;
                left:50%;
                margin-left:-30px;
            }
        }
    }
    .noneContent{
        margin: 0 auto;
        padding: 30px 0;
        width: 105px;
        height:98px;
        background: url("/imgs/careerManagement/academicPlanningReport/wu.png") no-repeat center;
    }
    .noneContent2{
        margin: 0 auto;
        width: 100%;
        height:560px;
        background: url("/imgs/careerManagement/academicPlanningReport/w2.png") no-repeat center;
    }
    .get_pdf {
        height: 0px;
        width: 100%;
        position: fixed;
        top: 30%;
        .inner {
            width: 792px;
            margin: 0 auto;
            position: relative;
            .btn_pdf {
                position: absolute;
                padding: 5px 10px;
                left:101%;
                text-align: center;
                background-color: #2c8ffc;
                color: #fff;
                cursor: pointer;
                border-radius: 5px;
            }
        }
    }
</style>
