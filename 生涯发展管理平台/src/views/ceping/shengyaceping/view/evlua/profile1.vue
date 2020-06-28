<template>
  <div>
    <div class="p-header">
      <div class="container">
        <router-link to="/"><img src="../../assets/l-logo.png" alt="" width="200px"></router-link>
      </div>
    </div>

    <div class="password-find">
      <div class="container">
        <div class="w100 p-title">填写个人信息</div>
        <div class="add-profile">
          <div class="ap-content">

            <!-- 邮箱 -->
            <div class="in">
              <div class="in-label">邮箱:</div>
              <div class="in-text">
                <input type="text" class="text" placeholder="" v-model="email" readonly>
              </div>
              <div class="p-tip">
                <img src="../../assets/user/xing.png">
              </div>
            </div>
            <!-- 邮箱 -->

            <!--真实姓名-->
            <div class="in">
              <div class="in-label">真实姓名:</div>
              <div class="in-text">
                <input type="text" class="text" placeholder="" v-model="realname">
              </div>
              <div class="p-tip">
                <img src="../../assets/user/xing.png">
              </div>
            </div>
            <!--真实姓名-->

            <!--身份证号码-->
            <div class="in">
              <div class="in-label">身份证号码:</div>
              <div class="in-text">
                <input type="text" class="text" placeholder="" v-model="idcard">
              </div>
              <div class="p-tip">
                <img src="../../assets/user/xing.png">
              </div>
            </div>
            <!--身份证号码-->

            <!--性别-->
            <div class="in">
              <div class="in-label">性别:</div>
              <div class="in-text">
                <div class="radio active" @click="radioSwitch($event)">男</div>
                <div class="radio" @click="radioSwitch($event)">女</div>
              </div>
              <div class="p-tip">
                <img src="../../assets/user/xing.png">
              </div>
            </div>
            <!--性别-->

            <!--学校所在省、市、区，学校名称-->
            <div class="in">
              <div class="in-label">学校所在省、市、区，学校名称:</div>
              <div class="in-text" style="width:720px;">
                <select class="select f-select" id="province" v-model="province" @change="getCities">
                  <option v-for="(p,index) in provinces" :code="p.code" :value="p.name">{{p.name}}</option>
                </select>
                <span class="label special">省</span>
                <select class="select f-select" id="city" v-model="city" @change="getXian">
                  <option v-for="(c,index) in cities" :code="c.code" :value="c.name">{{c.name}}</option>
                </select>
                <span class="label special">市</span>
                <div class="heightSite"></div>
                <select class="select f-select" id="region" v-model="region">
                  <option v-for="(x,index) in xian" :code="x.code" :value="x.name">{{x.name}}</option>
                </select>
                <span class="label special">区</span>
                <input type="text" class="text m-text f-text" v-model="school"><span class="label special">学校</span>
                <select class="select f-select" id="grade" v-model="grade">
                  <option value="高一">高一</option>
                  <option value="高二">高二</option>
                  <option value="高三">高三</option>
                  <option value="成年人">成年人</option>
                </select>
                <span class="label special">年级</span>
                <select class="select f-select" id="userClass" v-model="userClass">
                  <option value="文科">文科</option>
                  <option value="理科">理科</option>
                  <option value="无">无</option>
                </select>
                <span class="label special">科别</span>
                <div class="p-tip">
                  <img src="../../assets/user/xing.png">
                </div>
              </div>
            </div>
            <!--学校所在省、市、区，学校名称-->

            <!--出生年月日-->
            <div class="in">
              <div class="in-label">出生年月日:</div>
              <div class="in-text">
                <select class="select s-select" v-model="year" @change="getDay">
                  <option v-for="year in years">{{year}}</option>
                </select>
                <span class="label">年</span>
                <select class="select s-select" v-model="month" @change="getDay">
                  <option v-for="month in months">{{month}}</option>
                </select>
                <span class="label">月</span>
                <select class="select s-select" v-model="day">
                  <option v-for="day in days">{{day}}</option>
                </select>
                <span class="label">日</span>
              </div>
              <div class="p-tip">
                <img src="../../assets/user/xing.png">
              </div>
            </div>
            <!--出生年月日-->

            <!--手机号-->
            <div class="in">
              <div class="in-label">手机号:</div>
              <div class="in-text">
                <input type="number" class="text" placeholder="" v-model="phone">
              </div>
              <div class="p-tip">
                <img src="../../assets/user/xing.png">
              </div>
            </div>
            <!--手机号-->

            <div class="grey-bg">

              <!--父亲姓名-->
              <div class="in m-in">
                <div class="in-label">父亲姓名:</div>
                <div class="in-text">
                  <input type="text" class="text" placeholder="" v-model="fa_name">
                </div>
              </div>
              <!--父亲姓名-->

              <!--母亲姓名-->
              <div class="in m-in">
                <div class="in-label">母亲姓名:</div>
                <div class="in-text">
                  <input type="text" class="text" placeholder="" v-model="mo_name">
                </div>
              </div>
              <!--母亲姓名-->

              <!--年龄-->
              <div class="in m-in">
                <div class="in-label">年龄:</div>
                <div class="in-text">
                  <input type="text" class="text" placeholder="" v-model="fa_age">
                </div>
              </div>
              <!--年龄-->

              <!--年龄-->
              <div class="in m-in">
                <div class="in-label">年龄:</div>
                <div class="in-text">
                  <input type="text" class="text" placeholder="" v-model="mo_age">
                </div>
              </div>
              <!--年龄-->

              <!--工作岗位-->
              <div class="in m-in">
                <div class="in-label">工作岗位:</div>
                <div class="in-text">
                  <select class="select" v-model="fa_job">
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
              </div>
              <!--工作岗位-->

              <!--工作岗位-->
              <div class="in m-in">
                <div class="in-label">工作岗位:</div>
                <div class="in-text">
                  <select class="select" v-model="mo_job">
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
              </div>
              <!--工作岗位-->

              <!--收入-->
              <div class="in m-in">
                <div class="in-label">收入:</div>
                <div class="in-text">
                  <select class="select" v-model="fa_salary">
                    <option value="2000以下">2000以下</option>
                    <option value="2000-4000">2000-4000</option>
                    <option value="4000-8000">4000-8000</option>
                    <option value="8000-10000">8000-10000</option>
                    <option value="10000-20000">10000-20000</option>
                    <option value="20000以上">20000以上</option>
                  </select>
                </div>
              </div>
              <!--收入-->

              <!--收入-->
              <div class="in m-in">
                <div class="in-label">收入:</div>
                <div class="in-text">
                  <select class="select" v-model="mo_salary">
                    <option value="2000以下">2000以下</option>
                    <option value="2000-4000">2000-4000</option>
                    <option value="4000-8000">4000-8000</option>
                    <option value="8000-10000">8000-10000</option>
                    <option value="10000-20000">10000-20000</option>
                    <option value="20000以上">20000以上</option>
                  </select>
                </div>
              </div>
              <!--收入-->

            </div>

            <div class="password-tip">
              注：<img src="../../assets/user/xing.png">号为必填项。
            </div>

            <div class="submit">
              <button type="button" class="d-relative">
                <router-link class="full-cover-link" to="/"></router-link>
                返回首页
              </button>
              <button type="button" @click="submit">下一步</button>
            </div>

          </div>

        </div>

      </div>
    </div>

  </div>
</template>

<script>
  import FooterEl from '../../components/FooterEl';
  export default{
    data(){
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
    beforeMount(){
      this.getProvince();
    },
    mounted(){
      this.getUserInfo();
//      this.getProvince();
      for (var i = 2018; i > 1900; i--) {
        this.years.push(i);
      }
      for (var i = 1; i < 13; i++) {
        this.months.push(i);
      }
    },
    components: {
      FooterEl
    },
    methods: {
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
            console.log(data);
            $('.radio').removeClass('active');
            $('.radio').each(function (index, val) {
              if ($(this).text() == _this.sex) {
                $(this).addClass('active');
              }
            });


            setTimeout(function () {
              _this.getCities();
            }, 200)
            setTimeout(function () {
              _this.getXian();
            }, 500)
            _this.getDay();
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

        if (!this.realname) {
          this.layerMsg('请填写真实姓名');
          return false;
        }

        if (!this.idcard) {
          this.layerMsg('请填写身份证号');
          return false;
        }

        if (!this.province) {
          this.layerMsg('请选择学校所在省份');
          return false;
        }

        if (!this.city) {
          this.layerMsg('请选择学校所在城市');
          return false;
        }

        if (!this.region) {
          this.layerMsg('请选择学校所在区县');
          return false;
        }

        if (!this.school) {
          this.layerMsg('请填写学校名称');
          return false;
        }

        if (!this.grade) {
          this.layerMsg('请填写年级');
          return false;
        }

        if (!this.userClass) {
          this.layerMsg('请填写科别');
          return false;
        }

        if (!this.year) {
          this.layerMsg('请选择出生年份');
          return false;
        }

        if (!this.month) {
          this.layerMsg('请选择出生月份');
          return false;
        }

        if (!this.day) {
          this.layerMsg('请选择出生日期');
          return false;
        }

        if (!this.isPoneAvailable(this.phone)) {
          this.layerMsg('请填写正确的手机号');
          return false;
        }


        this.sex = $('.radio.active').text();
//        var province = $('#province').find('option:selected').text();
//        var city = $('#city').find('option:selected').text();
//        var region = $('#region').find('option:selected').text();
        this.$ajax.post("/api/test/user/profile/add", {
            realname: this.realname, //	string	是	真实姓名		luolluo
            idcard: this.idcard, //		string	是	身份证		411325199112017037
            sex: this.sex, //		string	是	性别（男、女）		男
            province: this.province, //		string	是	省份		河南
            city: this.city, //		string	是	市		南阳
            region: this.region, //		string	是	区		宛城区
            school: this.school, //		string	是	学校		南阳理工学院
            year: this.year, //		string	是	年		1991
            month: this.month, //		string	是	月		12
            day: this.day, //		string	是	日		01
            grade: this.grade, //	string	是	年级		3年级
            class: this.userClass, //		string	是	班级		1106
            phone: this.phone, //		string	是	手机
            fa_name: this.fa_name, //	string	否	名字(父亲)		xxx
            fa_age: this.fa_age, //	number	否	年龄(父亲)		50
            fa_job: this.fa_job, //	string	否	职业(父亲)
            fa_salary: this.fa_salary, //	number	否	收入(父亲)
            mo_name: this.mo_name, //	string	否	名字(母亲)
            mo_age: this.mo_age, //	number	否	年龄(母亲)
            mo_job: this.mo_job, //	string	否	工作(母亲)
            mo_salary: this.mo_salary, //	number	否	收入(母亲)
          },
          {
            headers: {
              "token": sessionStorage.getItem('token'),
            }
          },
          {emulateJSON: true}).then(
          function (res) {
            // 请求成功的结果
            console.log(res.data);
            var data = res.data;
            if (data.code == 0) {
              this.layerMsg('个人信息提交成功！');
              // this.isProfileShow = 0;
              this.$router.push('/evlua');
            } else {
              this.layerMsg(data.msg);
            }
          },
          function (res) {
            this.layerMsg('网络错误，请重新提交');
          }
        );
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
            console.log(this.provinces);
          },
          error: function (data) {
            this.layerMsg('网络错误，请重新提交');
          }
        })
      },
      /**
       * 获取市
       */
      getCities: function () {
        var _this = this;
        var province = $('#province').find('option:selected').attr('code');
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
          },
          error: function (data) {
            this.layerMsg('网络错误，请重新提交');
          }
        })
      },

      /**
       * 获取市
       */
      getXian: function () {
        var _this = this;
        var city = $('#city').find('option:selected').attr('code');
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
            // console.log(this.provinces);
          },
          error: function (data) {
            this.layerMsg('网络错误，请重新提交');
          }
        })
      },

      getDay: function () {
        if (this.month == 1 || this.month == 3 || this.month == 5 || this.month == 7 || this.month == 8 || this.month == 10 || this.month == 12) {
          this.getDays(32);
        } else if (this.month == 4 || this.month == 6 || this.month == 9 || this.month == 11) {
          this.getDays(31);
        } else if (this.month == 2 && this.isLeapYear(this.year)) {
          this.getDays(30)
        } else if (this.month == 2 && !this.isLeapYear(this.year)) {
          this.getDays(29);
        }
      },

      getDays: function (m) {
        for (var i = 1; i < m; i++) {
          this.days.push(i);
        }
      },

      isLeapYear: function (year) {
        return (year % 4 == 0) && (year % 100 != 0 || year % 400 == 0);
      },
    }
  }
</script>
