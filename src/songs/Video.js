const Video = (props) => {
    const {link, img} = props;
    return (
        <div className='video-art'>
            <a href={link}>
                <img className='video-art-img' src={img}></img>
            </a>
            <a href={link}>
                <div className='video-watch'>Watch</div>
            </a>
        </div>
    )
}

export default Video;