import React from 'react'
import { useParams } from 'react-router'
import { ContentComponent } from '../../components/ContentComponent';

import forGartner1 from './blogs/for-gartner-1.js'

export const BlogPost = () => {
    const { entryId } = useParams();
    //To do: I will add backend capabilities later
    let blog;
    if (entryId === 'for-gartner-1') {
        blog = forGartner1;
    }

    if (blog) {
        return <div className="main">
            <div className='tertiary-gray br-30 p-10 p-b-30'>
                <ContentComponent content={blog}/>
            </div>
        </div>
    }
    return (
        <div>
            <h2>Blog not found...</h2>
        </div>
    )
}
