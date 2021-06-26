export default function ({ $axios, redirect }) {
  $axios.onError((error) => {
    const code = parseInt(error.response && error.response.status)
    if (code === 401) {
      delete $axios.defaults.headers.common.authorization
      localStorage.clear()
      redirect('/login')
    }
  })
}
