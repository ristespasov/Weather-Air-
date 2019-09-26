import React from 'react';

const Icon = props => (
    <div>
        {
            props.icon != null && <div className="current-weather-icon">{props.getIcon}</div>
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