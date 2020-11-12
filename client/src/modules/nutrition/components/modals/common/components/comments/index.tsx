import React, { FC } from "react";
import { Typography, TextField } from "@material-ui/core";

const MealComments: FC<{
  onChangeComments: (value: string) => void;
  comments: string;
}> = ({ onChangeComments, comments }) => {
  const onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = event.target;
    onChangeComments(value);
  };

  return (
    <div style={{ paddingTop: "24px" }}>
      <Typography variant="h6" style={{ padding: "12px 0" }}>
        Comments
      </Typography>
      <TextField
        multiline
        rows={2}
        variant="outlined"
        value={comments}
        fullWidth
        onChange={onChange}
      />
    </div>
  );
};

export default MealComments;
