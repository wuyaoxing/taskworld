function setupRestEndpoints(app) {
    app.use((req, res, next) => {
        console.log('[REST API]', req.method, req.path, req.body)
        next()
    })

    app.post('/api/auth', loginRestEndpoint)
    app.get('/users/me', usersRestEndpoint)
}

const loginRestEndpoint = (req, res) => {
    const payload = {
        name: 'username',
        token: new Date().getTime()
    }
    res.send(payload)
}

const usersRestEndpoint = (req, res) => {
    const payload = {"data":{"id":"5a5187154498deeb4974d07f","type":"user","attributes":{"photo":"http://localhost:9101/b/img/avatars/avatar44.png","thumbnail":"http://localhost:9101/b/img/avatars/avatar42.png","first_name":"吴","last_name":"尧星","display_name":"吴 尧星","email":"test@mail.com","last_login":"2018-03-10T23:45:39.466Z","time_zone":"Asia/Shanghai","language":"cn","department":"","job_title":"","phone":"","is_active":true,"address":"","date_of_birth":"","created_at":"2018-01-07T02:33:57.061Z","updated_at":"2018-03-10T23:40:33.896Z","is_system_user":false,"should_display_tutorial":true,"intercom_hash":"e572d1b06560a1b386d321b8ed4f71c21411bf08ddce442be28f05d2fb70ca60"},"relationships":{"workspaces":{"data":[{"id":"5a51882bb0bf7f0906015a13","type":"workspace"},{"id":"5a5e08adc856bb7308c44d04","type":"workspace"},{"id":"5a72678ccb7ebd5168f56fc4","type":"workspace"},{"id":"5a8cad17cdfaacfb0ec70061","type":"workspace"},{"id":"5aa33279c3915e3f28d26be3","type":"workspace"}]},"last_workspace":{"data":{"id":"5aa33279c3915e3f28d26be3","type":"workspace","attributes":{"name":"20180310"}}},"last_workspace_membership":"free_trial","is_admin_last_workspace":true}}}
    res.send(payload)
}

module.exports = {
    setupRestEndpoints
}
