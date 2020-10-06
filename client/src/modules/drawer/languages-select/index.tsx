import React, { useState, useEffect } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import languages from "../../../main/languages/languages.json";
import { Typography } from "@material-ui/core";

import { useDispatch, useSelector } from "react-redux";
import * as languagesActions from "../../../redux/languages/actions/languages";

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

  const [open, setOpen] = React.useState(false);
  const [langs, setlangs] = useState<any>();

  const dispatch = useDispatch();
  const languageState = useSelector((state: any) => state.languages);

  useEffect(() => {
    setlangs(renderLangs(languages));
  }, []);

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    const { value } = event.target;
    dispatch(languagesActions.setLanguage(value));
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const renderLangs = (languages: any) => {
    const languagesKeys = Object.keys(languages);

    return languagesKeys.map((lang, i) => {
      return (
        <MenuItem key={`lang_${i}`} value={lang}>
          <Typography style={{ textTransform: "uppercase" }}>{lang}</Typography>
        </MenuItem>
      );
    });
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <Select
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={languageState?.chosenLanguage?.const}
          variant="outlined"
          onChange={handleChange}
          displayEmpty={false}
          style={{ height: "42px" }}
        >
          {langs}
        </Select>
      </FormControl>
    </div>
  );
}
