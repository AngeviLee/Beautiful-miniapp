//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgPath: '/uploads/boy.jpg'
  },

  // 选择图片
  selectImage() {
    var _this = this

    // 调用小程序提供的接口
    wx.chooseImage({
      // 通过success获取选择后的结果并进行预览
      success: (result)=>{
        console.log(result.tempFiles[0].path)
        _this.setData({
          imgPath: result.tempFiles[0].path
        })
      },

    });
  }
})
