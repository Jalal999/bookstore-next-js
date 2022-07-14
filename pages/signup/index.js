import SignUp from '../../components/Forms/SignUp'
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';

const Index = () => {
    const userState = useSelector((state) => state.user);
    const user = userState.user;
    const router = useRouter();

    if(user && user.authenticated) {
        router.replace('/');
        return null;
    }

    return (
        <div>
            <SignUp />
        </div>
    )
}

export default Index;