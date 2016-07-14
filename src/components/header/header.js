import React from 'react'
import {Link} from 'react-router'

class Header extends React.Component {
    constructor(props) {
        super(props)
        this.header = {
            title:"Главная",
            login: {
                link:"signin",
                title: "Логин"
            },
            registration: {
                link:"signup",
                title: "Регистрация"
            }
        }
    }
    componentWillMount(){

    }
    componentDidMount(){

    }
    render() {
       return (
            <header>
                <Link className="headerLeft" to={`/`}>{this.header.title}</Link>
                <div>
                    <Link className="headerRight" to={`/${this.header.login.link}`}>
                        {this.header.login.title}
                    </Link>
                    <Link className="headerRight" to={`/${this.header.registration.link}`}>
                        {this.header.registration.title}
                    </Link>
                </div>
                <div className="clear"></div>
            </header>
        )
    }
}

export {Header}