import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AuthGuard} from './services/auth.guard';
// import {TabsPage} from './tabs/tabs.page';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadChildren: './home/home.module#HomePageModule'
    },
    {
        path: 'list',
        loadChildren: './list/list.module#ListPageModule'
    },
    {path: 'pwa', loadChildren: './pages/pwa/pwa.module#PwaPageModule'},
    {path: 'login', loadChildren: './pages/login/login.module#LoginPageModule'},
    {
        path: 'member',
        loadChildren: './pages/member/member.module#MemberPageModule',
        canActivate: [AuthGuard],
    },
    // {
    //     path: 'tabs',
    //     component: TabsPage,
    //     children: [
    //         {
    //             path: 'buy-client',
    //             outlet: 'one',
    //             loadChildren: './buy-client/buy-client.module#BuyClientPageModule'
    //         },
    //         {
    //             path: 'explore',
    //             outlet: 'two',
    //             loadChildren: './explore/explore.module#ExplorePageModule'
    //         },
    //         {
    //             path: 'favorite',
    //             outlet: 'three',
    //             loadChildren: './favorite/favorite.module#FavoritePageModule'
    //         }
    //     ]
    // },
    // {
    //     path: '',
    //     redirectTo: '//(one:buy-client)'
    // },
    {path: 'firestore', loadChildren: './pages/firestore/firestore.module#FirestorePageModule'},
    {path: 'firestore-add', loadChildren: './pages/firestore-add/firestore-add.module#FirestoreAddPageModule'},
    {path: 'firestore-edit/:id', loadChildren: './pages/firestore-edit/firestore-edit.module#FirestoreEditPageModule'},
    {path: 'camera', loadChildren: './pages/camera/camera.module#CameraPageModule'},
    {path: 'browser', loadChildren: './pages/browser/browser.module#BrowserPageModule'},
    {path: 'share', loadChildren: './pages/share/share.module#SharePageModule'},
    {path: 'geolocation', loadChildren: './pages/geolocation/geolocation.module#GeolocationPageModule'},
    {path: 'clipboard', loadChildren: './pages/clipboard/clipboard.module#ClipboardPageModule'},
    {path: 'success', loadChildren: './pages/success/success.module#SuccessPageModule'},
    {path: 'getstarted', loadChildren: './pages/getstarted/getstarted.module#GetstartedPageModule'},
    {path: 'httpclient', loadChildren: './pages/httpclient/httpclient.module#HttpclientPageModule'},
    {path: 'register', loadChildren: './register/register.module#RegisterPageModule'},
    {path: 'register-store', loadChildren: './register-store/register-store.module#RegisterStorePageModule'},
    {path: 'register-store-info', loadChildren: './register-store-info/register-store-info.module#RegisterStoreInfoPageModule'},
    {path: 'home-store', loadChildren: './home-store/home-store.module#HomeStorePageModule'},
    {path: 'login-email', loadChildren: './login-email/login-email.module#LoginEmailPageModule'},
    {path: 'phone', loadChildren: './phone/phone.module#PhonePageModule'},
    {path: 'confirm-phone', loadChildren: './confirm-phone/confirm-phone.module#ConfirmPhonePageModule'},
    {path: 'home-client', loadChildren: './pages/home-client/home-client.module#HomeClientPageModule'},
    {path: 'menu', loadChildren: './pages/menu/menu.module#MenuPageModule'},
    {path: 'tabs', loadChildren: './pages/tabs/tabs.module#TabsPageModule'},
    {path: 'trip-detail/:id', loadChildren: './trip-detail/trip-detail.module#TripDetailPageModule'},
    {path: 'profile-store', loadChildren: './profile-store/profile-store.module#ProfileStorePageModule'},
    {path: 'buy-client', loadChildren: './buy-client/buy-client.module#BuyClientPageModule'},
    {path: 'explore', loadChildren: './explore/explore.module#ExplorePageModule'},
    {path: 'favorite', loadChildren: './favorite/favorite.module#FavoritePageModule'},
    {path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule'},
  { path: 'categories', loadChildren: './categories/categories.module#CategoriesPageModule' },


];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
