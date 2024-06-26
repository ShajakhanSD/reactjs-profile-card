import PropTypes from "prop-types";
const userData = [
    {
        name: "Khan",
        city: "TN",
        profession: "Front-End Developer",
        skills: ["HTML", "CSS", "JS", "Bootstrap", "React JS"],
        status: false,
        profile: "images/1.png"
    },
    {
        name: "Kalith",
        city: "KL",
        profession: "QA",
        skills: ["Selenium", "Automation Testing", "Manual Testing"],
        status: false,
        profile: "images/2.png"
    },
    {
        name: "Faizal",
        city: "TN",
        profession: "QA",
        skills: ["Selenium", "Automation Testing", "Manual Testing"],
        status: true,
        profile: "images/3.png"
    },
    {
        name: "Mydeen",
        city: "TN",
        profession: "Sales",
        skills: ["Sales", "Indoor Sales", "Communication"],
        status: false,
        profile: "images/1.png"
    },
    {
        name: "Basha",
        city: "TN",
        profession: "Site Engineer",
        skills: ["HVAC Site Engineer", "Chiller AC", "Duct AC"],
        status: false,
        profile: "images/2.png"
    }
]
function User(props) {
    return <div className="card-container">
            <span className={props.status ? "pro online" : "pro offline"} >{props.status ? "ONLINE" : "OFFLINE"}</span>
            <img src={props.profile} alt="User" className="img" />
            <h3>{props.name}</h3>
            <h3>{props.city}</h3>
            <p>{props.profession}</p>
            <div className="buttons">
                <button className="primary">Message</button>
                <button className="primary outline">Following</button>
            </div>
            <div className='skills'>
                <h6>Skills</h6>
                <ul>
                    {props.skills.map((skill, index) => (
                        <li key={index}>{skill}</li>
                    ))}
                </ul>
            </div>
        </div>
}
export const UserCard = () => {
    return (
        // <User name="Khan" city="TN" profession="Front-End Developer" skills={["HTML","CSS", "JS", "Bootstrap", "React JS"]} status={false} profile="images/2.png"/>
        <>
            {userData.map((user, index) => (
                <User key={index}
                    name={user.name}
                    city={user.city}
                    profession={user.profession}
                    skills={user.skills}
                    status={user.status}
                    profile={user.profile} />
            ))}
        </>
    )
}

User.prototype = {
    name: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    profession: PropTypes.string.isRequired,
    skills: PropTypes.arrayOf(PropTypes.string.isRequired),
    status: PropTypes.bool.isRequired,
    profile: PropTypes.string.isRequired,
};