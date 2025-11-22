const UserCard = ({user}) => {
    const {photoUrl, firstName, lastName, about, age, gender} = user;
    console.log(photoUrl);
    return (
        <div className='flex justify-center mt-10'>
            <div className="card bg-base-200 w-96 shadow-xl ">
                <figure>
                    <img
                        src={user.photoUrl}
                        alt="photo" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-xl  ">{firstName + " " + lastName}</h2>
                    {age && gender && <p>{age + ", " + gender}</p>}
                    <p>{about}</p>
                    <div className="card-actions justify-center mt-4 gap-4">
                        <button className="btn btn-primary">Interested</button>
                        <button className="btn btn-secondary">Ignored</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserCard;