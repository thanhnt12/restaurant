import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

//-------------------------------

import { DasboardComponent } from './dasboard/dasboard.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { DsmonanComponent } from './danhsachmonan/dsmonan.component';
import { RouterModule, Routes } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { LoaimonanComponent } from './loaimonan/loaimonan.component';
import { AdminComponent } from './admin/admin.component';
import { DanhsachnguyenlieuComponent } from './danhsachnguyenlieu/danhsachnguyenlieu.component';
import { NhacungcapComponent } from './nhacungcap/nhacungcap.component';
import { HoadonnhapComponent } from './hoadonnhap/hoadonnhap.component';
import { HoadonbanComponent } from './hoadonban/hoadonban.component';
import { HoadonhuyComponent } from './hoadonhuy/hoadonhuy.component';
import { DanhsachnhanvienComponent } from './danhsachnhanvien/danhsachnhanvien.component';
import { DanhsachnhanvienboibanComponent } from './danhsachnhanvienboiban/danhsachnhanvienboiban.component';
import { ChitiethoadonbanComponent } from './chitiethoadonban/chitiethoadonban.component';
// -------------------------------
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent, children:[
    { path: '', component: DasboardComponent },
    { path: 'dsmonan', component: DsmonanComponent },
    { path: 'loaimonan', component: LoaimonanComponent },
    { path: 'danhsachnguyenlieu', component: DanhsachnguyenlieuComponent },
    { path: 'nhacungcap', component: NhacungcapComponent },
    { path: 'hoadonnhap', component: HoadonnhapComponent },
    { path: 'hoadonban', component: HoadonbanComponent },
    { path: 'hoadonhuy', component: HoadonhuyComponent },
    { path: 'danhsachnhanvien', component: DanhsachnhanvienComponent },
    { path: 'danhsachnhanvienboiban', component: DanhsachnhanvienboibanComponent },
  ]

  },
];

@NgModule({
  declarations: [
    AppComponent,
    DasboardComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    DsmonanComponent,
    LoaimonanComponent,
    AdminComponent,
    DanhsachnguyenlieuComponent,
    NhacungcapComponent,
    HoadonnhapComponent,
    HoadonbanComponent,
    HoadonhuyComponent,
    DanhsachnhanvienComponent,
    DanhsachnhanvienboibanComponent,
    ChitiethoadonbanComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes) ,
    FormsModule,
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '/'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
