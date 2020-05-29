import React from 'react';
import './getItems.css';
import DeleteIcon from '@material-ui/icons/DeleteForever';
import CheckBox from '@material-ui/core/CheckBox';

function GetItems(props)
{
    const tdlist = props.tdlist;
   // console.log(tdlist);
    const items = tdlist.map(TD =>{

        const text = TD.text.match(/.{1,3}/g);
        const charcters  = text.map(c =>{
            return (<span>{c}<br/></span>);
        });
        return <tbody className = {TD.checked?"list mark":"list notmark"} key={TD.key}>
                 <tr >
                    
                        <td >
                        <CheckBox className="checkbtn" onChange={() => props.markCheck(TD.key)}/>
                        </td>
                        <td  className="text">
                        <span >{TD.text}</span>
                        </td>
                        <td >
                        <span>
                            <DeleteIcon className="deletebtn" onClick={()=>props.deleteItem(TD.key)}/>
                        </span>
                        </td>
                    
                </tr>
        </tbody>
    });
    return (
        

        <div className="mainList"><table >{items}</table></div>
        

    )
}

export default GetItems;