import React, {
	createContext,
	useContext,
	useMemo,
	useRef,
	useState,
} from 'react';
import { auth } from '../firebase/firebase';
// import {
// 	FirebaseRecaptchaVerifierModal,
// 	FirebaseRecaptchaBanner,
// } from 'expo-firebase-recaptcha';
import { PhoneAuthProvider, signInWithCredential } from 'firebase/auth';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
	const [error, setError] = useState(null);
	const [user, setUser] = useState(null);
	const [loadingInitial, setLoadingInitial] = useState(false);
	const [loading, setLoading] = useState(false);
	const recaptchaVerifier = useRef(null);
	const [phoneNumber, setPhoneNumber] = useState();
	const [verificationId, setVerificationId] = useState();
	const [verificationCode, setVerificationCode] = useState();

	const attemptInvisibleVerification = false;

	const memoedValue = useMemo(
		() => ({
			user,
			loading,
			error,
		}),
		[user, loading, error]
	);

	return (
		<AuthContext.Provider value={memoedValue}>
			{!loadingInitial && children}
		</AuthContext.Provider>
	);
};

export default function useAuth() {
	return useContext(AuthContext);
}
