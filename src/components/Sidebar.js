import React from "react";
import '../styles/sidebar.css';

class Sidebar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="sidebar_main">
                <div className="sidebar_item">
                    <div className="sidebar_item_content">Content 1</div>
                </div>
                <div className="sidebar_item">
                    <div className="sidebar_item_content">Content 2</div>
                </div>
                <div className="sidebar_item">
                    <div className="sidebar_item_content">Content 3</div>
                </div>
                <div className="sidebar_item">
                    <div className="sidebar_item_content">Content 4</div>
                </div>
                <div className="sidebar_item">
                    <div className="sidebar_item_content">Content 5</div>
                </div>
                <div className="sidebar_item">
                    <div className="sidebar_item_content">Content 6</div>
                </div>
                <div className="sidebar_item">
                    <div className="sidebar_item_content">Content 7</div>
                </div>
                <div className="sidebar_item">
                    <div className="sidebar_item_content">Content 8</div>
                </div>

            </div>
        )
    }
}

export default Sidebar;