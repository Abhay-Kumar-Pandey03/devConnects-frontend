import { useState } from "react";
import UserCard from "./UserCard";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const EditProfile = ({ user }) => {
    const [firstName, setFirstName] = useState(user.firstName);
    const [lastName, setLastName] = useState(user.lastName);
    const [photoUrl, setPhotoUrl] = useState(user.photoUrl);
    const [age, setAge] = useState(user.age || "");
    const [gender, setGender] = useState(user.gender || "");
    const [about, setAbout] = useState(user.about || "");
    const [error, setError] = useState("");
    const dispatch = useDispatch();
    const [showToast, setShowToast] = useState(false);

    const saveProfile = async () => {
        //Clear Errors
        setError("");
        try {
            const res = await axios.patch(
                BASE_URL + "/profile/edit",
                {
                    firstName,
                    lastName,
                    photoUrl,
                    age,
                    gender,
                    about,
                },
                { withCredentials: true }
            );
            dispatch(addUser(res?.data?.data));
            setShowToast(true);
            setTimeout(() => {
                setShowToast(false);
            }, 3000);
        } catch (err) {
            setError(err?.response?.data?.message || "Profile update failed");

        }
    };

    return (
        <>
            <div className="min-h-screen w-full overflow-y-auto flex justify-center py-10">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start max-w-5xl">


                    {/* LEFT - Edit Profile */}
                    <div className="card bg-base-300 w-96 m-auto mt-10 max-w-md shadow-2xl rounded-2xl">

                        <div className="card-body">
                            <h2 className="card-title justify-center text-2xl font-bold text-center mb-6">Edit Profile</h2>
                            <div>
                                <label className="form-control w-full max-w-xs my-2">
                                    <div className="label ">
                                        <span className="label-text">First Name:</span>
                                    </div>
                                    <input
                                        type="text"
                                        value={firstName}
                                        className="input input-bordered w-full max-w-xs mt-1"
                                        onChange={(e) => setFirstName(e.target.value)}
                                    />
                                </label>
                                <label className="form-control w-full max-w-xs my-2">
                                    <label className="form-control w-full max-w-xs my-2 ">
                                        <div className="label">
                                            <span className="label-text mt-2">Last Name:</span>
                                        </div>
                                        <input
                                            type="text"
                                            value={lastName}
                                            className="input input-bordered w-full max-w-xs mt-1"
                                            onChange={(e) => setLastName(e.target.value)}
                                        />
                                    </label>
                                    <div className="label">
                                        <span className="label-text mt-2">Photo URL :</span>
                                    </div>
                                    <input
                                        type="text"
                                        value={photoUrl}
                                        className="input input-bordered w-full max-w-xs mt-1"
                                        onChange={(e) => setPhotoUrl(e.target.value)}
                                    />
                                </label>
                                <label className="form-control w-full max-w-xs my-2">
                                    <div className="label">
                                        <span className="label-text mt-2">Age:</span>
                                    </div>
                                    <input
                                        type="text"
                                        value={age}
                                        className="input input-bordered w-full max-w-xs mt-1"
                                        onChange={(e) => setAge(e.target.value)}
                                    />
                                </label>
                                <label className="form-control w-full max-w-xs my-2">
                                    <div className="label">
                                        <span className="label-text mt-2">Gender:</span>
                                    </div>

                                    <select
                                        value={gender}
                                        className="select select-bordered w-full max-w-xs mt-1"
                                        onChange={(e) => setGender(e.target.value)}
                                    >
                                        <option value="">Select gender</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="other">Other</option>
                                    </select>
                                </label>

                                <label className="form-control w-full max-w-xs my-2 ">
                                    <div className="label">
                                        <span className="label-text mt-2">About:</span>
                                    </div>

                                    <textarea
                                        className="textarea textarea-bordered w-full max-w-xs mt-1"
                                        placeholder="Bio"
                                        value={about}
                                        onChange={(e) => setAbout(e.target.value)}
                                    ></textarea>
                                </label>

                            </div>
                            <p className="text-red-500">{error}</p>
                            <div className="card-actions justify-center m-2">
                                <button className="btn btn-primary px-10 border border-blue-500/30" type="button" onClick={saveProfile}>
                                    Save Profile
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="w-full max-w-md">
                        <UserCard
                            user={{ firstName, lastName, photoUrl, age, gender, about }}
                        />
                    </div>
                </div>

            </div>
            {showToast && (
                <div className="toast toast-top toast-center">
                    <div className="alert alert-success">
                        <span>Profile saved successfully.</span>
                    </div>
                </div>
            )}
        </>
    );
};
export default EditProfile;