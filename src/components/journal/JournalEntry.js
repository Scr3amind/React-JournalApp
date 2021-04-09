import React from 'react'

export const JournalEntry = () => {
    return (
        <div className="journal__entry pointer">
            <div 
                className="journal__entry-picture"
                style={{
                    backgroundSize: 'cover',
                    backgroundImage: 'url(https://random.imagecdn.app/150/150)'
                }}
            >
            </div>

            <div className="journal__entry-body">
                <p className="journal__entry-title">
                    Un nuevo día
                </p>
                <p className="journal__entry-content">
                    Cupidatat cillum incididunt consectetur et quis quis nisi minim. Eiusmod ad sit sit 
                    aliquip dolor veniam magna fugiat veniam cupidatat nulla nostrud ullamco.
                </p>
            </div>

            <div className="journal__entry-date-box">
                <span>Monday</span>
                <h4>2</h4>

            </div>

        </div>
    )
}
