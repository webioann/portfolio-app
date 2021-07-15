import React, { Component } from 'react'
import '../STYLES/Randomuser.scss'

class TableTop extends Component {
    render() {
        return (
            <div className='row table-top'>
                <div className='col-1'></div>
                <div className='col-2'>Full name</div>
                <div className='col-2'>Birthday</div>
                <div className='col-3'>Phone and email</div>
                <div className='col-3'>Location</div>
                <div className='col-1'>Nationality</div>
            </div>
        )
    }
}
export default TableTop; 