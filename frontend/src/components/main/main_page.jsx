import React from 'react';
// import "../../Stylesheets/main_page.scss";

class MainPage extends React.Component {

    render() {
        return (
            <div className='animation'>
                <div className="container">
                    <span className='bun'>Countless</span> 
                    <div className="flip">
                        <div><div>pasta</div></div>
                        <div><div>chicken</div></div>
                        <div><div>fish</div></div>
                    </div>
                    <span className='bun'>recipes</span> 
                </div>
                    {/* <span>What will you make?</span> */}
            </div>
        );
    }
}

export default MainPage;