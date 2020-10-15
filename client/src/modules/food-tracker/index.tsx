import React from "react";
import { data } from "./fakeData";

import MainHeader from "../../common/components/tracker-main-header";

import { useModal } from "../../common/hooks/useModal";
import { langs } from "../../main/languages/app-dictionary";

import AddDishModalContent from "./components/modal-content";

import { useSelector } from "react-redux";


import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      backgroundColor: theme.palette.background.paper,
      position: 'relative',
      overflow: 'auto',
      maxHeight: 500,
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

  const classes = useStyles()

  const direction = chosenLanguage?.direction;
  const moduleTitle = langs.foodTracker.mainHeader[chosenLanguage?.const];
  const modalButtonText = langs.foodTracker.modalButton[chosenLanguage?.const];


  return (
    <>
      <div>
        {/*Header*/}
        <MainHeader title={moduleTitle} direction={direction} />
        {/*Body*/}
        <OpenModalButton style={{ fontSize: "24px" }}>
          {modalButtonText}
        </OpenModalButton>

        <List className={classes.root}>
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
