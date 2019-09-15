const { HashRouter, Switch, NavLink, Route, Redirect } = ReactRouterDOM
const { Component } = React

const PATH = {
    ABOUT: '/about',
    SKILLS: '/skills',
    EXPERIENCES: '/experiences',
    EDUCATION: '/education',
    PROJECTS: '/projects',
    AFFILIATIONS: '/affiliations',
    FUNSTUFF: '/fun-stuff'
}

const Nav = () => {
    return (
        <nav id="nav-sections">
            <NavLink to={ PATH.ABOUT }>About Kristina</NavLink>
            <NavLink to={ PATH.SKILLS }>Skills</NavLink>
            <NavLink to={ PATH.EXPERIENCES }>Experiences</NavLink>
            <NavLink to={ PATH.EDUCATION }>Education</NavLink>
            <NavLink to={ PATH.PROJECTS }>Projects</NavLink>
            <NavLink to={ PATH.AFFILIATIONS }>Affiliations</NavLink>
            <NavLink to={ PATH.FUNSTUFF }>Fun Stuff</NavLink>
        </nav>
    )
}

const About = () => {
    return (
        <div id="section-about">
            ABOUT ME
        </div>
    )
}

const Skills = () => {
    return (
        <div id="section-skills">
            SKILLS
        </div>
    )
}

const Experiences = () => {
    return (
        <div id="section-experiences">
            EXPERIENCES
        </div>
    )
}

const Education = () => {
    return (
        <div id="section-education">
            EDUCATION
        </div>
    )
}

const Projects = () => {
    return (
        <div id="section-projects">
            PROJECTS
        </div>
    )
}

const Affiliations = () => {
    return (
        <div id="section-affiliations">
            AFFILIATIONS
        </div>
    )
}

const FunStuff = () => {
    return (
        <div id="section-funstuff">
            FUNSTUFF
        </div>
    )
}

class Content extends Component {
    state = {}
    render() {
        return (
            <div id="contents">
                <Switch>
                    <Route exact path={ PATH.ABOUT } component={ About } />
                    <Route exact path={ PATH.SKILLS } component={ Skills } />
                    <Route exact path={ PATH.EXPERIENCES } component={ Experiences } />
                    <Route exact path={ PATH.EDUCATION } component={ Education } />
                    <Route exact path={ PATH.PROJECTS } component={ Projects } />
                    <Route exact path={ PATH.AFFILIATIONS } component={ Affiliations } />
                    <Route exact path={ PATH.FUNSTUFF } component={ FunStuff } />
                    <Redirect from="/" to={ PATH.ABOUT } />
                </Switch>
            </div>
        )
    }
}

class App extends Component {
    state = {}
    render() {
        return (
            <HashRouter>
                <Nav />
                <Content />
            </HashRouter>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))
