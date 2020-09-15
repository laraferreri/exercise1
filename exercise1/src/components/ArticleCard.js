import React from 'react';

function ArticleCard (articleData){
    console.log('articleData',articleData);

    return(
        <div>
            <h2> {articleData.title} </h2>
        </div>
    );
}

export default ArticleCard;

// const coolObject = {
//     key1: '',
//     key2: '',
//     key3: '',
// }

// const {key 1, key 2 } = coolObject;
// counsle.log(key1, key2)