import React from 'react'
import Homepage from './Homepage/Homepage'
import {MuiThemeProvider,createMuiTheme} from '@material-ui/core/styles'
import {CssBaseline} from '@material-ui/core'

const theme =createMuiTheme()

export default function App(){

    return (
        <div data-test="appComponent">
            <MuiThemeProvider theme={theme}>
                <CssBaseline/>
                <Homepage/>
            </MuiThemeProvider> 
        </div>
        
        
    )


}