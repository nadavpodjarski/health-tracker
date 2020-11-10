import React, { FC } from "react";
import { Typography, TextField } from "@material-ui/core";
import { useStyles } from "../../styles";
const MealComments: FC<{
  onChangeComments: (value: string) => void;
  comments: string;
}> = ({ onChangeComments, comments }) => {
  const classes = useStyles();
  const onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = event.target;
    onChangeComments(value);
  };

  return (
    <div style={{ paddingTop: "16px" }}>
      <div style={{ padding: "8px 0" }}>
        <Typography>Comments</Typography>
      </div>
      <div style={{ padding: "16px 0" }}>
        <TextField
          classes={{ root: classes.commentsRoot }}
          multiline
          rows={2}
          variant="outlined"
          value={comments}
          className={classes.comments}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default MealComments;
