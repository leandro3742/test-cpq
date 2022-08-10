import React, { useState, useEffect } from 'react';
import { componentController } from '../../features/componentController';
import { setComponent, setComponentDetail, setTopLevel, setConfiguration } from '../../redux/actions/gtt'
import SelectWidget from '../widgets/selectWidget';
import Button from '@mui/material/Button'

const ListCard = (props) => {
    const [portNumber, setPortNumber] = useState(0)
    const [cantPorts, setCantPorts] = useState([])
    const [children, setChildren] = useState([]);
    
    const [componentSelected, setComponentSelected] = useState({});
    const [componentName, setComponentName] = useState("");


    function retChildren (component){
        let ret = []
        for(let i in component.value){                
            if(typeof component.value[i] === "object"){                    
                let aux = component.value[i]
                aux.portNumber = portNumber
                aux.namePort = i
                ret.push(aux)
            }
        }
        return ret
    }
    const handleChange = (event) => {
        if(event.target.name === "Port"){
            setComponentName(event.target.value)
            let auxComponent =  JSON.parse(JSON.stringify(componentController.getComponent(event.target.value)))
            let arrChildren = retChildren(auxComponent)
            for(let i in arrChildren){
                if(children[i] === undefined) arrChildren[i].selected = ""
                else arrChildren[i].selected = children[i]
            }
            setChildren(arrChildren)
            setComponentSelected(auxComponent)
            props.dispatch(setComponentDetail(auxComponent))
            props.dispatch(setConfiguration({nameComponent: props.nameComponent, data: auxComponent, step: props.step}))
            props.dispatch(setComponent({nameReactComponent: "listCard", component: auxComponent, ports: children}))
        }
        else{
            let auxChildren = retChildren(componentSelected)
            for(let i in auxChildren){
                if(auxChildren[i].namePort === event.target.name) auxChildren[i].selected = event.target.value
            }
            setChildren(auxChildren)
            props.dispatch(setComponent({nameReactComponent: "listCard", component: componentSelected, ports: auxChildren, portNumber: portNumber}))
        }
    };
    
    
    useEffect(()=> {
        let aux = [];
        aux.length = props.cantPorts;
        aux.fill("")
        setCantPorts(aux)
        let aux2= JSON.parse(JSON.stringify(props.state))
        if(aux2[portNumber]){
            setComponentSelected(aux2[portNumber].component)
            let arrChildren = retChildren(aux2[portNumber].component)
            for(let i in arrChildren){
                arrChildren.selected = aux2[portNumber].children[i]
            }
            setComponentName(aux2[portNumber].component.value.name)
            setChildren(arrChildren)
        }

        return function cleanUp(){
            setComponentSelected({})
            setChildren([])
            setComponentName("")
        }

    }, [])

    useEffect(() => {
        let aux = JSON.parse(JSON.stringify(props.state))
        if(aux[portNumber]){
            setComponentSelected(aux[portNumber].component)
            if(aux[portNumber].children.length > 0)
                setChildren(aux[portNumber].children)
            else{
                let arrChildren = retChildren(aux[portNumber].component)
                setChildren(arrChildren)
            }
            setComponentName(aux[portNumber].component.value.name)
        }
        else{
            setComponentSelected({})
            setChildren([])
            setComponentName("")
        }
    }, [portNumber, props]);

    return (
        <div className='d-flex justify-content-center'>
            <div style={{width: "75vh", minHeight: "100px"}} className='border p-1 border-2 border-primary'>
                <div>
                    {cantPorts.map((elem, iterator) => {
                        return(
                            <Button key={iterator} 
                                onClick={()=> {
                                    setPortNumber(iterator);
                                    props.dispatch(setTopLevel({portNumber: iterator}))
                                }}>Port {iterator+1}</Button>
                        )
                    })}
                </div>

                <div className='d-flex justify-content-center m-2'>
                    <SelectWidget key={componentName} value={componentName} name="Port" array={props.data} handleChange={handleChange}/>
                </div>

                <div className='d-flex justify-content-center m-2'>
                    {children.map((elem, iterator) => {
                        if(elem.selected === undefined) elem.selected = ""
                        return <SelectWidget key={elem.namePort} value={elem.selected} name={elem.namePort} array={elem.components} handleChange={handleChange}/>
                    })}
                </div>
            </div>
        </div>
    )
};

export default ListCard;
