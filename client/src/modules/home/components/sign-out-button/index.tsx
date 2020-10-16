import React from 'react'
import { logout } from '../../../../redux/auth/actions';
import { Tooltip, IconButton } from "@material-ui/core";
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import { useDispatch } from 'react-redux';




const SignOutButton = () => {
    const dispatch = useDispatch()
    return (
        <Tooltip title="Sign out" >
            <IconButton style={{ height: "36px" }} onClick={() => dispatch(logout)}>
                <PowerSettingsNewIcon />
            </IconButton>
        </Tooltip>
    )
}

export default SignOutButton