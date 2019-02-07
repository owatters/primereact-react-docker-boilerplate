import React,{Component} from 'react';
export default class SidebarItem extends Component {

    render() { 
        return(
        <div className={this.props.className}>
          
            <span>{this.props.label}</span>
        </div>
   
    ) }
}