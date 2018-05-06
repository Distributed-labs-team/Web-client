export const auth = {
    isAuthenticated: false,
    authenticate(cb) {
        this.isAuthenticated = true
    },
    logout(cb) {
        this.isAuthenticated = false
    }
}
