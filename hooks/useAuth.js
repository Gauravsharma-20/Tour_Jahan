import React, {
	createContext,
	useContext,
	useEffect,
	useMemo,
	useState,
} from 'react';
import * as Google from 'expo-google-app-auth';
import {
	GoogleAuthProvider,
	onAuthStateChanged,
	signInWithCredential,
	signOut,
} from '@firebase/auth';
import { auth, db } from '../firebase/firebase';
import {
	doc,
	getDoc,
	setDoc,
} from 'firebase/firestore';

const AuthContext = createContext({});

const config = {
	androidClientId: '330320256587-nsdq40pke0l18slk2t4k9k774s39hf1n.apps.googleusercontent.com',
	iosClientId: '330320256587-cqqrdb5qq420k3s99pbi7ha1mbt3nbjo.apps.googleusercontent.com',
	scopes: ['profile', 'email'],
	permissions: ['public_profile', 'email'],
};

export const AuthProvider = ({ children }) => {
	const [error, setError] = useState(null);
	const [user, setUser] = useState(null);
	const [loadingInitial, setLoadingInitial] = useState(true);
	const [loading, setLoading] = useState(false);

	useEffect(
		() =>
			onAuthStateChanged(auth, (user) => {
				if (user) {
					setUser(user);
                    const docRef = doc(db, 'users', user.uid);
                    getDoc(docRef).then((docSnap) => {
                        if (!docSnap.exists()) {
                            console.log('No such document!');
                            setDoc(docRef, {
                                name: user.providerData[0].displayName,
                                email: user.providerData[0].email,
                                contact: user.providerData[0].phoneNumber,
                                photoUrl: user.providerData[0].photoURL,
                            });
                        }
                    });
				} else {
					setUser(null);
				}

				setLoadingInitial(false);
			}),
		[]
	);

    const logout = () => {
		setLoading(true);
		signOut(auth)
			.catch((error) => setError(error))
			.finally(() => setLoading(false));
	};

	const signInWithGoogle = async () => {
		setLoading(true);
		await Google.logInAsync(config)
			.then(async (logInResult) => {
				if (logInResult.type === 'success') {
					// login
					const { idToken, accessToken } = logInResult;
					const credential = GoogleAuthProvider.credential(
						idToken,
						accessToken
					);

					await signInWithCredential(auth, credential);
				}

				return Promise.reject();
			})
			.catch((error) => setError(error))
			.finally(() => setLoading(false));
	};

	const memoedValue = useMemo(
		() => ({
			user,
			loading,
			error,
			logout,
			signInWithGoogle,
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

// import React, {
// 	createContext,
// 	useContext,
// 	useEffect,
// 	useMemo,
// 	useRef,
// 	useState,
// } from 'react';
// import { auth } from '../firebase/firebase';
// import {
// 	PhoneAuthProvider,
// 	signInWithCredential,
// 	onAuthStateChanged,
// 	signOut,
// } from 'firebase/auth';

// const AuthContext = createContext({});

// export const AuthProvider = ({ children }) => {
// 	const [error, setError] = useState(null);
// 	const [user, setUser] = useState(null);
// 	const [loadingInitial, setLoadingInitial] = useState(true);
// 	const [loading, setLoading] = useState(false);

// 	const recaptchaVerifier = useRef(null);
// 	const [phoneNumber, setPhoneNumber] = useState();
// 	const [verificationId, setVerificationId] = useState();
// 	const [verificationCode, setVerificationCode] = useState();

// 	const [message, showMessage] = useState();

// 	useEffect(
// 		() =>
// 			onAuthStateChanged(auth, (user) => {
// 				if (user) {
// 					setUser(user);
// 				} else {
// 					setUser(null);
// 				}
// 				setLoadingInitial(false);
// 				if (loading) setLoading(false);
// 			}),
// 		[]
// 	);

// 	const logout = () => {
// 		setLoading(true);

// 		signOut(auth)
// 			.catch((error) => setError(error))
// 			.finally(() => setLoading(false));
// 	};

// 	const sendVerificationCode = async () => {
// 		try {
// 			const phoneProvider = new PhoneAuthProvider(auth);
// 			const verificationId = await phoneProvider.verifyPhoneNumber(
// 				phoneNumber,
// 				recaptchaVerifier.current
// 			);
// 			setVerificationId(verificationId);
// 			showMessage({
// 				text: 'Verification code has been sent to your phone.',
// 			});
// 		} catch (err) {
// 			showMessage({ text: `Error: ${err.message}`, color: 'red' });
// 		}
// 	};

// 	const handleVerification = async () => {
// 		try {
// 			const credential = PhoneAuthProvider.credential(
// 				verificationId,
// 				verificationCode
// 			);
// 			await signInWithCredential(auth, credential);
// 			showMessage({
// 				text: 'Phone authentication successful 👍',
// 			});
// 		} catch (err) {
// 			showMessage({
// 				text: `Error: ${err.message}`,
// 				color: 'red',
// 			});
// 		}
// 	};

// 	const memoedValue = useMemo(
// 		() => ({
// 			user,
// 			loading,
// 			error,
// 			phoneNumber,
// 			verificationId,
// 			message,
// 			logout,
// 			sendVerificationCode,
// 			handleVerification,
// 			setPhoneNumber,
// 			setVerificationCode,
// 			showMessage,
// 			recaptchaVerifier,
// 		}),
// 		[user, loading, error, verificationId, message]
// 	);
//     console.log(phoneNumber);
//     console.log(verificationId);

// 	return (
// 		<AuthContext.Provider value={memoedValue}>
// 			{!loadingInitial && children}
// 		</AuthContext.Provider>
// 	);
// };

// export default function useAuth() {
// 	return useContext(AuthContext);
// }
