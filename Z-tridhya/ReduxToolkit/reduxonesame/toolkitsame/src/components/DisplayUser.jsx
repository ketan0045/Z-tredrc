import { useSelector, useDispatch } from "react-redux";
import { MdDeleteForever } from 'react-icons/md';
import { removeUser } from "../store/slices/UserSlices";

const DisplayUser = () => {
    const dispatch = useDispatch()
    const data = useSelector((state) => state.users);

    const deleteUser = (user) => {
        dispatch(removeUser(user))
    }
    return (
        <>
            {data.map((user, id) => {
                return (
                    <li key={id} className="listing">
                        {user}
                        <button className="btn-delete" onClick={() => deleteUser(id)}>
                            <MdDeleteForever className="delete-icon" />
                        </button>
                    </li>
                )
            })}
        </>
    )
}

export default DisplayUser
