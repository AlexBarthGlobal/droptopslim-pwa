const Song = (props) => {
    const {link, img} = props;
    return (
        <div className='song-art'>
            <a href={link}>
                <img className='song-art-img' src={img}></img>
            </a>
            <a href={link}>
                <div className='song-listen'>Listen</div>
            </a>
        </div>
    )
}

export default Song;