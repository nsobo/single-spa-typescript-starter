import * as serviceWorker from './serviceWorker';
import { registerApplication } from 'single-spa';
import { start } from 'single-spa';
import * as  Activity from './activityFns'


registerApplication('navbar',() => import('./navbar/navbarApp-lifecycle'),  Activity.navbar);
registerApplication('app1',() => import('./apps/app1/app1-lifecycle'), Activity.app1);
registerApplication('app2',() => import('./apps/app2/app2-lifecycle'), Activity.app2);

start();
serviceWorker.unregister();
