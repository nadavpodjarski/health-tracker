import React from "react";

import MainHeader from "../../common/components/tracker-main-header";
import { useModal } from "../../common/hooks/useModal";
import { dictionary } from "../../main/languages/app-dictionary";

import AddMealModalContent from "./components/modal-content";

import { useSelector } from "react-redux";
import { colors } from '../../main/theme'


import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';

import FilterOptions from './components/filter-options'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    moduleRoot: {
      display: "flex", flexDirection: "column", flex: 1, minHeight: 0
    },
    foodList: {
      backgroundColor: theme.palette.background.paper,
      position: 'relative',
      overflow: 'auto',
      flex: 1,
      minHeight: 0,
      marginBottom: theme.spacing(1)
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
  const [OpenModalButton, handleOpen, AddMealModal] = useModal();

  const classes = useStyles()

  const direction = chosenLanguage?.direction;
  const moduleTitle = dictionary.foodTracker.mainHeader[chosenLanguage?.const];
  const modalButtonText = dictionary.foodTracker.modalButton[chosenLanguage?.const];

  const onStartDateChange = (date: Date | null) => {
    console.log(date)
  }

  const onEndDateChange = (date: Date | null) => {
    console.log(date)
  }


  return (
    <div className={classes.moduleRoot}>
      {/*Header*/}
      <MainHeader title={moduleTitle} direction={direction} />

     {/*Open Modal Button*/}
      <div style={{ display: "flex", alignItems: "flex-start", height: "100px", direction: direction }}>
        <OpenModalButton style={{ fontSize: "24px", background: colors.tourquize, color: "white" }}>
          {modalButtonText}
        </OpenModalButton>
      </div>


      {/*Filter options*/}
      <FilterOptions {...{ onStartDateChange, onEndDateChange, direction }} />


      {/*Food List*/}
      <List className={classes.foodList} component={Paper} elevation={3} subheader={<li />} >
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


      {/*Add Meal Modal*/}      
      <AddMealModal width={1200} >
        <AddMealModalContent direction={direction} handleOpen={handleOpen}  />
      </AddMealModal>
    </div>




  );
};

export default FoodTracker;
