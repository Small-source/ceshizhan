<template>
  <div class="pc-page main_bg">
    <headerEl></headerEl>
    <div class="reg_form_main auto">
      <div class="reg_titbox">
        <h4 class="cn_tit">填写个人信息</h4>
        <h6 class="en_tit">fill in personal information</h6>
      </div>
      <div class="reg_form">
        <form action="" class="layui-form">
          <div class="topbox clearfix">
            <li class="w_50">
              <span class="tit"><em class="bs">*</em>邮箱</span>
              <div class="info clearfix">
                <input type="text" class="ipt ipt_txt" v-model="email" readonly placeholder="请输入邮箱"/>
              </div>
            </li>
            <li class="w_50">
              <span class="tit"><em class="bs">*</em>真实姓名</span>
              <div class="info clearfix">
                <input type="text" class="ipt ipt_txt" v-model="realname" placeholder="请输入真实姓名"/>
              </div>
            </li>
            <li class="w_50">
              <span class="tit"><em class="bs">*</em>身份证号码</span>
              <div class="info clearfix">
                <input type="text" class="ipt ipt_txt" placeholder="请输入身份证号码" v-model="idcard"/>
              </div>
            </li>
            <li class="w_50">
              <span class="tit"><em class="bs">*</em>性别</span>
              <div class="info clearfix">
                <!--<input type="text" class="ipt ipt_txt" placeholder="请输入身份证号码"/>-->
                <input type="radio" name="sex" class="radio" value="男" title="男" checked>
                <input type="radio" name="sex" class="radio" value="女" title="女">
              </div>
            </li>
            <li class="w_100 address">
              <span class="tit"><em class="bs">*</em>学校所在省、市、区，学校名称</span>
              <div class="info clearfix">
                <div class="group fl">
                  <select name="quiz" class="ipt_select" lay-filter="province" id="province" v-model="province"
                          @change="getCities">
                    <option v-for="(p,index) in provinces" :code="p.code" :value="p.name">{{p.name}}</option>
                  </select>
                  <em class="fz">省</em>
                </div>
                <div class="group fl">
                  <select name="quiz" class="ipt_select" id="city" lay-filter="city" v-model="city" @change="getXian">
                    <option v-for="(c,index) in cities" :code="c.code" :value="c.name">{{c.name}}</option>
                  </select>
                  <em class="fz">市</em>
                </div>
                <div class="group fl">
                  <select name="quiz" class="ipt_select" id="region" lay-filter="region" v-model="region">
                    <option v-for="(x,index) in xian" :code="x.code" :value="x.name">{{x.name}}</option>
                  </select>
                  <em class="fz">区</em>
                </div>
                <div class="group fl">
                  <input type="text" class="ipt ipt_txt fl" v-model="school" placeholder="请输入学校名称"/><em
                  class="fz">学校</em>
                </div>
                <div class="group fl">
                  <select name="quiz" class="ipt_select" lay-filter="grade" id="grade" v-model="grade">
                    <option value="高一">高一</option>
                    <option value="高二">高二</option>
                    <option value="高三">高三</option>
                    <option value="成年人">成年人</option>
                  </select>
                  <em class="fz">年级</em>
                </div>
                <div class="group fl">
                  <select name="quiz" class="ipt_select" lay-filter="userClass" id="userClass" v-model="userClass">
                    <option value="文科">文科</option>
                    <option value="理科">理科</option>
                    <option value="无">无</option>
                  </select>
                  <em class="fz">科别</em>
                </div>
              </div>
            </li>
            <li class="w_100 birthday clearfix">
              <span class="tit"><em class="bs">*</em>出生年月日</span>
              <div class="info clearfix">
                <div class="group fl">
                  <select name="quiz" class="ipt_select" lay-filter="year" v-model="year" @change="getDay">
                    <option v-for="year in years">{{year}}</option>
                  </select><em class="fz">年</em>
                </div>
                <div class="group fl">
                  <select name="quiz" class="ipt_select" lay-filter="month" v-model="month" @change="getDay">
                    <option v-for="month in months">{{month}}</option>
                  </select><em class="fz">月</em>
                </div>

                <div class="group fl">
                  <select name="quiz" class="ipt_select" lay-filter="day" v-model="day">
                    <option v-for="day in days">{{day}}</option>
                  </select><em class="fz">日</em>
                </div>
              </div>
            </li>
            <li class="w_100">
              <span class="tit"><em class="bs">*</em>手机号</span>
              <div class="info clearfix">
                <input type="text" class="ipt ipt_txt" placeholder="请输入手机号" v-model="phone"/>
              </div>
            </li>
          </div>
          <div class="familybox clearfix">
            <div class="column">
              <li class="w_100">
                <span class="tit">父亲姓名</span>
                <div class="info clearfix">
                  <input type="text" class="ipt ipt_txt" v-model="fa_name"/>
                </div>
              </li>
              <li class="w_100">
                <span class="tit">年龄</span>
                <div class="info clearfix">
                  <input type="text" class="ipt ipt_txt" v-model="fa_age"/>
                </div>
              </li>
              <li class="w_100">
                <span class="tit">工作岗位</span>
                <div class="info clearfix">
                  <select name="quiz" lay-filter="fa_job" v-model="fa_job">
                    <option value="IT/互联网">IT/互联网</option>
                    <option value="管理咨询">管理咨询</option>
                    <option value="人力资源服务">人力资源服务</option>
                    <option value="教育培训机构">教育培训机构</option>
                    <option value="金融投资">金融投资</option>
                    <option value="房产/建筑/装潢">房产/建筑/装潢</option>
                    <option value="高校/职高">高校/职高</option>
                    <option value="中小学">中小学</option>
                    <option value="政府机关/事业单位">政府机关/事业单位</option>
                    <option value="医疗/医药/卫生">医疗/医药/卫生</option>
                    <option value="心理咨询">心理咨询</option>
                    <option value="公益/社会工作">公益/社会工作</option>
                    <option value="消费零售">消费零售</option>
                    <option value="文化传媒">文化传媒</option>
                    <option value="新媒体">新媒体</option>
                    <option value="交通物流">交通物流</option>
                    <option value="贸易">贸易</option>
                    <option value=" 科研/技术服务业"> 科研/技术服务业</option>
                    <option value="保险">保险</option>
                    <option value="高新技术">高新技术</option>
                    <option value="化工">化工</option>
                    <option value="环境/能源">环境/能源</option>
                    <option value="制造业">制造业</option>
                    <option value="印刷/包装">印刷/包装</option>
                    <option value="家电行业">家电行业</option>
                    <option value="通信">通信</option>
                    <option value="汽车">汽车</option>
                    <option value="航空">航空</option>
                    <option value="农林牧渔">农林牧渔</option>
                    <option value="餐饮/酒店">餐饮/酒店</option>
                    <option value="食品">食品</option>
                    <option value="旅游">旅游</option>
                    <option value="服装">服装</option>
                    <option value="珠宝">珠宝</option>
                    <option value="烟草">烟草</option>
                    <option value="游戏">游戏</option>
                    <option value="部队/消防">部队/消防</option>
                  </select>
                </div>
              </li>
              <li class="w_100">
                <span class="tit">收入</span>
                <div class="info clearfix">
                  <select name="quiz" lay-filter="fa_salary" v-model="fa_salary">
                    <option value="2000以下">2000以下</option>
                    <option value="2000-4000">2000-4000</option>
                    <option value="4000-8000" selected>4000-8000</option>
                    <option value="8000-10000">8000-10000</option>
                    <option value="10000-20000">10000-20000</option>
                    <option value="20000以上">20000以上</option>
                  </select>
                </div>
              </li>
            </div>
            <div class="column">
              <li class="w_100">
                <span class="tit">母亲姓名</span>
                <div class="info clearfix">
                  <input type="text" class="ipt ipt_txt" v-model="mo_name"/>
                </div>
              </li>
              <li class="w_100">
                <span class="tit">年龄</span>
                <div class="info clearfix">
                  <input type="text" class="ipt ipt_txt" v-model="mo_age"/>
                </div>
              </li>
              <li class="w_100">
                <span class="tit">工作岗位</span>
                <div class="info clearfix">
                  <select name="quiz" lay-filter="mo_job" v-model="mo_job">
                    <option value="IT/互联网">IT/互联网</option>
                    <option value="管理咨询">管理咨询</option>
                    <option value="人力资源服务">人力资源服务</option>
                    <option value="教育培训机构">教育培训机构</option>
                    <option value="金融投资">金融投资</option>
                    <option value="房产/建筑/装潢">房产/建筑/装潢</option>
                    <option value="高校/职高">高校/职高</option>
                    <option value="中小学">中小学</option>
                    <option value="政府机关/事业单位">政府机关/事业单位</option>
                    <option value="医疗/医药/卫生">医疗/医药/卫生</option>
                    <option value="心理咨询">心理咨询</option>
                    <option value="公益/社会工作">公益/社会工作</option>
                    <option value="消费零售">消费零售</option>
                    <option value="文化传媒">文化传媒</option>
                    <option value="新媒体">新媒体</option>
                    <option value="交通物流">交通物流</option>
                    <option value="贸易">贸易</option>
                    <option value=" 科研/技术服务业"> 科研/技术服务业</option>
                    <option value="保险">保险</option>
                    <option value="高新技术">高新技术</option>
                    <option value="化工">化工</option>
                    <option value="环境/能源">环境/能源</option>
                    <option value="制造业">制造业</option>
                    <option value="印刷/包装">印刷/包装</option>
                    <option value="家电行业">家电行业</option>
                    <option value="通信">通信</option>
                    <option value="汽车">汽车</option>
                    <option value="航空">航空</option>
                    <option value="农林牧渔">农林牧渔</option>
                    <option value="餐饮/酒店">餐饮/酒店</option>
                    <option value="食品">食品</option>
                    <option value="旅游">旅游</option>
                    <option value="服装">服装</option>
                    <option value="珠宝">珠宝</option>
                    <option value="烟草">烟草</option>
                    <option value="游戏">游戏</option>
                    <option value="部队/消防">部队/消防</option>
                  </select>
                </div>
              </li>
              <li class="w_100">
                <span class="tit">收入</span>
                <div class="info clearfix">
                  <select name="mo_salary" lay-filter="mo_salary" v-model="mo_salary">
                    <option value="2000以下">2000以下</option>
                    <option value="2000-4000">2000-4000</option>
                    <option value="4000-8000">4000-8000</option>
                    <option value="8000-10000">8000-10000</option>
                    <option value="10000-20000">10000-20000</option>
                    <option value="20000以上">20000以上</option>
                  </select>
                </div>
              </li>
            </div>
          </div>
          <div class="btngroup clearfix">
            <router-link to="/" class="ipt ipt_reset">返回首页</router-link>
            <input type="button" value="下一步" @click="submit" class="ipt ipt_submit">
          </div>
        </form>
      </div>
    </div>
    <footerEl></footerEl>
  </div>
</template>

<script>
  import HeaderEl from '../../components/HeaderEl';
  import FooterEl from '../../components/FooterEl';
  //  require('../../../')
  export default {
    data() {
      return {
        email: '',
        realname: '', //	string	是	真实姓名		luolluo
        idcard: '', //		string	是	身份证		411325199112017037
        sex: '', //		string	是	性别（男、女）		男
        province: '', //		string	是	省份		河南
        provinces: '', //		string	是	省份		河南
        city: '', //		string	是	市		南阳
        cities: '',
        xian: '',
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
        years: [],
        months: [],
        days: []
      }
    },

    beforeMount() {
      this.getProvince();
    },
    mounted() {
      var _this = this;
      var form;
      this.getUserInfo();
      for (var i = 2018; i > 1900; i--) {
        this.years.push(i);
      }
      for (var i = 1; i < 13; i++) {
        this.months.push(i);
      }
      layui.use(['form', 'layedit', 'laydate'], function () {
        form = layui.form;
        form.on('select(mo_salary)', function (data) {
          _this.mo_salary = data.value;
        });
        form.on('select(fa_salary)', function (data) {
          _this.fa_salary = data.value;
        });
        form.on('select(mo_job)', function (data) {
          _this.mo_job = data.value;
        });
        form.on('select(fa_job)', function (data) {
          _this.fa_job = data.value;
        });

        form.on('select(province)', function (data) {
          _this.province = data.value;
          console.log(data);
          $.each(_this.provinces, function (index, val) {
            if (val.name == data.value) {
              _this.getCities(val.code);
            }
          })

        });

        form.on('select(city)', function (data) {
          _this.city = data.value;

          $.each(_this.cities, function (index, val) {
            if (val.name == data.value) {
              _this.getXian(val.code);
            }
          })
        });

        form.on('select(region)', function (data) {
          _this.region = data.value;
        });

        form.on('select(grade)', function (data) {
          _this.grade = data.value;
        });

        form.on('select(userClass)', function (data) {
          _this.userClass = data.value;
        });

        form.on('select(year)', function (data) {
          _this.year = data.value;
        });

        form.on('select(month)', function (data) {
          _this.month = data.value;
          _this.getDay(data.value);
        });

        form.on('select(day)', function (data) {
          _this.day = data.value;
        });

      });
      this.layInit();
    },
    updated() {

    },
    components: {
      HeaderEl,
      FooterEl,
    },
    methods: {

      layInit: function () {
        var _this = this;
        var form;
        layui.use(['form', 'layedit', 'laydate'], function () {
          form = layui.form;
          form.render();
          console.log('是否渲染');
        });
      },

      /**
       * radio 切换
       */
      radioSwitch: function (e) {
        $('.radio').removeClass('active');
        $(e.target).addClass('active');
      },

      /**
       * 获取个人信息
       */
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
            // console.log(data);
            $('.radio').each(function (index, val) {
              if ($(this).val() == _this.sex) {
                $(this).attr('checked', 'true');
              }
            });

            setTimeout(function () {
              $.each(_this.provinces, function (index, val) {
                if (val.name == _this.province) {
                  _this.getCities(val.code);
                }
              })
            }, 500)
            setTimeout(function () {
              $.each(_this.cities, function (index, val) {
                if (val.name == _this.city) {
                  _this.getXian(val.code);
                }
              })
              _this.getDay(_this.month);
            }, 1000)


          },
          error: function (data) {
            this.layerMsg('网络错误，请重新提交');
          }
        })
      },

      /**
       * 提交个人信息
       */
      submit: function () {
        this.$router.push('/evlua');
//         if (!this.realname) {
//           this.layerMsg('请填写真实姓名');
//           return false;
//         }
//
// //        if (!this.sex) {
// //          this.layerMsg('请选择性别');
// //          return false;
// //        }
//
//         if (!this.idcard) {
//           this.layerMsg('请填写身份证号');
//           return false;
//         }
//
//         if (!this.province) {
//           this.layerMsg('请选择学校所在省份');
//           return false;
//         }
//
//         if (!this.city) {
//           this.layerMsg('请选择学校所在城市');
//           return false;
//         }
//
//         if (!this.region) {
//           this.layerMsg('请选择学校所在区县');
//           return false;
//         }
//
//         if (!this.school) {
//           this.layerMsg('请填写学校名称');
//           return false;
//         }
//
//         if (!this.grade) {
//           this.layerMsg('请填写年级');
//           return false;
//         }
//
//         if (!this.userClass) {
//           this.layerMsg('请填写科别');
//           return false;
//         }
//
//         if (!this.year) {
//           this.layerMsg('请选择出生年份');
//           return false;
//         }
//
//         if (!this.month) {
//           this.layerMsg('请选择出生月份');
//           return false;
//         }
//
//         if (!this.day) {
//           this.layerMsg('请选择出生日期');
//           return false;
//         }
//
//         if (!this.isPoneAvailable(this.phone)) {
//           this.layerMsg('请填写正确的手机号');
//           return false;
//         }


//        this.sex = $('.radio.active').text();
//        var province = $('#province').find('option:selected').text();
//        var city = $('#city').find('option:selected').text();
//        var region = $('#region').find('option:selected').text();
//         this.sex = $('.layui-form-radioed div').text();
        // console.log(this.mo_salary);
        // console.log(this.mo_job);
        // console.log(this.fa_salary);
        // console.log(this.fa_job);
        // console.log(this.province);
        // console.log(this.city);
        // console.log(this.region);
        // return false;
        // this.$ajax.post("/api/test/user/profile/add", {
        //     realname: this.realname, //	string	是	真实姓名		luolluo
        //     idcard: this.idcard, //		string	是	身份证		411325199112017037
        //     sex: this.sex, //		string	是	性别（男、女）		男
        //     province: this.province, //		string	是	省份		河南
        //     city: this.city, //		string	是	市		南阳
        //     region: this.region, //		string	是	区		宛城区
        //     school: this.school, //		string	是	学校		南阳理工学院
        //     year: this.year, //		string	是	年		1991
        //     month: this.month, //		string	是	月		12
        //     day: this.day, //		string	是	日		01
        //     grade: this.grade, //	string	是	年级		3年级
        //     class: this.userClass, //		string	是	班级		1106
        //     phone: this.phone, //		string	是	手机
        //     fa_name: this.fa_name, //	string	否	名字(父亲)		xxx
        //     fa_age: this.fa_age, //	number	否	年龄(父亲)		50
        //     fa_job: this.fa_job, //	string	否	职业(父亲)
        //     fa_salary: this.fa_salary, //	number	否	收入(父亲)
        //     mo_name: this.mo_name, //	string	否	名字(母亲)
        //     mo_age: this.mo_age, //	number	否	年龄(母亲)
        //     mo_job: this.mo_job, //	string	否	工作(母亲)
        //     mo_salary: this.mo_salary, //	number	否	收入(母亲)
        //   },
        //   {
        //     headers: {
        //       "token": sessionStorage.getItem('token'),
        //     }
        //   },
        //   {emulateJSON: true}).then(
        //   function (res) {
        //     // 请求成功的结果
        //     // console.log(res.data);
        //     var data = res.data;
        //     if (data.code == 0) {
        //       this.layerMsg('个人信息提交成功！');
        //       // this.isProfileShow = 0;
        //       this.$router.push('/evlua');
        //     } else {
        //       this.layerMsg(data.msg);
        //     }
        //   },
        //   function (res) {
        //     this.layerMsg('网络错误，请重新提交');
        //   }
        // );
      },

      /**
       * 获取省
       */
      getProvince: function () {
        var _this = this;
        $.ajax({
          type: 'POST',
          url: '/api/common/area/getCityList',
          headers: {'token': sessionStorage.getItem('token')},
          dataType: 'JSON',
          data: {
            type: 1
          },
          success: function (data) {
            // console.log(data);
            _this.provinces = data.result;
            // console.log(this.provinces);
          },
          error: function (data) {
            this.layerMsg('网络错误，请重新提交');
          }
        })
      },
      /**
       * 获取市
       */
      getCities: function (province) {
        var _this = this;
//        var province = $('#province').find('option:selected').attr('code');
        $.ajax({
          type: 'POST',
          url: '/api/common/area/getCityList',
          headers: {'token': sessionStorage.getItem('token')},
          dataType: 'JSON',
          data: {
            type: 2,
            recode: province
          },
          success: function (data) {
            // console.log(data);
            _this.cities = data.result;
            // console.log(this.provinces);
            setTimeout(function () {
              _this.layInit();
            }, 500)
          },
          error: function (data) {
            this.layerMsg('网络错误，请重新提交');
          }
        })
      },

      /**
       * 获取市
       */
      getXian: function (city) {
        var _this = this;
//        var city = $('#city').find('option:selected').attr('code');
        $.ajax({
          type: 'POST',
          url: '/api/common/area/getCityList',
          headers: {'token': sessionStorage.getItem('token')},
          dataType: 'JSON',
          data: {
            type: 3,
            recode: city
          },
          success: function (data) {
            // console.log(data);
            _this.xian = data.result;
            setTimeout(function () {
              _this.layInit();
            }, 500)
          },
          error: function (data) {
            this.layerMsg('网络错误，请重新提交');
          }
        })
      },

      getDay: function (month) {
        if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
          this.getDays(32);
        } else if (month == 4 || month == 6 || month == 9 || month == 11) {
          this.getDays(31);
        } else if (month == 2 && this.isLeapYear(this.year)) {
          this.getDays(30)
        } else if (month == 2 && !this.isLeapYear(this.year)) {
          this.getDays(29);
        }
      },

      getDays: function (m) {
        var _this = this;
        _this.days = [];
        for (var i = 1; i < m; i++) {
          this.days.push(i);
        }
        setTimeout(function () {
          _this.layInit();
        }, 500)
      },

      isLeapYear: function (year) {
        return (year % 4 == 0) && (year % 100 != 0 || year % 400 == 0);
      },
    }
  }
</script>
