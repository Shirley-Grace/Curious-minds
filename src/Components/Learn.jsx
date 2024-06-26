import React, { useEffect, useState } from 'react'

import './Learn.css'
import { useRef } from 'react';
import Title from './Title';

function Learn() {
    const [mouseData, setMouseData] = useState({ x: 0, y: 0 });
    const canvasRef = useRef(null);
    const [canvasCTX, setCanvasCTX] = useState(null);
    const [color, setColor] = useState("#FD3ECA");
    const [size, setSize] = useState(15);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        setCanvasCTX(ctx);
    }, [canvasRef]);

    const SetPos = (e) => {
        setMouseData({
            x: e.clientX,
            y: e.clientY,
        });
    };

    const Draw = (e) => {
        if (e.buttons !== 1) return;
        const ctx = canvasCTX;
        ctx.beginPath();
        ctx.moveTo(mouseData.x, mouseData.y);
        setMouseData({
            x: e.clientX,
            y: e.clientY,
        });
        ctx.lineTo(e.clientX, e.clientY);
        ctx.strokeStyle = color;
        ctx.lineWidth = size;
        // Set the line cap to round
        ctx.lineCap = "round";
        ctx.stroke();

    };
    return (
        <div className="learn">
            <Title subTitle='Let Us Learn ' title='letters and numbers' />

            <section className="drawing-board">
                <canvas className=''
                    ref={canvasRef}
                    onMouseEnter={(e) => SetPos(e)}
                    onMouseMove={(e) => SetPos(e)}
                    onMouseDown={(e) => SetPos(e)}
                    onMouseMove={(e) => Draw(e)}
                    onTouchStart={(e) => SetPos(e)}
                    onTouchMove={(e) => SetPos(e)}
                    onTouchMove={(e) => Draw(e)}
                    onTouchEnd={(e) => SetPos(e)}

                ></canvas>
            </section>

            <section className="tools">


                <label className='title' >Size</label>
                <input name="" className='' id="size"
                    type="range"
                    value={size}
                    max={40}
                    onChange={(e) => {
                        setSize(e.target.value);
                    }} />

                <label className='title' >Colors</label>

                <input type="color"
                    value={color}
                    onChange={(e) => {
                        setColor(e.target.value);
                    }}
                    name="color"
                    className="picker"
                />



                <button type="button" className='btn'
                    onClick={() => {
                        const ctx = canvasCTX;
                        ctx.clearRect(
                            0,
                            0,
                            canvasRef.current.width,
                            canvasRef.current.height
                        );
                    }}>CLEAR</button>

            </section>


        </div>


    )
}

export default Learn