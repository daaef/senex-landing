export default ({ app, store, route, redirect }) => {
  const guestRoute = ['/login', '/register', '/forgot-password']
  // run only on server
  if (process.server) {
    if (!store.state.auth.loggedIn && !guestRoute.includes(route.path)) {
      redirect('/login')
    }

    // redirect to dashboard if user is already logged in
    if (store.state.auth.loggedIn && guestRoute.includes(route.path)) {
      return redirect('/dashboard')
    }
    if (
      store.state.auth.loggedIn &&
      !store.state.auth.user.profile.mobileVerified
    ) {
      return redirect('/verify')
    }
    if (
      store.state.auth.loggedIn &&
      !store.state.auth.user.profile.securityKeyChanged
    ) {
      return redirect('/secret')
    }
    // if (store.state.auth.loggedIn && route.path === '/register') {
    //   return redirect('/dashboard')
    // }
  }
  // run only on browser
  if (!process.server) {
    if (guestRoute.includes(route.path)) {
      if (store.state.auth.loggedIn) {
        return redirect('/dashboard')
      }
      return
    }
    // detect if user is logged in
    if (!store.state.auth.loggedIn) {
      app.$auth.logout()
      return redirect('/login')
    }
    // check if user has verified profile
    if (!store.state.auth.user.profile.mobileVerified) {
      return redirect('/verify')
    }
    // set security key
    if (!store.state.auth.user.profile.securityKeyChanged) {
      return redirect('/secret')
    }
  }
}
