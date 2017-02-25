import { Component } from '@angular/core';

@Component({
  selector: 'main-home',
  template: `
  <div class="container">
  <div class="pan_sidenav_overlay"  *ngIf="showToggle==true"></div>
  <md-sidenav-layout>
      <md-sidenav class="Leftsidenav" #start (open)="mybutton.focus()">
          <div class="Manage">
              <div>
                  <i class="material-icons ManageLeftIcon">&#xE051;</i>
                  <span class="ManageText">M A N A G E</span>
                  <i class="material-icons ManageRightIcon" #mybutton (click)="start.close() && toggleClose()">&#xE5C3;</i>
              </div>
          </div>
          <md2-accordion [multiple]="multiple">
            <md2-accordion-tab class="test" *ngFor="let tab of accordions" [header]="tab.title" [active]="tab.active" [disabled]="tab.disabled">
              {{tab.content == 'Items'? '' : tab.content}}
              <ul class="sidenavcontent" *ngIf="tab.content == 'Items'">
                <li><i class="material-icons"></i>Items 700CS</li>
                <li><i class="material-icons"></i>Item BRD-1285</li>
                <li><i class="material-icons"></i>Items Tall Banner 701</li>
                <li><i class="material-icons"></i>Items Install Doc</li>
              </ul>
            </md2-accordion-tab>
          </md2-accordion>
      </md-sidenav>
      <md-sidenav #end align="end">
        End Sidenav.
        <i (click)="end.close()">Close</i>
      </md-sidenav>
      <a class="dropdown-button" (click)="start.toggle() && toggleOpen()">
          <i class="material-icons pan_menuicon">&#xE5D2;</i>
      </a>
    </md-sidenav-layout>
 <my-headers> </my-headers>
 <my-home></my-home>
</div>
    `
})
export class MainHomeComponent {
showToggle:boolean=false;
constructor() {

 }


private accordions: Array<any> = [
    { title: {
                 'label' :'Assets',
                  'icon' : `&#xE87B;`
                  },
        content: ''},
    { title: {
                 'label' :'Items',
                  'icon' : `&#xE8F9;`
                  },
        content: 'Items' },
    { title: {
                 'label' :'Locations',
                  'icon' : `&#xE569;`
                  },
        content: 'Dynamic content 1' },
    { title: {
                 'label' :'Orders',
                  'icon' : `&#xE163;`
                  },
        content: 'Dynamic content 2' },
    { title: {
                 'label' :'Searches',
                  'icon' : `&#xE8B6;`
                  },
        content: 'Dynamic content 1' },
    { title: {
                 'label' :'Catalogs',
                  'icon' : `&#xE865;`
                  },
        content: 'Dynamic content 2' },
    { title: {
                 'label' :'Surveys',
                  'icon' : `&#xE86C;`
                  },
        content: 'Dynamic content 1' },
    { title: {
                 'label' :'Documents',
                  'icon' : `&#xE24D;`
                  },
        content: 'Dynamic content 2' },
    { title: {
                 'label' :'Programs',
                  'icon' : `&#xE02E;`
                  },
        content: 'Dynamic content 1' }

];

toggleOpen(){
    this.showToggle=true;
    console.log("hdfgejkhd");
    $.each($("md2-accordion-tab.test.md2-accordion-tab"),function ( key, value ){
      console.log(key,$.trim($($(value).children('div')[1]).text()));

      if($.trim($($(value).children('div')[1]).text()) == ""){
        $($($(value).children('div')[0]).children('span.md2-accordion-header-icon')).remove();
        $($(value).children('div')[1]).remove();
      }

    });
}
toggleClose(){
    this.showToggle=false;
    console.log("hdfgejfedsfsedfkhd");
}

}
