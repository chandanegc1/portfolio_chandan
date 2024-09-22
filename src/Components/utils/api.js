import axios from 'axios';

export const fetchGistData = async () => {
    const gistUrl = 'https://script.google.com/macros/s/AKfycbxcilvESWVaQqeHdh8lBYr7mJuSpqkN0qdPaddjEux-2E1FKdp2itIh2JE6YRHfhMG6/exec';

    try {
        const response = await axios.get(gistUrl);
        return response;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

