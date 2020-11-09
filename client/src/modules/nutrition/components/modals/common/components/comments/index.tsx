import React, { FC } from "react";
import { Typography, TextareaAutosize } from "@material-ui/core";
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
        <TextareaAutosize
          rowsMax={8}
          rowsMin={6}
          value={comments}
          className={classes.textArea}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default MealComments;
