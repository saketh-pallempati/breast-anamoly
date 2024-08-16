/* eslint-disable react/prop-types */
import './Sidebar.css';

const Sidebar = ({ onSelectMenu }) => {
    const handleClick = (event, menu) => {
        event.preventDefault();
        onSelectMenu(menu);
    };

    return (
        <div className="sidebar-container">
            <aside>
                <p>Menu</p>
                <a href="#" onClick={(event) => handleClick(event, 'Abstract')}>
                    Abstract
                </a>
                <a href="#" onClick={(event) => handleClick(event, 'Dataset')}>
                    Dataset
                </a>
                <a href="#" onClick={(event) => handleClick(event, 'Models')}>
                    Models
                </a>
                <a href="#" onClick={(event) => handleClick(event, 'Upload')}>
                    Upload
                </a>
            </aside>
        </div>
    );
};

export default Sidebar;