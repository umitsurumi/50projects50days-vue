import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/day1',
      name: 'day1',
      component: () => import('../views/Day1View.vue')
    },
    {
      path: '/day2',
      name: 'day2',
      component: () => import('../views/Day2View.vue')
    },
    {
      path: '/day3',
      name: 'day3',
      component: () => import('../views/Day3View.vue')
    },
    {
      path: '/day4',
      name: 'day4',
      component: () => import('../views/Day4View.vue')
    },
    {
      path: '/day5',
      name: 'day5',
      component: () => import('../views/Day5View.vue')
    },
    {
      path: '/day6',
      name: 'day6',
      component: () => import('../views/Day6View.vue')
    },
    {
      path: '/day7',
      name: 'day7',
      component: () => import('../views/Day7View.vue')
    },
    {
      path: '/day8',
      name: 'day8',
      component: () => import('../views/Day8View.vue')
    },
    {
      path: '/day9',
      name: 'day9',
      component: () => import('../views/Day9View.vue')
    },
    {
      path: '/day10',
      name: 'day10',
      component: () => import('../views/Day10View.vue')
    },
    {
      path: '/day11',
      name: 'day11',
      component: () => import('../views/Day11View.vue')
    },
    {
      path: '/day12',
      name: 'day12',
      component: () => import('../views/Day12View.vue')
    },
    {
      path: '/day13',
      name: 'day13',
      component: () => import('../views/Day13View.vue')
    },
    {
      path: '/day14',
      name: 'day14',
      component: () => import('../views/Day14View.vue')
    },
    {
      path: '/day15',
      name: 'day15',
      component: () => import('../views/Day15View.vue')
    },
    {
      path: '/day16',
      name: 'day16',
      component: () => import('../views/Day16View.vue')
    },
    {
      path: '/day17',
      name: 'day17',
      component: () => import('../views/Day17View.vue')
    },
    {
      path: '/day18',
      name: 'day18',
      component: () => import('../views/Day18View.vue')
    },
    {
      path: '/day19',
      name: 'day19',
      component: () => import('../views/Day19View.vue')
    },
    {
      path: '/day20',
      name: 'day20',
      component: () => import('../views/Day20View.vue')
    },
    {
      path: '/day21',
      name: 'day21',
      component: () => import('../views/Day21View.vue')
    },
    {
      path: '/day22',
      name: 'day22',
      component: () => import('../views/Day22View.vue')
    },
    {
      path: '/day23',
      name: 'day23',
      component: () => import('../views/Day23View.vue')
    },
    {
      path: '/day24',
      name: 'day24',
      component: () => import('../views/Day24View.vue')
    },
    {
      path: '/day25',
      name: 'day25',
      component: () => import('../views/Day25View.vue')
    },
    {
      path: '/day26',
      name: 'day26',
      component: () => import('../views/Day26View.vue')
    },
    {
      path: '/day27',
      name: 'day27',
      component: () => import('../views/Day27View.vue')
    },
    {
      path: '/day28',
      name: 'day28',
      component: () => import('../views/Day28View.vue')
    },
    {
      path: '/day29',
      name: 'day29',
      component: () => import('../views/Day29View.vue')
    },
    {
      path: '/day30',
      name: 'day30',
      component: () => import('../views/Day30View.vue')
    },
    {
      path: '/day31',
      name: 'day31',
      component: () => import('../views/Day31View.vue')
    },
    {
      path: '/day32',
      name: 'day32',
      component: () => import('../views/Day32View.vue')
    },
    {
      path: '/day33',
      name: 'day33',
      component: () => import('../views/Day33View.vue')
    },
    {
      path: '/day34',
      name: 'day34',
      component: () => import('../views/Day34View.vue')
    },
    {
      path: '/day35',
      name: 'day35',
      component: () => import('../views/Day35View.vue')
    },
    {
      path: '/day36',
      name: 'day36',
      component: () => import('../views/Day36View.vue')
    },
    {
      path: '/day37',
      name: 'day37',
      component: () => import('../views/Day37View.vue')
    },
    {
      path: '/day38',
      name: 'day38',
      component: () => import('../views/Day38View.vue')
    },
    {
      path: '/day39',
      name: 'day39',
      component: () => import('../views/Day39View.vue')
    },
    {
      path: '/day40',
      name: 'day40',
      component: () => import('../views/Day40View.vue')
    },
    {
      path: '/day41',
      name: 'day41',
      component: () => import('../views/Day41View.vue')
    },
    {
      path: '/day42',
      name: 'day42',
      component: () => import('../views/Day42View.vue')
    },
    {
      path: '/day43',
      name: 'day43',
      component: () => import('../views/Day43View.vue')
    },
    {
      path: '/day44',
      name: 'day44',
      component: () => import('../views/Day44View.vue')
    },
    {
      path: '/day45',
      name: 'day45',
      component: () => import('../views/Day45View.vue')
    },
    {
      path: '/day46',
      name: 'day46',
      component: () => import('../views/Day46View.vue')
    },
    {
      path: '/day47',
      name: 'day47',
      component: () => import('../views/Day47View.vue')
    },
    {
      path: '/day48',
      name: 'day48',
      component: () => import('../views/Day48View.vue')
    },
    {
      path: '/day49',
      name: 'day49',
      component: () => import('../views/Day49View.vue')
    },
    {
      path: '/day50',
      name: 'day50',
      component: () => import('../views/Day50View.vue')
    },
  ]
})

export default router
