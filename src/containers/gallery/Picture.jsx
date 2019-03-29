import React from 'react';
import {Card, CardContent} from "@material-ui/core";

const Picture = ({picture, isGreyMode}) => {

    const className = isGreyMode ? 'Picture grey' : 'Picture';
    const url = `https://picsum.photos/300/300?image=${picture.id}`;

    return (
        <Card className={className}>
            <img src={url}/>
            <CardContent>
                <div className="Author-name">{picture.author}</div>
            </CardContent>
        </Card>
    )
};

export default Picture;
