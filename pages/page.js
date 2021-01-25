import React, {useState, useEffect} from "react";
import {Grid} from "@material-ui/core";
import { withStyles } from '@material-ui/core/styles';

export function Page(props) {
  const {id, options, count, data, classes} = props;
  return <MyWonderfulComponent id={id} options={options} count={count} color={classes} data={data} >I'm text from a component</MyWonderfulComponent>
}

const styles = {
  root: {
    color: 'red',
  },
};

function MyWonderfulComponent(props) {
  const { count, id, options, color} = props;
  const [ summ, setSumm ] = useState(count);
  const [ hello, setHello ] = useState(``);


  useEffect(() => {
    if (id && options.params.fields.isDynamic) {
      setSumm(summ + 1);
      console.log(summ)
    }
  }, [hello, count, id, options, color]);

  fetch('http://localhost:3000/api/hello')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    setHello(data.hello)
  });

  console.log(summ);
  return (
    <Grid>
      <h1 className={color.root}>{hello}</h1>
      <Grid xs={12} item={true}>{props.children}</Grid>
    </Grid>
  );
}
export default withStyles(styles)(Page);