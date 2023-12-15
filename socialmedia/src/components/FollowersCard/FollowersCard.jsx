import React, { useEffect, useState } from 'react'
import './FollowersCard.css'
// import { Followers } from '../../Data/FollowersData'
// import FollowersModal from "../FollowersModal/FollowersModal";
import User from "../User/User";
import { useSelector } from "react-redux";
import { getAllUser } from "../../api/UserRequests";

const FollowersCard = () => {
    // const [modalOpened, setModalOpened] = useState(false);
    const [persons, setPersons] = useState([]);
    const { user } = useSelector((state) => state.authReducer.authData);

    useEffect(() => {
        const fetchPersons = async () => {
            const { data } = await getAllUser();
            setPersons(data);
        };
        fetchPersons();
    }, []);
    return (
        <div className="FollowersCard">
            <h3>People you may know</h3>

            {persons.map((person, id) => {
                if (person._id !== user._id) return <User person={person} key={id} />;
            })}
            {/* {!location ? (
                <span onClick={() => setModalOpened(true)}>Show more</span>
            ) : (
                ""
            )} */}
        </div>
    )
}

export default FollowersCard
