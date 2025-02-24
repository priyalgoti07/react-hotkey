import { useEffect, useState } from 'react'
import './index.css'
const ProgressBar = ({ progress }: { progress: number }): JSX.Element => {
    const [animatedProgressbar, setAnimatedProgressbar] = useState(0)
    useEffect(() => {
        setTimeout(() => {
            setAnimatedProgressbar(progress)
        }, 100);
    }, [progress])
    return (
        <div className="outer">
            <div className="inner"
                style={{
                    // width: `${animatedProgressbar}%`,
                    transform: `translateX(${animatedProgressbar - 100}%)`,
                    color: `${animatedProgressbar < 5 ? 'black' : 'white'}`
                }}
                role='progressbar'
                aria-valuenow={progress}
                aria-valuemax={100}
                aria-valuemin={0}
            > {progress} %</div>
        </div >
    )
}
export default function ProgressiveBar() {
    const diffrentProg = [0, 5, 10, 25, 50, 70, 100]
    return (
        <div>
            <h3>Progress Bar</h3>
            {
                diffrentProg.map((item) =>
                    <ProgressBar key={item} progress={item} />
                )
            }
        </div>
    )
}
