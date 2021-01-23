/**
 * `components/index.js` exists simply as a 'central export' for our components.
 * This way, we can import all of our components from the same place, rather than
 * having to figure out which file they belong to!
 */
export {default as Navbar} from './navbar'
export {default as UserHome} from './user-home'
export {default as Chart} from './perf-chart'
export {default as ActivityLog} from './activity-log'
export {Login, Signup} from './auth-form'
export {default as HeroStats} from './hero-stats'