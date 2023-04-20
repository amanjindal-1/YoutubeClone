import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';

import { Videos, ChannelCard } from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';

const ChannelDetail = () => {
    const [channelDetail, setChannelDetail] = useState(null);
    const [videos, setVideos] = useState([]);
    const { id } = useParams();

    console.log(videos);

    useEffect(() => {
        fetchFromAPI(`channels?part="snippet&id=${id}`)
            .then((data) => setChannelDetail(data?.items[0]));

        fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
            .then((data) => setVideos(data?.items));
    }, [id]);

    return (
        <Box minHeight='95vh'>
            <Box>
                <div style={{
                    backgroundColor: '#4158D0',
                    backgroundImage: 'linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)',
                    background: 'linear-gradient(90deg, rbga(0, 238, 247, 1) 0%, rgba(206, 3, 184, 1) 100%, rgba(0, 212, 255, 1) 100%)',
                    zIndex: 10,
                    height: 300,
                }}
                />
                <ChannelCard channelDetail={channelDetail} marginTop='-110px' />
            </Box>
            <Box display='flex' p='2'>
                <Box sx={{ mr: { sm: '100px' } }} />
                <Videos videos={videos} />
            </Box>
        </Box>
    )
}

export default ChannelDetail;