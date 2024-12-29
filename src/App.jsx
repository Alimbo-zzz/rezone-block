import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Error, Main, PrivacyPolicy } from './pages';



const App = (props) => {
	

	return (<>
		<Routes>
			<Route index element={<> <Main/> </>}/>
			<Route path='/privacy-policy' element={<> <PrivacyPolicy/> </>}/>
			<Route path='*' element={<> <Error/> </>}/>
		</Routes>

	</>);
}

export default App;