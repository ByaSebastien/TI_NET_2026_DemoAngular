import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home').then((m) => m.Home),
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about').then((m) => m.About),
  },
  {
    path: 'product',
    loadComponent: () =>
      import('./pages/product-index/product-index').then(
        (m) => m.ProductIndex,
      ),
  },
  {
    path: 'todo',
    loadComponent: () =>
      import('./pages/todo-list/todo-list').then((m) => m.TodoList),
  },
];
