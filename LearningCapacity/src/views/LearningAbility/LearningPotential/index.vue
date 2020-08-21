<template>
  <div class="pc-page">
    <div class="test_main test_main_1">
      <Nav></Nav>
      <div class="test_test clearfix">
        <div class="test_test_l">
          <div class="titbox center">
            <h4 class="cn_tit">学习潜力测试</h4>
            <h6 class="en_tit">learning potential test</h6>
          </div>
          <div class="desc">
            <p>你现在将要进行的是，学习潜力测试，全部测试共9项。</p>
            <p>请按顺序做题，提供练习的题目，需要你先进行练习再正式测试。一旦进入正式测试，程序只记录一遍测试数据，无法更改。</p>
            <p>
              正式测试前认真阅读指导语，根据要求答题。对于要求为“快速且准确”的测试项，你的答题时间会影响测试结果；对于要求为“在保证正确率的情况下快速答题”的测试项，你的答题时间则不会对测试结果造成影响。
            </p>
          </div>
          <div class="btngroup test_btngroup">
            <router-link to="/learningAbility/learningPotential/instru/1" class="btn btn_start">开始测评</router-link>
          </div>
        </div>
        <div class="test_test_r">
          <img src="~@/assets/00.png" alt="" class="img"/>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import Nav from '../../../components/learningPotential.vue';
  export default {
    data() {
      return {}
    },
    components: { Nav },
    mounted() {
    },
    methods:{
        goCreate() {
            var _this = this;
            var serial_no = this.serial_no;
            this.$ajax.post( this.G_uri+'/test/create',{
                module:1
            },{
                headers:{
                    token:window.sessionStorage.getItem('token')
                }
            })
                .then(function(res) {
                    if(res.data.code == 0) {
                        var testId=res.data.result.testId
                        var node = res.data.result.node;
                        window.sessionStorage.setItem('testId',testId)
                        if(node==0){
                            return
                        }
                        this.$router.push('/learningAbility/learningPotential/guide/'+node)

                    }else if(res.data.code == 1016) {

                    }
                }.bind(this))
                .catch(function(error) {
                    console.log(error)

                })
        },
    },
    created() {
        this.goCreate()
    }
  }
</script>

<style>

</style>
