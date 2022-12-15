import { reactive } from 'vue'
import { defineStore } from 'pinia'
interface Project {
  day:number;
  title:string;
}

export const useProjectStore = defineStore('projects', () => {
  const projects:Array<Project> = reactive([
    {day:1,title:'expanding-cards'},
    {day:2,title:'progress-steps'},
    {day:3,title:'rotating-nav-animation'},
    {day:4,title:'hidden-search'},
    {day:5,title:'blurry-loading'},
    {day:6,title:'scroll-animation'},
    {day:7,title:'split-landing-page'},
    {day:8,title:'form-input-wave'},
    {day:9,title:'sound-board'},
    {day:10,title:'dad-jokes'},
    {day:11,title:'event-keycodes'},
    {day:12,title:'faq-collapse'},
    {day:13,title:'random-choice-picker'},
    {day:14,title:'animated-navigation'},
    {day:15,title:'incrementing-counter'},
    {day:16,title:'drink-water'},
    {day:17,title:'movie-app'},
    {day:18,title:'background-slider'},
    {day:19,title:'theme-clock'},
    {day:20,title:'button-ripple-effect'},
    {day:21,title:'drag-n-drop'},
    {day:22,title:'kinetic-loader'},
    {day:23,title:'progress-steps'},
    {day:24,title:'content-placeholder'},
    {day:25,title:'sticky-navigation'},
    {day:26,title:'double-vertical-slider'},
    {day:27,title:'toast-notification'},
    {day:28,title:'github-profiles'},
    {day:29,title:'double-click-heart'},
    {day:30,title:'auto-text-effect'},
    {day:31,title:'password-generator'},
    {day:32,title:'good-cheap-fast'},
    {day:33,title:'notes-app'},
    {day:34,title:'animated-countdown'},
    {day:35,title:'image-carousel'},
    {day:36,title:'hoverboard'},
    {day:37,title:'pokedex'},
    {day:38,title:'mobile-tab-navigation'},
    {day:39,title:'password-strength-background'},
    {day:40,title:'3d-boxes-background'},
    {day:41,title:'verify-account-ui'},
    {day:42,title:'live-user-filter'},
    {day:43,title:'feedback-ui-design'},
    {day:44,title:'custom-range-slider'},
    {day:45,title:'netflix-mobile-navigation'},
    {day:46,title:'quiz-app'},
    {day:47,title:'testimonial-box-switcher'},
    {day:48,title:'random-image-generator'},
    {day:49,title:'todo-list'},
    {day:50,title:'insect-catch-game'}
  ])
  return { projects }
})