import React, { useRef, useEffect } from 'react';

const RoundProgressBar = props => {
    const size = props.size;
    const radius = (props.size - props.strokeWidth) / 2;
    const viewBox = `0 0 ${size} ${size}`;
    const dashArray = radius * Math.PI * 2;
    const dashOffset = dashArray - dashArray * props.value / props.max;
    const circleRef = useRef(null);

    useEffect(() => {
        circleRef.current.style = 'transition: stroke-dashoffset 3000ms ease-in-out';
    })

    return (
        <svg
            width={props.size}
            height={props.size}
            viewBox={viewBox}
        >
            <circle
                fill={'none'}
                stroke={'#fff'}
                cx={props.size / 2}
                cy={props.size / 2}
                r={radius}
                strokeWidth={`${props.strokeWidth}px`} />
            <circle
                ref={circleRef}
                fill={'none'}
                stroke={props.stroke}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray={dashArray}
                strokeDashoffset={dashOffset}
                cx={props.size / 2}
                cy={props.size / 2}
                r={radius}
                strokeWidth={`${props.strokeWidth}px`}
                transform={`rotate(-90 ${props.size / 2} ${props.size / 2})`}
            />
            <text
                x="50%"
                y="48%"
                dy="0.4rem"
                textAnchor="middle"
                fill={props.stroke}
                style={{
                    fontSize: '2rem',
                    fontFamily: 'Quicksand',
                    fontWeight: 'bold',
                }}
            >
                {`${props.value}`}
            </text>
            <text
                x="50%"
                y="52%"
                dy="1.5rem"
                textAnchor="middle"
                fill='white'
                style={
                    {
                        fontSize: '1.2rem',
                        fontFamily: 'Quicksand',
                        fontWeight: 'bold',
                    }
                }
            >
                {props.text}
            </text>
        </svg>
    );
}

RoundProgressBar.defaultProps = {
    size: 175,
    value: 0,
    max: 100,
    strokeWidth: 10,
    stroke: '#fff',
    text: ""
}

export default RoundProgressBar;