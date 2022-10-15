import React, {useEffect, useState} from "react";

import './songs.css';
import Song from './Song'

const { GoogleSpreadsheet } = require('google-spreadsheet');

const Songs = () => {
    const [entities, setEntities] = useState([]);
  
    useEffect(() => {
        (async () => {
        const loadedEntities = [];
        const doc = new GoogleSpreadsheet('1unp0HyiC62l8s0lVyLEIBS_RfJ3PpTd98LNfX5aUGFk');
        await doc.useServiceAccountAuth(require('../credentials.json'));
        await doc.loadInfo();
        const rows = await doc.sheetsByIndex[0].getRows();
        let key = 0;
        for (const row of rows) {
            if (!row.image || !row.link) {
                continue;
            }
            console.log('imghere', row.image.split('/'))
            row.image = row.image.includes('dropbox') ? `https://dropbox.com/s/${row.image.split('/')[4]}?raw=1` : row.image;

            loadedEntities.push(<Song key={key} link={row.link} img={row.image} />);
            key++;
        }

        setEntities(loadedEntities);
        })();
    }, [])

    return !entities.length ? <></> : 
        <div className='songs-screen-wrapper'>
            <div className='songs-container'>
                {entities}
            </div>
        </div>
}

export default Songs;