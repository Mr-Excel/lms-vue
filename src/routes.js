import Error from '@/views/Error';
import Home from '@/views/Home';
import About from '@/views/About';

export const routes = [
  // Page not found
  { path: '/:pathMatch(.*)*', redirect: { name: 'Error' } },
  { path: '/exception', name: 'Error', component: Error },
  // Login Route
  { path: '/', component: Home },
  // admin Panel Routes
  { path: '/about', component: About },
];
