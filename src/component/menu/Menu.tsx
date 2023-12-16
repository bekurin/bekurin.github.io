
import { PanelMenu } from 'primereact/panelmenu';
import styles from './Menu.module.css'

const Menu = () => {
    const items = [
        {
            label:'File',
            items:[
                {
                    label:'Delete',
                    icon:'pi pi-fw pi-trash'
                },
                {
                    label:'Export',
                    icon:'pi pi-fw pi-external-link'
                }
            ]
        },
        {
            label:'Edit',
            items:[
                {
                    label:'Left',
                    icon:'pi pi-fw pi-align-left'
                }
            ]
        }
    ];

    return (
        <div>
            <PanelMenu model={items} />
        </div>
    )
}

export default Menu