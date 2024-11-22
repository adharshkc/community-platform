
import { useDispatch, useSelector } from "react-redux"
import profileImg from "../../assets/img/user.png"
import { RootState } from "../../redux/store"
import { useState } from "react"
import { authService } from "../../services/authService"
import toast, { Toaster } from "react-hot-toast"
import { setUser } from "../../redux/userSlice"

const Profile = () => {
    const user = useSelector((state: RootState) => state.user)
    const dispatch = useDispatch()
    const [editUser, setEditUser] = useState(false)
    const [name, setName] = useState(user.name)
    const [email, setEmail] = useState(user.email)
    const changeName = async ()=>{
        try {
            const updatedUser = await authService.updateName(name, user.id)
             const userStore = {
                id: updatedUser.data.id,
                name: updatedUser.data.name,
                email: updatedUser.data.email,
                role: updatedUser.data.role,
              }
              dispatch(setUser(userStore))
             setEditUser(false)
        } catch (error) {
            console.log(error)
            toast.error("something went wrong")
        }
    }
    return (
        <>
        <Toaster/>
            <div className="flex items-center justify-center mt-10">
                <div className="w-full max-w-4xl p-6 bg-white rounded-lg shadow-md">
                    <div className="flex flex-col items-center sm:flex-row sm:items-start sm:gap-6">
                        <div className="flex-shrink-0">
                            <img
                                src={profileImg}
                                alt="User Avatar"
                                className="w-32 h-32 rounded-full border-4"
                            />
                        </div>
                        <div className="flex flex-col mt-6 sm:mt-0 sm:w-full">
                            <h1 className="text-2xl font-bold text-gray-800">{user.name}</h1>
                            <p className="text-gray-600">{user.email}</p>
                            <p className="mt-2 text-sm text-gray-500">
                                Bio: A short description about yourself or your interests.
                            </p>
                            <div className="mt-4">
                                <button className="px-4 py-2 text-white bg-pink-500 rounded-md hover:bg-pink-600" onClick={() => setEditUser(true)}>
                                    Edit Profile
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8">
                        <h2 className="text-lg font-semibold text-gray-800">Recent Activities</h2>
                        <div className="mt-4">
                            <ul className="divide-y divide-gray-200">
                                <li className="py-4">
                                    <p className="text-sm text-gray-800">
                                        Enrolled in the <span className="font-medium text-pink-500">React Masterclass</span>
                                    </p>
                                    <p className="mt-1 text-xs text-gray-500">2 days ago</p>
                                </li>
                                <li className="py-4">
                                    <p className="text-sm text-gray-800">
                                        Updated profile picture
                                    </p>
                                    <p className="mt-1 text-xs text-gray-500">5 days ago</p>
                                </li>
                                <li className="py-4">
                                    <p className="text-sm text-gray-800">
                                        Started learning <span className="font-medium text-pink-500">Tailwind CSS</span>
                                    </p>
                                    <p className="mt-1 text-xs text-gray-500">1 week ago</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {editUser &&
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">

                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">

                                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                                    <h3 className="text-3xl font-semibold">
                                        Edit Profile
                                    </h3>
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setEditUser(false)}
                                    >
                                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                            ×
                                        </span>
                                    </button>
                                </div>
                                <div className="relative p-6 flex-auto">
                                    <label className="block text-sm font-medium text-gray-700">Name</label>
                                    <input
                                        type="name"
                                        className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-pink-300"
                                        placeholder="Your email"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                    <label className="block text-sm mt-3 font-medium text-gray-700">Email</label>
                                    <input
                                        type="email"
                                        className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-pink-300"
                                        placeholder="Your email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                    <button
                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setEditUser(false)}
                                    >
                                        Close
                                    </button>
                                    <button
                                        className="bg-pink-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={changeName}
                                    >
                                        Save Changes
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"
                    ></div></>
            }
        </>

    )
}

export default Profile