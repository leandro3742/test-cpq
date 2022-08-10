import { featureController } from "../features/featureController"

export const traslateReduxToJsx = (data) => {
}

const returnReference = (softName, soft, helpState) => {
    if(soft[softName])
        return {number: helpState[softName].port, key: soft[softName].key, father:soft[softName].father}
    return false
}

export const createReference = (helpState, soft, softName) => {
    let exist = true
    let aux = []
    let val = returnReference(softName, soft, helpState);
    while(exist === true){
        if(val === false){
            exist = false;
        }
        else{
            if(typeof val.number === "number")
                aux.unshift(val.number)
            aux.unshift(val.key)
            aux.unshift("ports")
            val = returnReference(val.father, soft, helpState)
        }
    }
    aux.splice(0,1)
    return aux
}

export const createSoft = () => {
    let soft = {}
    let features = featureController.getAllFeature()
    for(let i in features){
        soft[features[i].title] = { key: features[i].title }
        let children = []
        for( let j in features[i].properties.ports){
            children.push(features[i].properties.ports[j].fieldName)
        }
        soft[features[i].title] = { key: features[i].title, children: children }
    }
    for(let i in soft){
        for(let j in soft){
            if(soft[j].children.includes(i))
                soft[i].father = soft[j].key
        }
    }
    return soft
}
