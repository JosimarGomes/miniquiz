import React, { Component } from 'react';
import Login from '../screens/Login';
import { connect } from 'react-redux';

export default HomeHoc = (WrappedComponent)=>{    
    class EnhancedComponent extends Component{
        render(){ 
            const { user } = this.props;
            if( user&&user.name ){
                return <WrappedComponent { ...this.props }/>  
            }
            return <Login />;            
        }
    }
    const mapStateToProps = ({user})=>{
        return{
            user
        }
    }
    return connect(mapStateToProps)(EnhancedComponent);
}