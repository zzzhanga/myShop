<template>
	   <section class="loginContainer">
	     <div class="loginInner">
	       <div class="login_header">
	         <h2 class="login_logo">硅谷外卖</h2>
	         <div class="login_header_title">
	           <a href="javascript:;"   :class="{on:isWay}"  @click='isWay=true' >短信登录</a>
	           <a href="javascript:;"  :class="{on:!isWay}" @click='isWay=false'>密码登录</a>
	         </div>
	       </div>
	       <div class="login_content">
	         <form>
	           <div     :class="{on:isWay}">
	             <section class="login_message">
	               <input type="tel" maxlength="11" placeholder="手机号"  v-model="phone">
	               <button :disabled="!isRightPhone" class="get_verification" 
                 :class="{black:isRightPhone}"
                 @click.prevent='getCode'> {{computedTime>0 ?`还剩${computedTime}s`:'获取验证码'}}  </button>
	             </section>
	             <section class="login_verification">
	               <input type="tel" maxlength="8" placeholder="验证码"   v-model="code">
	             </section>
	             <section class="login_hint">
	               温馨提示：未注册硅谷外卖帐号的手机号，登录时将自动注册，且代表已同意
	               <a href="javascript:;">《用户服务协议》</a>
	             </section>
	           </div>
	           <div   :class="{on:!isWay}" >
	             <section>
	               <section class="login_message">
	                 <input type="tel" maxlength="11" placeholder="手机/邮箱/用户"
                   v-model="name"
                   >
	               </section>
	               <section class="login_verification">
	                 <input type="password" maxlength="8" placeholder="密码"  v-model='pwd'
                   v-if='!isrightPwd'
                   >
                     <input type="text" maxlength="8" placeholder="密码"  v-model='pwd'
                     v-else
                     >
	                 <div class="switch_button" 
                   :class="isrightPwd?'on':'off'"
                    @click="isrightPwd=!isrightPwd">
	                   <div class="switch_circle"
                     :class="{right:isrightPwd}"
                     
                     ></div>
	                   <span class="switch_text"> {{isrightPwd?'abc':'...'}}</span>
	                 </div>
	               </section>
	               <section class="login_message">
	                 <input type="text" maxlength="11" placeholder="验证码" v-model="captcha">
	                 <img class="get_verification" src="http://localhost:4000/captcha" alt="captcha"   @click='getCaptcha'>
	               </section>
	             </section>
	           </div>
	           <button class="login_submit"   @click.prevent='login'>登录</button>
	         </form>
	         <a href="javascript:;" class="about_us">关于我们</a>
	       </div>
	       <a href="javascript:" class="go_back">
	         <i class="iconfont icon-jiantou2"></i>
	       </a>
	     </div>


       <AlertTip  :alertText='msg'  v-show='showAlert'
       @closeTip='closeTip'
       ></AlertTip>
  
	   </section>
</template>

<script>

import {reqPwdLogin,reqSendCode,reqSmsLogin} from '../../api/index'
// import { MessageBox } from 'mint-ui';
import  AlertTip from '../../components/AlertTip/AlertTip'

export default {
	props: {

	},
	data() {
		return {
      isWay:true,  //   切换手机号登陆还是账号密码登录  true 表示手机登录  false 表示密码登录
      phone:'',//手机号
      code:'',//手机号短信验证码
      name:'',//用户名
      pwd:'',//用户名密码
      captcha:'',//图形验证码

      computedTime:0,//计算时间
      isrightPwd:false,//切换密码是否可以看到
      msg:'',//消息提示
      showAlert:false //控制弹框打开与关闭
      
      



		};
	},
	computed: {
    //判断 是不是输入了正确的手机号码
    isRightPhone() {
      return  /^1\d{10}$/.test(this.phone) 
    }

	},
	created() {

	},
	mounted() {

	},
	watch: {

	},
	methods: {
      // 打开弹框
      showAlt(text) {
          this.showAlert=true
          this.msg=text
      },

      //关闭弹框 
      closeTip() {
         this.showAlert=false
      },


    // 获取手机短信验证码
     async getCode() {
     //先要判断一下倒计时是不是正在运行  如果computedTime==0 表示停止
     if(!this.computedTime) {
      this.computedTime=30
     this.IntervalId=setInterval(() => {
        this.computedTime--
        if(this.computedTime<=0) {
          clearInterval( this.IntervalId)
        }
     }, 1000);
          // 发送ajax请求  获取到验证码
           let result  = await  reqSendCode(this.phone)
          //  if(result.code==0){
          //    console.log(result.msg);
             
          //  }
     }

    },
    //2 获取图形验证码
    getCaptcha(event) {
      // alert('发送')
      //服务器缓存 
     event.target.src="http://localhost:4000/captcha?time="+Date.now()
    },

    //3  登录提交事件功能开发 
     async login() {


      //  MessageBox('Notice', 'You clicked the button');
      let result
      //3.1  先要判断登录方式 
      let {isWay,phone,code}=this
      if(isWay) { //  表示手机号登录

      if(!phone) {
        // alert('手机号不能为空')
        this.showAlt('手机号不对')
        return 
      } 
      if(!code) {
       this.showAlt('验证码不对')
        return
      }
      //异步发送   同步发送
       result =  await reqSmsLogin(phone,code)
      //拿到结果过存储到vuex里面
    //  console.log(result);
      }else { //  用户名密码登录

      let {name,pwd,captcha}=this
      if(!name) {
       this.showAlt('用户名不对')
        return 
      } 
      if(!pwd) {
        this.showAlt('密码不对')
        return 
      } 
      if(!captcha) {
        this.showAlt('图形验证码不对')
        return 
      } 

      result =  await reqPwdLogin({name, pwd, captcha})
      //拿到结果过存储到vuex里面
    //  console.log(result);
      }
      if(result.code==0) {
      //获取到结果后的后续处理
         let user =result.data 
        //  注意单词拼写
         this.$store.dispatch('recordUser', user)  // 剩下的就是vuex 那一套 
       this.$router.replace('/profile')
         
      }

       
    }

	},
	components: {

    AlertTip

	},
};
</script>

<style scoped  lang='stylus'>
 .loginContainer
      width 100%
      height 100%
      background #fff
      .loginInner
        padding-top 60px
        width 80%
        margin 0 auto
        .login_header
          .login_logo
            font-size 40px
            font-weight bold
            color #02a774
            text-align center
          .login_header_title
            padding-top 40px
            text-align center
            >a
              color #333
              font-size 14px
              padding-bottom 4px
              &:first-child
                margin-right 40px
              &.on
                color #02a774
                font-weight 700
                border-bottom 2px solid #02a774
        .login_content
          >form
            >div
              display none
              &.on
                display block
              input
                width 100%
                height 100%
                padding-left 10px
                box-sizing border-box
                border 1px solid #ddd
                border-radius 4px
                outline 0
                font 400 14px Arial
                &:focus
                  border 1px solid #02a774
              .login_message
                position relative
                margin-top 16px
                height 48px
                font-size 14px
                background #fff
                .get_verification
                  position absolute
                  top 50%
                  right 10px
                  transform translateY(-50%)
                  border 0
                  color #ccc
                  font-size 14px
                  background transparent
                  &.black
                    color black
              .login_verification
                position relative
                margin-top 16px
                height 48px
                font-size 14px
                background #fff
                .switch_button
                  font-size 12px
                  border 1px solid #ddd
                  border-radius 8px
                  transition background-color .3s,border-color .3s
                  padding 0 6px
                  width 30px
                  height 16px
                  line-height 16px
                  color #fff
                  position absolute
                  top 50%
                  right 10px
                  transform translateY(-50%)
                  &.off
                    background #fff
                    .switch_text
                      float right
                      color #ddd
                  &.on
                    background #02a774
                  >.switch_circle
                    //transform translateX(27px)
                    position absolute
                    top -1px
                    left -1px
                    width 16px
                    height 16px
                    border 1px solid #ddd
                    border-radius 50%
                    background #fff
                    box-shadow 0 2px 4px 0 rgba(0,0,0,.1)
                    transition transform .3s
                    &.right 
                      transform translateX(27px)

              .login_hint
                margin-top 12px
                color #999
                font-size 14px
                line-height 20px
                >a
                  color #02a774
            .login_submit
              display block
              width 100%
              height 42px
              margin-top 30px
              border-radius 4px
              background #4cd96f
              color #fff
              text-align center
              font-size 16px
              line-height 42px
              border 0
          .about_us
            display block
            font-size 12px
            margin-top 20px
            text-align center
            color #999
        .go_back
          position absolute
          top 5px
          left 5px
          width 30px
          height 30px
          >.iconfont
            font-size 20px
            color #999
</style>
