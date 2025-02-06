import { createContext } from "react";
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";
import { app } from "../firebase/firebase";

export const AuthContext = createContext();
const auth = getAuth(app);

const TicketProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

      // login
      const userLogin = (email, password) => {
        // setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const authInfo = {
        userLogin,
        user,
        setUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default TicketProvider;