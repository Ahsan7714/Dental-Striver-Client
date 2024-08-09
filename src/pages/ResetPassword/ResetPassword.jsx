import  { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Loader from '../../components/Spinner/Loader';
import axios from 'axios';
import baseurl from '../../store/baseurl';
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';

const ResetPassword = () => {
    const {token} = useParams();
    const navigate = useNavigate();

    const {user, loading, error} = useSelector(state => state.user);




    useEffect(() => {
        if(user) {
            navigate('/user/my-course')
        }
        validateToken()
    })

    const validateToken = async () => {
        try {
            const res=await axios.get(`${baseurl}/api/validate-token/${token}`, {
                withCredentials: true
            }

            )

            if(res.status === 200) {
                navigate(`/`)
            }

        }
        catch (error) {
            toast.error(error.response.data.errors[0].message);
            navigate(`/`)

        }
    }

  return (
<>

        <Loader/>
</>
 
  )
}

export default ResetPassword