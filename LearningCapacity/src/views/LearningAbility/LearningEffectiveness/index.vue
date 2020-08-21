<template>
  <div class="pc-page">
    <div class="test_main test_main_2">
      <Nav></Nav>
      <div class="test_test clearfix">
        <div class="test_test_l">
          <div class="titbox center">
            <h4 class="cn_tit">学习效力</h4>
            <h6 class="en_tit">learning effectiveness</h6>
          </div>
          <div class="desc">
            <p>学习效力指的是如何有效地学习。学习效力主要由方法效力和风格效力组成。其中，方法效力指的是学习策略，风格效力指的是学习风格。</p>
          </div>
          <div class="btngroup test_btngroup">
            <router-link class="btn btn_start" :to="url">开始测评</router-link>
          </div>
        </div>
        <div class="test_test_r">
          <img src="@/assets/newceping/icon_xuexixiaoli.png" alt="" class="img"/>
        </div>
      </div>
      <div class="test_foot test_copy">
        Personality is the individual’s unique behavior or inherent behavioral tendencies formed on the basis<br>
        of certain genetic qualities in the process of adapting to the environment.
      </div>
    </div>
  </div>
</template>

<script>
    import Nav from '../../../components/learningEffectiveness.vue';
  export default{
    data(){
      return {
          url:'/learningAbility/LearningEffectiveness/guide/1'
      }
    },
    components: {Nav},
      created(){
        this.goCreate()
      },
      methods:{
          goCreate() {
              var _this = this;
              var serial_no = this.serial_no;
              this.$ajax.post( this.G_uri+'/test/create',{
                  module:3
              },{
                  headers:{
                      token:window.sessionStorage.getItem('token')
                  }
              })
                  .then(function(res) {
                      if(res.data.code == 0) {
                          var testId=res.data.result.testId
                          var node = res.data.result.node
                          window.sessionStorage.setItem('testId',testId)
                          if(node==0){
                              return
                          }
                          this.$router.push('/learningAbility/LearningEffectiveness/guide/'+node)
                      }else if(res.data.code == 1016) {

                      }
                  }.bind(this))
                  .catch(function(error) {
                      console.log(error)

                  })
          },
      }
  }
</script>

<style scoped>
  .test_test_r{
    transition: .1s;
  }
</style>
