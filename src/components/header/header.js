import React from 'react'
import {Link} from 'react-router'

class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = { header: [] }
    }
    componentDidMount(){
        this.setState({header:{
            title:"Главная",
            login: {
                link:"login",
                title: "Логин"
            },
            registration: {
                link:"registration",
                title: "Регистрация"
            }
        }})
    }
    //<Link to={`/${header.login.link}`}>{header.login.title}</Link>
    //<Link to={`/${header.registration.link}`}>{header.registration.title}</Link>
    render() {
        let header = this.state.header
        return (
            <header>
               <Link to={`/`}>{header.title}</Link>
            </header>
        )
    }
}

export {Header}