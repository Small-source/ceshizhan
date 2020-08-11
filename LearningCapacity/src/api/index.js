export default {
    //获取个人信息
    user:{
        login:'/login/loginCareerArchives',//登录
        register:'/register/register',//个人注册
        getPhoneNumberByCode:'/register/getPhoneNumberByCode',//个人注册 获取短信验证码
        forgetPasswordPhone:'/login/forgetPasswordByPhone',//忘记密码 获取短信验证码
        forgotPassword:'/login/forgotPassword',//重置密码
        bindCampusCard:'/login/bindCampusCard', //绑定校园卡
        bindPhone:'/login/bindPhoneByCampusCard',//绑定手机号
        setImproveInfo:'/register/improveInfo',//完善个人信息
        getUserInfo:'/login/getUserInfo',//返回个人信息
        sendPhoneCode:'/login/getCodeByPhone',//获取手机验证码
        modifyUserInfo:'/login/modifyUserInfo'//个人中心修改
    }
}
