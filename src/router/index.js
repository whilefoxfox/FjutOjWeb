import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  // mode: 'hash',
  routes: [
    {
      path: '/Index',
      alias: '/',
      name: 'Home',
      component: () => import('@/components/views/Home'),
      meta: {
        keepAlive: false
      }
    }, {
      path: '/Login',
      name: 'Login',
      component: () => import('@/components/views/Login'),
      meta: {
        keepAlive: false
      }
    }, {
      path: '/Register',
      name: 'Register',
      component: () => import('@/components/views/Register'),
      meta: {
        keepAlive: false
      }
    }, {
      path: '/Problem',
      name: 'Problem',
      component: () => import('@/components/views/Problem'),
      meta: {
        keepAlive: true
      }
    }, {
      path: '/Submit',
      name: 'Submit',
      component: () => import('@/components/views/Submit'),
      meta: {
        keepAlive: false
      }
    }, {
      path: '/Mall',
      name: 'Mall',
      component: () => import('@/components/views/Mall'),
      meta: {
        keepAlive: false
      }
    }, {
      path: '/User',
      name: 'User',
      component: () => import('@/components/views/User'),
      meta: {
        keepAlive: false
      }
    }, {
      path: '/Challenge',
      name: 'Challenge',
      component: () => import('@/components/views/Challenge'),
      meta: {
        keepAlive: false
      }
    }, {
      path: '/ChallengeBlock',
      name: 'ChallengeBlock',
      component: () => import('@/components/views/ChallengeBlock'),
      meta: {
        keepAlive: false
      }
    }, {
      path: '/Status',
      name: 'Status',
      component: () => import('@/components/views/Status'),
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/Chat',
      name: 'Chat',
      component: () => import('@/components/views/Chat'),
      meta: {
        keepAlive: false
      }
    },
    {
      path: '/Contest',
      name: 'Contest',
      component: () => import('@/components/views/Contest'),
      meta: {
        keepAlive: false
      }
    },
    {
      path: '/ContestSignUp',
      name: 'ContestSignUp',
      component: () => import('@/components/views/ContestSignUp'),
      meta: {
        keepAlive: false
      }
    },
    {
      path: '/ContestInfo',
      name: 'ContestInfo',
      component: () => import('@/components/views/ContestInfo'),
      meta: {
        keepAlive: false
      }
    },
    {
      path: '/Admin',
      name: 'Admin',
      component: () => import('@/components/views/Admin'),
      meta: {
        keepAlive: false
      }
    },
    {
      path: '/CodeView',
      name: 'CodeView',
      component: () => import('@/components/views/CodeView'),
      meta: {
        keepAlive: false
      }
    },
    {
      path: '/MainRank',
      name: 'MainRank',
      component: () => import('@/components/views/MainRank'),
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/HonorRank',
      name: 'HonorRank',
      component: () => import('@/components/views/HonorRank'),
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/Discuss',
      name: 'Discuss',
      component: () => import('@/components/views/Discuss'),
      meta: {
        keepAlive: false
      }
    },
    {
      path: '/EditUser',
      name: 'EditUser',
      component: () => import('@/components/views/EditUser'),
      meta: {
        keepAlive: false
      }
    },
    {
      path: '/ClockIn',
      name: 'ClockIn',
      component: () => import('@/components/views/ClockIn'),
      meta: {
        keepAlive: false
      }
    },
    {
      path: '/Message',
      name: 'Message',
      component: () => import('@/components/views/Message'),
      meta: {
        keepAlive: false
      }
    },
    {
      path: '/Verify',
      name: 'Verify',
      component: () => import('@/components/views/Verify'),
      meta: {
        keepAlive: false
      }
    },
    {
      path: '/Test',
      name: 'Test'
    },
    {
      path: '/dianji2',
      name: 'dianji',
      component: () => import('@/components/views/ProductDetail')

    }
  ]
})
