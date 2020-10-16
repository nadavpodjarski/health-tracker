import React, { useState, useEffect } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

import MenuItem from "@material-ui/core/MenuItem";
import { Popover, IconButton, Avatar, Tooltip, Button, Icon } from '@material-ui/core'

import languages from "../languagesMeta.json";
import { Typography } from "@material-ui/core";

import { useDispatch, useSelector } from "react-redux";
import * as languagesActions from "../../../redux/languages/actions";
import { flags } from '../languages-select/flags'


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
  })
);

export default function ControlledOpenSelect() {
  const classes = useStyles();
  const [langs, setlangs] = useState<any>();
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const dispatch = useDispatch();

  const { chosenLanguage } = useSelector((state: any) => state.languages);

  useEffect(() => {
    setlangs(renderLangs(languages));
  }, []);


  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const renderLangs = (languages: any) => {
    const languagesKeys = Object.entries(languages).map(
      (lang: any) => lang[1].const
    );

    return languagesKeys.map((lang, i) => {
      return (
        <MenuItem key={`lang_${i}`} value={lang}>
          <Typography style={{ textTransform: "uppercase" }} onClick={() => {
            dispatch(languagesActions.setLanguage(lang));
            handleClose()
          }} >{lang}</Typography>
        </MenuItem>
      );
    });
  };

  const open = Boolean(anchorEl);

  return (
    <div>
      <Tooltip title="Languages">
        <Avatar src={flags[chosenLanguage.const]} component={Icon} onClick={handleClick} style={{ cursor: "pointer", marginRight: "16px" }} />
      </Tooltip>
      <Popover
        id={"LanguagesMenu"}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        {langs}
      </Popover>
    </div>
  );
}
