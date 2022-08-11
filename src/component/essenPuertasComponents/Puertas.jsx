import React, { useEffect, useState } from "react";
import { Navigation } from "../reactComponents/Navigation";
import _ from "lodash";
import SelectWidget from "../widgets/select";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

const Puertas = (props) => {
  const { filtersData, hard, setHard } = props
  const [nav, setNav] = useState("");
  // const [hard, setHard] = useState({});  
  const [steps, setSteps] = useState([])

  const showValue = (dependencies) => {
    let aux = true;
    _.map(dependencies, (elem) => {
      if(!elem.value.includes(hard[elem.key])){
        aux = false
      }
    })
    return aux
  }

  useEffect(() => {
    if(Object.keys(hard).length === 0){
      let aux = {}
      _.each(filtersData, (elem, key) => {
        aux[key] = ''
      })
      setHard(aux)
    }
    let aux = []
    _.each(filtersData, (elem, key) => {
      let isEnabled = false;
      _.each(elem, a => {
        if(showValue(a.dependency))
          isEnabled = true
      })
      aux.push({key: key, enabled: isEnabled})
    })
    setSteps(aux)
  }, [hard, filtersData]);

  const handleChange = (e) => {
    setHard({ ...hard, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <Navigation showDisabled={true} steps={steps} setNav={setNav} />
      {hard[nav] !== undefined &&
        <FormControl fullWidth>
            <InputLabel>{nav}</InputLabel>
            <Select
                value={hard[nav]}
                label={nav}
                name={nav}
                onChange={handleChange}
                style={{height: "50px"}}
            >
                {_.map(filtersData[nav], (value)=> {
                    if(typeof value === 'object'){
                      if(showValue(value.dependency))
                      return(
                        <MenuItem key={value.value} value={value.value}>{value.value}</MenuItem>
                      )
                    }
                    else{
                      return(
                        <MenuItem key={value} value={value}>{value}</MenuItem>
                      )
                    }

                })}
            </Select>
        </FormControl>
      }
    </div>
  );
};

export default Puertas;
