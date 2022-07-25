import LoginForm from "../../components/Forms/Login";
import { useSelector } from "react-redux";
import { useRouter } from 'next/router';


const Index = () => {
    const userState = useSelector((state) => state.user);
    const user = userState.user;
    const router = useRouter();
    const query = router.query;

    if(query.fromCheckout !== "") {
        if(user && user.authenticated) {
            router.replace('/');
            return null;
        }
    }

    return (
        <div>
            <LoginForm />
        </div>
    )
}

export default Index;