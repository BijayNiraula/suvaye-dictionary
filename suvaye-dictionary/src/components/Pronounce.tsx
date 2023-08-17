import { useRef,memo } from "react"

interface PronounceProps {
    audioUrl: string
}

const Pronounce: React.FC<PronounceProps> = ({ audioUrl }) => {
    const playBtn: any = useRef()
    const pauseBtn: any = useRef();
    var audioUrl = audioUrl
    var audio: any;

    try {
        audio = new Audio(audioUrl)
    }
    catch (e) {

    }

    const playAudio = () => {
        if (audio) {
            audio.play()
        }
        audio.play()
        playBtn.current.style.display = "none"
        pauseBtn.current.style.display = ""
    }

    const stopAudio = () => {
        if (audio) {
            audio.pause()
        }
        playBtn.current.style.display = ""
        pauseBtn.current.style.display = "none"
    }

    audio.addEventListener('ended', () => {
        pauseBtn.current.style.display = 'none'
        playBtn.current.style.display = ''
    })


    return (
        <>
            <button style={{ display: "none" }} onClick={() => stopAudio()} ref={pauseBtn} className="btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" fill="currentColor" className="bi bi-pause-circle-fill" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.25 5C5.56 5 5 5.56 5 6.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C7.5 5.56 6.94 5 6.25 5zm3.5 0c-.69 0-1.25.56-1.25 1.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C11 5.56 10.44 5 9.75 5z" />
                </svg>
            </button>

            <button onClick={() => playAudio()} className="btn" ref={playBtn}>
                <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" fill="currentColor" className="bi bi-play-circle-fill" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
                </svg>
            </button>
        </>

    )

}


export default memo(Pronounce)