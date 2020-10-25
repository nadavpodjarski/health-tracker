import React, { FC } from "react";
import {
  List,
  Typography,
  ListSubheader,
  ListItem,
  Grid,
  makeStyles,
  Theme,
  Paper
} from "@material-ui/core";
import { Meals } from "../../../../types/food";
import ListActionButtons from "../list-action-button";
const useStyles = makeStyles((theme: Theme) => ({
  foodList: {
    backgroundColor: theme.palette.background.paper,
    position: "relative",
    overflow: "auto",
    flex: 1,
    minHeight: 0,
    scrollbarWidth: "none",
    marginBottom: theme.spacing(1)
  },
  listSection: {
    backgroundColor: "inherit",
    fontSize: "22px"
  },
  ul: {
    backgroundColor: "inherit",
    padding: 0
  }
}));

const MealsList: FC<{ isLoading: boolean; meals: Meals }> = ({
  isLoading,
  meals
}) => {
  const classes = useStyles();
  return (
    <List
      className={classes.foodList}
      component={Paper}
      elevation={3}
      subheader={<li />}
    >
      {!isLoading ? (
        <>
          {meals.map((mealsByDate, i) => {
            return (
              <li key={`section-${i}`} className={classes.listSection}>
                <ul className={classes.ul}>
                  <ListSubheader>{`${mealsByDate[0]}`}</ListSubheader>
                  {mealsByDate[1].map((item, i: number) => (
                    <ListItem
                      key={`item-${i}`}
                      component={Grid}
                      container
                      spacing={3}
                    >
                      <Grid item xs={3}>
                        <Typography variant="h6">
                          {item.data.meal.type}
                        </Typography>
                      </Grid>
                      <Grid
                        item
                        xs={6}
                        container
                        style={{ overflowX: "auto", fontSize: "16px" }}
                      >
                        {item.data.meal.components.map((component) => {
                          return (
                            <Grid item xs={6} sm={4}>
                              <Typography noWrap>
                                {` ${component.food} ${component.amount}${component.metric} `}
                              </Typography>
                            </Grid>
                          );
                        })}
                      </Grid>
                      <Grid item xs={2} container justify="center">
                        {item.data.meal.time}
                      </Grid>
                      <Grid item xs={1}>
                        <ListActionButtons />
                      </Grid>
                    </ListItem>
                  ))}
                </ul>
              </li>
            );
          })}
        </>
      ) : (
        <ListItem
          style={{
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          Loading...
        </ListItem>
      )}
    </List>
  );
};

export default MealsList;
