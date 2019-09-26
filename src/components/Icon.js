import React from 'react';

const Icon = props => (
    <div>
        {
            props.icon != null && <div><img className="current-weather-icon" alt="icon" src={props.getIcon} />{props.icon}</div>
        }
    </div>
)

// class Icon extends React.Component {



//     render() {
//         let icon;
//         return (
//             <div>
//                 {this.getIcon(icon)}
//             </div>
//         );
//     }
// }

export default Icon;