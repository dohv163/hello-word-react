import ReactDOM from 'react-dom'
import demo_camunda_8 from "./images/demo-camunda-architecture.png"


// ============================ Define jsx Element ============================

const jsxElement = <h1>A Warm welcome to me</h1>
const rootElement = document.getElementById("root")
const author = {
    "firstName": "Do",
    "lastName": "Hoang"
}

const headerStyle = {
    backgroundColor: '#61DBFB',
    fontFamily: 'Helvetica Neue',
    padding: 25,
    lineHeight: 1.5,
}

const header = (
    <header style={headerStyle}>
        <h1>Welcome to Do Hoang</h1>
        <h2>Camunda 8</h2>
        <h3>Workflow Library</h3>
        <p>{author.firstName} {author.lastName}</p>
        <small>July 18, 2024</small>
    </header>
)

const main = (
    <main>
        <p>Workflow Microservice Orchestrator</p>
        <ul>
            <li>Camunda 8</li>
            <li>Spring Boot</li>
            <li>Keycloak</li>
            <li>Postgres</li>
            <li>Kafka</li>
        </ul>
    </main>
)

const footer = (
    <footer>
        <p>Copyright 2024</p>
    </footer>
)
const cam_8_micro = (
    <div>
        <img src={demo_camunda_8} alt='demo camunda 8 microservice orchestrator'/>
    </div>
)

const app = (
    <div>
        {header}
        {main}
        {cam_8_micro}
        {footer}
    </div>
)

const skills = ["Java", "System Design", "Spring Framework", "Kafka"]

// ================================== Javascript function ====================================================

const getPersonInfo = (firstName, lastName, country, title, skills) => {
    return `${firstName} ${lastName} a ${title} developer come from ${country}. He knows ${skills.join(', ')}`
}
console.log(getPersonInfo("Hoang", "Do", "VietNam", "Software Engineer", skills))


// ============================ Javascript class ============================

class Parent {

    constructor(firstName, lastName, country, title) {
        this.firstName = firstName
        this.lastName = lastName
        this.country = country
        this.title = title
    }

    getPersonInfo() {
        return `${this.firstName} ${this.lastName},  a ${this.title} developer base in ${this.country}`
    }

}

const parent = new Parent("Hoang", "Do", "VietNam", "SWE")
console.log('Parent ', parent)

class Child extends Parent {

    constructor(firstName, lastName, country, title, skills) {
        super(firstName, lastName, country, title);
        this.skills = skills
    }

    getSkill() {
        let length = skills.length
        return length > 0 ? this.skills.join(' ') : 'No skills found'
    }

}

const child = new Child(
    'Hoang',
    'Do',
    'Viet Nam',
    'Computer science engineer',
    skills
)

console.log('Children ', child)

// ===================================================== REACT JS Component ====================================== //


const architectureImage = (<div>
    <img src={demo_camunda_8} alt='demo camunda 8 microservice orchestrator'/>
</div>)

const ArchitectureImage = () => {
    return architectureImage
}

const Header = () => (
    <header style={headerStyle}>
        <h1>Welcome to Do Hoang</h1>
        <h2>Camunda 8</h2>
        <h3>Workflow Library</h3>
        <p>{author.firstName} {author.lastName}</p>
        <small>July 18, 2024</small>
    </header>
)

const Main = (props) => {

    const componentList = props.cam_components.map((c) => <li>{c}</li>)

    return (
        <main>
            <p>Workflow Microservice Orchestrator</p>
            <ul>
                {componentList}
            </ul>
        </main>
    )
}

const Footer = () => {
    return (
        <footer>
            <h1><b>Copyright 2024</b></h1>
        </footer>
    )
}

const App = () => (
    <div className="App">
        <Header/>
        <Main/>
        <ArchitectureImage/>
        <Footer/>
    </div>
)

// ================================ REACT JS COMPONENT WITH PROPS ================================================= //


const Header_1 = (props) => {
    return (<header style={headerStyle}>
        <h1>Welcome to Do Hoang</h1>
        <h2>Camunda 8</h2>
        <h3>Workflow Library</h3>
        <p>{props.firstName} {props.lastName}</p>
        <small>July 19, 2024</small>
    </header>)

}

const Camunda = (props) => {

    let componentDetail = props.camunda_8.dataComponents.map((record => <div>
        <h2>{record.name}</h2>
        <p>{record.desc}</p>
    </div>))

    return (
        <div>
            <h1>{props.camunda_8.title}</h1>
            <div>
                {componentDetail}
            </div>
        </div>
    )
}


// ============================================= REACT JS MAPPING =============================================== //


const services = [
    ['sale-service', 'Business only for sale'],
    ['risk-service', 'Risk business for process checking']
]

const Services = ({services: [name, desc]}) => <li>{name} {desc}</li>

const ServiceComponent = () => {
    return (<div>
                <h1>Services component</h1>
                <ul>
                    <Services/>
                </ul>
            </div>)
}


// PROP FUNCTION

const Button = (prop) => <button onClick={prop.onClick}>{prop.text}</button>

const Continue = () => (
    <div className="continue">
        <Button  text = "Continue" onClick={() => alert("Accept")}/>
    </div>
)

// PROP destructuring


const showDate = (time) => {
    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ]
    const month = months[time.getMonth()].slice(0, 3)
    const year = time.getFullYear()
    const date = time.getDate()

    return `${month} ${year}, ${date}`

}

const Header_2 = (
    {data: {
        headerStyle,
        firstName,
        lastName,
        date
    }}) => {
    return <header style={headerStyle}>
        <h1>Welcome to Do Hoang</h1>
        <h2>Camunda 8</h2>
        <h3>Workflow Library</h3>
        <p>{firstName} {lastName}</p>
        <small>{showDate(date)}</small>
    </header>
}


const App_1 = () => {

    const camunda_8 = {
        title: 'Camunda 8 components',
        components: ['Tasklist', 'Operate', 'Optimize', 'Identity'],
        dataComponents: [{
            name: "Tasklist",
            desc: "Simplified task management for complex business processes"
        },
        {
            name: "Operate",
            desc: "Intuitive dashboard for real-time process observability and troubleshooting"
        },
        {
            name: "Identity",
            desc: "Identity is the component within the Camunda 8 stack responsible for authentication and authorization"
        },
        {
            name: "Optimize",
            desc: "Holistic process intelligence and analytics"
        }]
    }

    const data = {
        headerStyle: headerStyle,
        welcome: 'Welcome to 30 Days Of React',
        title: 'Getting Started React',
        subtitle: 'JavaScript Library',
        firstName: 'Hoang',
        lastName: 'Do',
        date: new Date(), // date needs to be formatted to a human readable format
    }

    return  (
        <div className="App">
            {/*<Header_1 firstName='Hoang' lastName='Do'/> */}
            <Header_2 data={data}/>
            <Main cam_components={['Camunda 8', 'Keycloak', 'Spring Boot', 'Postgres']}/>
            <ArchitectureImage/>
            <Camunda camunda_8={camunda_8}/>
            <ServiceComponent/>
            <Continue/>
            <Footer/>
        </div>)

}



// ==================================================== REACT JS ================================================= //
ReactDOM.render(<App_1/>, rootElement)