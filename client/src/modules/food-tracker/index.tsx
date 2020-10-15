import React from "react";
import { data } from "./fakeData";

import MainHeader from "../../common/components/tracker-main-header";
import { Typography } from '@material-ui/core'
import { useModal } from "../../common/hooks/useModal";
import { useDatePicker } from '../../common/hooks/useDatePicker'
import { langs } from "../../main/languages/app-dictionary";

import AddDishModalContent from "./components/modal-content";

import { useSelector } from "react-redux";
import { colors } from '../../main/theme'


import { createStyles, Theme, makeStyles, useTheme } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.background.paper,
      position: 'relative',
      overflow: 'auto',
      flex: 1,
      minHeight: 0,
      marginBottom: "16px"
    },
    listSection: {
      backgroundColor: 'inherit',
    },
    ul: {
      backgroundColor: 'inherit',
      padding: 0,
    },
  }),
);



const FoodTracker = () => {
  const { chosenLanguage } = useSelector((state: any) => state?.languages);
  const [OpenModalButton, AddDishModal] = useModal();
  const { DatePicker } = useDatePicker()

  const classes = useStyles()
  const theme = useTheme()

  const direction = chosenLanguage?.direction;
  const moduleTitle = langs.foodTracker.mainHeader[chosenLanguage?.const];
  const modalButtonText = langs.foodTracker.modalButton[chosenLanguage?.const];

  const onStartDateChange = (date: Date | null) => {
    console.log(date)
  }

  const onEndDateChange = (date: Date | null) => {
    console.log(date)
  }


  return (
    <>
      <div style={{ display: "flex", flexDirection: "column", height: `calc( 100% - 64px )` }}>
        {/*Header*/}
        <MainHeader title={moduleTitle} direction={direction} />

        <div style={{ display: "flex", alignItems: "flex-start", height: "100px", direction: direction }}>
          <OpenModalButton style={{ fontSize: "24px", background: colors.tourquize, color: "white" }}>
            {modalButtonText}
          </OpenModalButton>
        </div>


        { /*filter options */}
        <Paper style={{ display: "flex", direction: direction, margin: "16px 0", padding: "0 8px", alignItems: "center" }} elevation={2}>
          <div>
            <DatePicker onChange={onStartDateChange} label="From" />
          </div>
          <div style={{ padding: "0 24px" }}>
            <DatePicker onChange={onEndDateChange} label="To" />
          </div>
        </Paper>


        <List className={classes.root} component={Paper} elevation={4} subheader={<li />} >
          {[0, 1, 2, 3, 4].map((sectionId) => (
            <li key={`section-${sectionId}`} className={classes.listSection}>
              <ul className={classes.ul}>
                <ListSubheader>{`I'm sticky ${sectionId}`}</ListSubheader>
                {[0, 1, 2].map((item) => (
                  <ListItem key={`item-${sectionId}-${item}`}>
                    <ListItemText primary={`Item ${item}`} />
                  </ListItem>
                ))}
              </ul>
            </li>
          ))}
        </List>
      </div>

      {/*Add Dish Modal*/}
      <AddDishModal>
        <AddDishModalContent direction={direction} />
      </AddDishModal>

    </>
  );
};

export default FoodTracker;
