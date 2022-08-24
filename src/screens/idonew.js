import { Route, Redirect } from 'react-router'

<Route exact path="/" render={() => (
  loggedIn ? (
    <Redirect to="https://atoll-ido-five.vercel.app/"/>
  ) : (
    <PublicHomePage/>
  )
)}/>
