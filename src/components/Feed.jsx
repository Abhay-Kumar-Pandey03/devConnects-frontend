import { useEffect } from 'react'
import UserCard from './UserCard';
import axios from 'axios';
import { BASE_URL } from '../utils/constants';
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../utils/feedSlice";

const Feed = () => {
    const feed = useSelector((store) => store.feed);
    const dispatch = useDispatch();

    const getFeed = async () => {
        if (feed && feed.length > 0) return;
        try {
            const res = await axios.get(BASE_URL + "/feed", { withCredentials: true });
            dispatch(addFeed(res?.data));
            // console.log(feed.data);
        }
        catch (err) {
            console.error("Error fetching feed:", err);
        }
    }

    useEffect(() => {
        getFeed();
    }, []);

    return (
        feed && (
            <div>
                <UserCard user={feed[0]} />
            </div>
        )
    )
}

export default Feed;