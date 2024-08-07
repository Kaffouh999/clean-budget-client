import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { PanelMenuModule } from 'primeng/panelmenu';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [PanelMenuModule,CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnInit {
  @Input() isOpen: boolean = false;
  items: MenuItem[]=[];
  ngOnInit(): void {
    this.items = [
      { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['departements'] },
      {
        label: 'Strtucture', icon: 'pi pi-fw pi-briefcase',
        items: [
          { icon: 'pi pi-fw pi-tag',label: 'Direction', routerLink: 'fournisseurs' },
          { label: 'Employe', icon: 'pi pi-fw pi-tag', routerLink: '/service1' },
          { label: 'Role', icon: 'pi pi-fw pi-tag', routerLink: 'departements' },
        ]
      },
      {
        label: 'Budget', icon: 'pi pi-fw pi-briefcase',
        items: [
          { label: 'Budget Direction', icon: 'pi pi-fw pi-tag', routerLink: '/service3' },
          { label: 'Partition Budget', icon: 'pi pi-fw pi-tag', routerLink: '/service1' },
          { label: 'Ajustement Budget', icon: 'pi pi-fw pi-tag', routerLink: '/service2' }
        ]
      },
      {
        label: 'Demande', icon: 'pi pi-fw pi-users',
        items: [
          { label: 'Parametrage demande', icon: 'pi pi-fw pi-tag', routerLink: '/service2' },
          { label: 'Demande Budget', icon: 'pi pi-fw pi-user', routerLink: '/client1' },
          { label: 'Validation Budget', icon: 'pi pi-fw pi-user', routerLink: '/client2' },
          { label: 'Comptabilisation Budget', icon: 'pi pi-fw pi-user', routerLink: '/client3' }
        ]
      },
      {
        label: 'Depense', icon: 'pi pi-fw pi-users',
        items: [
          { label: 'Parametrage depense', icon: 'pi pi-fw pi-tag', routerLink: '/service2' },
          { label: 'Depense', icon: 'pi pi-fw pi-tag', routerLink: '/service2' },
          { label: 'Justification', icon: 'pi pi-fw pi-user', routerLink: '/client1' },
          { label: 'Validation justification', icon: 'pi pi-fw pi-user', routerLink: '/client2' }
        ]
      },
      { label: 'Documentation', icon: 'pi pi-fw pi-envelope', routerLink: '/contact' }
    ];
  }
  


 
}
