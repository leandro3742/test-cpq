import React from 'react'
import _ from "lodash";

const ReviewComponent = (props) => {

    const showComponent = (elem, name) => {
        let child = []
        let keys = (Object.keys(elem))
        if (keys.length >= 0) {
            if (keys[0] === "component" || keys[0] === "children") {
            }
            else {
                for (let i in elem) {
                    child.push(elem[i].component.value.name)
                }
            }
        }

        return child
    }

    return (
        <div>
            {_.map(props.state, (elem, iterator) => {
                return (
                    <div>
                        <h6>{iterator}</h6>
                        {showComponent(elem, iterator).map((nameComponent) => {
                            return (
                                <div className='d-flex'>
                                    <span>{nameComponent}</span>
                                </div>
                            )
                        })}
                    </div>
                )
            })}
        </div>
    )
}

export default ReviewComponent