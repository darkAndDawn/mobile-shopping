export  default {
    productList: '/product/pagination',//首页精选商品
    productInfo: '/product',//详情页
    like:'/product_like/create',//收藏
    cancelLike:'/product_like/delete',//取消收藏
    login:'/user/signin',//登录
    userInfo:'/user/info',//用户信息
    addCart:'/cart/update',//加入购物车
    getCartData:'/cart/all',//获取购物车
    delCartItem:'/cart/delete',//删除购物车商品
    newAddr:'/user_address/create',//新增用户收货地址
    addrUpdata:'/user_address/update',//修改用户收货地址
    addrDel:'/user_address/delete',//删除用户收货地址
    area:'/data/area',    //获取带地区编码的省份城市区县列表
    create:'/order/create',//下单
    pay:'/order/pay'//付款
}