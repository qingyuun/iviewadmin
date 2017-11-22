import Main from '@/views/Main.vue';

// 不作为Main组件的子页面展示的页面单独写，如下
export const loginRouter = {
    path: '/login',
    name: 'login',
    meta: {
        title: 'Login - 登录'
    },
    component: resolve => { require(['@/views/login.vue'], resolve); }
};

export const page404 = {
    path: '/*',
    name: 'error-404',
    meta: {
        title: '404-页面不存在'
    },
    component: resolve => { require(['@/views/error-page/404.vue'], resolve); }
};

export const page403 = {
    path: '/403',
    meta: {
        title: '403-权限不足'
    },
    name: 'error-403',
    component: resolve => { require(['@//views/error-page/403.vue'], resolve); }
};

export const page500 = {
    path: '/500',
    meta: {
        title: '500-服务端错误'
    },
    name: 'error-500',
    component: resolve => { require(['@/views/error-page/500.vue'], resolve); }
};

export const preview = {
    path: '/preview',
    name: 'preview',
    component: resolve => { require(['@/views/form/article-publish/preview.vue'], resolve); }
};

export const locking = {
    path: '/locking',
    name: 'locking',
    component: resolve => { require(['@/views/main-components/lockscreen/components/locking-page.vue'], resolve); }
};

// 作为Main组件的子页面展示但是不在左侧菜单显示的路由写在otherRouter里
export const otherRouter = {
    path: '/',
    name: 'otherRouter',
    component: Main,
    children: [
        { path: 'home', title: { i18n: 'home' }, name: 'home_index', component: resolve => { require(['@/views/home/home.vue'], resolve); } },
        { path: 'ownspace', title: '个人中心', name: 'ownspace_index', component: resolve => { require(['@/views/own-space/own-space.vue'], resolve); } },
        { path: 'order/:order_id', title: '订单详情', name: 'order_info', component: resolve => { require(['@/views/advanced-router/component/order-info.vue'], resolve); } }, // 用于展示动态路由
        { path: 'shopping', title: '购物详情', name: 'shopping', component: resolve => { require(['@/views/advanced-router/component/shopping-info.vue'], resolve); } }, // 用于展示带参路由
        { path: 'message', title: '消息中心', name: 'message_index', component: resolve => { require(['@/views/message/message.vue'], resolve); } }
    ]
};

// 作为Main组件的子页面展示并且在左侧菜单显示的路由写在appRouter里
export const appRouter = [{
        path: '/home',
        icon: 'home',
        name: 'hom',
        title: '系统首页',
        component: Main,
        children: [
            { path: '#', title: '系统首页', name: 'home_index', component: resolve => { require(['@/views/home/home.vue'], resolve); } }
        ]
    },
    // {
    //     path: '/access',
    //     icon: 'key',
    //     name: 'access',
    //     title: '权限管理',
    //     component: Main,
    //     children: [
    //         { path: 'index', title: '权限管理', name: 'access_index', component: resolve => { require(['@/views/access/access.vue'], resolve); } }
    //     ]
    // },
    // {
    //     path: '/access-test',
    //     icon: 'lock-combination',
    //     title: '权限测试页',
    //     name: 'accesstest',
    //     access: 0,
    //     component: Main,
    //     children: [
    //         { path: 'index', title: '权限测试页', name: 'accesstest_index' }
    //     ]
    // },
    // {
    //     path: '/international',//多语言设置
    //     icon: 'earth',
    //     title: {i18n: 'international'},
    //     name: 'international',
    //     component: Main,
    //     children: [
    //         { path: 'index', title: {i18n: 'international'}, name: 'international_index', component: resolve => { require(['@/views/international/international.vue'], resolve); } }
    //     ]
    // },
    {
        path: '/LawyerCase',
        icon: 'plus-circled',
        name: 'LawyerCase',
        title: '业务办理',
        component: Main,
        children: [{
                path: 'case_check',
                icon: 'checkmark',
                name: 'case_check',
                title: '案件预检',
                component: resolve => { require(['@/views/case/lawyer/check.vue'], resolve); }
            },
            {
                path: 'case_add',
                icon: 'plus',
                name: 'case_add',
                title: '添加案件',
                component: resolve => { require(['@/views/case/lawyer/add.vue'], resolve); }
            },
            {
                path: 'case_manage',
                icon: 'grid',
                name: 'case_manage',
                title: '案件管理',
                component: resolve => { require(['@/views/case/lawyer/manage.vue'], resolve); }
            },
            {
                path: 'case_applyend',
                icon: 'pound',
                name: 'case_applyend',
                title: '申请结案',
                component: resolve => { require(['@/views/case/lawyer/end.vue'], resolve); }
            }
        ]
    },
    {
        path: '/ManagerCase',
        icon: 'plus-circled',
        name: 'ManagerCase',
        title: '案件管理',
        component: Main,
        children: [{
                path: 'case_check',
                icon: 'checkmark',
                name: 'case_check',
                title: '案件预检',
                component: resolve => { require(['@/views/case/manager/check.vue'], resolve); }
            },
            {
                path: 'case_pass',
                icon: 'checkmark-circled',
                name: 'case_pass',
                title: '审批管理',
                component: resolve => { require(['@/views/my-components/area-linkage/area-linkage.vue'], resolve); }
            },
            {
                path: 'case_sign',
                icon: 'ios-pricetag',
                name: 'case_sign',
                title: '盖章管理',
                component: resolve => { require(['@/views/my-components/file-upload/file-upload.vue'], resolve); }
            },
            {
                path: 'case_supplemental',
                icon: 'archive',
                name: 'case_supplemental',
                title: '补充案件材料',
                component: resolve => { require(['@/views/my-components/count-to/count-to.vue'], resolve); }
            },
            {
                path: 'casee_contractArchiving',
                icon: 'android-archive',
                name: 'casee_contractArchiving',
                title: '合同归档管理',
                component: resolve => { require(['@/views/my-components/count-to/count-to.vue'], resolve); }
            },
            {
                path: 'count-to',
                icon: 'pound',
                name: 'count-to',
                title: '结案管理',
                component: resolve => { require(['@/views/my-components/count-to/count-to.vue'], resolve); }
            },
            {
                path: 'count-to',
                icon: 'archive',
                name: 'count-to',
                title: '归档管理',
                component: resolve => { require(['@/views/my-components/count-to/count-to.vue'], resolve); }
            },
            {
                path: 'count-to',
                icon: 'arrow-swap',
                name: 'count-to',
                title: '案件转移',
                component: resolve => { require(['@/views/my-components/count-to/count-to.vue'], resolve); }
            }
        ]
    },
    {
        path: '/client',
        icon: 'key',
        name: 'client',
        title: '客户管理',
        component: Main,
        children: [
            { path: 'client', title: '客户管理', name: 'client', component: resolve => { require(['@/views/access/access.vue'], resolve); } }
        ]
    },
    {
        path: '/ContactsList',
        icon: 'key',
        name: 'ContactsList',
        title: '用户通讯录',
        component: Main,
        children: [
            { path: 'ContactsList', title: '用户通讯录', name: 'ContactsList', component: resolve => { require(['@/views/access/access.vue'], resolve); } }
        ]
    },
    {
        path: '/BulletinList',
        icon: 'key',
        name: 'BulletinList',
        title: '公告列表',
        component: Main,
        children: [
            { path: 'BulletinList', title: '公告列表', name: 'BulletinList', component: resolve => { require(['@/views/access/access.vue'], resolve); } }
        ]
    },
    {
        path: '/ContactsList',
        icon: 'key',
        name: 'ContactsList',
        title: '文书模板',
        component: Main,
        children: [
            { path: 'ContactsList', title: '文书模板', name: 'ContactsList', component: resolve => { require(['@/views/access/access.vue'], resolve); } }
        ]
    },
    // {
    //     path: '/form',
    //     icon: 'android-checkbox',
    //     name: 'form',
    //     title: '客户管理',
    //     component: Main,
    //     children: [
    //         { path: 'artical-publish', title: '文章发布', name: 'artical-publish', icon: 'compose', component: resolve => { require(['@/views/form/article-publish/article-publish.vue'], resolve); } },
    //         { path: 'workflow', title: '工作流', name: 'workflow', icon: 'arrow-swap', component: resolve => { require(['@/views/form/work-flow/work-flow.vue'], resolve); } }

    //     ]
    // },
    // {
    //     path: '/charts',
    //     icon: 'ios-analytics',
    //     name: 'charts',
    //     title: '图表',
    //     component: Main,
    //     children: [
    //         { path: 'pie', title: '饼状图', name: 'pie', icon: 'ios-pie', component: resolve => { require('@/views/access/access.vue') },
    //         { path: 'histogram', title: '柱状图', name: 'histogram', icon: 'stats-bars', component: resolve => { require('@/views/access/access.vue') }

    //     ]
    // },
    {
        path: '/user',
        icon: 'ios-grid-view',
        name: 'user',
        title: '用户管理',
        component: Main,
        children: [
            { path: 'dragableTable', title: '可拖拽排序', name: 'dragable-table', icon: 'arrow-move', component: resolve => { require(['@/views/tables/dragable-table.vue'], resolve); } },
            { path: 'editableTable', title: '可编辑表格', name: 'editable-table', icon: 'edit', component: resolve => { require(['@/views/tables/editable-table.vue'], resolve); } },
            { path: 'searchableTable', title: '可搜索表格', name: 'searchable-table', icon: 'search', component: resolve => { require(['@/views/tables/searchable-table.vue'], resolve); } },
            { path: 'exportableTable', title: '表格导出数据', name: 'exportable-table', icon: 'code-download', component: resolve => { require(['@/views/tables/exportable-table.vue'], resolve); } },
            { path: 'table2image', title: '表格转图片', name: 'table-to-image', icon: 'images', component: resolve => { require(['@/views/tables/table-to-image.vue'], resolve); } }
        ]
    },
    {
        path: '/advanced-router',
        icon: 'ios-infinite',
        name: 'advanced-router',
        title: '高级路由',
        component: Main,
        children: [
            { path: 'mutative-router', title: '动态路由', name: 'mutative-router', icon: 'link', component: resolve => { require(['@/views/advanced-router/mutative-router.vue'], resolve); } },
            { path: 'argument-page', title: '带参页面', name: 'argument-page', icon: 'android-send', component: resolve => { require(['@/views/advanced-router/argument-page.vue'], resolve); } }
        ]
    },
    {
        path: '/error-page',
        icon: 'android-sad',
        title: '错误页面',
        name: 'errorpage',
        component: Main,
        children: [
            { path: 'index', title: '错误页面', name: 'errorpage_index', component: resolve => { require(['@/views/error-page/error-page.vue'], resolve); } }
        ]
    },
    {
        path: '/help',
        icon: 'help-circled',
        title: '帮助中心',
        name: 'help',
        component: Main,
        children: [
            { path: 'help', title: '帮助中心', name: 'help', component: resolve => { require(['@/views/error-page/error-page.vue'], resolve); } }
        ]
    }
];

// 所有上面定义的路由都要写在下面的routers里
export const routers = [
    loginRouter,
    otherRouter,
    preview,
    locking,
    ...appRouter,
    page500,
    page403,
    page404
];