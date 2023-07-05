class GameController {
    static homePage = async(req, res) => {
        return res.render('project')
    }

    static halaman = async(req, res) => {
        return res.render('project-4')
    }

    static login = async(req, res) => {
        return res.render('login')
    }

    static biodata = async(req, res) => {
        return res.render('userbiodata')
    }

    static history = async(req, res) => {
        return res.render('userhistory')
    }

    static create = async(req, res) => {
        return res.render('create')
    }

    static update = async(req, res) => {
        return res.render('update')
    }
}


module.exports = GameController