import React,{Component} from 'react';
import {Sidebar} from "primereact/sidebar";
import {Button} from "primereact/button";
import SidebarItem from "../../components/sidebaritem/sidebaritem.js";
import en from "../../en.json";

export default class SideBar extends Component {
    constructor() {
        super();
        this.state = {
            visible: false
        };
    }

    render() { 
        return(
            <div>
            <Sidebar visible={this.state.visible} onHide={(e) => this.setState({visible:false})}>
           <SidebarItem  label={en.HOME}></SidebarItem>
           <SidebarItem  label={en.SETTINGS}></SidebarItem>
        </Sidebar>
        
        <Button icon="pi pi-arrow-right" onClick={(e) => this.setState({visible:true})}/>
      
        </div>
    ) }
}