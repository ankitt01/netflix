//if the user is already sign in and still go to the signin/signup page we will redirect him to the browse page 
//protected routes (browse page)
//using react router
import {Route, Redirect} from 'react-router-dom'

export function IsUserRedirect({user, loggedInPath, children, ...rest}) {
    return (
        <Route
            {...rest}
            render={()=>{
                if(!user) {
                    return children
                }
                if(user) {
                    return (
                        <Redirect to={{
                            pathname: loggedInPath,
                        }} />
                    )
                }
                return null;
            }
        } />
    )
}

export function ProtectedRoute({user, children, ...rest}) {
    return (
        <Route {...rest}
            render={({location}) => {
                if(user) {
                    return children;
                }
                if(!user) {
                    return (
                        <Redirect to={{
                            pathname: 'signin',
                            state:  {from: location},
                        }} />
                    )
                }
                return null;
            }}
        />
    )
}
