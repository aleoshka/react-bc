import React from 'react';

const ContentItem = (props) => {
    return (
        <div>
            {props.setOfLabels.map((item, index) =>
                <div className="card m-3">
                    <img src={`https://picsum.photos/${200 + index}/100`} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{item.cardTitle}</h5>
                        <p className="card-text">{item.cardText}</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ContentItem;
