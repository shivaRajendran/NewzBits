import React from 'react';

function ExportList(props){
    function linkClick(){
        localStorage.setItem('lastReq', props.operation);
            props.onClick({
                operation: props.operation,
                value: props.value
            });
    }
    return (<li value={props.displayName} onClick = {linkClick} data-text={props.displayName}>{props.displayName}</li>)
}

function ExportNewsList(props){
    function onNewsClick(){
        props.onClicked({
            id: props.id,
            title: props.title
        });
    }
    return <li onClick={onNewsClick}>{props.title}</li>
}

export {ExportList, ExportNewsList};