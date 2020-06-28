<template>
  <div class="pc-page">
    <headerEl></headerEl>

    <div class="main main_bg">
      <div class="auto">
        <div class="crumb_goback">
          <router-link to="/" class="button">返回首页</router-link>
        </div>
        <div class="clearfix">
          <usercenter></usercenter>
          <div class="admin_r fr">
            <div class="admin_topbox clearfix">
					<span class="tit fl">
						个人信息 <em class="en">personal information</em>
					</span>
            </div>
            <div class="per_main">
              <div class="topbox clearfix">
                <li class="w_50">
                  <span class="tit">邮箱：</span>{{email}}
                </li>
                <li class="w_50">
                  <span class="tit">真实姓名：</span>{{realname}}
                </li>
                <li class="w_50">
                  <span class="tit">信度：</span>{{cehuang}}
                </li>
                <li class="w_50">
                  <span class="tit">身份证号码：</span>{{idcard}}
                </li>
                <li class="w_100">
                  <span class="tit">性别：</span>{{sex}}
                </li>
                <li class="w_100">
                  <span class="tit">学校所在省、市、区，学校名称:</span>{{province}}{{city}}{{region}}{{grade}}{{userClass}}
                </li>
                <li class="w_50">
                  <span class="tit">出生年月日：</span>{{year}}年{{month}}月{{day}}日
                </li>
                <li class="w_50">
                  <span class="tit">手机号：</span>{{phone}}
                </li>
              </div>
              <div class="familybox clearfix">
                <div class="column">
                  <li class="w_50">
                    <span class="tit">父亲姓名：</span>{{fa_name}}
                  </li>
                  <li class="w_50">
                    <span class="tit">年龄：</span>{{fa_age}}
                  </li>
                  <li class="w_50">
                    <span class="tit">工作岗位：</span>{{fa_job}}
                  </li>
                  <li class="w_50">
                    <span class="tit">收入：</span>{{fa_salary}}
                  </li>
                </div>
                <div class="column">
                  <li>
                    <span class="tit">母亲姓名：</span>{{mo_name}}
                  </li>
                  <li>
                    <span class="tit">年龄：</span>{{mo_age}}
                  </li>
                  <li>
                    <span class="tit">工作岗位：</span>{{mo_job}}
                  </li>
                  <li>
                    <span class="tit">收入：</span>{{mo_salary}}
                  </li>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footerEl></footerEl>
      </div>
    </div>
  </div>
</template>

<script>
  import usercenter from '../../components/usercenter.vue';
  import HeaderEl from '../../components/HeaderEl.vue';
  import FooterEl from '../../components/FooterEl';

  export default {
    data(){
      return {
        email: '',
        realname: '', //	string	是	真实姓名		luolluo
        idcard: '', //		string	是	身份证		411325199112017037
        sex: '', //		string	是	性别（男、女）		男
        province: '', //		string	是	省份		河南
        city: '', //		string	是	市		南阳
        region: '', //		string	是	区		宛城区
        school: '', //		string	是	学校		南阳理工学院
        year: '', //		string	是	年		1991
        month: '', //		string	是	月		12
        day: '', //		string	是	日		01
        school2: '', //		string	是	学校		唐河一高
        grade: '', //	string	是	年级		3年级
        userClass: '', //		string	是	班级		1106
        phone: '', //		string	是	手机
        fa_name: '', //	string	否	名字(父亲)		xxx
        fa_age: '', //	number	否	年龄(父亲)		50
        fa_job: '', //	string	否	职业(父亲)
        fa_salary: '', //	number	否	收入(父亲)
        mo_name: '', //	string	否	名字(母亲)
        mo_age: '', //	number	否	年龄(母亲)
        mo_job: '', //	string	否	工作(母亲)
        mo_salary: '', //	number	否	收入(母亲)
        cehuang: '',
        cehuangTip: '正常'
      }
    },
    components: {
      usercenter,
      HeaderEl,
      FooterEl
    },
    mounted(){
      this.getUserInfo();
    },
    methods: {
      getUserInfo: function () {
        var _this = this;
        $.ajax({
          type: 'POST',
          url: '/api/usercenter/get_profile',
          headers: {'token': sessionStorage.getItem('token')},
          dataType: 'JSON',
          success: function (data) {
            _this.email = data.result.email;
            _this.realname = data.result.realname;
            _this.idcard = data.result.idcard;
            _this.sex = data.result.sex;
            _this.province = data.result.province;
            _this.city = data.result.city;
            _this.region = data.result.region;
            _this.grade = data.result.grade;
            _this.userClass = data.result.class;
            _this.school = data.result.school;
            _this.year = data.result.year;
            _this.month = data.result.month;
            _this.day = data.result.day;
            _this.phone = data.result.phone;
            _this.fa_name = data.result.fa_name;
            _this.fa_age = data.result.fa_age;
            _this.fa_job = data.result.fa_job;
            _this.fa_salary = data.result.fa_salary;
            _this.mo_name = data.result.mo_name;
            _this.mo_age = data.result.mo_age;
            _this.mo_job = data.result.mo_job;
            _this.mo_salary = data.result.mo_salary;
            _this.cehuang = data.result.cehuang;
            if (_this.cehuang && _this.cehuang < 50) {
              _this.cehuangTip='不正常'
            }
            console.log(data);
          },
          error: function (data) {
            this.layerMsg('网络错误，请重新提交');
          }
        })
      }
    }
  }

</script>
<style scoped>
  .font-blue {
    color: #68a6e4
  }
</style>
